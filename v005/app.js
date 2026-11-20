// PILK v005 (Mobile-Compact) — Real-Time K-Photo Director & Local Discovery

const icons = {
  bookmark: 'M6 4h12v17l-6-4-6 4z',
  scan: 'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 8h8v8H8z',
  search: 'M20 20l-5-5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
  camera: 'M4 7h4l2-3h4l2 3h4v13H4zM16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  upload: 'M12 16V4m0 0-4 4m4-4 4 4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  spark: 'm12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z',
  volume: 'M11 5 6 9H2v6h4l5 4V5zm4.5 3.5a5 5 0 0 1 0 7m2.8-9.8a9 9 0 0 1 0 12.6',
  map: 'm3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2zM9 3v16m6-14v16',
  trash: 'M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7'
};

const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[name] || icons.spark}"/></svg>`;
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

// === State ===
let lang = 'ko';
let savedSpots = [];
let claimedCoupons = [];
let activeFilter = 'all';
let spotLimit = 8;
let searchQuery = '';

const director = {
  spotId: 'seongsu',
  customPhotoUrl: null,
  recipeIdx: 0,
  mode: 'A',
  flip180: true,
  frontFoot: true,
  lens: '1×',
  distance: 0,
  opacity: 72,
  showGrid: true,
  helperOpen: false,
  tiltDeg: 0,
  stream: null,
  cameraToken: 0,
  lastLight: null
};

try {
  const storedLang = localStorage.getItem('pilk-v5-lang');
  if (storedLang && copy[storedLang]) lang = storedLang;
  savedSpots = JSON.parse(localStorage.getItem('pilk-v5-saved') || '[]').filter(id => spots.some(s => s.id === id));
  claimedCoupons = JSON.parse(localStorage.getItem('pilk-v5-coupons') || '[]');
} catch {}

function persist(k, v) {
  try { localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); } catch {}
}

const t = key => (copy[lang] && copy[lang][key]) || copy.ko[key] || key;

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

function hydrate(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  root.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
  root.querySelectorAll('[data-placeholder]').forEach(el => { el.placeholder = t(el.dataset.placeholder); });
}

