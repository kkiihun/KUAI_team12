// PILK v005 — Minimal 4-Tab Native App Engine

const icons = {
  bookmark: 'M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 3.9 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 3.3 0 5.6 3.1 4.4 6.6-1.7 4.8-9.2 9.4-9.2 9.4z',
  pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
  scan: 'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 8h8v8H8z',
  search: 'M20 20l-5-5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
  camera: 'M4 7h4l2-3h4l2 3h4v13H4zM16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  upload: 'M12 16V4m0 0-4 4m4-4 4 4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  spark: 'm12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z',
  volume: 'M11 5 6 9H2v6h4l5 4V5zm4.5 3.5a5 5 0 0 1 0 7m2.8-9.8a9 9 0 0 1 0 12.6',
  flipcam: 'M4 12a8 8 0 0 1 13.7-5.6L20 8.7M20 4v4.7h-4.7M20 12a8 8 0 0 1-13.7 5.6L4 15.3M4 20v-4.7h4.7',
  helper: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.3a3.5 3.5 0 0 1 0 6.4M18.5 14.2A6.5 6.5 0 0 1 21.5 20',
  trash: 'M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7',
  eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
  eyeoff: 'M3 3l18 18M10.6 5.1A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.1 3.9M6.6 6.6C3.9 8.3 2 12 2 12s3.6 7 10 7c1.9 0 3.5-.6 4.9-1.4M9.9 9.9a3 3 0 0 0 4.2 4.2',
  tools: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7l1-8z'
};

const brandLogo = new Image();
brandLogo.src = 'assets/brand/pilk-logo.png';
const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[name] || icons.spark}"/></svg>`;
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

// === State ===
let lang = 'ko';
let activeTab = 'camera'; // 'camera' | 'nearby' | 'spots' | 'saved'
let savedSpots = [];
let claimedCoupons = [];
let activeFilter = 'all';
let spotLimit = 8;
let searchQuery = '';

const director = {
  spotId: 'gyeongbok',
  customPhotoUrl: null,
  recipeIdx: 1,
  posePreview: true,
  mode: 'A',
  flip180: false,
  frontFoot: true,
  lens: '1×',
  distance: 0, // -1 | 0 | 1
  opacity: 72,
  showGrid: true,
  showGuide: true,
  autoCamera: true,
  skipIntro: false,
  helperOpen: false,
  tiltDeg: 0,
  facingMode: 'environment', // 'environment' (rear) | 'user' (front selfie)
  stream: null,
  cameraToken: 0,
  lastMapUrl: ''
};

try {
  const storedLang = localStorage.getItem('pilk-v5-lang');
  if (storedLang && copy[storedLang]) lang = storedLang;
  else {
    const pref = (navigator.languages || [navigator.language || '']).map(l => String(l).slice(0, 2).toLowerCase());
    lang = pref.find(l => copy[l]) || 'en';
  }
  savedSpots = JSON.parse(localStorage.getItem('pilk-v5-saved') || '[]').filter(id => spots.some(s => s.id === id));
  claimedCoupons = JSON.parse(localStorage.getItem('pilk-v5-coupons') || '[]');
  director.showGuide = localStorage.getItem('pilk-v5-guide') !== '0';
  director.autoCamera = localStorage.getItem('pilk-v5-auto-cam') !== '0';
  director.skipIntro = localStorage.getItem('pilk-v5-skip-intro') === '1';
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
  toastTimer = setTimeout(() => el.classList.remove('show'), 2300);
}

function hydrate(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  root.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
  root.querySelectorAll('[data-placeholder]').forEach(el => { el.placeholder = t(el.dataset.placeholder); });
}

