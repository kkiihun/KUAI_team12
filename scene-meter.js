const sceneWords = {
  ko:{title:'배경 스캔',live:'라이브 카메라',upload:'내 사진',sample:'촬영 예시',spot:'선택한 장소',brightness:'밝기',contrast:'명암 차이',tone:'색감',soft:'낮음',mid:'보통',high:'높음',warm:'따뜻함',cool:'차가움',neutral:'중간',darkTip:'전체적으로 어둡습니다. 창가나 조명 가까이에서 다시 구도를 잡아보세요.',brightTip:'밝은 영역의 디테일이 사라질 수 있어요. 빛을 등지거나 밝은 배경을 조금 덜 담아보세요.',backTip:'중앙이 주변보다 어둡습니다. 인물이 가운데 있다면 밝은 쪽을 향하게 해보세요.',mixedTip:'밝고 어두운 부분의 차이가 큽니다. 인물을 고른 그늘로 옮겨보세요.',evenTip:'밝기가 비교적 고릅니다. 지금 구도에서 인물의 눈과 발끝을 확인해 보세요.',retry:'읽을 수 있는 카메라 화면이나 사진이 필요합니다.',location:'내 위치 주변 스팟',locating:'위치 확인 중…',locationFail:'위치를 확인할 수 없어요. 탐색에서 직접 장소를 선택해 주세요.',far:'현재 위치에서 10 km 이내에 등록된 스팟이 없습니다.',explore:'지도에서 보기',again:'다시 스캔',map:'장소 탐색'},
  en:{title:'Scene scan',live:'Live camera',upload:'Your photo',sample:'Pose example',spot:'Selected spot',brightness:'Brightness',contrast:'Tonal range',tone:'Color tone',soft:'Low',mid:'Medium',high:'High',warm:'Warm',cool:'Cool',neutral:'Neutral',darkTip:'The scene is dark. Try moving closer to a window or light.',brightTip:'Bright areas may lose detail. Reframe to include less bright background.',backTip:'The center is darker than its surroundings. If your subject is centered, turn them toward the light.',mixedTip:'The light varies widely. Try placing your subject in even shade.',evenTip:'The light is fairly even. Check the eyes and feet in your frame.',retry:'Use a ready camera frame or photo.',location:'Find spots near me',locating:'Checking location…',locationFail:'Location unavailable. Choose a spot in Explore.',far:'No listed spots within 10 km of your position.',explore:'View on map',again:'Scan again',map:'Explore places'},
  ja:{title:'背景チェック',live:'ライブカメラ',upload:'自分の写真',sample:'撮影例',spot:'選択したスポット',brightness:'明るさ',contrast:'明暗差',tone:'色味',soft:'低い',mid:'中程度',high:'高い',warm:'暖色',cool:'寒色',neutral:'中間',darkTip:'全体が暗めです。窓や照明の近くで構図を調整しましょう。',brightTip:'明るい部分の細部が消えそうです。明るい背景を少し減らしましょう。',backTip:'中央が周囲より暗めです。中央の人物を光の方へ向けてみましょう。',mixedTip:'明暗差が大きいです。人物を均一な日陰に移してみましょう。',evenTip:'明るさは比較的均一です。目と足先が入っているか確認しましょう。',retry:'カメラ映像または写真を読み込んでください。',location:'現在地の近くを探す',locating:'現在地を確認中…',locationFail:'位置情報を取得できません。探索で場所を選んでください。',far:'現在地から10 km以内に登録スポットはありません。',explore:'地図で表示',again:'もう一度チェック',map:'場所を探す'}
};

function analyzeScene(canvas) {
  const tiny=document.createElement('canvas');
  tiny.width=tiny.height=48;
  const ctx=tiny.getContext('2d',{willReadFrequently:true});
  ctx.drawImage(canvas,0,0,48,48);
  const pixels=ctx.getImageData(0,0,48,48).data;
  const levels=[];
  let center=0, surround=0, total=0, tint=0, highlights=0;
  for(let i=0;i<48*48;i++){
    const red=pixels[4*i], green=pixels[4*i+1], blue=pixels[4*i+2];
    const light=.2126*red+.7152*green+.0722*blue;
    levels.push(light);total+=light;tint+=red-blue;
    if(light>245) highlights++;
    const x=i%48,y=Math.floor(i/48);
    if(x>=12 && x<36 && y>=12 && y<36) center+=light;
    else surround+=light;
  }
  levels.sort((a,b)=>a-b);
  const n=levels.length;
  const brightness=Math.round(total/n/255*100);
  const range=levels[Math.floor(n*.9)]-levels[Math.floor(n*.1)];
  const hint=brightness<25?'darkTip':brightness>83||highlights/n>.25?'brightTip':surround/(n*.75)-center/(n*.25)>38?'backTip':range>155?'mixedTip':'evenTip';
  return {brightness,contrast:range<60?'soft':range>155?'high':'mid',tone:tint/n>18?'warm':tint/n< -18?'cool':'neutral',hint};
}

