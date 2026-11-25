const studioCopy = {
  ko: {introHint:'포즈 예시입니다. 자세를 참고하세요. 곧 카메라가 켜집니다.',cameraRetry:'카메라를 열 수 없습니다. 브라우저 권한을 확인하고 라이브를 눌러주세요.',brightness:'밝기',contrast:'대비',rotate:'오른쪽 90° 회전',mirror:'좌우반전',timer:'타이머',off:'끄기',searchCalls:'이 지역 모집 공고 검색',tabNearby:'탐색', nearbyHeading:'장소 탐색', salons:'근처 미용실', casting:'모델 모집', deals:'주변 혜택', edit:'사진 편집', crop:'자르기', original:'원본 비율', blur:'흐림', saturation:'채도', save:'사진 저장', noPosts:'출처와 마감일을 확인한 모집 공고가 없습니다.', apply:'원문 확인 · 지원', horizontal:'가로 위치', vertical:'세로 위치', guide:'촬영 가이드'},
  en: {introHint:'Example pose. Use it as a guide. Your camera opens shortly.',cameraRetry:'Check camera permissions, then tap Live to retry.',brightness:'Brightness',contrast:'Contrast',rotate:'Rotate 90° clockwise',mirror:'Flip horizontally',timer:'Timer',off:'Off',searchCalls:'Search local model calls',tabNearby:'Explore', nearbyHeading:'Explore places', salons:'Nearby salons', casting:'Model calls', deals:'Local offers', edit:'Photo editor', crop:'Crop', original:'Original ratio', blur:'Blur', saturation:'Saturation', save:'Save photo', noPosts:'No listings with a sourced application deadline found.', apply:'View post & apply', horizontal:'Horizontal position', vertical:'Vertical position', guide:'Shooting guide'},
  ja: {introHint:'お手本ポーズです ♪ まねしてみてね。まもなくカメラが起動します',cameraRetry:'カメラを起動できませんでした。カメラの許可を確認して「カメラON」を押してください',brightness:'明るさ',contrast:'コントラスト',rotate:'右に90°回転',mirror:'左右反転',timer:'タイマー',off:'オフ',searchCalls:'このエリアのサロモ募集をさがす',tabNearby:'さがす', nearbyHeading:'撮影スポットをさがす', salons:'近くのヘアサロン', casting:'サロンモデル募集', deals:'近くのおトク情報', edit:'写真編集', crop:'トリミング', original:'元の比率', blur:'ぼかし', saturation:'彩度', save:'写真を保存', noPosts:'現在、応募期限を確認できる募集はありません', apply:'募集ページで確認・応募', horizontal:'横位置', vertical:'縦位置', guide:'撮影ガイド'}
};
for (const code of Object.keys(studioCopy)) Object.assign(copy[code], studioCopy[code]);
let discoveryMode = 'spots';
let discoveryContext = '';
function renderStudio() {
  $('#spotMap').onclick = () => selectDiscovery('spots');
  $('#salonMap').onclick = () => selectDiscovery('salons');
  $('#castingBtn').onclick = () => selectDiscovery('casting');
}
function selectDiscovery(mode) {
  discoveryMode = mode;
  discoveryContext = '';
  renderNearbyPage();
}
function renderDiscovery(spot, labels) {
  const box = $('#castingResults');
  for (const [id, mode] of [['spotMap','spots'],['salonMap','salons'],['castingBtn','casting']]) {
    document.getElementById(id).setAttribute('aria-pressed', String(discoveryMode === mode));
  }
  const salonMode = discoveryMode === 'salons';
  const label = labels[0] + (salonMode ? ' · ' + t('salons') : '');
  updateNearbyMap(salonMode ? spot.map + ' 근처 미용실' : spot.map, label);
  if (!salonMode && activeTab === 'nearby') showSpotPins(spot);
  box.hidden = discoveryMode !== 'casting';
  const context = [spot.id,lang,discoveryMode].join('/');
  const changed = context !== discoveryContext;
  discoveryContext = context;
  if (salonMode && activeTab === 'nearby') showSalonPins(spot,context);
  if (!changed) return;
  if (!box.hidden) renderCasting(spot, box);
}
function renderCasting(spot, box) {
  box.replaceChildren();
  const today = new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Seoul'}).format(new Date());
  const postings = castingListings.filter(p => p.spotIds.includes(spot.id) && p.deadline >= today && /^https:\/\//.test(p.source));
  if (!postings.length) box.append(Object.assign(document.createElement('p'), {textContent:t('noPosts')}));
  for (const p of postings) {
      const card = document.createElement('article');
      const name = Object.assign(document.createElement('h3'),{textContent:p.salon});
      const info = Object.assign(document.createElement('p'),{textContent:[p.role,p.deadline,p.eligibility,p.conditions,p.application].join(' · ')});
      const link = Object.assign(document.createElement('a'),{href:p.source,target:'_blank',rel:'noopener noreferrer',textContent:t('apply')+' ↗',className:'btn primary sm'});
      const mapBtn = Object.assign(document.createElement('button'),{textContent:t('openMap'),className:'btn outline sm'});
      mapBtn.onclick = () => updateNearbyMap(p.salon,p.salon);
      card.append(name,info,link,mapBtn); box.append(card);
    }
  const query = spot.ko[1]+' 헤어모델 메이크업 모델 모집';
  box.append(Object.assign(document.createElement('a'),{href:'https://search.naver.com/search.naver?query='+encodeURIComponent(query),target:'_blank',rel:'noopener noreferrer',className:'btn outline sm',textContent:t('searchCalls')}));
}

function openPhotoEditor(source) {
  const range = (key, min, max, value, unit) => `<label class="adjust"><span>${t(key)} <output id="${key}Value">${value}${unit}</output></span><input type="range" id="edit-${key}" min="${min}" max="${max}" value="${value}"></label>`;
  openModal(`<div class="editor modal-body"><h2>${t('edit')}</h2>
    <canvas id="editPreview"></canvas><div class="editor-controls">
    <label class="crop-label">${t('crop')} <select id="edit-crop"><option value="original">${t('original')}</option><option>1:1</option><option>4:5</option><option>16:9</option></select></label>
    <div id="crop-position" hidden>${range('horizontal',0,100,50,'%')}${range('vertical',0,100,50,'%')}</div>
    ${range('saturation',0,200,100,'%')}${range('blur',0,12,0,'px')}
    ${range('brightness',0,200,100,'%')}${range('contrast',0,200,100,'%')}
    <div><button class="btn outline sm" id="rotateEdit">${t('rotate')}</button>
    <button class="btn outline sm" id="mirrorEdit" aria-pressed="false">${t('mirror')}</button></div>
    <button class="btn primary" id="saveEdit">${t('save')}</button>
    </div></div>`);
  let turns = 0;
  let mirrored = false;
  const preview = $('#editPreview');
  const value = key => $('#edit-'+key).value;
  function paint(canvas, limit) {
    const aspect = value('crop').split(':').map(Number);
    const ratio = aspect[0] / aspect[1] || source.width / source.height;
    const width = Math.min(source.width,source.height*ratio);
    const height = Math.min(source.height,source.width/ratio);
    const scale = Math.min(1,limit/Math.max(width,height));
    const dw = Math.max(1,Math.round(width*scale)), dh = Math.max(1,Math.round(height*scale));
    canvas.width = turns % 2 ? dh : dw;
    canvas.height = turns % 2 ? dw : dh;
    const ctx = canvas.getContext('2d');
    const radius = Number(value('blur'))*scale;
    const saturation = Number(value('saturation'))/100;
    const x = (source.width-width)*Number(value('horizontal'))/100;
    const y = (source.height-height)*Number(value('vertical'))/100;
    ctx.translate(canvas.width/2,canvas.height/2);
    if (mirrored) ctx.scale(-1,1);
    ctx.rotate(turns*Math.PI/2);
    ctx.drawImage(source,x,y,width,height,-dw/2,-dh/2,dw,dh);
    const brightness = Number(value('brightness'))/100, contrast = Number(value('contrast'))/100;
    if (radius || saturation !== 1 || brightness !== 1 || contrast !== 1) applyPixels(ctx,canvas.width,canvas.height,radius,saturation,brightness,contrast);
  }
  function refresh() {
    for (const key of ['saturation','brightness','contrast','blur','vertical','horizontal']) $('#'+key+'Value').textContent = value(key)+(key==='blur'?'px':'%');
    $('#crop-position').hidden = value('crop')==='original';
    paint(preview,640);
  }
  $('.editor-controls').oninput = e => {if (e.target.matches('select,input[type=range]')) refresh();};
  $('#saveEdit').onclick = () => {
    const output = document.createElement('canvas');
    paint(output,Infinity);
    downloadCanvas(output,`pilk-${Date.now()}.jpg`,'image/jpeg',0.93);
    toast(t('toastPhotoSaved'));
  };
  $('#rotateEdit').onclick = () => { turns = (turns+1)%4; refresh(); };
  $('#mirrorEdit').onclick = e => {
    mirrored = !mirrored;
    e.currentTarget.setAttribute('aria-pressed',String(mirrored));
    refresh();
  };
  refresh();
}

// Separable moving-average blur with clamped edges also works on mobile Safari.
function applyPixels(ctx,w,h,radius,saturation,brightness,contrast) {
  const image = ctx.getImageData(0,0,w,h);
  const pixels = image.data;
  if (saturation !== 1 || brightness !== 1 || contrast !== 1) {
    for (let i=0;i<pixels.length;i+=4) {
      const gray = pixels[i]*0.2126 + pixels[i+1]*0.7152 + pixels[i+2]*0.0722;
      for (let c=0;c<3;c++) pixels[i+c] = ((gray+(pixels[i+c]-gray)*saturation)*brightness-127.5)*contrast+127.5;
    }
  }
  const r = Math.round(radius);
  if (r) {
    const temp = new Uint8ClampedArray(pixels.length);
    for (const horizontal of [true,false]) {
      const [src,dst,length,lines,stride] = horizontal ? [pixels,temp,w,h,4] : [temp,pixels,h,w,4*w];
      for (let line=0;line<lines;line++) {
        const base = horizontal ? line*w*4 : line*4;
        for (let c=0;c<3;c++) {
          const start = base+c;
          let sum=0;
          for (let offset=-r;offset<=r;offset++) sum+=src[start+Math.max(0,Math.min(length-1,offset))*stride];
          for (let pos=0;pos<length;pos++) {
            dst[start+pos*stride]=sum/(2*r+1);
            sum+=src[start+Math.min(length-1,pos+r+1)*stride]-src[start+Math.max(0,pos-r)*stride];
          }
        }
      }
    }
  }
  ctx.putImageData(image,0,0);
}