// === Clean AR Silhouette SVGs ===
function recipeSvg(svgType) {
  const stroke = '#ffffff';
  const accent = '#ff8c69';
  const fill = 'rgba(255,255,255,0.08)';

  if (svgType === 'flip') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <g stroke="${stroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3">
        <circle cx="110" cy="48" r="18" fill="${fill}"/>
        <path d="M84 126 L92 74 Q110 66 128 74 L136 126 Z" fill="${fill}"/>
        <path d="M92 78 L74 114 M128 78 L145 112"/>
        <path d="M96 126 L92 198 L82 206 M124 126 L138 202 L152 210"/>
        <circle cx="152" cy="210" r="6" stroke="${accent}" stroke-width="2.5" stroke-dasharray="none"/>
      </g>
    </svg>`;
  }
  if (svgType === 'high05') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <g stroke="${stroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3">
        <ellipse cx="110" cy="90" rx="28" ry="24" fill="${fill}"/>
        <path d="M80 118 Q110 104 140 118 L128 166 Q110 176 92 166 Z" fill="${fill}"/>
        <path d="M84 122 L66 154 M136 122 L162 84"/>
        <path d="M98 166 L94 202 M122 166 L128 202"/>
      </g>
      <text x="110" y="34" fill="${accent}" font-size="11" font-weight="800" text-anchor="middle" font-family="sans-serif">0.5× TOP VIEW</text>
    </svg>`;
  }
  if (svgType === 'lookback') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <g stroke="${stroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3">
        <circle cx="114" cy="52" r="18" fill="${fill}"/>
        <path d="M90 78 Q110 70 132 80 L144 150 Q112 162 82 150 Z" fill="${fill}"/>
        <path d="M92 84 L78 128 M130 86 L146 124"/>
        <path d="M100 152 L88 204 M124 152 L140 206"/>
      </g>
      <path d="M138 48 Q160 56 150 74" stroke="${accent}" stroke-width="2"/>
    </svg>`;
  }
  if (svgType === 'mirror') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <rect x="44" y="16" width="132" height="206" rx="58" stroke="${accent}" stroke-width="2.2" stroke-dasharray="6 4"/>
      <g stroke="${stroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3">
        <circle cx="110" cy="64" r="17" fill="${fill}"/>
        <path d="M88 88 Q110 80 130 88 L138 148 Q110 156 82 148 Z" fill="${fill}"/>
        <path d="M88 94 L76 134 M128 94 L124 74"/>
        <path d="M96 148 L88 200 M122 148 L136 202"/>
        <rect x="114" y="60" width="20" height="32" rx="4" fill="rgba(255,90,54,0.35)" stroke="${accent}"/>
      </g>
    </svg>`;
  }
  if (svgType === 'shadow') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <path d="M86 196 L78 148 Q60 136 58 114 L54 68 Q52 50 64 46 L90 68 Q110 58 130 68 L156 46 Q168 50 166 68 L162 114 Q160 136 142 148 L134 196 Z" fill="rgba(255,255,255,0.14)" stroke="${stroke}" stroke-width="2.2" stroke-dasharray="5 3"/>
      <path d="M68 108 L34 92 M68 122 L30 118 M72 134 L38 148 M152 108 L186 92 M152 122 L190 118 M148 134 L182 148" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
    <g stroke="${stroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3">
      <circle cx="110" cy="84" r="34" fill="${fill}"/>
      <path d="M62 198 C68 140 152 140 158 198" fill="${fill}"/>
      <path d="M66 176 L86 126 L94 102"/>
      <circle cx="94" cy="96" r="5" stroke="${accent}" stroke-width="2.5" stroke-dasharray="none"/>
    </g>
  </svg>`;
}

// === Coaching Calculation (Short, Punchy 1-Line Cues) ===
function getActiveSpot() {
  return spots.find(s => s.id === director.spotId) || spots[0];
}
function getActiveRecipe() {
  return kRecipes[director.recipeIdx] || kRecipes[0];
}

function computeCoaching() {
  const r = getActiveRecipe();
  const rt = r[lang] || r.ko;
  let score = 100;
  let cue = '';

  if (r.recommendedFlip && !director.flip180) {
    score -= 22;
    cue = lang === 'ko' ? '🔄 폰을 180° 거꾸로 뒤집으세요!'
      : lang === 'ja' ? '🔄 スマホを180°逆さまにして！'
      : '🔄 Flip your phone 180° upside down!';
  } else if (r.recommendedLens === '0.5×' && director.lens !== '0.5×') {
    score -= 18;
    cue = lang === 'ko' ? '📐 0.5× 광각으로 전환하세요!'
      : lang === 'ja' ? '📐 0.5×超広角に切り替えて！'
      : '📐 Switch to 0.5× ultra-wide!';
  } else if (director.distance === -1) {
    score -= 20;
    cue = lang === 'ko' ? '👣 한 보 뒤로 가세요 (발끝 잘림)'
      : lang === 'ja' ? '👣 一歩後ろへ下がって！'
      : '👣 Step back 1 pace (feet cropped)';
  } else if (director.distance === 1) {
    score -= 16;
    cue = lang === 'ko' ? '👣 반 보 앞으로 와서 발끝을 선에 맞추세요'
      : lang === 'ja' ? '👣 半歩前へ・つま先を下線に！'
      : '👣 Half step closer to the foot line';
  } else if (r.recommendedFrontFoot && !director.frontFoot) {
    score -= 12;
    cue = lang === 'ko' ? '🦶 앞발을 반 걸음 앞으로 빼보세요!'
      : lang === 'ja' ? '🦶 前足を半歩前に出して！'
      : '🦶 Extend your front foot half a step!';
  } else if (Math.abs(director.tiltDeg) > 6) {
    score -= 10;
    cue = lang === 'ko' ? `⚖️ 수평 맞추기 (${director.tiltDeg}°)`
      : lang === 'ja' ? `⚖️ 水平を合わせて (${director.tiltDeg}°)`
      : `⚖️ Level phone (${director.tiltDeg}°)`;
  } else {
    if (!r.recommendedFlip && director.flip180) score -= 6;
    cue = lang === 'ko' ? `✨ 완벽해요! 지금 촬영하세요 · ${rt.chip}`
      : lang === 'ja' ? `✨ 完璧！今シャッターを！ · ${rt.chip}`
      : `✨ Perfect angle! Snap now · ${rt.chip}`;
  }

  return { score: Math.max(48, score), cue };
}

function updateDirectorView() {
  const spot = getActiveSpot();
  const sText = spot[lang] || spot.ko;
  const r = getActiveRecipe();
  const rt = r[lang] || r.ko;
  const coaching = computeCoaching();

  // Stage background
  const bgImg = $('#stageBgImg');
  bgImg.src = director.customPhotoUrl || `assets/${spot.image}`;
  const lensScale = director.lens === '0.5×' ? 1.0 : director.lens === '2×' ? 1.24 : 1.08;
  bgImg.style.transform = `scale(${lensScale})`;

  // AR Overlay
  const overlay = $('#vfOverlay');
  overlay.innerHTML = recipeSvg(r.svgType);
  const distScale = director.distance === -1 ? 1.18 : director.distance === 1 ? 0.82 : 1.0;
  const distY = director.distance === -1 ? '6%' : director.distance === 1 ? '-6%' : '0%';
  overlay.style.transform = `scale(${distScale}) translateY(${distY})`;
  overlay.style.opacity = director.mode === 'B' ? Math.max(0.22, director.opacity / 220) : director.opacity / 100;

  $('#vfGrid').classList.toggle('hidden', !director.showGrid);
  $('#vfFootLine').classList.toggle('hidden', !director.showGrid);

  // Top HUD
  $('#vfMatchScore').textContent = `${coaching.score}%`;
  $('#vfMatchPill').classList.toggle('warn', coaching.score < 85);
  $('#vfSpotName').textContent = director.customPhotoUrl ? (lang === 'ko' ? '내 사진' : lang === 'ja' ? '自分の写真' : 'My Photo') : sText[0];
  $('#vfTiltReadout').textContent = `${director.tiltDeg > 0 ? '+' : ''}${director.tiltDeg}°`;
  $('#vfTiltReadout').style.color = Math.abs(director.tiltDeg) <= 6 ? '#4ade80' : '#fbbf24';

  // Cue line
  $('#vfDirText').textContent = coaching.cue;

  // Mode B 3-pill strip
  const stepStrip = $('#vfModeBStrip');
  stepStrip.classList.toggle('hidden', director.mode !== 'B');
  stepStrip.innerHTML = rt.steps.map((s, idx) => `<span class="vf-step-pill"><b>${idx + 1}</b>${s}</span>`).join('');

  // Helper mode
  $('#vfHelperCard').classList.toggle('hidden', !director.helperOpen);
  $('#vfHelperSteps').textContent = rt.helperText;

  // Sync compact controls
  $$('.seg-btn').forEach(b => b.classList.toggle('selected', b.dataset.mode === director.mode));
  $$('.lens-btn').forEach(b => b.classList.toggle('selected', b.dataset.lens === director.lens));
  $('#btnFlip180').classList.toggle('active', director.flip180);
  $('#btnFrontFoot').classList.toggle('active', director.frontFoot);
  $$('.dist-pill').forEach(b => b.classList.toggle('selected', +b.dataset.dist === director.distance));
  $$('.pose-pill').forEach(b => b.classList.toggle('selected', +b.dataset.poseIdx === director.recipeIdx));
  $('#opacitySlider').value = director.opacity;
  $('#opacityVal').textContent = `${director.opacity}%`;
  $('#gridToggle').checked = director.showGrid;
}

function renderPoseStrip() {
  $('#poseStrip').innerHTML = kRecipes.map((r, i) => {
    const rt = r[lang] || r.ko;
    return `<button type="button" class="pose-pill ${i === director.recipeIdx ? 'selected' : ''}" data-pose-idx="${i}">${r.icon} ${rt.chip}</button>`;
  }).join('');
}

// === Voice Coaching ===
function speakCoaching() {
  const coaching = computeCoaching();
  const rt = getActiveRecipe()[lang] || getActiveRecipe().ko;
  const text = `${coaching.cue}. ${rt.shortCue}`.replace(/[🔄👣🦶📐✨⚖️]/g, '');
  toast(t('toastVoice'));
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : 'en-US';
    window.speechSynthesis.speak(u);
  }
}

// === Canvas Pixel Analysis & Compact Nearby Carousel ===
function analyzeCanvasPixels() {
  try {
    const video = $('#stageVideo');
    const img = $('#stageBgImg');
    const src = director.stream && video.videoWidth ? video : img;
    if (!src || (src === img && (!img.complete || !img.naturalWidth))) return null;
    const c = document.createElement('canvas');
    c.width = 40; c.height = 40;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(src, 0, 0, 40, 40);
    const d = ctx.getImageData(0, 0, 40, 40).data;
    let rS = 0, bS = 0, lum = 0;
    const n = d.length / 4;
    for (let i = 0; i < d.length; i += 4) {
      rS += d[i]; bS += d[i + 2];
      lum += 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    }
    return { brightness: Math.round((lum / n / 255) * 100), warmth: Math.round((rS - bS) / n) };
  } catch {
    return null;
  }
}

function shortLightLabel(stats, spot) {
  if (!stats) return `${spot.recipe.flip ? '180°' : '기본'} · ${spot.recipe.lens}`;
  const b = stats.brightness;
  if (lang === 'ko') return b < 35 ? `야간 ${b}%` : b > 72 ? `밝음 ${b}%` : `자연광 ${b}%`;
  if (lang === 'ja') return b < 35 ? `夜景 ${b}%` : b > 72 ? `明るい ${b}%` : `自然光 ${b}%`;
  return b < 35 ? `Low-light ${b}%` : b > 72 ? `Bright ${b}%` : `Daylight ${b}%`;
}

function renderNearbyCard() {
  const spot = getActiveSpot();
  const sText = spot[lang] || spot.ko;
  const nearby = nearbyPools[spot.pool] || nearbyPools.jongno;

  $('#scanSpotTitle').textContent = sText[0];
  $('#scanLightTag').textContent = shortLightLabel(director.lastLight, spot);

  $('#nearbyList').innerHTML = nearby.map((item, idx) => {
    const cid = `${spot.pool}_${idx}`;
    const claimed = claimedCoupons.includes(cid);
    return `
      <article class="nearby-tile">
        <div class="tile-meta">
          <span class="tile-cat">${item.cat[lang] || item.cat.ko}</span>
          <span class="tile-walk">🚶 ${item.walk}</span>
        </div>
        <b>${item.name[lang] || item.name.ko}</b>
        <span class="tile-deal">🎁 ${item.deal[lang] || item.deal.ko}</span>
        <div class="tile-actions">
          <button type="button" class="coupon-btn ${claimed ? 'claimed' : ''}" data-claim-coupon="${cid}">
            ${claimed ? t('couponClaimed') : t('claimCoupon')}
          </button>
          ${item.spotId && item.spotId !== spot.id ? `<button type="button" class="switch-mini" data-load-spot="${item.spotId}">${t('switchSpot')}</button>` : ''}
        </div>
      </article>
    `;
  }).join('');
}

function runBackgroundScan(applyPreset = false) {
  const laser = $('#vfScanLaser');
  laser.classList.remove('hidden');
  $('#scanLightTag').textContent = t('scanning');

  setTimeout(() => {
    laser.classList.add('hidden');
    director.lastLight = analyzeCanvasPixels();
    if (director.customPhotoUrl && director.lastLight) {
      const { brightness, warmth } = director.lastLight;
      if (brightness < 38) director.spotId = 'euljiro';
      else if (warmth < -8) director.spotId = 'jumunjin';
      else if (warmth > 20) director.spotId = 'gyeongbok';
      else director.spotId = 'seongsu';
    }
    if (applyPreset) {
      const spot = getActiveSpot();
      director.flip180 = spot.recipe.flip;
      director.lens = spot.recipe.lens;
      director.recipeIdx = Math.min(kRecipes.length - 1, spot.recipe.pose || 0);
      director.distance = 0;
    }
    updateDirectorView();
    renderNearbyCard();
  }, 580);
}

// === Live WebRTC Camera (Mode switches NEVER stop camera!) ===
function stopCamera() {
  director.cameraToken++;
  if (director.stream) {
    director.stream.getTracks().forEach(tr => tr.stop());
    director.stream = null;
  }
  const v = $('#stageVideo');
  if (v) { v.srcObject = null; v.style.display = 'none'; }
  $('#toggleCamBtn').classList.remove('active');
  $('#toggleCamLabel').textContent = t('dockCamOn');
}

async function toggleCamera() {
  if (director.stream) {
    stopCamera();
    return;
  }
  const token = ++director.cameraToken;
  try {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error('Unavailable');
    const media = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 1600 }, height: { ideal: 1200 } },
      audio: false
    });
    if (token !== director.cameraToken) {
      media.getTracks().forEach(tr => tr.stop());
      return;
    }
    director.stream = media;
    const v = $('#stageVideo');
    v.srcObject = media;
    await v.play();
    v.style.display = 'block';
    $('#toggleCamBtn').classList.add('active');
    $('#toggleCamLabel').textContent = t('dockCamOff');
    enableGyro();
  } catch {
    if (token === director.cameraToken) toast(t('toastCameraFail'));
  }
}

let gyroBound = false;
function enableGyro() {
  const bind = () => {
    if (gyroBound) return;
    gyroBound = true;
    window.addEventListener('deviceorientation', e => {
      if (typeof e.gamma === 'number') {
        director.tiltDeg = Math.max(-35, Math.min(35, Math.round(e.gamma)));
        updateDirectorView();
      }
    });
  };
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(res => { if (res === 'granted') bind(); }).catch(() => {});
  } else {
    bind();
  }
}

// === Capture Photo / 1080x1920 IG Story Card ===
function captureViewfinder(asStory = false) {
  const v = $('#stageVideo');
  const img = $('#stageBgImg');
  const isLive = Boolean(director.stream && v.videoWidth);
  const src = isLive ? v : img;
  const sw = isLive ? v.videoWidth : img.naturalWidth;
  const sh = isLive ? v.videoHeight : img.naturalHeight;
  if (!sw || !sh) return toast(t('toastCameraFail'));

  try {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    if (!asStory) {
      c.width = sw; c.height = sh;
      ctx.drawImage(src, 0, 0, sw, sh);
      downloadCanvas(c, `pilk-${Date.now()}.jpg`, 'image/jpeg', 0.93);
      return toast(t('toastPhotoSaved'));
    }

    const W = 1080, H = 1920;
    c.width = W; c.height = H;
    ctx.fillStyle = '#141714';
    ctx.fillRect(0, 0, W, H);
    const pad = 64, topY = 200, pW = W - pad * 2, pH = 1320;
    const sc = Math.max(pW / sw, pH / sh);
    ctx.save();
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(pad, topY, pW, pH, 40);
    else ctx.rect(pad, topY, pW, pH);
    ctx.clip();
    ctx.drawImage(src, pad + (pW - sw * sc) / 2, topY + (pH - sh * sc) / 2, sw * sc, sh * sc);
    ctx.restore();

    const spot = getActiveSpot();
    const sText = spot[lang] || spot.ko;
    const { score } = computeCoaching();
    ctx.fillStyle = '#ff5a36';
    ctx.font = '800 44px "DM Sans", sans-serif';
    ctx.fillText('✳ PILK', pad, 122);
    ctx.fillStyle = '#4ade80';
    ctx.textAlign = 'right';
    ctx.font = '800 34px "DM Sans", sans-serif';
    ctx.fillText(`K-MATCH ${score}%`, W - pad, 122);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 48px "Noto Sans KR", "DM Sans", sans-serif';
    ctx.fillText(sText[0], pad, 1625);
    ctx.fillStyle = 'rgba(255,255,255,0.72)';
    ctx.font = '500 28px "Noto Sans KR", "DM Sans", sans-serif';
    ctx.fillText(`${sText[1]} · ${director.flip180 ? '180° Flip' : 'Standard'} · ${director.lens}`, pad, 1682);
    ctx.fillStyle = '#ff8c69';
    ctx.font = '700 26px "DM Sans", sans-serif';
    ctx.fillText(`#PILK  #PictureItLikeKorean  ${sText[3]}`, pad, 1748);

    downloadCanvas(c, `pilk-story-${spot.id}.png`, 'image/png', 0.95);
    toast(t('toastStorySaved'));
  } catch {
    toast(t('toastCameraFail'));
  }
}