function scanFrame(){
  const video=$('#stageVideo'), img=$('#stageBgImg');
  const live=Boolean(director.stream);
  const src=live?video:img;
  const w=live?video.videoWidth:img.naturalWidth, h=live?video.videoHeight:img.naturalHeight;
  if(!w || !h || (live?video.readyState<2:!img.complete)) return null;
  const stage=$('#viewfinderStage');
  const example=stage.classList.contains('pose-example')&&!live;
  const ratio=example?w/h:stage.clientWidth/stage.clientHeight;
  const zoom=live||example?1:director.lens==='2×'?1.24:director.lens==='1×'?1.08:1;
  const cw=Math.min(w,h*ratio)/zoom, ch=cw/ratio;
  const canvas=document.createElement('canvas');
  canvas.width=Math.max(1,Math.round(480*Math.min(1,ratio)));canvas.height=Math.max(1,Math.round(canvas.width/ratio));
  const ctx=canvas.getContext('2d');
  if(live && video.classList.contains('is-mirrored')){ctx.translate(canvas.width,0);ctx.scale(-1,1);}
  ctx.drawImage(src,(w-cw)/2,(h-ch)/2,cw,ch,0,0,canvas.width,canvas.height);
  return {canvas,source:live?'live':director.customPhotoUrl?'upload':example?'sample':'spot'};
}

function runBackgroundScan(){
  if(activeTab!=='camera') switchTab('camera');
  const words=sceneWords[lang];
  let frame;
  try {frame=scanFrame();} catch {frame=null;}
  if(!frame){toast(words.retry);return;}
  const stats=analyzeScene(frame.canvas);
  openModal(`<section class="modal-body scene-report"><h2>${words.title}</h2><figure><img id="scanFrame" alt=""><figcaption>${words[frame.source]}</figcaption></figure><dl>${[[words.brightness,stats.brightness+'%'],[words.contrast,words[stats.contrast]],[words.tone,words[stats.tone]]].map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl><p class="scene-tip">${words[stats.hint]}</p><div class="scene-actions"><button class="btn primary" id="scanAgain">${words.again}</button><button class="btn outline" id="scanLocation">${words.location}</button><button class="btn outline" id="scanExplore">${words.map}</button></div><div id="scanLocations" aria-live="polite"></div></section>`);
  $('#scanFrame').src=frame.canvas.toDataURL('image/jpeg',.8);
  $('#scanAgain').onclick=()=>runBackgroundScan();
  $('#scanExplore').onclick=()=>{closeModal();switchTab('nearby');};
  $('#scanLocation').onclick=()=>findScanSpots(words);
}

function findScanSpots(words){
  const result=$('#scanLocations'),button=$('#scanLocation');
  function fail(){button.disabled=false;result.textContent=words.locationFail;}
  if(!navigator.geolocation){fail();return;}
  button.disabled=true;result.textContent=words.locating;
  navigator.geolocation.getCurrentPosition(({coords})=>{
    if(!result.isConnected || !modal.open)return;
    button.disabled=false;
    const rad=Math.PI/180;
    const matches=spots.map(spot=>{
      const point=spotPoints[spot.id];
      if(!point)return null;
      const dlat=(point[0]-coords.latitude)*rad,dlon=(point[1]-coords.longitude)*rad;
      const a=Math.sin(dlat/2)**2+Math.cos(coords.latitude*rad)*Math.cos(point[0]*rad)*Math.sin(dlon/2)**2;
      return {spot,km:12742*Math.asin(Math.sqrt(Math.min(1,a)))};
    }).filter(x=>x && x.km<=10).sort((a,b)=>a.km-b.km).slice(0,3);
    result.replaceChildren();
    if(!matches.length) result.textContent=words.far;
    for(const {spot,km} of matches){
      const link=document.createElement('button');link.className='btn outline sm';
      link.textContent=spot[lang][0]+' · '+km.toFixed(1)+' km';
      link.onclick=()=>{closeModal();discoveryMode='spots';switchTab('nearby');selectMapSpot(spot.id);};
      result.append(link);
    }
  },fail,{timeout:8000,maximumAge:60000});
}