// === Page Tab Router ===
const validTabs = ['camera', 'nearby', 'spots', 'saved'];
function switchTab(tab, pushHash = true) {
  const previousTab = activeTab;
  if (tab !== "camera") { setToolsMenuOpen(false); cancelCountdown(); stopCamera(); }
  if (tab === 'spots') tab = 'nearby';
  if (!validTabs.includes(tab)) tab = 'camera';
  activeTab = tab;
  document.body.dataset.activeTab = tab;
  syncChromeAppearance();

  $$('.tab-page').forEach(p => p.classList.toggle('active', p.dataset.page === tab));
  $$('.btab, .dtab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  const shutter = $('#shutterBtn');
  if (shutter) shutter.setAttribute('aria-label', tab === 'camera' ? 'Capture' : t('tabCam'));
  $('.pages-shell').classList.toggle('wide-mode', tab === 'nearby');

  if (tab === 'nearby') {
    $('#nearbyDot').classList.add('hidden');
    renderNearbyPage();
  } else if (tab === 'saved') {
    renderSavedPage();
  }

  if (tab === 'camera' && (!pushHash || previousTab !== tab)) beginPosePreview();
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (pushHash && location.hash !== `#${tab}`) {
    history.replaceState(null, '', `#${tab}`);
  }
}

// === AR Silhouette SVG ===
// === Camera & Coaching ===
function getActiveSpot() {
  return spots.find(s => s.id === director.spotId) || spots[0];
}
const poseImage = r => r.image || 'assets/poses/' + r.svgType + '.webp?v=14';
function getActiveRecipe() {
  return kRecipes[director.recipeIdx] || kRecipes[0];
}

function computeCoaching() {
  // Live camera + reference skeleton: the real pose-match score replaces the settings-based estimate.
  const live = director.stream && poseTracking.match();
  if (live) return live;
  const r = getActiveRecipe();
  const rt = r[lang] || r.ko;
  let score = 100;
  let cue = '';

  if (r.recommendedFlip && !director.flip180) {
    score -= 22;
    cue = rt.shortCue;
  } else if (r.recommendedLens === '0.5×' && director.lens !== '0.5×') {
    score -= 18;
    cue = lang === 'ko' ? '📐 0.5× 광각으로 전환하세요' : lang === 'ja' ? '📐 0.5倍の超広角に切り替えてね' : '📐 Switch to 0.5× ultra-wide';
  } else if (director.distance === -1) {
    score -= 20;
    cue = lang === 'ko' ? '👣 한 보 뒤로 가세요' : lang === 'ja' ? '👣 撮る人は一歩うしろへ' : '👣 Step back 1 pace';
  } else if (director.distance === 1) {
    score -= 16;
    cue = lang === 'ko' ? '👣 반 보 앞으로 · 발끝 정렬' : lang === 'ja' ? '👣 半歩前へ・足元をラインに合わせて' : '👣 Half step closer to foot line';
  } else if (r.recommendedFrontFoot && !director.frontFoot) {
    score -= 12;
    cue = lang === 'ko' ? '🦶 앞발을 반 걸음 앞으로 빼세요' : lang === 'ja' ? '🦶 前足を半歩出すと脚長に見えます' : '🦶 Extend front foot half a step';
  } else if (Math.abs(director.tiltDeg) > 6) {
    score -= 10;
    cue = lang === 'ko' ? `⚖️ 수평 맞추기 (${director.tiltDeg}°)` : lang === 'ja' ? `⚖️ スマホをまっすぐに (${director.tiltDeg}°)` : `⚖️ Level phone (${director.tiltDeg}°)`;
  } else {
    if (!r.recommendedFlip && director.flip180) score -= 6;
    cue = lang === 'ko' ? `✨ 완벽해요! 지금 촬영하세요 · ${rt.chip}` : lang === 'ja' ? `✨ バッチリ！今がシャッターチャンス · ${rt.chip}` : `✨ Perfect angle! Snap now · ${rt.chip}`;
  }
  return { score: Math.max(48, score), cue };
}

function updateCameraUI() {
  const spot = getActiveSpot();
  const r = getActiveRecipe();
  const rt = r[lang] || r.ko;
  const coaching = computeCoaching();

  $('#guidePhoto').src = poseImage(r);
  $('#guideTitle').textContent = rt.chip;
  $('#guideSteps').replaceChildren(...rt.steps.map(step => Object.assign(document.createElement('li'), {textContent: step})));
  const bgImg = $('#stageBgImg');
  const fullBody = r.svgType === 'flip';
  const poseExample = director.posePreview && !director.customPhotoUrl && !director.stream;
  const source = poseExample ? poseImage(r) : director.customPhotoUrl || `assets/${spot.image}`;
  $('#viewfinderStage').classList.toggle('pose-example', poseExample);
  $('#viewfinderStage').style.setProperty('--pose-photo', poseExample ? 'url("'+source+'")' : 'none');
  if (bgImg.getAttribute('src') !== source) bgImg.src = source;
  const lensScale = director.lens === '0.5×' ? 1.0 : director.lens === '2×' ? 1.24 : 1.08;
  bgImg.style.transform = poseExample ? 'none' : `scale(${lensScale})`;

  const overlay = $('#vfOverlay');
  const overlayKey = (director.stream || poseExample || fullBody || r.people === 2 || r.svgType === 'high05') ? '' : r.svgType;
  if (overlay.dataset.key !== overlayKey) { overlay.dataset.key = overlayKey; overlay.innerHTML = overlayKey ? recipeSvg(overlayKey) : ''; }
  const distScale = director.distance === -1 ? 1.18 : director.distance === 1 ? 0.82 : 1.0;
  const distY = director.distance === -1 ? '6%' : director.distance === 1 ? '-6%' : '0%';
  overlay.style.transform = `scale(${distScale}) translateY(${distY})`;
  overlay.hidden = !director.showGuide;
  const guideBtn = $('#guideToggleBtn');
  $('#guideToggleIcon').innerHTML = icon(director.showGuide ? 'eye' : 'eyeoff');
  guideBtn.setAttribute('aria-pressed', String(director.showGuide));
  guideBtn.setAttribute('aria-label', t(director.showGuide ? 'guideOn' : 'guideOff'));
  guideBtn.classList.toggle('is-off', !director.showGuide);
  const guideState = $('#guideToggleState');
  if (guideState) {
    guideState.textContent = director.showGuide ? 'ON' : 'OFF';
    guideState.classList.toggle('is-on', director.showGuide);
  }
  const isFront = director.facingMode === 'user';
  $('#switchFacingBtn').classList.toggle('is-front', isFront);
  const facingState = $('#switchFacingState');
  if (facingState) {
    facingState.textContent = t(isFront ? 'camFront' : 'camRear');
    facingState.classList.toggle('is-on', isFront);
  }
  const isLiveCam = Boolean(director.stream);
  $('#toggleCamBtn').classList.toggle('active', isLiveCam);
  $('#toggleCamLabel').textContent = t(isLiveCam ? 'dockCamOff' : 'dockCamOn');
  const camState = $('#toggleCamState');
  if (camState) {
    camState.textContent = isLiveCam ? 'ON' : 'OFF';
    camState.classList.toggle('is-on', isLiveCam);
  }
  const autoCamBtn = $('#autoCamToggleBtn');
  if (autoCamBtn) {
    autoCamBtn.setAttribute('aria-pressed', String(director.autoCamera));
    autoCamBtn.classList.toggle('is-off', !director.autoCamera);
  }
  const autoCamState = $('#autoCamState');
  if (autoCamState) {
    autoCamState.textContent = director.autoCamera ? 'ON' : 'OFF';
    autoCamState.classList.toggle('is-on', director.autoCamera);
  }
  $('#skeletonToggle').checked = director.showGuide;
  $('#skipIntroToggle').checked = director.skipIntro;
  overlay.style.opacity = director.mode === 'B' ? Math.max(0.22, director.opacity / 220) : director.opacity / 100;

  $('#vfGrid').classList.toggle('hidden', poseExample || !director.showGrid);
  $('#vfFootLine').classList.toggle('hidden', poseExample || !director.showGrid || ['cheek','shadow','high05','pair_heart','pair_back'].includes(r.svgType));

  const matchPill = $('#vfMatchPill');
  matchPill.hidden = poseExample;
  if (!poseExample) {
    $('#vfMatchScore').textContent = poseTracking.status() || `${coaching.score}%`;
    matchPill.classList.toggle('warn', coaching.score < 85);
  }
  const vibe = $('#vfVibe');
  vibe.hidden = poseExample;
  vibe.style.setProperty('--vibe', coaching.score + '%');
  $('#vfVibeValue').textContent = coaching.score + '%';
  const liveMatch = director.stream && poseTracking.match();
  $('#vfDirText').textContent = liveMatch ? liveMatch.cue : poseExample || fullBody || r.people === 2 || ['shadow','high05'].includes(r.svgType) ? rt.shortCue : coaching.cue;

  const stepStrip = $('#vfModeBStrip');
  stepStrip.classList.toggle('hidden', director.mode !== 'B');
  stepStrip.innerHTML = rt.steps.map((s, i) => `<span class="vf-step-pill"><b>${i + 1}</b>${s}</span>`).join('');

  $('#vfHelperCard').classList.toggle('hidden', !director.helperOpen);
  $('#vfHelperSteps').textContent = rt.helperText;

  $$('.mseg').forEach(b => b.classList.toggle('selected', b.dataset.mode === director.mode));
  $$('.dpose').forEach(b => b.classList.toggle('selected', +b.dataset.poseIdx === director.recipeIdx));
  $('#btnFlip180').classList.toggle('active', director.flip180);
  $('#btnFrontFoot').classList.toggle('active', director.frontFoot);
  $('#btnLensCycle').textContent = director.lens;
  $('#btnLensCycle').classList.toggle('active', director.lens === '0.5×');
  $('#btnDistCycle').textContent = director.distance === -1 ? t('distClose') : director.distance === 1 ? t('distFar') : t('distBest');
  $('#btnDistCycle').classList.toggle('active', director.distance !== 0);

  $('#opacitySlider').value = director.opacity;
  $('#opacityVal').textContent = `${director.opacity}%`;
  $('#gridToggle').checked = director.showGrid;
}

function renderPoseStrip() {
  const people = getActiveRecipe().people === 2 ? 2 : 1;
  const toggle = `<span class="people-seg" role="group">${[[1, 'soloMode'], [2, 'pairMode']].map(([n, key]) => `<button type="button" class="people-btn ${people === n ? 'selected' : ''}" data-people-mode="${n}">${t(key)}</button>`).join('')}</span>`;
  $('#poseStrip').innerHTML = toggle + kRecipes.map((r, i) => {
    if ((r.people === 2 ? 2 : 1) !== people) return '';
    const rt = r[lang] || r.ko;
    const badge = recipeBadges[r.svgType];
    return `<button type="button" class="dpose ${i === director.recipeIdx ? 'selected' : ''}" data-pose-idx="${i}"><img src="${poseImage(r)}" alt="">${rt.chip}${badge ? `<em class="dpose-badge">${badge[lang] || badge.ko}</em>` : ''}</button>`;
  }).join('');
}

// === Mobile-Safe Voice Coaching (Web Audio Unlock + iOS/Android SpeechSynthesis Fix) ===
let cachedVoices = [];
let audioCtx = null;

function refreshVoices() {
  if ('speechSynthesis' in window) {
    cachedVoices = window.speechSynthesis.getVoices() || [];
  }
}
refreshVoices();
if ('speechSynthesis' in window && 'onvoiceschanged' in window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = refreshVoices;
}

function playAudioChime() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    if (!audioCtx) audioCtx = new Ctx();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(660, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.09);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.14);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch {}
}