function downloadCanvas(canvas, filename, mime, q) {
  const a = document.createElement('a');
  a.href = canvas.toDataURL(mime, q);
  a.download = filename;
  a.click();
}

// === Spots Grid ===
function spotMatches(s, type) {
  return type === 'all' || s.type === type || (type === 'nature' && s.nature);
}

function renderSpots() {
  const preferred = ['seongsu', 'gyeongbok', 'hyundai', 'yeonnam', 'bukchon', 'euljiro', 'jumunjin', 'hannam'];
  const ordered = activeFilter === 'all'
    ? [...preferred.map(id => spots.find(s => s.id === id)).filter(Boolean), ...spots.filter(s => !preferred.includes(s.id))]
    : spots;
  const q = searchQuery.trim().toLowerCase();
  const matches = ordered.filter(s =>
    spotMatches(s, activeFilter) &&
    (!q || [...s.ko, ...s.en, ...s.ja, s.map].join(' ').toLowerCase().includes(q))
  );
  const shown = matches.slice(0, spotLimit);

  $('#spotGrid').innerHTML = shown.map(s => {
    const a = s[lang] || s.ko;
    const isSaved = savedSpots.includes(s.id);
    return `
      <article class="spot-card">
        <div style="position:relative">
          <button type="button" class="spot-photo-btn" data-load-spot="${s.id}" aria-label="${a[0]}">
            <img src="assets/${s.image}" alt="${a[0]}" loading="lazy">
            <span class="spot-badge">${s.recipe.flip ? '180°' : s.recipe.lens}</span>
          </button>
          <button type="button" class="spot-save ${isSaved ? 'is-saved' : ''}" data-save-spot="${s.id}" aria-label="Save">
            ${icon('bookmark')}
          </button>
        </div>
        <div class="spot-foot">
          <button type="button" class="spot-meta-btn" data-load-spot="${s.id}">
            <b>${a[0]}</b>
            <small>${a[1]}</small>
          </button>
          <button type="button" class="spot-info-btn" data-detail-spot="${s.id}" aria-label="Info">i</button>
        </div>
      </article>
    `;
  }).join('');

  $('#emptySearch').classList.toggle('hidden', matches.length > 0);
  const loadBtn = $('#loadMoreBtn');
  loadBtn.classList.toggle('hidden', shown.length >= matches.length);
  loadBtn.textContent = `${t('loadMore')} (${shown.length}/${matches.length})`;

  $$('[data-filter]').forEach(btn => {
    let n = btn.querySelector('.chip-n');
    if (!n) { n = document.createElement('span'); n.className = 'chip-n'; btn.append(n); }
    n.textContent = spots.filter(s => spotMatches(s, btn.dataset.filter)).length;
    btn.classList.toggle('selected', btn.dataset.filter === activeFilter);
  });
}

