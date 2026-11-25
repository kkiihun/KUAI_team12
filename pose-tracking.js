// On-device tracking. Frames stay in the browser and are never uploaded.
//
// 1. Frame-locked rendering: each analyzed frame is copied once, the detector runs on that copy and
//    the SAME copy is painted under the skeleton. Skeleton and person therefore overlap exactly,
//    even while the person moves (drawing on the live <video> always lags the detector).
// 2. Crowd-robust subject: up to MAX_POSES people are detected; one subject is followed frame to frame
//    (bbox IoU + centroid), tap a person to switch, occluded joints/subject are held briefly.
// 3. Pose recommendation: the user's limb directions are compared with a reference skeleton
//    (pose-templates.js). The comparison uses angles, so it does not depend on where the person stands
//    or how big they are. The reference is drawn as a ghost anchored to the user's own torso.
const poseTracking = (() => {
  const canvas = document.querySelector('#landmarks');
  const ctx = canvas.getContext('2d');
  const video = document.querySelector('#stageVideo');
  const stage = document.querySelector('#viewfinderStage');
  const frame = document.createElement('canvas');
  const fctx = frame.getContext('2d', {alpha:false});

  const labels = {
    ko:['인식 준비 중','사람을 화면에 담아주세요','얼굴 위치를 확인해 주세요','양발이 보이게 한 걸음 물러나세요','발끝 아래 여백을 조금 더 주세요','얼굴과 양발이 보여요','얼굴 위치 확인','자세 인식 사용 불가','가려졌어요 · 잠시 그대로','두 사람이 화면에 들어와 주세요','두 사람 모두 인식했어요!','예시를 보며 포즈를 맞춰보세요'],
    en:['Loading tracker','Step into the frame','Bring your face into view','Step back to include both feet','Leave space below your feet','Face and both feet visible','Face in view','Tracking unavailable','Subject hidden · hold still','Both of you, step into the frame','Both people detected!','Match the example pose'],
    ja:['認識の準備中…','画面に入ってくださいね','お顔が見える位置へ','両足が入るよう一歩下がって','足元に少し余白を','お顔と両足OK！','お顔OK','姿勢認識を利用できません','隠れています・そのままで','ふたりで画面に入ってね','ふたりとも認識OK！','お手本を見ながらポーズを合わせてね']
  };
  const crowdLabels = {ko:n=>`${n}명 인식 · 코칭할 사람을 탭하세요`,en:n=>`${n} people · tap who to coach`,ja:n=>`${n}人を検出・撮る人をタップ`};
  const lockedLabels = {ko:'선택한 사람을 따라가요',en:'Following your pick',ja:'選んだ人を追跡中'};
  const cueWords = {
    ko:{left:'화면 왼쪽 ',right:'화면 오른쪽 ',arm:'팔',forearm:'팔꿈치 아래',leg:'다리',shin:'무릎 아래',raise:'을 조금 더 올려요',lower:'을 조금 내려요',open:'을 몸에서 더 벌려요',close:'을 몸 쪽으로 모아요',step:'를 한 걸음 더 내밀어요',together:'를 조금 모아요',bend:'를 살짝 굽혀요',straight:'를 쭉 펴요',lean:'몸을 예시처럼 살짝 기울여요',upright:'몸을 똑바로 세워요',tilt:'고개를 살짝 기울여요',level:'고개를 똑바로 해요',perfect:'포즈 완벽해요! 지금 찍어요 ✨',hold:'좋아요, 그대로 유지…',more:'예시처럼 몸 전체가 보이게 해주세요'},
    en:{left:'Screen-left',right:'Screen-right',arm:' arm',forearm:' forearm',leg:' leg',shin:' lower leg',raise:': raise it a little',lower:': lower it a little',open:': move it away from the body',close:': bring it closer to the body',step:': step it out more',together:': bring it in a little',bend:': bend it slightly',straight:': straighten it',lean:'Lean your body like the example',upright:'Stand up straight',tilt:'Tilt your head a little',level:'Keep your head level',perfect:'Pose matched! Shoot now ✨',hold:'Nice, hold it…',more:'Show more of your body like the example'},
    ja:{left:'画面左の',right:'画面右の',arm:'腕',forearm:'ひじから先',leg:'脚',shin:'ひざから下',raise:'をもう少し上げて',lower:'を少し下げて',open:'を体から少し離して',close:'を体に寄せて',step:'をもう一歩前へ',together:'を少し閉じて',bend:'を軽く曲げて',straight:'をまっすぐ伸ばして',lean:'お手本のように体を少し傾けて',upright:'体をまっすぐに',tilt:'首を少しかしげて',level:'首をまっすぐに',perfect:'ポーズぴったり！今シャッターを ✨',hold:'いい感じ、そのままキープ…',more:'お手本のように体全体が入るようにして'}
  };

  const MAX_POSES = 4;
  const VIS = 0.5;
  const HOLD_JOINT_MS = 450;
  const HOLD_SUBJECT_MS = 900;
  const edges = [[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,29],[29,31],[28,30],[30,32],[27,31],[28,32]];
  const LR = [[1,4],[2,5],[3,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[23,24],[25,26],[27,28],[29,30],[31,32]];
  const SWAP = Array.from({length:33},(_,i)=>i);
  for (const [a,b] of LR) {SWAP[a]=b;SWAP[b]=a;}
  // Segments compared for pose matching: [from, to, weight, kind]
  const SEGMENTS = [
    [11,13,1.3,'arm'],[13,15,1.1,'forearm'],[12,14,1.3,'arm'],[14,16,1.1,'forearm'],
    [23,25,1,'leg'],[25,27,.8,'shin'],[24,26,1,'leg'],[26,28,.8,'shin'],
    ['S','H',1.4,'torso'],[2,5,.6,'head']
  ];

  let loading, generation=0, current=null, pending=null, pendingCount=0;
  let rafId=0, vfcId=0, engine='';
  let subject=null, tapPoint=null, lockedByTap=false, crowd=0, filters=[];
  let visible=true;
  let perfectSince=0;
  let lastMatch=null, matchFlip=null, scoreEma=null, cueKey='', cueSince=0, lastDom=0;

  // ---------- smoothing (scoring only; drawing uses raw points so it stays on the body) ----------
  function oneEuro(minCutoff=1.2, beta=8, dCutoff=1.0) {
    let xPrev=null, dxPrev=0, tPrev=0;
    const alpha=(cutoff,dt)=>{const r=2*Math.PI*cutoff*dt;return r/(r+1);};
    return (x,t)=>{
      if (xPrev===null) {xPrev=x;tPrev=t;return x;}
      const dt=Math.max(1e-3,(t-tPrev)/1000);tPrev=t;
      const dx=(x-xPrev)/dt;
      dxPrev+=alpha(dCutoff,dt)*(dx-dxPrev);
      xPrev+=alpha(minCutoff+beta*Math.abs(dxPrev),dt)*(x-xPrev);
      return xPrev;
    };
  }
  function resetFilters() {filters=Array.from({length:33},()=>({x:oneEuro(),y:oneEuro()}));scoreEma=null;matchFlip=null;}

  // ---------- geometry ----------
  function boxOf(points) {
    let x0=1,y0=1,x1=0,y1=0,n=0;
    for (const p of points) {
      if ((p.visibility??1)<0.3) continue;
      x0=Math.min(x0,p.x);y0=Math.min(y0,p.y);x1=Math.max(x1,p.x);y1=Math.max(y1,p.y);n++;
    }
    if (n<4) return null;
    return {x0,y0,x1,y1,cx:(x0+x1)/2,cy:(y0+y1)/2,area:Math.max(1e-4,(x1-x0)*(y1-y0))};
  }
  function iou(a,b) {
    const ix=Math.max(0,Math.min(a.x1,b.x1)-Math.max(a.x0,b.x0));
    const iy=Math.max(0,Math.min(a.y1,b.y1)-Math.max(a.y0,b.y0));
    const inter=ix*iy;
    return inter/(a.area+b.area-inter);
  }
  function layout() {
    const w=canvas.clientWidth||video.clientWidth, h=canvas.clientHeight||video.clientHeight;
    const vw=frame.width||1, vh=frame.height||1;
    const scale=Math.max(w/vw,h/vh);
    const sw=vw*scale, sh=vh*scale;
    return {w,h,sw,sh,ox:(w-sw)/2,oy:(h-sh)/2,mirrored:video.classList.contains('is-mirrored')};
  }
  function toScreen(p,L) {
    const x=p.x*L.sw+L.ox, y=p.y*L.sh+L.oy;
    return {x:L.mirrored?L.w-x:x,y};
  }
  function toVideo(clientX,clientY) {
    const r=canvas.getBoundingClientRect(), L=layout();
    let x=clientX-r.left; const y=clientY-r.top;
    if (L.mirrored) x=L.w-x;
    return {x:(x-L.ox)/L.sw,y:(y-L.oy)/L.sh};
  }

  // ---------- subject selection ----------
  function pickSubject(cands, now) {
    if (!cands.length) return null;
    if (tapPoint) {
      const tp=tapPoint; tapPoint=null;
      let best=null,bestD=Infinity;
      for (const c of cands) {
        const inside=tp.x>=c.box.x0-.03&&tp.x<=c.box.x1+.03&&tp.y>=c.box.y0-.03&&tp.y<=c.box.y1+.03;
        const d=Math.hypot(tp.x-c.box.cx,tp.y-c.box.cy)-(inside?1:0);
        if (d<bestD) {bestD=d;best=c;}
      }
      if (best) {lockedByTap=true;resetFilters();return best;}
    }
    if (subject && now-subject.lastSeen<HOLD_SUBJECT_MS*2) {
      const prev=subject.box;
      const reach=0.35*Math.hypot(prev.x1-prev.x0,prev.y1-prev.y0)+0.05;
      let best=null,bestScore=-1;
      for (const c of cands) {
        const o=iou(prev,c.box);
        const d=Math.hypot(prev.cx-c.box.cx,prev.cy-c.box.cy);
        const sizeRatio=Math.min(prev.area,c.box.area)/Math.max(prev.area,c.box.area);
        const score=o*2+Math.max(0,1-d/reach)+sizeRatio*0.3;
        if ((o>0.15||d<reach) && score>bestScore) {bestScore=score;best=c;}
      }
      if (best) return best;
      if (now-subject.lastSeen<HOLD_SUBJECT_MS) return null;
    }
    lockedByTap=false;
    resetFilters();
    let best=null,bestScore=-1;
    for (const c of cands) {
      const centerPenalty=Math.hypot(c.box.cx-.5,(c.box.cy-.5)*.6);
      const score=Math.sqrt(c.box.area)*(1.2-centerPenalty);
      if (score>bestScore) {bestScore=score;best=c;}
    }
    return best;
  }
  function updateSubject(cand, now) {
    const prevJoints=subject?.joints;
    const joints=cand.points.map((p,i)=>{
      const v=p.visibility??1;
      const prev=prevJoints?.[i];
      if (v>=VIS) return {x:p.x,y:p.y,sx:filters[i].x(p.x,now),sy:filters[i].y(p.y,now),v,seen:now,held:false};
      if (prev && now-prev.seen<HOLD_JOINT_MS) return {...prev,held:true};
      return {x:p.x,y:p.y,sx:p.x,sy:p.y,v,seen:prev?.seen??0,held:false};
    });
    subject={box:cand.box,joints,lastSeen:now,cand};
  }

  // ---------- pose matching ----------
  const usable=j=>j && (j.v>=VIS||j.held);
  function pointOf(pts,id,aspect,smooth) {
    if (id==='S'||id==='H') {
      const [a,b]=id==='S'?[11,12]:[23,24];
      const pa=pointOf(pts,a,aspect,smooth), pb=pointOf(pts,b,aspect,smooth);
      return pa&&pb?{x:(pa.x+pb.x)/2,y:(pa.y+pb.y)/2}:null;
    }
    const p=pts[id];
    if (!p) return null;
    if (Array.isArray(p)) return p[2]>=VIS?{x:p[0]*aspect,y:p[1]}:null;
    return usable(p)?{x:(smooth?p.sx:p.x)*aspect,y:smooth?p.sy:p.y}:null;
  }
  function templateFor(flip) {
    const t=typeof poseTemplates!=='undefined' && poseTemplates[getActiveRecipe().svgType];
    if (!t) return null;
    if (!flip) return t;
    return {aspect:t.aspect,pts:t.pts.map((_,i)=>{const p=t.pts[SWAP[i]];return [1-p[0],p[1],p[2]];})};
  }
  function compare(tpl, user, aspect) {
    if (!tpl) return null;
    let sum=0, wsum=0, worst=null, totalW=0, maxDeg=0;
    for (const [a,b,w,kind] of SEGMENTS) {
      const ta=pointOf(tpl.pts,a,tpl.aspect), tb=pointOf(tpl.pts,b,tpl.aspect);
      if (!ta||!tb) continue;
      totalW+=w;  // every segment the example shows counts toward coverage
      const ua=pointOf(user,a,aspect,true), ub=pointOf(user,b,aspect,true);
      if (!ua||!ub) continue;
      const tv={x:tb.x-ta.x,y:tb.y-ta.y}, uv={x:ub.x-ua.x,y:ub.y-ua.y};
      const tl=Math.hypot(tv.x,tv.y), ul=Math.hypot(uv.x,uv.y);
      if (tl<1e-3||ul<1e-3) continue;
      const cos=(tv.x*uv.x+tv.y*uv.y)/(tl*ul);
      const deg=Math.acos(Math.max(-1,Math.min(1,cos)))*180/Math.PI;
      sum+=w*Math.max(0,1-deg/45)**1.5; wsum+=w; maxDeg=Math.max(maxDeg,deg);
      const weighted=deg*w;
      if (!worst||weighted>worst.weighted) worst={a,b,kind,deg,weighted,t:{x:tv.x/tl,y:tv.y/tl},u:{x:uv.x/ul,y:uv.y/ul}};
    }
    if (wsum<3) return null;
    // Parts of the example that are not visible on the user must not count as "matched".
    const coverage=wsum/Math.max(1e-3,totalW);
    const raw=100*sum/wsum;
    return {score:Math.round(coverage<0.75?raw*coverage/0.75:raw),worst,coverage,maxDeg};
  }
  function describe(m, score) {
    const W=cueWords[lang];
    const worst=m.worst;
    if (m.coverage<0.75) return {key:'more',text:W.more};
    if (score>=88 && m.maxDeg<25) return {key:'perfect',text:W.perfect};
    const {kind,t,u}=worst;
    if (kind==='torso') {const key=Math.abs(t.x)>Math.abs(u.x)?'lean':'upright';return {key,text:W[key]};}
    if (kind==='head') {const key=Math.abs(t.y)>Math.abs(u.y)?'tilt':'level';return {key,text:W[key]};}
    // Name the limb by the side of the SCREEN it is on, so the instruction matches what the user sees.
    const L=layout();
    const sx=toScreen(subject.joints[worst.b],L).x;
    const cx=(toScreen(subject.joints[11],L).x+toScreen(subject.joints[12],L).x)/2;
    return limbCue(worst,sx<cx?W.left:W.right);
  }
  function limbCue(worst, side) {
    const W=cueWords[lang];
    const {kind,t,u}=worst;
    if (kind==='torso') {const key=Math.abs(t.x)>Math.abs(u.x)?'lean':'upright';return {key,text:W[key]};}
    if (kind==='head') {const key=Math.abs(t.y)>Math.abs(u.y)?'tilt':'level';return {key,text:W[key]};}
    let action;
    if (kind==='arm'||kind==='forearm') {
      if (t.y<u.y-0.25) action='raise';
      else if (t.y>u.y+0.25) action='lower';
      else action=Math.abs(t.x)>Math.abs(u.x)?'open':'close';
    } else if (kind==='leg') action=Math.abs(t.x)>Math.abs(u.x)?'step':'together';
    else action=Math.abs(t.x)>Math.abs(u.x)+0.15?'bend':'straight';
    return {key:side+kind+action,text:`${side}${W[kind]}${W[action]}`};
  }
  function evaluate(now) {
    if (!subject || subject.cand===null || !templateFor(false)) {lastMatch=null;return;}
    const aspect=frame.width/frame.height;
    const normal=compare(templateFor(false),subject.joints,aspect);
    const flipped=compare(templateFor(true),subject.joints,aspect);
    if (!normal && !flipped) {lastMatch=null;return;}
    // The user may do the mirror image of the example; keep the chosen side unless the other is clearly better.
    let useFlip=matchFlip;
    const ns=normal?.score??-1, fs=flipped?.score??-1;
    if (useFlip===null) useFlip=fs>ns;
    else if (useFlip && ns>fs+8) useFlip=false;
    else if (!useFlip && fs>ns+8) useFlip=true;
    matchFlip=useFlip;
    const m=useFlip?flipped:normal;
    if (!m) {lastMatch=null;return;}
    scoreEma=scoreEma===null?m.score:scoreEma*0.75+m.score*0.25;
    let cue=describe(m,scoreEma);
    if (cue.key==='perfect') {
      perfectSince ||= now;
      if (now-perfectSince<700) cue={key:'hold',text:cueWords[lang].hold};
    } else perfectSince=0;
    let text=lastMatch?.cue;
    // Hold an instruction ≥1.2 s so the text does not jump around.
    if (!text || (cue.key!==cueKey && (now-cueSince>1200 || cueKey==='perfect' || cueKey==='hold' || cue.key==='hold'))) {cueKey=cue.key;cueSince=now;text=cue.text;}
    lastMatch={score:Math.round(scoreEma),cue:text,worst:m.worst,flip:useFlip,perfect:cue.key==='perfect'};
  }
  function ghostPoints(L) {
    const tpl=templateFor(lastMatch?.flip);
    if (!tpl) return null;
    const aspect=frame.width/frame.height;
    const pick=(ids,isT)=>{
      const ps=ids.map(i=>isT?pointOf(tpl.pts,i,tpl.aspect):(usable(subject.joints[i])?{x:subject.joints[i].x*aspect,y:subject.joints[i].y}:null));
      return ps.every(Boolean)?ps:null;
    };
    // Anchor on the torso (shoulders + hips) when visible, otherwise on the shoulder line.
    let mode='torso', tA=pick([11,12,23,24],true), uA=pick([11,12,23,24],false);
    if (!tA||!uA) {mode='shoulders';tA=pick([11,12],true);uA=pick([11,12],false);}
    if (!tA||!uA) return null;
    const center=ps=>({x:ps.reduce((s,p)=>s+p.x,0)/ps.length,y:ps.reduce((s,p)=>s+p.y,0)/ps.length});
    const size=ps=>mode==='torso'
      ?Math.hypot((ps[0].x+ps[1].x)/2-(ps[2].x+ps[3].x)/2,(ps[0].y+ps[1].y)/2-(ps[2].y+ps[3].y)/2)
      :Math.hypot(ps[0].x-ps[1].x,ps[0].y-ps[1].y);
    const tc=center(tA), uc=center(uA), k=size(uA)/Math.max(1e-3,size(tA));
    return tpl.pts.map(p=>({...toScreen({x:(uc.x+(p[0]*tpl.aspect-tc.x)*k)/aspect,y:uc.y+(p[1]-tc.y)*k},L),ok:p[2]>=VIS}));
  }

  // ---------- 2-person poses: compared with the reference photo (pose-templates.js: pairTemplates) ----------
  // Both people are compared limb by limb with the matching person in the photo (left with left),
  // plus how far apart they stand and which way they face. Two people who touch are often merged
  // into one by the detector, so when fewer than two separate people are found the frame is
  // searched again in a left and a right half (splitDetector, IMAGE mode, one person each).
  const pairWords = {
    ko:{left:'왼쪽 사람 · ',right:'오른쪽 사람 · ',close:'조금 더 가까이 붙어요',apart:'조금만 떨어져 서요',face:'얼굴 방향을 예시처럼 돌려요'},
    en:{left:'Left person: ',right:'Right person: ',close:'Move a little closer together',apart:'Give each other a little more space',face:'Turn your faces like the example'},
    ja:{left:'左の人：',right:'右の人：',close:'もう少しくっついて',apart:'少しだけ離れて',face:'顔の向きをお手本に合わせて'}
  };
  const clamp01=v=>Math.max(0,Math.min(1,v));
  let splitDetector=null, splitLoading=null, visionApi=null, dbg=null, lastPair=null;
  function ensureSplitDetector() {
    if (splitDetector||splitLoading||!visionApi) return;
    const {PoseLandmarker,files,model,delegate}=visionApi;
    splitLoading=PoseLandmarker.createFromOptions(files,{baseOptions:{modelAssetPath:model,delegate},runningMode:'IMAGE',numPoses:1,minPoseDetectionConfidence:0.3,minPosePresenceConfidence:0.3})
      .then(d=>{splitDetector=d;}).catch(()=>{splitLoading=null;});
  }
  const splitCanvas=document.createElement('canvas');
  function splitDetect(split) {
    const out=[];
    for (const [x0,x1,side] of [[0,Math.min(1,split+0.06),-1],[Math.max(0,split-0.06),1,1]]) {
      const w=Math.max(1,Math.round(frame.width*(x1-x0)));
      splitCanvas.width=w; splitCanvas.height=frame.height;
      splitCanvas.getContext('2d').drawImage(frame,-frame.width*x0,0);
      const r=splitDetector.detect(splitCanvas);
      const pts=r.landmarks?.[0];
      if (pts) {
        const points=pts.map(q=>({...q,x:x0+q.x*(x1-x0)}));const box=boxOf(points);
        const sx=(points[11].x+points[12].x)/2;
        if (box && (side<0?sx<split+0.04:sx>split-0.04)) out.push({points,box});
      }
    }
    return out;
  }
  const shoulderX=c=>(c.points[11].x+c.points[12].x)/2;
  function separatedPair(cands) {
    const two=[...cands].sort((a,b)=>b.box.area-a.box.area).slice(0,2);
    // Same person found in both halves = boxes overlap heavily; real side-by-side people overlap little.
    // A real person shows at least 12 clear joints and is not tiny next to the other (no ghosts in the background).
    const solid=c=>c.points.filter(q=>(q.visibility??1)>=VIS).length>=12;
    return two.length===2 && solid(two[0]) && solid(two[1]) && two[1].box.area>=0.25*two[0].box.area
      && Math.abs(shoulderX(two[0])-shoulderX(two[1]))>0.08 && iou(two[0].box,two[1].box)<0.35 ? two : null;
  }
  // Points as seen on SCREEN (mirrored camera: x flipped, left/right joints swapped), like a photo.
  function screenPoints(points,mirrored) {
    return points.map((_,i)=>{const q=points[mirrored?SWAP[i]:i];const x=mirrored?1-q.x:q.x;return {x,y:q.y,sx:x,sy:q.y,v:q.visibility??1,held:false};});
  }
  function pairTemplate(flip) {
    const t=typeof pairTemplates!=='undefined'&&pairTemplates[getActiveRecipe().svgType];
    if (!t) return null;
    if (!flip) return t;
    const mirror=pts=>pts.map((_,i)=>{const q=pts[SWAP[i]];return [1-q[0],q[1],q[2]];});
    return {aspect:t.aspect,people:[mirror(t.people[1]),mirror(t.people[0])]};
  }
  // Distance between the two shoulder centres (in shoulder widths) and each person's facing (nose vs shoulders).
  function relation(ptsA,ptsB,aspect,isT) {
    const P=(pts,i)=>isT?(pts[i][2]>=VIS?{x:pts[i][0]*aspect,y:pts[i][1]}:null):(pts[i].v>=VIS?{x:pts[i].x*aspect,y:pts[i].y}:null);
    const geo=pts=>{const a=P(pts,11),b=P(pts,12);if(!a||!b)return null;const sw=Math.max(0.02,Math.hypot(a.x-b.x,a.y-b.y));const n=P(pts,0);return {mx:(a.x+b.x)/2,my:(a.y+b.y)/2,sw,face:n?(n.x-(a.x+b.x)/2)/sw:0};};
    const A=geo(ptsA),B=geo(ptsB);
    if (!A||!B) return null;
    return {gap:Math.hypot(A.mx-B.mx,A.my-B.my)/((A.sw+B.sw)/2),face:[A.face,B.face]};
  }
  function comparePair(tpl,users,aspect) {
    const ms=[0,1].map(k=>compare({aspect:tpl.aspect,pts:tpl.people[k]},users[k],aspect));
    if (!ms[0]||!ms[1]) return null;
    const rt=relation(tpl.people[0],tpl.people[1],tpl.aspect,true), ru=relation(users[0],users[1],aspect,false);
    let rel=1, relKey=null, faceOk=true;
    if (rt&&ru) {
      rel=clamp01(1-Math.abs(ru.gap-rt.gap)/Math.max(0.8,rt.gap));
      if (rel<0.75) relKey=ru.gap>rt.gap?'close':'apart';
      // Facing is only judged for back-to-back, where looking outward is the pose itself.
      faceOk=getActiveRecipe().svgType!=='pair_back'||[0,1].every(k=>Math.abs(rt.face[k])<0.3||(Math.sign(ru.face[k])===Math.sign(rt.face[k])&&Math.abs(ru.face[k])>0.12));
    }
    const score=Math.round(0.4*ms[0].score+0.4*ms[1].score+20*rel*(faceOk?1:0.5));
    return {score,ms,rel,relKey,faceOk};
  }
  let pairFlip=null;
  function evaluatePair(cands,L,now) {
    const two=separatedPair(cands);
    if (!two) {lastMatch=null;return null;}
    const ordered=[...two].sort((a,b)=>toScreen({x:shoulderX(a),y:0},L).x-toScreen({x:shoulderX(b),y:0},L).x);
    const aspect=frame.width/frame.height;
    const users=ordered.map(c=>screenPoints(c.points,L.mirrored));
    const normal=comparePair(pairTemplate(false),users,aspect), flipped=comparePair(pairTemplate(true),users,aspect);
    if (!normal&&!flipped) {lastMatch=null;return ordered;}
    const ns=normal?.score??-1, fs=flipped?.score??-1;
    if (pairFlip===null) pairFlip=fs>ns; else if (pairFlip&&ns>fs+8) pairFlip=false; else if (!pairFlip&&fs>ns+8) pairFlip=true;
    const m=(pairFlip?flipped:normal)||normal||flipped;
    scoreEma=scoreEma===null?m.score:scoreEma*0.75+m.score*0.25;
    const PW=pairWords[lang], W=cueWords[lang];
    let cue, worstK=null;
    const perfect=scoreEma>=85&&m.rel>=0.75&&m.faceOk&&m.ms.every(x=>x.maxDeg<25&&x.coverage>=0.6);
    if (perfect) cue={key:'perfect',text:W.perfect};
    else if (m.ms.some(x=>x.coverage<0.6)) cue={key:'more',text:W.more};
    else if (m.relKey) cue={key:m.relKey,text:PW[m.relKey]};
    else if (!m.faceOk) cue={key:'face',text:PW.face};
    else {
      worstK=m.ms[0].worst.weighted>=m.ms[1].worst.weighted?0:1;
      const w=m.ms[worstK].worst, u=users[worstK];
      const side=(u[w.b].x<(u[11].x+u[12].x)/2)?W.left:W.right;
      const c=limbCue(w,side);
      cue={key:worstK+c.key,text:(worstK===0?PW.left:PW.right)+c.text};
    }
    if (cue.key==='perfect') {perfectSince ||= now; if (now-perfectSince<700) cue={key:'hold',text:W.hold};} else perfectSince=0;
    let text=lastMatch?.cue;
    if (!text || (cue.key!==cueKey && (now-cueSince>1200 || cueKey==='perfect' || cueKey==='hold' || cue.key==='hold'))) {cueKey=cue.key;cueSince=now;text=cue.text;}
    lastMatch={score:Math.round(scoreEma),cue:text,perfect:cue.key==='perfect',pairWorst:worstK===null?null:{k:worstK,seg:m.ms[worstK].worst}};
    return ordered;
  }
  function renderPair(cands,now) {
    const L=layout();
    if (!L.w||!L.h) return;
    crowd=0;
    if (getActiveRecipe().judge===false) {
      // Guide-only pose: no skeleton, no score; the live video stays visible.
      canvas.hidden=true; lastMatch=null;
      setStatus(cands.length?11:9); paintCrowd(); return;
    }
    canvas.hidden=!visible;
    const pair=evaluatePair(cands,L,now);
    if (visible) {
      const dpr=Math.min(2,window.devicePixelRatio||1);
      if (canvas.width!==Math.round(L.w*dpr)||canvas.height!==Math.round(L.h*dpr)) {canvas.width=Math.round(L.w*dpr);canvas.height=Math.round(L.h*dpr);}
      ctx.setTransform(dpr,0,0,dpr,0,0);
      ctx.save(); if (L.mirrored) {ctx.translate(L.w,0);ctx.scale(-1,1);} ctx.drawImage(frame,L.ox,L.oy,L.sw,L.sh); ctx.restore();
      (pair||cands).forEach((c,k)=>{
        const pts=c.points.map(p=>({...toScreen(p,L),ok:(p.visibility??1)>=VIS}));
        line(pts,{stroke:pair?(k===0?'rgba(255,170,200,.95)':'rgba(190,170,255,.95)'):'rgba(255,255,255,.6)',width:3});
        const pw=lastMatch?.pairWorst;
        if (pair&&pw&&pw.k===k&&typeof pw.seg.a==='number'&&pw.seg.deg>=20) {
          const a=L.mirrored?SWAP[pw.seg.a]:pw.seg.a, b=L.mirrored?SWAP[pw.seg.b]:pw.seg.b;
          if (pts[a].ok&&pts[b].ok) {ctx.strokeStyle='#ff4d7d';ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(pts[a].x,pts[a].y);ctx.lineTo(pts[b].x,pts[b].y);ctx.stroke();ctx.lineCap='butt';}
        }
        for (const i of [11,12,13,14,15,16,23,24,25,26,27,28]) {const d=pts[i];if(!d.ok)continue;ctx.beginPath();ctx.arc(d.x,d.y,3.5,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();}
      });
    }
    paintMatch(now);
    // Two separate people found = a strong signal, show it at once; "step in" waits for 3 frames as usual.
    if (pair) setStatus(10,true); else setStatus(9);
    paintCrowd();
  }

  // ---------- status / DOM ----------
  function status() {return current===null?'':labels[lang][current];}
  function setStatus(code, force) {
    if (force) {pending=null;pendingCount=0;if(current!==code){current=code;paintStatus();}return;}
    if (code===current) {pending=null;pendingCount=0;return;}
    if (code===pending) pendingCount++; else {pending=code;pendingCount=1;}
    if (pendingCount>=3) {current=code;pending=null;pendingCount=0;paintStatus();}
  }
  function paintStatus() {
    const el=document.querySelector('#vfMatchScore');
    if (el) el.textContent=status();
    const pill=document.querySelector('#vfMatchPill');
    if (pill) {pill.hidden=!status();pill.classList.toggle('ok',current===5||current===6||current===10||current===11);}
  }
  function paintMatch(now) {
    if (now-lastDom<250) return;
    lastDom=now;
    const vibe=document.querySelector('#vfVibe');
    if (!vibe) return;
    if (!lastMatch) {
      // Nobody measured (left the frame, or no template): clear the meter instead of keeping the old value.
      vibe.style.setProperty('--vibe','0%');
      document.querySelector('#vfVibeValue').textContent='—';
      return;
    }
    vibe.hidden=false;
    vibe.style.setProperty('--vibe',lastMatch.score+'%');
    document.querySelector('#vfVibeValue').textContent=lastMatch.score+'%';
    // during an auto-shoot countdown the cue line says "hold it" (set by app.js)
    if (document.querySelector('#countdown.is-auto:not([hidden])')) return;
    document.querySelector('#vfDirText').textContent=lastMatch.cue;
  }
  function crowdChip() {
    let chip=document.querySelector('#poseCrowd');
    if (!chip) {chip=document.createElement('div');chip.id='poseCrowd';chip.setAttribute('aria-live','polite');stage.append(chip);}
    return chip;
  }
  function paintCrowd() {
    const chip=crowdChip();
    if (current===null||current===0||current===7||crowd<2) {chip.hidden=true;return;}
    chip.hidden=false;
    chip.textContent=lockedByTap?`🎯 ${lockedLabels[lang]}`:`👆 ${crowdLabels[lang](crowd)}`;
  }

  // ---------- drawing ----------
  function line(points,style) {
    ctx.strokeStyle=style.stroke;ctx.lineWidth=style.width;ctx.setLineDash(style.dash||[]);
    ctx.beginPath();
    for (const [a,b] of edges) {
      const pa=points[a],pb=points[b];
      if (!pa.ok||!pb.ok) continue;
      ctx.moveTo(pa.x,pa.y);ctx.lineTo(pb.x,pb.y);
    }
    ctx.stroke();ctx.setLineDash([]);
  }
  function render(cands, now) {
    const L=layout();
    if (!L.w||!L.h) return;
    canvas.hidden=!visible;
    if (!visible) {crowd=cands.length;analyseOnly(L,now);return;}
    const dpr=Math.min(2,window.devicePixelRatio||1);
    if (canvas.width!==Math.round(L.w*dpr)||canvas.height!==Math.round(L.h*dpr)) {canvas.width=Math.round(L.w*dpr);canvas.height=Math.round(L.h*dpr);}
    ctx.setTransform(dpr,0,0,dpr,0,0);
    // Paint the analyzed frame itself: what you see is exactly what was measured.
    ctx.save();
    if (L.mirrored) {ctx.translate(L.w,0);ctx.scale(-1,1);}
    ctx.drawImage(frame,L.ox,L.oy,L.sw,L.sh);
    ctx.restore();
    crowd=cands.length;

    for (const c of cands) {
      if (c===subject?.cand) continue;
      line(c.points.map(p=>({...toScreen(p,L),ok:(p.visibility??1)>=VIS})),{stroke:'rgba(255,255,255,.5)',width:1.6,dash:[4,4]});
    }
    if (!subject || now-subject.lastSeen>HOLD_SUBJECT_MS) {
      subject=null;lastMatch=null;
      setStatus(1);paintCrowd();paintMatch(now);return;
    }
    const holding=subject.cand===null;
    const dots=subject.joints.map(j=>{
      const s=toScreen(j,L);
      return {...s,ok:(j.v>=VIS||j.held)&&s.x>=0&&s.x<=L.w&&s.y>=0&&s.y<=L.h,held:j.held};
    });
    evaluate(now);
    if (lastMatch && !holding) {
      const ghost=ghostPoints(L);
      if (ghost) {
        ctx.save();ctx.shadowColor='rgba(0,0,0,.4)';ctx.shadowBlur=4;ctx.lineCap='round';
        line(ghost,{stroke:'rgba(255,255,255,.9)',width:5,dash:[1,9]});
        ctx.restore();
      }
    }
    ctx.globalAlpha=holding?0.45:1;
    line(dots,{stroke:'rgba(255,186,214,.95)',width:3});
    const w=lastMatch?.worst;
    if (w && w.deg>=20 && typeof w.a==='number' && dots[w.a].ok && dots[w.b].ok) {
      ctx.strokeStyle='#ff4d7d';ctx.lineWidth=6;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(dots[w.a].x,dots[w.a].y);ctx.lineTo(dots[w.b].x,dots[w.b].y);ctx.stroke();ctx.lineCap='butt';
    }
    for (const i of [11,12,13,14,15,16,23,24,25,26,27,28,29,30,31,32]) {
      const d=dots[i]; if (!d.ok) continue;
      ctx.beginPath();ctx.arc(d.x,d.y,i<6?4:3.5,0,Math.PI*2);
      ctx.fillStyle=d.held?'rgba(255,255,255,.55)':i<6?'#fff3b0':'#b8f5dc';ctx.fill();
      ctx.lineWidth=1.2;ctx.strokeStyle='rgba(60,30,50,.55)';ctx.stroke();
    }
    if (crowd>1 && dots[0].ok) {
      const top=Math.min(...[0,2,5].filter(i=>dots[i].ok).map(i=>dots[i].y))-26;
      ctx.fillStyle='#ff7eb3';ctx.beginPath();
      ctx.moveTo(dots[0].x-7,top-8);ctx.lineTo(dots[0].x+7,top-8);ctx.lineTo(dots[0].x,top);ctx.closePath();ctx.fill();
    }
    ctx.globalAlpha=1;
    paintMatch(now);

    if (holding) {setStatus(8);paintCrowd();return;}
    const face=[0,2,5].filter(i=>dots[i].ok).length>=2;
    const feet=[31,32].every(i=>dots[i].ok)||[29,30].every(i=>dots[i].ok);
    const full=['flip','lookback','mirror'].includes(getActiveRecipe().svgType);
    const footY=Math.max(...[29,30,31,32].map(i=>dots[i].ok?dots[i].y:0));
    if (!face) setStatus(2);
    else if (full && !feet) setStatus(3);
    else if (full && footY>L.h*.95) setStatus(4);
    else setStatus(feet?5:6);
    paintCrowd();
  }

  // Guide hidden: same subject tracking, score and cues, but nothing drawn over the person.
  function analyseOnly(L,now) {
    if (!subject || now-subject.lastSeen>HOLD_SUBJECT_MS) {subject=null;lastMatch=null;setStatus(1);paintCrowd();paintMatch(now);return;}
    evaluate(now);paintMatch(now);
    if (subject.cand===null) {setStatus(8);paintCrowd();return;}
    const ok=i=>{const j=subject.joints[i];const s=toScreen(j,L);return (j.v>=VIS||j.held)&&s.x>=0&&s.x<=L.w&&s.y>=0&&s.y<=L.h;};
    const face=[0,2,5].filter(ok).length>=2, feet=[31,32].every(ok)||[29,30].every(ok);
    const full=['flip','lookback','mirror'].includes(getActiveRecipe().svgType);
    if (!face) setStatus(2); else if (full&&!feet) setStatus(3); else setStatus(feet?5:6);
    paintCrowd();
  }
  function setVisible(on) {
    visible=on;
    if (current!==null) canvas.hidden=!on;
  }

  // ---------- engine ----------
  async function load() {
    const {PoseLandmarker,FilesetResolver}=await import('./assets/pose-engine/vision.js');
    const files=await FilesetResolver.forVisionTasks('assets/pose-engine/wasm');
    const opts=(model,delegate)=>({
      baseOptions:{modelAssetPath:`assets/pose-engine/${model}.task`,delegate},
      runningMode:'VIDEO',numPoses:MAX_POSES,
      minPoseDetectionConfidence:0.4,minPosePresenceConfidence:0.4,minTrackingConfidence:0.4
    });
    try {const d=await PoseLandmarker.createFromOptions(files,opts('pose-full','GPU'));engine='gpu';visionApi={PoseLandmarker,files,model:'assets/pose-engine/pose-full.task',delegate:'GPU'};return d;}
    catch {const d=await PoseLandmarker.createFromOptions(files,opts('pose-lite','CPU'));engine='cpu';visionApi={PoseLandmarker,files,model:'assets/pose-engine/pose-lite.task',delegate:'CPU'};return d;}
  }

  stage.addEventListener('click',e=>{
    if (!video.srcObject || current===null || e.target.closest('button,a,label,input,select,.vf-helper')) return;
    const p=toVideo(e.clientX,e.clientY);
    if (p.x>=0&&p.x<=1&&p.y>=0&&p.y<=1) tapPoint=p;
  });

  function stop() {
    generation++;
    cancelAnimationFrame(rafId);
    if (vfcId && video.cancelVideoFrameCallback) video.cancelVideoFrameCallback(vfcId);
    rafId=vfcId=0;
    current=null;pending=null;subject=null;tapPoint=null;lockedByTap=false;crowd=0;lastMatch=null;cueKey='';pairFlip=null;lastPair=null;
    ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);
    canvas.hidden=true;
    paintCrowd();
  }

  async function start() {
    stop();
    const id=generation;
    canvas.hidden=!visible;
    setStatus(0,true);
    resetFilters();
    try {
      loading ||= load().catch(err=>{loading=null;throw err;});
      const detector=await loading;
      if (id!==generation) return;
      let lastTime=-1,lastRun=0,cost=engine==='gpu'?20:60;
      const schedule=()=>{
        if (id!==generation) return;
        if (video.requestVideoFrameCallback) vfcId=video.requestVideoFrameCallback(tick);
        else rafId=requestAnimationFrame(tick);
      };
      function tick() {
        if (id!==generation) return;
        const now=performance.now();
        const minGap=Math.max(engine==='gpu'?30:70,cost*1.4);
        try {
          if (video.readyState>=2 && video.currentTime!==lastTime && now-lastRun>=minGap) {
            lastTime=video.currentTime;lastRun=now;
            // Copy the frame once (≤960 px long side): detect on it AND draw it.
            const vw=video.videoWidth, vh=video.videoHeight, s=Math.min(1,960/Math.max(vw,vh));
            const fw=Math.round(vw*s), fh=Math.round(vh*s);
            if (frame.width!==fw||frame.height!==fh) {frame.width=fw;frame.height=fh;}
            fctx.drawImage(video,0,0,fw,fh);
            const t0=performance.now();
            const result=detector.detectForVideo(frame,now);
            cost=cost*0.8+(performance.now()-t0)*0.2;
            const cands=(result.landmarks||[]).map(points=>({points,box:boxOf(points)})).filter(c=>c.box);
            if (getActiveRecipe().people===2) {
              subject=null;
              let pc=cands;
              ensureSplitDetector();
              dbg={main:cands.length,mainSeparated:!!separatedPair(cands),splitReady:!!splitDetector,split:null};
              if (!separatedPair(cands) && splitDetector) {
                const found=splitDetect(0.5);
                dbg.split=found.length; if (separatedPair(found)) pc=found;
                cost=cost*0.8+(performance.now()-t0)*0.2;
              }
              // A frame where one of the two is missed keeps the last good pair for 1.2 s (no flicker on slow phones).
              if (separatedPair(pc)) lastPair={cands:pc,at:now};
              else if (lastPair && now-lastPair.at<1200) pc=lastPair.cands;
              renderPair(pc,now);schedule();return;
            }
            const chosen=pickSubject(cands,now);
            if (chosen) updateSubject(chosen,now);
            else if (subject) subject.cand=null;
            render(cands,now);
          }
          schedule();
        } catch {stop();setStatus(7,true);}
      }
      schedule();
    } catch {if(id===generation){stop();setStatus(7,true);}}
  }
  return {
    start,stop,status,setVisible,engine:()=>engine,debug:()=>dbg,
    match:()=>lastMatch&&current!==null?{score:lastMatch.score,cue:lastMatch.cue,perfect:!!lastMatch.perfect}:null,
    subjectCenter:()=>subject?{x:+subject.box.cx.toFixed(2),y:+subject.box.cy.toFixed(2),people:crowd}:null
  };
})();