function setSpeakingVisual(on) {
  const btn = $('#speakCueBtn');
  const cue = $('.vf-cue');
  if (btn) btn.classList.toggle('is-speaking', on);
  if (cue) cue.classList.toggle('is-speaking', on);
}

function speakCoaching() {
  playAudioChime();
  const coaching = computeCoaching();
  const rt = getActiveRecipe()[lang] || getActiveRecipe().ko;
  const text = `${coaching.cue}. ${rt.shortCue}`.replace(/[🔄👣🦶📐✨⚖️📱]/g, '').trim();

  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    toast(t('toastAudioMuted'));
    return;
  }

  try {
    const synth = window.speechSynthesis;
    if (synth.speaking || synth.pending) synth.cancel();
    if (synth.paused) synth.resume();

    const targetLang = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : 'en-US';
    const prefix = targetLang.slice(0, 2);
    refreshVoices();
    const matchedVoice = cachedVoices.find(v => v.lang && v.lang.toLowerCase().startsWith(prefix) && v.localService)
      || cachedVoices.find(v => v.lang && v.lang.toLowerCase().startsWith(prefix));

    const u = new SpeechSynthesisUtterance(text);
    u.lang = targetLang;
    if (matchedVoice) u.voice = matchedVoice;
    u.volume = 1.0;
    u.rate = 0.98;
    u.pitch = 1.0;

    // Keep global reference to prevent Chrome/Safari GC bug cutting off speech
    window._pilkUtterance = u;
    let started = false;

    u.onstart = () => { started = true; setSpeakingVisual(true); };
    u.onend = () => { setSpeakingVisual(false); };
    u.onerror = () => { setSpeakingVisual(false); toast(t('toastAudioMuted')); };

    toast(t('toastVoice'));
    setSpeakingVisual(true);
    synth.speak(u);

    // Fallback check: if mobile silent mode or in-app browser blocked TTS
    setTimeout(() => {
      if (!started && !synth.speaking) {
        setSpeakingVisual(false);
        toast(t('toastAudioMuted'));
      }
    }, 1300);
  } catch {
    setSpeakingVisual(false);
    toast(t('toastAudioMuted'));
  }
}