function updateSaveCount() {
  $('#saveCount').textContent = savedSpots.length + claimedCoupons.length;
}

function renderAll() {
  document.documentElement.lang = lang;
  hydrate();
  ['ko', 'en', 'ja'].forEach(c => {
    const b = $(`#lang-${c}`);
    b.classList.toggle('selected', lang === c);
    b.setAttribute('aria-pressed', String(lang === c));
  });
  renderPoseStrip();
  updateDirectorView();
  renderNearbyCard();
  renderSpots();
  updateSaveCount();
}

// === Modals ===
const modal = $('#modal');
function openModal(html) {
  $('#modalContent').innerHTML = html;
  if (!modal.open) modal.showModal();
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
function closeModal() { modal.close(); }
modal.addEventListener('close', () => { document.body.style.overflow = ''; });
$('#closeModal').onclick = closeModal;
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

function showSpotDetail(id) {
  const s = spots.find(x => x.id === id);
  if (!s) return;
  const a = s[lang] || s.ko;
  const nearby = nearbyPools[s.pool] || nearbyPools.jongno;
  openModal(`
    <img class="modal-hero" src="assets/${s.image}" alt="${a[0]}">
    <div class="modal-body">
      <h2>${a[0]}</h2>
      <small style="color:var(--muted)">${a[1]} · ${a[3]} ${a[4]}</small>
      <div class="modal-tip">${a[5]}</div>
      <div class="saved-list">
        ${nearby.map((n, i) => {
          const cid = `${s.pool}_${i}`;
          const claimed = claimedCoupons.includes(cid);
          return `<div class="saved-item">
            <div><b>${n.name[lang] || n.name.ko}</b><small>🚶 ${n.walk} · ${n.deal[lang] || n.deal.ko}</small></div>
            <button type="button" class="coupon-btn ${claimed ? 'claimed' : ''}" style="flex:none" data-claim-coupon="${cid}">${claimed ? t('couponClaimed') : t('claimCoupon')}</button>
          </div>`;
        }).join('')}
      </div>
      <div class="modal-actions">
        <button type="button" class="btn primary" data-load-spot="${s.id}" data-close-after="1">${t('openInCamera')}</button>
        <a class="btn outline" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.map)}">${t('openMap')}</a>
        <a class="btn outline" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/explore/search/keyword/?q=${encodeURIComponent(s.instagram || s.ko[0])}">${t('instagramLink')} ↗</a>
      </div>
    </div>
  `);
}

function showSavedModal() {
  const couponsHtml = claimedCoupons.map(cid => {
    const [pool, idx] = cid.split('_');
    const item = nearbyPools[pool]?.[+idx];
    if (!item) return '';
    return `<div class="saved-item">
      <div><b>🎁 ${item.name[lang] || item.name.ko}</b><small>${item.deal[lang] || item.deal.ko}</small></div>
      <button type="button" class="switch-mini" data-remove-coupon="${cid}">${icon('trash')}</button>
    </div>`;
  }).join('');

  const spotsHtml = savedSpots.map(id => {
    const s = spots.find(x => x.id === id);
    if (!s) return '';
    const a = s[lang] || s.ko;
    return `<div class="saved-item">
      <div><b>📍 ${a[0]}</b><small>${a[1]}</small></div>
      <div style="display:flex;gap:5px">
        <button type="button" class="switch-mini" data-load-spot="${s.id}" data-close-after="1">${t('openInCamera')}</button>
        <button type="button" class="switch-mini" data-save-spot="${s.id}">${icon('trash')}</button>
      </div>
    </div>`;
  }).join('');

  openModal(`
    <div class="modal-body">
      <h2>${t('savedTitle')}</h2>
      ${!claimedCoupons.length && !savedSpots.length ? `<p class="empty-msg">${t('savedEmpty')}</p>` : ''}
      ${claimedCoupons.length ? `<div class="saved-list">${couponsHtml}</div>` : ''}
      ${savedSpots.length ? `<div class="saved-list" style="margin-top:12px">${spotsHtml}</div>` : ''}
    </div>
  `);
}

function showStrategyModal() {
  openModal(`
    <div class="modal-body">
      <h2>PILK v005 피벗 전략 요약</h2>
      <table class="strategy-table">
        <tr><th>한복 한계 돌파</th><td>방한 외국인 90%+의 일상·핫플 촬영으로 확장 (44개 스팟 + 주변 카페/팝업 제휴)</td></tr>
        <tr><th>배포 전략</th><td>설치 없는 모바일 웹(QR) → IG 스토리 카드 바이럴 → SNS/카메라 플러그인 확장</td></tr>
        <tr><th>수익 모델</th><td>로컬 제휴 성과 수수료(8~12% / CPA ₩1,500) + 단기 여행 패스($2.99~4.99)</td></tr>
        <tr><th>차별화 핵심</th><td>180° 폰 뒤집기·발끝 정렬·앞발 빼기 실시간 코칭 + 배경 자동 인식 주변 추천</td></tr>
      </table>
      <p style="font-size:11.5px;color:var(--muted);margin:0">전체 수치·답변: <code>v005/MENTOR_FEEDBACK_AND_STRATEGY.md</code></p>
    </div>
  `);
}

function showCreditsModal() {
  openModal(`
    <div class="modal-body">
      <h2>${t('creditsTitle')}</h2>
      <p style="font-size:12px;color:var(--muted)">${t('creditsDesc')}</p>
      <ul style="font-size:11.5px;line-height:1.9;padding-left:16px;max-height:300px;overflow:auto">
        ${spots.map(s => `<li><a href="${s.source}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">${(s[lang] || s.ko)[0]} · ${s.credit || 'Source'}</a></li>`).join('')}
      </ul>
    </div>
  `);
}

// === Events ===
['ko', 'en', 'ja'].forEach(c => {
  $(`#lang-${c}`).onclick = () => { lang = c; persist('pilk-v5-lang', c); renderAll(); };
});

$('#toggleCamBtn').onclick = toggleCamera;
$('#shutterBtn').onclick = () => captureViewfinder(false);
$('#exportStoryBtn').onclick = () => captureViewfinder(true);
$('#speakCueBtn').onclick = speakCoaching;
$('#runScanBtn').onclick = () => runBackgroundScan(true);
$('#mobileScanBtn').onclick = () => { $('#director').scrollIntoView({ behavior: 'smooth' }); runBackgroundScan(true); };
$('#vfSpotPill').onclick = () => $('#discover').scrollIntoView({ behavior: 'smooth' });
$('#helperModeBtn').onclick = () => { director.helperOpen = !director.helperOpen; updateDirectorView(); };
$('#closeHelperBtn').onclick = () => { director.helperOpen = false; updateDirectorView(); };
$('#toggleSettingsBtn').onclick = () => $('#settingsDrawer').classList.toggle('hidden');

$$('.seg-btn').forEach(b => {
  b.onclick = () => {
    director.mode = b.dataset.mode;
    updateDirectorView();
    if (director.mode === 'C') speakCoaching();
  };
});
$$('.lens-btn').forEach(b => {
  b.onclick = () => { director.lens = b.dataset.lens; updateDirectorView(); };
});
$('#btnFlip180').onclick = () => { director.flip180 = !director.flip180; updateDirectorView(); };
$('#btnFrontFoot').onclick = () => { director.frontFoot = !director.frontFoot; updateDirectorView(); };
$$('.dist-pill').forEach(b => {
  b.onclick = () => { director.distance = +b.dataset.dist; updateDirectorView(); };
});
$('#opacitySlider').oninput = e => { director.opacity = +e.target.value; updateDirectorView(); };
$('#gridToggle').onchange = e => { director.showGrid = e.target.checked; updateDirectorView(); };

$('#uploadSceneInput').onchange = e => {
  const file = e.target.files?.[0];
  if (!file) return;
  if (director.customPhotoUrl) URL.revokeObjectURL(director.customPhotoUrl);
  director.customPhotoUrl = URL.createObjectURL(file);
  stopCamera();
  const img = $('#stageBgImg');
  img.onload = () => runBackgroundScan(true);
  img.src = director.customPhotoUrl;
  e.target.value = '';
};

$('#searchInput').oninput = e => { searchQuery = e.target.value; spotLimit = 8; renderSpots(); };
$('#loadMoreBtn').onclick = () => { spotLimit += 8; renderSpots(); };
$('#openSaved').onclick = showSavedModal;
$('#mobileSavedBtn').onclick = showSavedModal;
$('#openStrategyModalBtn').onclick = showStrategyModal;
$('#openCreditsBtn').onclick = showCreditsModal;

document.addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;

  if (b.dataset.poseIdx !== undefined) {
    director.recipeIdx = +b.dataset.poseIdx;
    const r = getActiveRecipe();
    director.flip180 = r.recommendedFlip;
    director.lens = r.recommendedLens;
    director.frontFoot = r.recommendedFrontFoot;
    director.distance = 0;
    updateDirectorView();
    if (director.mode === 'C') speakCoaching();
    return;
  }

  if (b.dataset.filter) {
    activeFilter = b.dataset.filter;
    spotLimit = 8;
    renderSpots();
    return;
  }

  if (b.dataset.loadSpot) {
    director.customPhotoUrl = null;
    director.spotId = b.dataset.loadSpot;
    if (b.dataset.closeAfter && modal.open) closeModal();
    $('#director').scrollIntoView({ behavior: 'smooth' });
    runBackgroundScan(true);
    toast(t('toastSpotLoaded'));
    return;
  }

  if (b.dataset.detailSpot) {
    showSpotDetail(b.dataset.detailSpot);
    return;
  }

  if (b.dataset.saveSpot) {
    const id = b.dataset.saveSpot;
    if (savedSpots.includes(id)) {
      savedSpots = savedSpots.filter(x => x !== id);
      toast(t('toastRemoved'));
    } else {
      savedSpots.push(id);
      toast(t('toastAdded'));
    }
    persist('pilk-v5-saved', savedSpots);
    renderSpots();
    updateSaveCount();
    if (modal.open) showSavedModal();
    return;
  }

  if (b.dataset.claimCoupon) {
    const cid = b.dataset.claimCoupon;
    if (!claimedCoupons.includes(cid)) {
      claimedCoupons.push(cid);
      persist('pilk-v5-coupons', claimedCoupons);
      toast(t('toastCoupon'));
      renderNearbyCard();
      updateSaveCount();
      if (modal.open) { b.classList.add('claimed'); b.textContent = t('couponClaimed'); }
    }
    return;
  }

  if (b.dataset.removeCoupon) {
    claimedCoupons = claimedCoupons.filter(x => x !== b.dataset.removeCoupon);
    persist('pilk-v5-coupons', claimedCoupons);
    renderNearbyCard();
    updateSaveCount();
    showSavedModal();
  }
});

// Boot
renderAll();
const initImg = $('#stageBgImg');
if (initImg.complete) {
  director.lastLight = analyzeCanvasPixels();
  renderNearbyCard();
} else {
  initImg.addEventListener('load', () => {
    director.lastLight = analyzeCanvasPixels();
    renderNearbyCard();
  }, { once: true });
}
