// On-device tracking. Frames stay in the camera element and are never uploaded.
const poseTracking = (() => {
  const canvas = document.querySelector('#landmarks');
  const ctx = canvas.getContext('2d');
  const video = document.querySelector('#stageVideo');
  const labels = {
    ko:['인식 준비 중','사람을 화면에 담아주세요','얼굴 위치를 확인해 주세요','양발이 보이게 한 걸음 물러나세요','발끝 아래 여백을 조금 더 주세요','얼굴과 양발이 보여요','얼굴 위치 확인','자세 인식 사용 불가'],
    en:['Loading tracker','Step into the frame','Bring your face into view','Step back to include both feet','Leave space below your feet','Face and both feet visible','Face in view','Tracking unavailable'],
    ja:['認識を準備中','画面に入ってください','顔が見える位置へ','両足が入るように一歩後ろへ','足元に少し余白を','顔と両足が見えます','顔を確認','姿勢認識を利用できません']
  };
  const edges = [[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,29],[29,31],[28,30],[30,32]];
  let loading, timeout, generation=0, current=null;
  function status() { return current===null ? '' : labels[lang][current]; }
  function updateStatus(code) {
    current=code;
    document.querySelector('#vfMatchScore').textContent=status();
  }
  function stop() {
    generation++;
    clearTimeout(timeout);
    current=null;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvas.hidden=true;
  }
  function draw(points) {
    const w=video.clientWidth, h=video.clientHeight;
    if (!w || !h) return;
    if (canvas.width!==w || canvas.height!==h) { canvas.width=w; canvas.height=h; }
    ctx.clearRect(0,0,w,h);
    if (!points) {updateStatus(1);return;}
    const scale=Math.max(w/video.videoWidth,h/video.videoHeight);
    const sw=video.videoWidth*scale, sh=video.videoHeight*scale;
    const mirrored=video.classList.contains('is-mirrored');
    const dots=points.map(p=>{
      const x=p.x*sw+(w-sw)/2, y=p.y*sh+(h-sh)/2;
      return {x:mirrored?w-x:x,y,visible:(p.visibility??1)>=0.55 && x>=0 && x<=w && y>=0 && y<=h};
    });
    ctx.strokeStyle='rgba(186,255,218,.72)';ctx.lineWidth=2;
    ctx.beginPath();
    for (const [a,b] of edges) {
      if (dots[a].visible && dots[b].visible) {ctx.moveTo(dots[a].x,dots[a].y);ctx.lineTo(dots[b].x,dots[b].y);}
    }
    ctx.stroke();
    for (const i of [0,2,5,11,12,29,30,31,32]) {
      if (!dots[i].visible) continue;
      ctx.beginPath();ctx.arc(dots[i].x,dots[i].y,3.5,0,Math.PI*2);ctx.fillStyle=i<6?'#ffe69b':'#96ffcd';ctx.fill();
    }
    const face=[0,2,5].filter(i=>dots[i].visible).length>=2;
    const feet=[31,32].every(i=>dots[i].visible);
    const full=['flip','lookback','mirror'].includes(getActiveRecipe().svgType);
    if (!face) updateStatus(2);
    else if (full && !feet) updateStatus(3);
    else if (full && Math.max(dots[31].y,dots[32].y)>h*.95) updateStatus(4);
    else updateStatus(feet?5:6);
  }
  async function load() {
    const {PoseLandmarker,FilesetResolver}=await import('./assets/pose-engine/vision.js');
    const files=await FilesetResolver.forVisionTasks('assets/pose-engine/wasm');
    return PoseLandmarker.createFromOptions(files,{baseOptions:{modelAssetPath:'assets/pose-engine/pose.task',delegate:'CPU'},runningMode:'VIDEO',numPoses:1});
  }
  async function start() {
    stop();
    const id=generation;
    canvas.hidden=false;
    updateStatus(0);
    try {
      loading ||= load().catch(err=>{loading=null;throw err;});
      const detector=await loading;
      let lastTime=-1;
      function tick() {
        if (id!==generation) return;
        try {
          if (video.readyState>=2 && video.currentTime!==lastTime) {
            lastTime=video.currentTime;
            draw(detector.detectForVideo(video,performance.now()).landmarks[0]);
          }
          timeout=setTimeout(tick,150);
        } catch {stop();updateStatus(7);}
      }
      tick();
    } catch {if(id===generation){stop();updateStatus(7);}}
  }
  return {start,stop,status};
})();