// === Page 2: Nearby & Coupons + Interactive Map ===
function updateNearbyMap(mapQuery, labelText) {
  const frame = $('#nearbyMapFrame');
  $('#spotPins').hidden = true;
  frame.hidden = false;
  const hl = lang === 'ko' ? 'ko' : lang === 'ja' ? 'ja' : 'en';
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&hl=${hl}&z=15&output=embed`;
  if (frame && director.lastMapUrl !== embedUrl) {
    director.lastMapUrl = embedUrl;
    frame.src = embedUrl;
  }
  $('#nearbyMapLabel').textContent = `📍 ${labelText}`;
  $('#nearbyMapLink').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
}

function renderNearbyPage() {
  const spot = getActiveSpot();
  const sText = spot[lang] || spot.ko;
  const nearby = nearbyPools[spot.pool] || nearbyPools.jongno;

  $('#nearbyThumb').src = `assets/${spot.image}`;
  $('#scanSpotTitle').textContent = sText[0];
  $('#scanLightTag').textContent = sceneWords[lang].spot+' · '+sText[1];
  renderDiscovery(spot, sText);

  $('#nearbyList').innerHTML = nearby.map((item, idx) => {
    const cid = `${spot.pool}_${idx}`;
    const claimed = claimedCoupons.includes(cid);
    const targetSpot = spots.find(x => x.id === item.spotId);
    const mapQuery = targetSpot ? targetSpot.map : `${item.name.ko} ${sText[1]}`;
    const itemName = item.name[lang] || item.name.ko;
    return `
      <article class="nearby-item-card">
        <div class="nearby-meta">
          <span class="nearby-cat">${item.cat[lang] || item.cat.ko}</span>
          <span class="nearby-walk">🚶 ${item.walk}</span>
        </div>
        <b>${itemName}</b>
        <div class="nearby-deal"><span class="sample-tag">${t('couponTag')}</span>🎁 ${item.deal[lang] || item.deal.ko}</div>
        <div class="nearby-btns">
          <button type="button" class="btn sm ${claimed ? 'claimed' : 'dark'}" style="flex:1" data-claim-coupon="${cid}">
            ${claimed ? t('couponClaimed') : t('claimCoupon')}
          </button>
          <button type="button" class="btn sm outline" data-focus-map="${encodeURIComponent(mapQuery)}" data-focus-label="${encodeURIComponent(itemName)}">
            ${t('openMap')}
          </button>
          ${item.spotId && item.spotId !== spot.id ? `
            <button type="button" class="btn sm outline" data-load-spot="${item.spotId}">${t('useScene')}</button>
          ` : ''}
        </div>
      </article>
    `;
  }).join('');
}

// === Page 3: Spots (Instagram & TikTok Trending Filters) ===
const instaSpotIds = new Set([
  'seongsu', 'hyundai', 'yeonnam', 'hannam', 'euljiro', 'seochon', 'haebangchon',
  'songridan', 'seoulforest', 'bukchon', 'gyeongbok', 'eunpyeong', 'olympic', 'hyeopjae', 'anmok'
]);
const tiktokSpotIds = new Set([
  'seongsu', 'hyundai', 'mangwon', 'euljiro', 'haebangchon', 'seoulforest',
  'noksapyeong', 'nseoul', 'mongted', 'gwangalli', 'yeouido', 'jumunjin'
]);

function spotMatches(s, type) {
  if (type === 'all') return true;
  if (type === 'insta') return instaSpotIds.has(s.id);
  if (type === 'tiktok') return tiktokSpotIds.has(s.id);
  return s.type === type || (type === 'nature' && s.nature);
}

function renderSpotsPage() {
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
          <button type="button" class="spot-photo-btn" data-map-spot="${s.id}" aria-label="${a[0]}">
            <img src="assets/${s.image}" alt="${a[0]}" loading="lazy">
            <span class="spot-badge">${s.recipe.flip ? t('flipShort') : s.recipe.lens}</span>
          </button>
          <button type="button" class="spot-save ${isSaved ? 'is-saved' : ''}" data-save-spot="${s.id}" aria-label="Save">
            ${icon('bookmark')}
          </button>
        </div>
        <div class="spot-foot">
          <button type="button" class="spot-meta-btn" data-map-spot="${s.id}">
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

// === Page 4: Saved & Settings ===
function renderSavedPage() {
  const container = $('#savedContent');
  if (!claimedCoupons.length && !savedSpots.length) {
    container.innerHTML = `<p class="empty-msg">${t('savedEmpty')}</p>`;
    return;
  }

  let html = '';
  if (claimedCoupons.length) {
    html += `<div class="saved-group"><h3>${t('savedCouponsTitle')} (${claimedCoupons.length})</h3><div class="saved-list">
      ${claimedCoupons.map(cid => {
        const [pool, idx] = cid.split('_');
        const item = nearbyPools[pool]?.[+idx];
        if (!item) return '';
        return `<div class="saved-row">
          <div><b>🎁 ${item.name[lang] || item.name.ko}</b><small><span class="sample-tag">${t('couponTag')}</span>${item.deal[lang] || item.deal.ko}</small></div>
          <button type="button" class="btn sm outline" data-remove-coupon="${cid}">${icon('trash')}</button>
        </div>`;
      }).join('')}
    </div><p class="coupon-disclaimer" style="text-align:left">${t('couponDisclaimer')}</p></div>`;
  }

  if (savedSpots.length) {
    html += `<div class="saved-group"><h3>${t('savedSpotsTitle')} (${savedSpots.length})</h3><div class="saved-list">
      ${savedSpots.map(id => {
        const s = spots.find(x => x.id === id);
        if (!s) return '';
        const a = s[lang] || s.ko;
        return `<div class="saved-row">
          <div><b>📍 ${a[0]}</b><small>${a[1]}</small></div>
          <div style="display:flex;gap:6px">
            <button type="button" class="btn sm primary" data-load-spot="${s.id}">${t('openInCamera')}</button>
            <button type="button" class="btn sm outline" data-save-spot="${s.id}">${icon('trash')}</button>
          </div>
        </div>`;
      }).join('')}
    </div></div>`;
  }

  container.innerHTML = html;
}

function updateSaveBadge() {
  const total = savedSpots.length + claimedCoupons.length;
  const badge = $('#saveCount');
  badge.textContent = total;
  badge.classList.toggle('hidden', total === 0);
}

// === Live Camera (Front/Rear Facing Switch) & Capture ===
let previewInterval = null;
function cancelPosePreview() {
  clearInterval(previewInterval);
  previewInterval = null;
  $('#poseIntro').hidden = true;
}
function beginPosePreview() {
  cancelPosePreview();
  if (activeTab !== 'camera' || document.hidden || director.customPhotoUrl || !director.posePreview) return;
  if (!director.autoCamera) {
    if (director.stream) updateCameraUI();
    return;
  }
  if (director.skipIntro) {
    // Straight to the live camera (keep a running stream when only the pose changed).
    if (director.stream) { updateCameraUI(); return; }
    cancelCountdown();
    startCameraStream();
    return;
  }
  stopCamera();
  cancelCountdown();
  const box = $('#poseIntro');
  const number = $('#introNumber');
  number.textContent = '5';
  box.hidden = false;
  const end = Date.now() + 5000;
  previewInterval = setInterval(() => {
    const remaining = Math.ceil((end-Date.now())/1000);
    if (remaining > 0) { number.textContent = remaining; return; }
    cancelPosePreview();
    startCameraStream();
  },100);
}
function stopCamera() {
  poseTracking.stop();
  cancelPosePreview();
  director.cameraToken++;
  if (director.stream) {
    director.stream.getTracks().forEach(tr => tr.stop());
    director.stream = null;
  }
  const v = $('#stageVideo');
  if (v) { v.srcObject = null; v.style.display = 'none'; v.classList.remove('is-mirrored'); }
  $('#toggleCamBtn').classList.remove('active');
  $('#toggleCamLabel').textContent = t('dockCamOn');
  updateCameraUI();
}

async function startCameraStream() {
  cancelPosePreview();
  const token = ++director.cameraToken;
  try {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error('Unavailable');
    const media = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: director.facingMode }, width: { ideal: 1600 }, height: { ideal: 1200 } },
      audio: false
    });
    if (token !== director.cameraToken) { media.getTracks().forEach(tr => tr.stop()); return; }
    director.stream = media;
    const v = $('#stageVideo');
    v.srcObject = media;
    await v.play();
    if (token !== director.cameraToken) return;
    v.style.display = 'block';
    v.classList.toggle('is-mirrored', director.facingMode === 'user');
    $('#toggleCamBtn').classList.add('active');
    $('#toggleCamLabel').textContent = t('dockCamOff');
    updateCameraUI();
    poseTracking.start();
    enableGyro();
  } catch {
    if (token === director.cameraToken) {stopCamera(); toast(t('cameraRetry'));}
  }
}

async function toggleCamera() {
  if (director.stream) { stopCamera(); return; }
  await startCameraStream();
}

async function switchCameraFacing() {
  director.facingMode = director.facingMode === 'environment' ? 'user' : 'environment';
  updateCameraUI();
  toast(director.facingMode === 'user' ? t('toastFrontCam') : t('toastRearCam'));
  if (director.stream) {
    // Stop active tracks first so iOS Safari cleanly switches lenses without NotReadableError
    stopCamera();
    await startCameraStream();
  }
}

let gyroBound = false;
function enableGyro() {
  const bind = () => {
    if (gyroBound) return;
    gyroBound = true;
    window.addEventListener('deviceorientation', e => {
      if (typeof e.gamma === 'number') {
        const tilt = Math.max(-35, Math.min(35, Math.round(e.gamma)));
        if (tilt === director.tiltDeg) return;
        director.tiltDeg = tilt;
        updateCameraUI();
      }
    });
  };
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(res => { if (res === 'granted') bind(); }).catch(() => {});
  } else {
    bind();
  }
}

function captureViewfinder(asStory = false) {
  const v = $('#stageVideo');
  const img = $('#stageBgImg');
  const isLive = Boolean(director.stream && v.videoWidth);
  const src = isLive ? v : img;
  const sw = isLive ? v.videoWidth : img.naturalWidth;
  const sh = isLive ? v.videoHeight : img.naturalHeight;
  if (!sw || !sh) return toast(t('toastCameraFail'));
  const stage = $('#viewfinderStage');
  stage.classList.remove('flash'); void stage.offsetWidth; stage.classList.add('flash');

  try {
    const mirror = isLive && director.facingMode === 'user';
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    if (!asStory) {
      c.width = sw; c.height = sh;
      if (mirror) { ctx.translate(sw, 0); ctx.scale(-1, 1); }
      ctx.drawImage(src, 0, 0, sw, sh);
      return openPhotoEditor(c);
    }

    const W = 1080, H = 1920;
    c.width = W; c.height = H;
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#ffe3ec'); bg.addColorStop(0.55, '#fff4ee'); bg.addColorStop(1, '#e9e4ff');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
    // soft polka dots
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    for (let y = 40; y < H; y += 120) for (let x = (y / 120) % 2 ? 60 : 0; x < W; x += 120) { ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2); ctx.fill(); }
    const pad = 90, topY = 250, pW = W - pad * 2, pH = 1260;
    // polaroid frame
    ctx.save();
    ctx.shadowColor = 'rgba(160, 80, 110, 0.22)'; ctx.shadowBlur = 50; ctx.shadowOffsetY = 18;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(pad - 30, topY - 30, pW + 60, pH + 250, 36); else ctx.rect(pad - 30, topY - 30, pW + 60, pH + 250);
    ctx.fill();
    ctx.restore();
    const sc = Math.max(pW / sw, pH / sh);
    ctx.save();
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(pad, topY, pW, pH, 22);
    else ctx.rect(pad, topY, pW, pH);
    ctx.clip();
    if (mirror) { ctx.translate(W, 0); ctx.scale(-1, 1); }
    ctx.drawImage(src, pad + (pW - sw * sc) / 2, topY + (pH - sh * sc) / 2, sw * sc, sh * sc);
    ctx.restore();

    const spot = getActiveSpot();
    const sText = spot[lang] || spot.ko;
    const { score } = computeCoaching();
    const sans = lang === 'ja' ? '"Zen Maru Gothic", "Noto Sans JP"' : '"Noto Sans KR"';
    // header
    let tagX = pad + 150;
    if (brandLogo.complete && brandLogo.naturalWidth) {
      const lh = 104, lw = lh * brandLogo.naturalWidth / brandLogo.naturalHeight;
      ctx.drawImage(brandLogo, pad - 20, 78, lw, lh);
      tagX = pad - 20 + lw + 24;
    } else {
      ctx.fillStyle = '#843346';
      ctx.font = '700 64px "Quicksand", sans-serif';
      ctx.fillText('Pilk', pad - 10, 160);
    }
    ctx.font = `700 30px ${sans}, sans-serif`;
    ctx.fillStyle = '#8d6b7b';
    ctx.fillText(t('tagline'), tagX, 148);
    // vibe sticker (tilted)
    ctx.save();
    ctx.translate(W - pad - 120, topY + 40);
    ctx.rotate(0.12);
    ctx.fillStyle = '#ff6f91';
    ctx.beginPath(); ctx.arc(0, 0, 118, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 8; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center';
    ctx.font = `700 28px ${sans}, sans-serif`;
    ctx.fillText(t('vibeLabel'), 0, -22);
    ctx.font = '700 66px "Quicksand", sans-serif';
    ctx.fillText(`${score}%`, 0, 48);
    ctx.restore();
    // caption on polaroid
    ctx.textAlign = 'left';
    ctx.fillStyle = '#3d2f3a';
    ctx.font = `700 54px ${sans}, sans-serif`;
    ctx.fillText(`${sText[0]}`, pad, topY + pH + 100);
    ctx.fillStyle = '#9a8a93';
    ctx.font = `500 30px ${sans}, sans-serif`;
    const rt = getActiveRecipe()[lang] || getActiveRecipe().ko;
    ctx.fillText(`📍 ${sText[1]}  ·  ${rt.chip}  ·  ${director.lens}`, pad, topY + pH + 158);
    ctx.fillStyle = '#e0507a';
    ctx.font = '700 32px "Quicksand", sans-serif';
    ctx.fillText(lang === 'ja' ? '#韓国っぽ  #韓国旅行  #PILK' : `#PILK  #PictureItLikeKorean  ${sText[3] || ''}`, pad - 10, H - 110);

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

// === Modals ===
const modal = $('#modal');
function openModal(html) {
  cancelPosePreview();
  $('#modalContent').innerHTML = html;
  if (!modal.open) modal.showModal();
  modal.scrollTop = 0;
}
function closeModal() { modal.close(); }
$('#closeModal').onclick = closeModal;
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

function showSpotDetail(id) {
  const s = spots.find(x => x.id === id);
  if (!s) return;
  const a = s[lang] || s.ko;
  openModal(`
    <img class="modal-hero" src="assets/${s.image}" alt="${a[0]}">
    <div class="modal-body">
      <h2>${a[0]}</h2>
      <small style="color:var(--muted)">${a[1]} · ${a[3]} ${a[4]}</small>
      <div class="modal-tip">${a[5]}</div>
      <div class="modal-actions">
        <button type="button" class="btn primary" data-load-spot="${s.id}" data-close-after="1">${t('openInCamera')}</button>
        <a class="btn outline" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.map)}">${t('openMap')}</a>
        <a class="btn outline" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/explore/search/keyword/?q=${encodeURIComponent(s.instagram || s.ko[0])}">${t('instagramLink')} ↗</a>
      </div>
    </div>
  `);
}

function showFlipGuideModal() {
  openModal(`
    <div class="modal-body">
      <h2>${t('flipGuideTitle')}</h2>
      <p style="margin:6px 0 0;font-size:13px;color:var(--muted)">${t('flipGuideDesc')}</p>
      <img src="assets/poses/high05.webp?v=14" alt="${t('flipGuideInverted')}" style="width:100%;border-radius:12px;margin-top:12px">
      <p>${t('flipGuideInvertedNote')}</p>
      <div class="modal-actions">
        <button type="button" class="btn primary" style="width:100%" onclick="document.getElementById('modal').close()">OK</button>
      </div>
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

function showHowTo() {
  const h = howtoCopy[lang] || howtoCopy.ko;
  openModal(`<section class="modal-body howto">
    <h2>${h.title}</h2><p class="howto-sub">${h.sub}</p>
    <ol>${h.steps.map(([emoji, title, body], i) => `<li><span class="howto-emoji" aria-hidden="true">${emoji}</span><div><b><i>${i + 1}</i>${title}</b><p>${body}</p></div></li>`).join('')}</ol>
    <p class="howto-privacy">${h.privacy}</p>
    <button type="button" class="btn primary howto-start" id="howtoStart">${h.start}</button>
  </section>`);
  $('#howtoStart').onclick = closeModal;
  // The guide pauses the 5 s pose example; resume it once the guide is closed.
  modal.addEventListener('close', () => {
    persist('pilk-v5-howto', '1');
    if (activeTab === 'camera' && !director.stream) beginPosePreview();
  }, { once: true });
}

const themeColors = { pink: '#fff5f3', blue: '#f2f7ff', dark: '#19151d' };
let currentTheme = 'pink';
function syncChromeAppearance() {
  const logo = $('.brand-logo');
  if (logo) logo.src = currentTheme === 'dark' ? 'assets/brand/pilk-logo-dark.png' : 'assets/brand/pilk-logo.png';
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = themeColors[currentTheme] || themeColors.pink;
}
function applyTheme(name) {
  const theme = themeColors[name] ? name : 'pink';
  currentTheme = theme;
  if (theme === 'pink') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', theme);
  syncChromeAppearance();
  $$('[data-theme-pick]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.themePick === theme)));
  return theme;
}

function renderAll() {
  document.documentElement.lang = lang;
  hydrate();
  const howtoLabel = (howtoCopy[lang] || howtoCopy.ko).btn;
  $('#howtoBtn').setAttribute('aria-label', howtoLabel);
  $('#howtoBtn').title = howtoLabel;
  $('#howtoRowLabel').textContent = howtoLabel;
  for (const [id, key] of [['vfToolsToggleBtn', 'toolsMenu'], ['speakCueBtn', 'dockVoice'], ['guideToggleBtn', 'btnGuide'], ['switchFacingBtn', 'btnSwitch'], ['helperModeBtn', 'btnHelper']]) {
    $('#' + id).title = t(key);
    if (id !== 'guideToggleBtn') $('#' + id).setAttribute('aria-label', t(key));
  }
  ['ko', 'en', 'ja'].forEach(c => {
    const b = $(`#lang-${c}`);
    b.classList.toggle('selected', lang === c);
    b.setAttribute('aria-pressed', String(lang === c));
  });
  renderStudio();
  renderPoseStrip();
  updateCameraUI();
  renderNearbyPage();
  renderSpotsPage();
  renderSavedPage();
  updateSaveBadge();
}

// === Event Bindings ===
['ko', 'en', 'ja'].forEach(c => {
  $(`#lang-${c}`).onclick = () => { lang = c; persist('pilk-v5-lang', c); renderAll(); };
});

function setToolsMenuOpen(open) {
  const menu = $('#vfToolsMenu');
  const backdrop = $('#vfToolsBackdrop');
  const btn = $('#vfToolsToggleBtn');
  if (!menu || !btn) return;
  menu.hidden = !open;
  if (backdrop) backdrop.hidden = !open;
  btn.setAttribute('aria-expanded', String(open));
  btn.classList.toggle('is-open', open);
}

$('#vfToolsToggleBtn').onclick = e => {
  e.stopPropagation();
  setToolsMenuOpen($('#vfToolsMenu').hidden);
};
if ($('#vfToolsCloseBtn')) $('#vfToolsCloseBtn').onclick = () => setToolsMenuOpen(false);
if ($('#vfToolsBackdrop')) $('#vfToolsBackdrop').onclick = () => setToolsMenuOpen(false);
document.addEventListener('click', e => {
  const menu = $('#vfToolsMenu');
  if (menu && !menu.hidden && !e.target.closest('#vfToolsMenu') && !e.target.closest('#vfToolsWrap')) setToolsMenuOpen(false);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') setToolsMenuOpen(false);
});

$('#toggleCamBtn').onclick = () => { setToolsMenuOpen(false); toggleCamera(); };
$('#autoCamToggleBtn').onclick = () => {
  director.autoCamera = !director.autoCamera;
  persist('pilk-v5-auto-cam', director.autoCamera ? '1' : '0');
  if (!director.autoCamera) cancelPosePreview();
  updateCameraUI();
  toast(t(director.autoCamera ? 'autoCamOn' : 'autoCamOff'));
};
$('#switchFacingBtn').onclick = () => { setToolsMenuOpen(false); switchCameraFacing(); };
let countdownInterval = null;
function cancelCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
  $('#countdown').hidden = true;
}
$('#timerDelay').onchange = cancelCountdown;
document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelCountdown(); stopCamera(); } });
$('#shutterBtn').onclick = () => {
  if (activeTab !== 'camera') { switchTab('camera'); return; }
  cancelPosePreview();
  if (countdownInterval !== null) return cancelCountdown();
  const delay = Number($('#timerDelay').value);
  if (!delay) return captureViewfinder(false);
  const end = Date.now() + delay*1000;
  const display = $('#countdown');
  display.textContent = delay;
  display.hidden = false;
  countdownInterval = setInterval(() => {
    const remaining = Math.ceil((end-Date.now())/1000);
    if (remaining > 0) { display.textContent = remaining; return; }
    cancelCountdown();
    captureViewfinder(false);
  },100);
};
$('#exportStoryBtn').onclick = () => captureViewfinder(true);
$('#speakCueBtn').onclick = speakCoaching;
$('#vfScanBtn').onclick = () => { setToolsMenuOpen(false); runBackgroundScan(true); };
$('#rescanBtn').onclick = () => runBackgroundScan(true);
$('#helperModeBtn').onclick = () => { setToolsMenuOpen(false); director.helperOpen = !director.helperOpen; updateCameraUI(); };
$('#closeHelperBtn').onclick = () => { director.helperOpen = false; updateCameraUI(); };

$$('.mseg').forEach(b => {
  b.onclick = () => {
    director.mode = b.dataset.mode;
    updateCameraUI();
    if (director.mode === 'C') speakCoaching();
  };
});

$('#btnFlip180').onclick = () => { director.flip180 = !director.flip180; updateCameraUI(); };
$('#flipHelpBtn').onclick = showFlipGuideModal;
$('#btnFrontFoot').onclick = () => { director.frontFoot = !director.frontFoot; updateCameraUI(); };

const lensList = ['0.5×', '1×', '2×'];
$('#btnLensCycle').onclick = () => {
  const next = lensList[(lensList.indexOf(director.lens) + 1) % lensList.length];
  director.lens = next;
  updateCameraUI();
};

const distList = [-1, 0, 1];
$('#btnDistCycle').onclick = () => {
  const next = distList[(distList.indexOf(director.distance) + 1) % distList.length];
  director.distance = next;
  updateCameraUI();
};

$('#opacitySlider').oninput = e => { director.opacity = +e.target.value; updateCameraUI(); };
$('#gridToggle').onchange = e => { director.showGrid = e.target.checked; updateCameraUI(); };
function setGuide(on) {
  director.showGuide = on;
  persist('pilk-v5-guide', on ? '1' : '0');
  poseTracking.setVisible(on);
  updateCameraUI();
}
$('#guideToggleBtn').onclick = () => { setGuide(!director.showGuide); toast(t(director.showGuide ? 'guideOn' : 'guideOff')); };
$('#skeletonToggle').onchange = e => setGuide(e.target.checked);
$('#skipIntroToggle').onchange = e => { director.skipIntro = e.target.checked; persist('pilk-v5-skip-intro', e.target.checked ? '1' : '0'); };
$('#skipIntroBtn').onclick = () => { cancelPosePreview(); startCameraStream(); };
poseTracking.setVisible(director.showGuide);

$('#uploadSceneInput').onchange = e => {
  const file = e.target.files?.[0];
  if (!file) return;
  if (activeTab !== 'camera') switchTab('camera');
  if (director.customPhotoUrl) URL.revokeObjectURL(director.customPhotoUrl);
  director.customPhotoUrl = URL.createObjectURL(file);
  stopCamera();
  const img = $('#stageBgImg');
  img.onload = () => { img.onload = null; runBackgroundScan(); };
  img.src = director.customPhotoUrl;
  e.target.value = '';
};

$('#searchInput').oninput = e => { searchQuery = e.target.value; spotLimit = 8; renderSpotsPage(); };
$('#loadMoreBtn').onclick = () => { spotLimit += 8; renderSpotsPage(); };
$('#openCreditsBtn').onclick = showCreditsModal;
$('#howtoBtn').onclick = showHowTo;
$('#openHowtoBtn').onclick = showHowTo;
document.addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;


  if (b.dataset.themePick) {
    persist('pilk-v5-theme', applyTheme(b.dataset.themePick));
    return;
  }

  if (b.dataset.tab) {
    switchTab(b.dataset.tab);
    return;
  }

  if (b.dataset.mapSpot) {
    selectMapSpot(b.dataset.mapSpot);
    return;
  }

  if (b.dataset.focusMap) {
    updateNearbyMap(decodeURIComponent(b.dataset.focusMap), decodeURIComponent(b.dataset.focusLabel || ''));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  if (b.dataset.peopleMode) {
    const want = +b.dataset.peopleMode;
    if ((getActiveRecipe().people === 2 ? 2 : 1) === want) return;
    const idx = kRecipes.findIndex(r => (r.people === 2 ? 2 : 1) === want && (want === 2 || r.svgType === 'flip'));
    // Reuse the pose-selection flow below.
    b.dataset.poseIdx = String(idx);
  }

  if (b.dataset.poseIdx !== undefined) {
    director.posePreview = true;
    director.recipeIdx = +b.dataset.poseIdx;
    const r = getActiveRecipe();
    if (r.svgType === "high05") director.facingMode = "user";
    $('#switchFacingBtn').classList.toggle('is-front', director.facingMode === "user");
    director.flip180 = r.recommendedFlip;
    director.lens = r.recommendedLens;
    director.frontFoot = r.recommendedFrontFoot;
    director.distance = 0;
    renderPoseStrip();
    updateCameraUI();
    beginPosePreview();
    if (director.mode === 'C') speakCoaching();
    return;
  }

  if (b.dataset.filter) {
    activeFilter = b.dataset.filter;
    spotLimit = 8;
    renderSpotsPage();
    return;
  }

  if (b.dataset.loadSpot) {
    director.customPhotoUrl = null;
    director.posePreview = false;
    director.spotId = b.dataset.loadSpot;
    if (b.dataset.closeAfter && modal.open) closeModal();
    const spot = getActiveSpot();
    director.flip180 = spot.recipe.flip;
    director.lens = spot.recipe.lens;
    director.recipeIdx = Math.min(kRecipes.length - 1, spot.recipe.pose || 0);
    director.distance = 0;
    updateCameraUI();
    renderNearbyPage();
    switchTab('camera');
    $('#nearbyDot').classList.remove('hidden');
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
    renderSpotsPage();
    renderSavedPage();
    updateSaveBadge();
    return;
  }

  if (b.dataset.claimCoupon) {
    const cid = b.dataset.claimCoupon;
    if (!claimedCoupons.includes(cid)) {
      claimedCoupons.push(cid);
      persist('pilk-v5-coupons', claimedCoupons);
      toast(t('toastCoupon'));
      renderNearbyPage();
      renderSavedPage();
      updateSaveBadge();
    }
    return;
  }

  if (b.dataset.removeCoupon) {
    claimedCoupons = claimedCoupons.filter(x => x !== b.dataset.removeCoupon);
    persist('pilk-v5-coupons', claimedCoupons);
    renderNearbyPage();
    renderSavedPage();
    updateSaveBadge();
  }
});

window.addEventListener('hashchange', () => {
  const h = location.hash.slice(1);
  if (validTabs.includes(h) && h !== activeTab) switchTab(h, false);
});

// Boot
renderAll();
try { applyTheme(localStorage.getItem('pilk-v5-theme') || 'pink'); } catch { applyTheme('pink'); }
const initialHash = location.hash.slice(1);
switchTab(validTabs.includes(initialHash) ? initialHash : 'camera', false);
try { if (!localStorage.getItem('pilk-v5-howto')) showHowTo(); } catch { showHowTo(); }
