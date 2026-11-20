// PILK v005 — Picture It Like Korean (Interactive Camera Director & Local Discovery Engine)

const icons = {
  arrow: 'M4 12h16m-6-6 6 6-6 6',
  bookmark: 'M6 4h12v17l-6-4-6 4z',
  pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
  scan: 'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 8h8v8H8z',
  search: 'M20 20l-5-5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
  camera: 'M4 7h4l2-3h4l2 3h4v13H4zM16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  upload: 'M12 16V4m0 0-4 4m4-4 4 4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  film: 'M3 4h18v16H3zM7 4v16m10-16v16M3 8h4m-4 8h4m10-8h4m-4 8h4',
  palace: 'M3 21h18M5 21V11h14v10M3 11h18L12 4 3 11ZM8 21v-6h8v6M12 2v2',
  sun: 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2',
  spark: 'm12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z',
  check: 'm5 12 4 4L19 6',
  map: 'm3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2zM9 3v16m6-14v16',
  trash: 'M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7'
};

const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[name] || icons.spark}"/></svg>`;
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

// === State (Loaded AFTER copy is defined so KR / EN / JP persistence works properly!) ===
let lang = 'ko';
let savedSpots = [];
let claimedCoupons = [];
let activeFilter = 'all';
let spotLimit = 8;
let searchQuery = '';

const director = {
  spotId: 'seongsu', // Camera-first Seoul local hotspot default (beyond Hanbok!)
  customPhotoUrl: null,
  customPhotoName: null,
  recipeIdx: 0,
  mode: 'A', // 'A' | 'B' | 'C'
  flip180: true,
  frontFoot: true,
  lens: '1×',
  distance: 0, // -1 (too close), 0 (perfect), 1 (too far)
  opacity: 72,
  showGrid: true,
  helperOpen: false,
  tiltDeg: 0,
  stream: null,
  cameraToken: 0,
  lastLightAnalysis: null
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
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

function hydrate(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  root.querySelectorAll('[data-t]').forEach(el => { el.innerHTML = t(el.dataset.t); });
  root.querySelectorAll('[data-placeholder]').forEach(el => { el.placeholder = t(el.dataset.placeholder); });
}

// === Custom Crisp SVG Illustrations & AR Overlays for 6 Korean Recipes ===
function recipeSvg(svgType, outline = false) {
  const stroke = outline ? '#ffffff' : '#2a2e28';
  const accent = outline ? '#ff8c69' : '#ff5a36';
  const fillBody = outline ? 'rgba(255,255,255,0.08)' : '#e6dfd1';
  const fillSkin = outline ? 'none' : '#f3d5bc';
  const dash = outline ? 'stroke-dasharray="5 3"' : '';

  if (svgType === 'flip') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <g stroke="${stroke}" stroke-width="${outline ? 2.2 : 1.8}" stroke-linecap="round" stroke-linejoin="round" ${dash}>
        <circle cx="110" cy="48" r="18" fill="${fillSkin}"/>
        <path d="M84 126 L92 74 Q110 66 128 74 L136 126 Z" fill="${fillBody}"/>
        <path d="M92 78 L74 114 M128 78 L145 112"/>
        <path d="M96 126 L92 198 L82 206 M124 126 L138 202 L152 210"/>
        <circle cx="152" cy="210" r="6" stroke="${accent}" stroke-width="2.5" stroke-dasharray="none"/>
      </g>
      <path d="M36 212 H184" stroke="${accent}" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="110" y="228" fill="${accent}" font-size="10" font-weight="800" text-anchor="middle" font-family="sans-serif">FOOT LINE · FRONT FOOT +</text>
      ${!outline ? `<g transform="translate(164 132) rotate(180 14 22)"><rect x="0" y="0" width="28" height="44" rx="6" fill="#1e211d"/><circle cx="14" cy="9" r="3" fill="#ff5a36"/></g><text x="178" y="122" fill="#ff5a36" font-size="9" font-weight="800" text-anchor="middle" font-family="sans-serif">180° FLIP</text>` : ''}
    </svg>`;
  }

  if (svgType === 'high05') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <g stroke="${stroke}" stroke-width="${outline ? 2.2 : 1.8}" stroke-linecap="round" stroke-linejoin="round" ${dash}>
        <ellipse cx="110" cy="90" rx="28" ry="24" fill="${fillSkin}"/>
        <path d="M80 118 Q110 104 140 118 L128 166 Q110 176 92 166 Z" fill="${fillBody}"/>
        <path d="M84 122 L66 154 M136 122 L162 84"/>
        <path d="M98 166 L94 202 M122 166 L128 202"/>
        <ellipse cx="110" cy="208" rx="34" ry="8" stroke="${accent}" stroke-width="1.6"/>
      </g>
      <text x="44" y="38" fill="${accent}" font-size="11" font-weight="800" font-family="sans-serif">0.5× TOP VIEW ↘</text>
      ${!outline ? `<rect x="160" y="24" width="28" height="44" rx="6" fill="#1e211d" transform="rotate(20 174 46)"/><circle cx="168" cy="36" r="3" fill="#ff5a36"/>` : ''}
    </svg>`;
  }

  if (svgType === 'lookback') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <g stroke="${stroke}" stroke-width="${outline ? 2.2 : 1.8}" stroke-linecap="round" stroke-linejoin="round" ${dash}>
        <circle cx="114" cy="52" r="18" fill="${fillSkin}"/>
        <path d="M90 78 Q110 70 132 80 L144 150 Q112 162 82 150 Z" fill="${fillBody}"/>
        <path d="M92 84 L78 128 M130 86 L146 124"/>
        <path d="M100 152 L88 204 M124 152 L140 206"/>
      </g>
      <path d="M138 48 Q160 56 150 74" stroke="${accent}" stroke-width="2" fill="none"/>
      <text x="158" y="42" fill="${accent}" font-size="9.5" font-weight="800" font-family="sans-serif">GLANCE ↺</text>
      <path d="M40 210 H180" stroke="${accent}" stroke-width="2" stroke-dasharray="6 4"/>
    </svg>`;
  }

  if (svgType === 'mirror') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <rect x="44" y="16" width="132" height="206" rx="58" stroke="${accent}" stroke-width="2.5" stroke-dasharray="${outline ? '6 4' : 'none'}" fill="${outline ? 'none' : '#f8f6f0'}"/>
      <g stroke="${stroke}" stroke-width="${outline ? 2.2 : 1.8}" stroke-linecap="round" stroke-linejoin="round" ${dash}>
        <circle cx="110" cy="64" r="17" fill="${fillSkin}"/>
        <path d="M88 88 Q110 80 130 88 L138 148 Q110 156 82 148 Z" fill="${fillBody}"/>
        <path d="M88 94 L76 134 M128 94 L124 74"/>
        <path d="M96 148 L88 200 M122 148 L136 202"/>
        <rect x="114" y="60" width="20" height="32" rx="4" fill="${outline ? 'rgba(255,90,54,0.35)' : '#ff5a36'}" stroke="${accent}"/>
      </g>
      <text x="110" y="234" fill="${accent}" font-size="9" font-weight="800" text-anchor="middle" font-family="sans-serif">15° ANGLE · MIRROR OOTD</text>
    </svg>`;
  }

  if (svgType === 'shadow') {
    const shFill = outline ? 'rgba(255,255,255,0.14)' : '#3d4438';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <path d="M86 196 L78 148 Q60 136 58 114 L54 68 Q52 50 64 46 L90 68 Q110 58 130 68 L156 46 Q168 50 166 68 L162 114 Q160 136 142 148 L134 196 Z" fill="${shFill}" stroke="${stroke}" stroke-width="2.2" ${dash}/>
      <path d="M68 108 L34 92 M68 122 L30 118 M72 134 L38 148 M152 108 L186 92 M152 122 L190 118 M148 134 L182 148" stroke="${outline ? accent : '#3d4438'}" stroke-width="4" stroke-linecap="round"/>
      <text x="110" y="222" fill="${accent}" font-size="9.5" font-weight="800" text-anchor="middle" font-family="sans-serif">ALIGN GROUND SHADOW</text>
    </svg>`;
  }

  // cheek_heart close-up
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240" fill="none" aria-hidden="true">
    <g stroke="${stroke}" stroke-width="${outline ? 2.2 : 1.8}" stroke-linecap="round" stroke-linejoin="round" ${dash}>
      <circle cx="110" cy="84" r="34" fill="${fillSkin}"/>
      <path d="M62 198 C68 140 152 140 158 198" fill="${fillBody}"/>
      <path d="M66 176 L86 126 L94 102"/>
      <circle cx="94" cy="96" r="5" stroke="${accent}" stroke-width="2.5" stroke-dasharray="none"/>
      <path d="M98 78 h3 M120 78 h3 M104 96 Q110 102 116 96"/>
    </g>
    <text x="110" y="222" fill="${accent}" font-size="9.5" font-weight="800" text-anchor="middle" font-family="sans-serif">EYE LEVEL · TILT 10°</text>
  </svg>`;
}

// === Core Director Logic ===
function getActiveSpot() {
  return spots.find(s => s.id === director.spotId) || spots[0];
}

function getActiveRecipe() {
  return kRecipes[director.recipeIdx] || kRecipes[0];
}

function computeCoaching() {
  const recipe = getActiveRecipe();
  const rText = recipe[lang] || recipe.ko;
  let score = 100;
  let cue = '';
  let tag = 'PERFECT MATCH';

  // Priority micro-directives matching mentor's exact vision
  if (recipe.recommendedFlip && !director.flip180) {
    score -= 22;
    tag = 'STEP 1 · PHONE FLIP';
    cue = lang === 'ko'
      ? '🔄 스마트폰을 180° 거꾸로 뒤집으세요! 렌즈가 낮아져 다리가 길어 보입니다.'
      : lang === 'ja'
        ? '🔄 スマホを180°逆さまに持ってください！脚が長く見える韓国式黄金比になります。'
        : '🔄 Flip your phone 180° upside down! Lowering the lens instantly elongates proportions.';
  } else if (recipe.recommendedLens === '0.5×' && director.lens !== '0.5×') {
    score -= 18;
    tag = 'STEP 1 · LENS 0.5×';
    cue = lang === 'ko'
      ? '📐 렌즈를 0.5× 초광각으로 전환하고 폰을 머리 위로 높이 들어보세요!'
      : lang === 'ja'
        ? '📐 レンズを0.5×超広角に切り替えて、スマホを頭上に掲げてください！'
        : '📐 Switch to the 0.5× ultra-wide lens and lift the phone higher!';
  } else if (director.distance === -1) {
    score -= 20;
    tag = 'DISTANCE · STEP BACK';
    cue = lang === 'ko'
      ? '👣 한 보 뒤로 가세요! 너무 가까워서 발끝과 상단 배경 여백이 잘리고 있어요.'
      : lang === 'ja'
        ? '👣 一歩後ろへ下がってください！近すぎて足元と背景の余白が切れています。'
        : '👣 Take one step back! Too close—your shoes and upper backdrop are getting cropped.';
  } else if (director.distance === 1) {
    score -= 16;
    tag = 'DISTANCE · STEP CLOSER';
    cue = lang === 'ko'
      ? '👣 반 보 앞으로 가세요! 발끝이 하단 점선(FOOT LINE)에 딱 닿도록 당겨주세요.'
      : lang === 'ja'
        ? '👣 半歩前へ近づいてください！つま先が下端ラインにぴったり合う位置まで。'
        : '👣 Move half a step closer so your toes touch the bottom FOOT ALIGN LINE!';
  } else if (recipe.recommendedFrontFoot && !director.frontFoot) {
    score -= 12;
    tag = 'POSE · FRONT FOOT';
    cue = lang === 'ko'
      ? '🦶 앞발을 카메라 쪽으로 반 걸음 앞으로 빼세요! 훨씬 자연스럽고 슬림해 보여요.'
      : lang === 'ja'
        ? '🦶 前足をカメラ側へ半歩出してください！一気に自然でスタイル良く写ります。'
        : '🦶 Extend your front foot half a step toward the lens for a relaxed editorial stance!';
  } else if (Math.abs(director.tiltDeg) > 6) {
    score -= 10;
    tag = 'TILT · LEVEL';
    cue = lang === 'ko'
      ? `⚖️ 화면이 ${Math.abs(director.tiltDeg)}° 기울었어요. 수평선을 중앙에 맞춰주세요.`
      : lang === 'ja'
        ? `⚖️ 画面が${Math.abs(director.tiltDeg)}°傾いています。水平を合わせてください。`
        : `⚖️ Tilted by ${Math.abs(director.tiltDeg)}°—level your phone with the horizon bar.`;
  } else {
    // Also deduct slight penalty if flip is ON when not recommended (e.g. 0.5x top-down)
    if (!recipe.recommendedFlip && director.flip180) score -= 6;
    tag = '✨ READY TO SNAP';
    cue = lang === 'ko'
      ? `✨ 완벽해요! 발끝 정렬 · 구도 일치 완료 — 지금 셔터를 누르세요! (${rText.title})`
      : lang === 'ja'
        ? `✨ 完璧です！足元・アングル一致完了 — 今すぐシャッターを押してください！（${rText.title}）`
        : `✨ Locked in! Proportions & Korean angle aligned — snap now! (${rText.title})`;
  }

  return { score: Math.max(45, score), tag, cue };
}

function updateDirectorView() {
  const spot = getActiveSpot();
  const recipe = getActiveRecipe();
  const rText = recipe[lang] || recipe.ko;
  const coaching = computeCoaching();

  // Background image (when live camera is off)
  const bgImg = $('#stageBgImg');
  if (director.customPhotoUrl) {
    bgImg.src = director.customPhotoUrl;
    bgImg.alt = director.customPhotoName || 'Uploaded scene';
  } else {
    bgImg.src = `assets/${spot.image}`;
    bgImg.alt = (spot[lang] || spot.ko)[0];
  }

  // Simulate lens framing & flip subtle visual effect on background
  const lensScale = director.lens === '0.5×' ? 1.0 : director.lens === '2×' ? 1.24 : 1.08;
  bgImg.style.transform = `scale(${lensScale})`;

  // AR Overlay SVG + distance scale
  const overlay = $('#vfOverlay');
  overlay.innerHTML = recipeSvg(recipe.svgType, true);
  const distScale = director.distance === -1 ? 1.18 : director.distance === 1 ? 0.82 : 1.0;
  const distY = director.distance === -1 ? '6%' : director.distance === 1 ? '-6%' : '0%';
  overlay.style.transform = `scale(${distScale}) translateY(${distY})`;
  overlay.style.opacity = director.mode === 'B' ? Math.max(0.2, director.opacity / 220) : director.opacity / 100;

  // Grid & Foot Line visibility
  $('#vfGrid').classList.toggle('hidden', !director.showGrid);
  $('#vfFootLine').classList.toggle('hidden', !director.showGrid);

  // Match Score Pill
  $('#vfMatchScore').textContent = `${coaching.score}%`;
  $('#vfMatchPill').classList.toggle('warn', coaching.score < 85);

  // Chips
  const flipChip = $('#vfFlipChip');
  flipChip.textContent = director.flip180 ? '🔄 180° FLIP ON' : '📱 NORMAL GRIP';
  flipChip.classList.toggle('off', !director.flip180);

  $('#vfLensChip').textContent = `📐 ${director.lens} LENS`;

  const footChip = $('#vfFootChip');
  footChip.textContent = director.frontFoot ? '🦶 FRONT FOOT +' : '🦶 STRAIGHT STANCE';
  footChip.classList.toggle('off', !director.frontFoot);

  // Tilt Leveler
  const tilt = director.tiltDeg;
  $('#vfLevelBar').style.transform = `rotate(${tilt}deg)`;
  $('#vfLevelBar').style.background = Math.abs(tilt) <= 6 ? '#4ade80' : '#fbbf24';
  $('#vfTiltReadout').textContent = Math.abs(tilt) <= 2 ? '0° LEVEL' : `${tilt > 0 ? '+' : ''}${tilt}°`;

  // Directive Bar
  $('#vfDirTag').textContent = `MODE ${director.mode} · ${coaching.tag}`;
  $('#vfDirText').textContent = coaching.cue;

  // Mode B Step Strip inside viewfinder
  const modeBStrip = $('#vfModeBStrip');
  modeBStrip.classList.toggle('hidden', director.mode !== 'B');
  modeBStrip.innerHTML = rText.steps.map((st, idx) => `
    <div class="vf-step-card"><b>STEP 0${idx + 1}</b>${st}</div>
  `).join('');

  // Helper Mode card text
  $('#vfHelperCard').classList.toggle('hidden', !director.helperOpen);
  $('#vfHelperSteps').textContent = rText.helperText;

  // Sync Panel Controls
  $$('.mode-tab').forEach(btn => btn.classList.toggle('selected', btn.dataset.mode === director.mode));
  $('#btnFlip180').classList.toggle('active', director.flip180);
  $('#btnFrontFoot').classList.toggle('active', director.frontFoot);
  $$('.lens-btn').forEach(btn => btn.classList.toggle('selected', btn.dataset.lens === director.lens));
  $('#distSlider').value = director.distance;
  $('#distStatusText').textContent = director.distance === -1 ? t('distClose') : director.distance === 1 ? t('distFar') : t('distPerfect');
  $('#opacitySlider').value = director.opacity;
  $('#opacityVal').textContent = `${director.opacity}%`;
  $('#gridToggle').checked = director.showGrid;
  $('#quickSceneSelect').value = director.spotId;
  $('#recipeSelect').value = String(director.recipeIdx);
}

// === Voice Coaching (Web Speech API) ===
function speakCoaching(customText) {
  const coaching = computeCoaching();
  const recipe = getActiveRecipe();
  const rText = recipe[lang] || recipe.ko;
  const text = (customText || `${coaching.cue} ${rText.microCue}`).replace(/[🔄👣🦶📐✨⚖️🔊]/g, '');
  toast(t('toastVoice'));
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : 'en-US';
    utter.rate = 1.02;
    window.speechSynthesis.speak(utter);
  }
}

// === Real Canvas Lighting & Color Warmth Analyzer + Auto Scene Recognition ===
function analyzeCanvasPixels() {
  try {
    const video = $('#stageVideo');
    const img = $('#stageBgImg');
    const source = director.stream && video.videoWidth ? video : img;
    if (!source || (source === img && (!img.complete || !img.naturalWidth))) return null;

    const c = document.createElement('canvas');
    c.width = 48;
    c.height = 48;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(source, 0, 0, 48, 48);
    const data = ctx.getImageData(0, 0, 48, 48).data;
    let rSum = 0, gSum = 0, bSum = 0, lumSum = 0;
    const pixels = data.length / 4;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      rSum += r; gSum += g; bSum += b;
      lumSum += 0.299 * r + 0.587 * g + 0.114 * b;
    }
    const avgLum = Math.round((lumSum / pixels / 255) * 100);
    const warmth = Math.round((rSum - bSum) / pixels);
    return { brightness: avgLum, warmth };
  } catch {
    // Graceful fallback if opened directly via file:// where canvas pixel read can be tainted
    return null;
  }
}

function formatLightAnalysis(stats, spot) {
  if (!stats) {
    return (spot.recipe.lighting[lang] || spot.recipe.lighting.ko);
  }
  const { brightness, warmth } = stats;
  if (lang === 'ko') {
    const lumLabel = brightness < 35 ? `야간/저조도 (${brightness}%) · 노출 +0.3 추천` : brightness > 72 ? `밝은 야외광 (${brightness}%) · 역광 주의` : `균형 잡힌 자연광 (${brightness}%)`;
    const toneLabel = warmth > 18 ? '따뜻한 웜톤 배경' : warmth < -10 ? '청량한 쿨톤/블루' : '뉴트럴 도시 톤';
    return `${lumLabel} · ${toneLabel}`;
  }
  if (lang === 'ja') {
    const lumLabel = brightness < 35 ? `夜景/低照度 (${brightness}%)・露出やや上げ` : brightness > 72 ? `強い自然光 (${brightness}%)・逆光注意` : `バランスの良い自然光 (${brightness}%)`;
    const toneLabel = warmth > 18 ? '暖色系背景' : warmth < -10 ? 'クール/ブルー背景' : 'ニュートラル';
    return `${lumLabel} · ${toneLabel}`;
  }
  const lumLabel = brightness < 35 ? `Low-Light/Night (${brightness}%) · Boost Exposure` : brightness > 72 ? `Bright Daylight (${brightness}%) · Watch Backlight` : `Balanced Natural Light (${brightness}%)`;
  const toneLabel = warmth > 18 ? 'Warm Tone' : warmth < -10 ? 'Cool Blue Tone' : 'Neutral Urban Tone';
  return `${lumLabel} · ${toneLabel}`;
}

function renderScanCard() {
  const spot = getActiveSpot();
  const sText = spot[lang] || spot.ko;
  const nearby = nearbyPools[spot.pool] || nearbyPools.jongno;
  const lightText = formatLightAnalysis(director.lastLightAnalysis, spot);

  const detectedTitle = director.customPhotoUrl
    ? (lang === 'ko' ? `업로드 사진 분석 · 추천 매칭: ${sText[0]}` : lang === 'ja' ? `アップロード写真分析・おすすめ: ${sText[0]}` : `Uploaded Photo · Matched Mood: ${sText[0]}`)
    : `${sText[0]} (${sText[1]})`;

  $('#scanSpotTitle').textContent = detectedTitle;
  $('#scanMetrics').innerHTML = `
    <div class="metric-box">
      <small>${t('scanLightLabel')}</small>
      <b>${lightText}</b>
    </div>
    <div class="metric-box">
      <small>${t('scanRecipeLabel')}</small>
      <b>${spot.recipe.flip ? '🔄 180° Flip' : '📱 Standard'} · ${spot.recipe.lens} · ${(kRecipes[spot.recipe.pose] || kRecipes[0])[lang]?.title || kRecipes[0].ko.title}</b>
    </div>
  `;

  $('#nearbyList').innerHTML = nearby.map((item, idx) => {
    const couponId = `${spot.pool}_${idx}`;
    const isClaimed = claimedCoupons.includes(couponId);
    return `
      <div class="nearby-item">
        <div class="nearby-meta">
          <div class="nearby-top-line">
            <span class="nearby-cat">${item.cat[lang] || item.cat.ko}</span>
            <span class="nearby-walk">🚶 ${item.walk}</span>
          </div>
          <b>${item.name[lang] || item.name.ko}</b>
          <div class="nearby-deal">🎁 ${item.deal[lang] || item.deal.ko}</div>
        </div>
        <div class="nearby-actions">
          <button type="button" class="coupon-btn ${isClaimed ? 'claimed' : ''}" data-claim-coupon="${couponId}">
            ${isClaimed ? t('couponClaimed') : t('claimCoupon')}
          </button>
          ${item.spotId && item.spotId !== spot.id ? `
            <button type="button" class="switch-spot-btn" data-load-spot="${item.spotId}">${t('tryNearbySpot')}</button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function runBackgroundScan(applyRecommendedPreset = false) {
  const laser = $('#vfScanLaser');
  laser.classList.remove('hidden');
  $('#scanBadge').textContent = t('scanRunning');

  setTimeout(() => {
    laser.classList.add('hidden');
    $('#scanBadge').textContent = t('scanDetectedBadge');
    director.lastLightAnalysis = analyzeCanvasPixels();

    // If custom photo uploaded, pick best matching Korean spot archetype based on real pixel luminance/warmth
    if (director.customPhotoUrl && director.lastLightAnalysis) {
      const { brightness, warmth } = director.lastLightAnalysis;
      if (brightness < 38) director.spotId = 'euljiro';
      else if (warmth < -8) director.spotId = 'jumunjin';
      else if (warmth > 20) director.spotId = 'gyeongbok';
      else director.spotId = 'seongsu';
    }

    if (applyRecommendedPreset) {
      const spot = getActiveSpot();
      director.flip180 = spot.recipe.flip;
      director.lens = spot.recipe.lens;
      director.recipeIdx = Math.min(kRecipes.length - 1, spot.recipe.pose || 0);
      director.distance = 0;
    }

    updateDirectorView();
    renderScanCard();
  }, 680);
}

// === WebRTC Live Camera (Never killed by switching Mode A / B / C!) ===
function stopCamera() {
  director.cameraToken++;
  if (director.stream) {
    director.stream.getTracks().forEach(tr => tr.stop());
    director.stream = null;
  }
  const v = $('#stageVideo');
  if (v) { v.srcObject = null; v.style.display = 'none'; }
  $('#vfStatusText').textContent = t('demoBadge');
  $('#toggleCamLabel').textContent = t('connectCam');
}

async function toggleCamera() {
  if (director.stream) {
    stopCamera();
    return;
  }
  const token = ++director.cameraToken;
  $('#camErrorMsg').textContent = '';
  try {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error('No mediaDevices');
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
    $('#vfStatusText').textContent = t('liveBadge');
    $('#toggleCamLabel').textContent = t('stopCam');
    enableGyroIfAvailable();
  } catch {
    if (token === director.cameraToken) {
      $('#camErrorMsg').textContent = t('toastCameraFail');
      toast(t('toastCameraFail'));
    }
  }
}

function enableGyroIfAvailable() {
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(res => {
      if (res === 'granted') bindGyro();
    }).catch(() => {});
  } else {
    bindGyro();
  }
}

let gyroBound = false;
function bindGyro() {
  if (gyroBound) return;
  gyroBound = true;
  window.addEventListener('deviceorientation', e => {
    if (typeof e.gamma === 'number') {
      director.tiltDeg = Math.max(-35, Math.min(35, Math.round(e.gamma)));
      updateDirectorView();
    }
  });
}

// === Capture Photo or Export Instagram Story Card (1080×1920) ===
function captureViewfinder(asStoryCard = false) {
  const video = $('#stageVideo');
  const img = $('#stageBgImg');
  const isLive = Boolean(director.stream && video.videoWidth);
  const src = isLive ? video : img;
  const sw = isLive ? video.videoWidth : img.naturalWidth;
  const sh = isLive ? video.videoHeight : img.naturalHeight;

  if (!sw || !sh) {
    toast(t('toastCameraFail'));
    return;
  }

  try {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');

    if (!asStoryCard) {
      c.width = sw;
      c.height = sh;
      ctx.drawImage(src, 0, 0, sw, sh);
      downloadCanvas(c, `pilk-kcut-${Date.now()}.jpg`, 'image/jpeg', 0.93);
      toast(t('toastPhotoSaved'));
      return;
    }

    // Instagram Story Card (1080 × 1920)
    const W = 1080, H = 1920;
    c.width = W;
    c.height = H;
    ctx.fillStyle = '#141714';
    ctx.fillRect(0, 0, W, H);

    // Draw photo in centered rounded card area
    const pad = 64, topY = 210, photoW = W - pad * 2, photoH = 1280;
    const scale = Math.max(photoW / sw, photoH / sh);
    const dw = sw * scale, dh = sh * scale;
    ctx.save();
    roundRect(ctx, pad, topY, photoW, photoH, 42);
    ctx.clip();
    ctx.drawImage(src, pad + (photoW - dw) / 2, topY + (photoH - dh) / 2, dw, dh);
    ctx.restore();

    // Top Branding
    const spot = getActiveSpot();
    const sText = spot[lang] || spot.ko;
    const coaching = computeCoaching();

    ctx.fillStyle = '#ff5a36';
    ctx.font = '800 44px "DM Sans", sans-serif';
    ctx.fillText('✳ PILK', pad, 124);
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.font = '600 28px "DM Sans", sans-serif';
    ctx.fillText('Picture It Like Korean', pad + 185, 122);

    // Match Pill
    ctx.fillStyle = '#22c55e';
    ctx.font = '800 32px "DM Sans", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`K-MATCH ${coaching.score}%`, W - pad, 122);
    ctx.textAlign = 'left';

    // Bottom Metadata
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 50px "Noto Sans KR", "DM Sans", sans-serif';
    ctx.fillText(sText[0], pad, 1590);

    ctx.fillStyle = 'rgba(255,255,255,0.72)';
    ctx.font = '500 30px "Noto Sans KR", "DM Sans", sans-serif';
    ctx.fillText(`${sText[1]} · ${director.flip180 ? '180° Phone-Flip' : 'Standard'} · ${director.lens} Lens`, pad, 1650);

    ctx.fillStyle = '#ff8c69';
    ctx.font = '700 28px "DM Sans", sans-serif';
    ctx.fillText('#PILK  #PictureItLikeKorean  #SeoulTrip  ' + sText[3], pad, 1720);

    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.font = '500 24px "DM Sans", sans-serif';
    ctx.fillText('Coached live by PILK · Auto-discovered nearby local spots & coupons', pad, 1810);

    downloadCanvas(c, `pilk-ig-story-${spot.id}.png`, 'image/png', 0.95);
    toast(t('toastStorySaved'));
  } catch {
    toast(lang === 'ko'
      ? '로컬 파일 보안 정책으로 인해 내 사진 업로드 또는 실제 카메라 연결 상태에서 저장할 수 있습니다.'
      : 'Please connect the live camera or upload your photo to export directly.');
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function downloadCanvas(canvas, filename, mime, quality) {
  const url = canvas.toDataURL(mime, quality);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
}

// === Render Sections ===
function populateSelects() {
  const featured = ['seongsu', 'gyeongbok', 'bukchon', 'hyundai', 'euljiro', 'jumunjin', 'yeonnam', 'hannam', 'gwangalli', 'hyeopjae'];
  const ordered = [
    ...featured.map(id => spots.find(s => s.id === id)).filter(Boolean),
    ...spots.filter(s => !featured.includes(s.id))
  ];
  $('#quickSceneSelect').innerHTML = ordered.map(s => {
    const sText = s[lang] || s.ko;
    return `<option value="${s.id}">${sText[0]} (${sText[1]})</option>`;
  }).join('');

  $('#recipeSelect').innerHTML = kRecipes.map((r, i) => {
    const rText = r[lang] || r.ko;
    return `<option value="${i}">${rText.title}</option>`;
  }).join('');
}

function renderBeforeAfter() {
  $('#compareGrid').innerHTML = beforeAfterItems.map(item => {
    const d = item[lang] || item.ko;
    return `
      <article class="compare-card">
        <span class="compare-metric">${d.metric}</span>
        <div class="compare-box before">
          <span>${t('beforeBadge')}</span>
          <b>${d.beforeTitle}</b>
          <p>${d.beforeDesc}</p>
        </div>
        <div class="compare-box after">
          <span>${t('afterBadge')}</span>
          <b>${d.afterTitle}</b>
          <p>${d.afterDesc}</p>
        </div>
      </article>
    `;
  }).join('');
}

function renderRecipes() {
  $('#recipeGrid').innerHTML = kRecipes.map((r, i) => {
    const d = r[lang] || r.ko;
    return `
      <article class="recipe-card">
        <div class="recipe-art" style="background:${r.bg}">${recipeSvg(r.svgType, false)}</div>
        <div class="recipe-body">
          <span class="recipe-badge">${r.badge}</span>
          <h3>${d.title}</h3>
          <p>${d.subtitle}</p>
          <div class="recipe-cue">“${d.microCue}”</div>
          <button type="button" class="btn outline sm" data-apply-recipe="${i}">
            ${icon('scan')}<span>${t('applyRecipe')}</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

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
        <div class="spot-img-wrap">
          <img src="assets/${s.image}" alt="${a[0]}" loading="lazy">
          <span class="spot-badge ${s.type}">${a[2]}</span>
          <button type="button" class="spot-save-btn ${isSaved ? 'is-saved' : ''}" data-save-spot="${s.id}" aria-label="${a[0]} ${t('save')}">
            ${icon('bookmark')}
          </button>
        </div>
        <div class="spot-info">
          <div class="spot-loc">${icon('pin')}<span>${a[1]}</span></div>
          <button type="button" class="spot-title" data-detail-spot="${s.id}">${a[0]}</button>
          <div class="spot-tags"><span>${a[3]}</span><span>${a[4]}</span></div>
          <div class="spot-actions">
            <button type="button" class="spot-cam-btn" data-load-spot="${s.id}">
              ${icon('camera')}<span>${t('openInCamera')}</span>
            </button>
            <button type="button" class="spot-more-btn" data-detail-spot="${s.id}">${t('viewDetails')}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  $('#emptySearch').classList.toggle('hidden', matches.length > 0);
  $('#catalogCount').textContent = `${matches.length} ${t('spotCountUnit')} · ${shown.length} ${t('shownUnit')}`;
  const loadBtn = $('#loadMoreBtn');
  loadBtn.classList.toggle('hidden', shown.length >= matches.length);
  loadBtn.textContent = `${t('loadMore')} (${shown.length} / ${matches.length}) ↓`;

  $$('[data-filter]').forEach(btn => {
    let badge = btn.querySelector('.chip-count');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'chip-count';
      btn.append(badge);
    }
    badge.textContent = spots.filter(s => spotMatches(s, btn.dataset.filter)).length;
    btn.classList.toggle('selected', btn.dataset.filter === activeFilter);
  });
}

function renderEcosystemCards() {
  const cards = {
    ko: [
      { k: 'PIVOT 01 · 시장 확장', h: '좁은 한복 대여 → 전 영역 로컬 포토 앱', p: '경복궁·한복 대여점(소수 B2B)에 의존하지 않고, 성수·연남·을지로·해변 등 44+ 핫플 전체로 타깃과 엔터테인먼트 가치를 대폭 확장했습니다.' },
      { k: 'PIVOT 02 · 배포 진입장벽 해소', h: '설치 없는 Web/QR + IG 스토리 브릿지', p: '단독 앱 다운로드 마찰을 줄이기 위해 QR 스캔 즉시 실행되는 모바일 웹으로 시작하고, 인스타그램 스토리 카드·카메라 필터 플러그인 연동을 추진합니다.' },
      { k: 'PIVOT 03 · 타깃 차별화', h: '유학생 스냅 대신 글로벌 FIT 동반자 코칭', p: '샤오홍슈 중국인 개인 스냅 업체와 정면 경쟁하지 않고, 일본·영미·동남아 자유여행객이 친구·연인·행인과 10초 만에 인생샷을 찍도록 돕습니다.' },
      { k: 'PIVOT 04 · 다각화된 수익화', h: '배경 인식 기반 로컬 제휴 수수료 8~12%', p: '촬영 직후 자동 추천되는 도보 5분 내 카페·팝업·전시·포토부스 쿠폰 전환 수수료(8~12%) + 단기 여행 패스($2.99~4.99)로 지속 가능한 매출을 만듭니다.' }
    ],
    en: [
      { k: 'PIVOT 01 · TAM EXPANSION', h: 'From Narrow Hanbok to All-Korea Photo App', p: 'Expands beyond seasonal palace Hanbok rentals into 44+ everyday hotspots—Seongsu pop-ups, cafes, night alleys, K-Drama locations, and beaches.' },
      { k: 'PIVOT 02 · ZERO FRICTION', h: 'Instant Web/QR + Instagram Story Bridge', p: 'Solves standalone-app friction via instant QR mobile web access plus downloadable IG Story cards and future camera/SNS filter plugins.' },
      { k: 'PIVOT 03 · BLUE OCEAN TARGET', h: 'Global FIT Self/Buddy Coaching', p: 'Avoids crowded Chinese Xiaohongshu private-snap markets by serving Japanese, Western, and SEA independent travelers shooting with friends or solo.' },
      { k: 'PIVOT 04 · MONETIZATION', h: 'Scene-Triggered Local Affiliate (8–12%)', p: 'Turns every photo into nearby cafe, pop-up, gallery, and photo-booth foot traffic (8–12% CPA/coupon commission) plus $2.99–$4.99 travel passes.' }
    ],
    ja: [
      { k: 'PIVOT 01 · 市場拡大', h: '狭い韓服市場 → 全韓国フォト＆ローカル発見', p: '景福宮・韓服レンタルに限定せず、聖水ポップアップ・延南カフェ・乙支路・海辺など44以上のスポットへ体験価値を拡大しました。' },
      { k: 'PIVOT 02 · 導入障壁ゼロ', h: 'インストール不要Web/QR＋IGストーリー連携', p: '専用アプリDLのハードルを下げ、QR即起動モバイルWeb＋Instagramストーリーカード出力・SNSフィルター連携戦略を採用します。' },
      { k: 'PIVOT 03 · ターゲット差別化', h: 'グローバル個人旅行者の10秒撮影コーチ', p: '小紅書（RED）の個人スナップ市場を避け、日本・欧米・東南アジアの個人旅行者が同行者と10秒で韓国っぽく撮れる体験に集中します。' },
      { k: 'PIVOT 04 · 収益多角化', h: '背景認識連動のローカル送客手数料（8〜12%）', p: '撮影直後に提案する徒歩5分圏内のカフェ・ポップアップ・写真館クーポン送客（8〜12%）＋短期旅行パスで持続可能な収益を構築します。' }
    ]
  };
  $('#ecoCards').innerHTML = (cards[lang] || cards.ko).map(c => `
    <article class="eco-card">
      <span>${c.k}</span>
      <h3>${c.h}</h3>
      <p>${c.p}</p>
    </article>
  `).join('');
}

function updateSaveCount() {
  $('#saveCount').textContent = savedSpots.length + claimedCoupons.length;
}

function renderAll() {
  document.documentElement.lang = lang;
  document.title = lang === 'ko'
    ? 'PILK v005 — Picture It Like Korean · 실시간 한국식 포토 디렉터'
    : lang === 'ja'
      ? 'PILK v005 — Picture It Like Korean · リアルタイム韓国式フォトディレクター'
      : 'PILK v005 — Picture It Like Korean · Real-Time K-Photo Director';

  hydrate();
  ['ko', 'en', 'ja'].forEach(code => {
    const btn = $(`#lang-${code}`);
    btn.classList.toggle('selected', lang === code);
    btn.setAttribute('aria-pressed', String(lang === code));
  });

  populateSelects();
  updateDirectorView();
  renderScanCard();
  renderBeforeAfter();
  renderRecipes();
  renderSpots();
  renderEcosystemCards();
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
function closeModal() {
  modal.close();
}
modal.addEventListener('close', () => { document.body.style.overflow = ''; });
$('#closeModal').onclick = closeModal;
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

function showSpotDetail(spotId) {
  const s = spots.find(x => x.id === spotId);
  if (!s) return;
  const a = s[lang] || s.ko;
  const nearby = nearbyPools[s.pool] || nearbyPools.jongno;
  openModal(`
    <img class="modal-hero" src="assets/${s.image}" alt="${a[0]}">
    <div class="modal-body">
      <span class="eyebrow">${a[2]} · ${a[1]}</span>
      <h2>${a[0]}</h2>
      <p style="margin:0;color:var(--muted)">${a[3]} &nbsp; ${a[4]}</p>
      <div class="modal-tip-box">
        <b>✦ PILK Korean Shooting Formula (${s.recipe.flip ? '180° Flip' : 'Standard'} · ${s.recipe.lens})</b>
        <p style="margin:6px 0 0">${a[5]}</p>
      </div>
      <h4 style="margin:16px 0 8px">${t('scanNearbyTitle')}</h4>
      <div class="nearby-list">
        ${nearby.map((n, i) => {
          const cid = `${s.pool}_${i}`;
          const claimed = claimedCoupons.includes(cid);
          return `<div class="nearby-item">
            <div class="nearby-meta">
              <div class="nearby-top-line"><span class="nearby-cat">${n.cat[lang] || n.cat.ko}</span><span class="nearby-walk">🚶 ${n.walk}</span></div>
              <b>${n.name[lang] || n.name.ko}</b>
              <div class="nearby-deal">🎁 ${n.deal[lang] || n.deal.ko}</div>
            </div>
            <button type="button" class="coupon-btn ${claimed ? 'claimed' : ''}" data-claim-coupon="${cid}">${claimed ? t('couponClaimed') : t('claimCoupon')}</button>
          </div>`;
        }).join('')}
      </div>
      <div class="modal-actions">
        <button type="button" class="btn primary" data-load-spot="${s.id}" data-close-after="1">${icon('camera')}<span>${t('openInCamera')}</span></button>
        <a class="btn outline" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.map)}">${icon('map')}<span>${t('openMap')}</span></a>
        <a class="btn outline" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/explore/search/keyword/?q=${encodeURIComponent(s.instagram || s.ko[0])}">${t('instagramLink')} ↗</a>
      </div>
    </div>
  `);
}

function showSavedModal() {
  const couponItems = claimedCoupons.map(cid => {
    const [pool, idx] = cid.split('_');
    const item = nearbyPools[pool]?.[+idx];
    if (!item) return '';
    return `<div class="nearby-item">
      <div class="nearby-meta">
        <div class="nearby-top-line"><span class="nearby-cat">${item.cat[lang] || item.cat.ko}</span><span class="nearby-walk">🚶 ${item.walk}</span></div>
        <b>${item.name[lang] || item.name.ko}</b>
        <div class="nearby-deal">🎁 ${item.deal[lang] || item.deal.ko}</div>
      </div>
      <button type="button" class="switch-spot-btn" data-remove-coupon="${cid}">${icon('trash')}</button>
    </div>`;
  }).join('');

  const spotItems = savedSpots.map(id => {
    const s = spots.find(x => x.id === id);
    if (!s) return '';
    const a = s[lang] || s.ko;
    return `<div class="nearby-item">
      <div class="nearby-meta">
        <b>${a[0]}</b>
        <div class="nearby-walk">${a[1]} · ${a[3]}</div>
      </div>
      <div style="display:flex;gap:6px">
        <button type="button" class="switch-spot-btn" data-load-spot="${s.id}" data-close-after="1">${t('openInCamera')}</button>
        <button type="button" class="switch-spot-btn" data-save-spot="${s.id}">${icon('trash')}</button>
      </div>
    </div>`;
  }).join('');

  openModal(`
    <div class="modal-body">
      <span class="eyebrow">MY PILK COLLECTION</span>
      <h2>${t('savedTitle')}</h2>
      ${!savedSpots.length && !claimedCoupons.length ? `<p class="empty-state">${t('savedEmpty')}</p>` : ''}
      ${claimedCoupons.length ? `<h4>🎁 ${t('savedCouponsTitle')} (${claimedCoupons.length})</h4><div class="nearby-list">${couponItems}</div>` : ''}
      ${savedSpots.length ? `<h4 style="margin-top:20px">📍 ${t('savedSpotsTitle')} (${savedSpots.length})</h4><div class="nearby-list">${spotItems}</div>` : ''}
    </div>
  `);
}

function showStrategyModal() {
  openModal(`
    <div class="modal-body">
      <span class="eyebrow">MENTOR FEEDBACK RESPONSE · PILK v005 STRATEGY</span>
      <h2>멘토님 5대 핵심 질문 답변 & 피벗 전략 요약</h2>
      <p style="color:var(--muted);font-size:13px">상세 근거·수치 계산·로드맵은 저장소 내 <code>v005/MENTOR_FEEDBACK_AND_STRATEGY.md</code> 문서에 전문이 정리되어 있습니다.</p>
      <table class="strategy-table">
        <thead><tr><th style="width:26%">멘토 질문 / 지적</th><th>PILK v005 전략적 답변 및 반영 사항</th></tr></thead>
        <tbody>
          <tr>
            <td><b>Q1~Q3. 한복 대여점 구독 시장의 한계</b><br>(구독료·점포 수·여행사 경쟁·대여 비율)</td>
            <td>경복궁·북촌 일대 주요 한복 대여점은 약 100~150곳 수준으로 단일 B2B 구독(월 5~10만 원 × 30~50개소 = 월 150~500만 원)은 시장 천장이 낮고, 기존 여행사/OTA(클룩·KKday, 수수료 15~25%)와 출혈 경쟁이 발생합니다. → <b>v005에서는 한복 중심을 과감히 내려놓고, 방한 외국인 100%가 겪는 "사진 촬영 + 주변 로컬 탐색" 전체로 TAM을 확장</b>했습니다.</td>
          </tr>
          <tr>
            <td><b>Q4. 자체 앱 vs 인스타·카메라 플러그인</b></td>
            <td>단독 앱 다운로드 마찰을 인정하고 <b>3단계 배포 전략</b>으로 전환: ① 현장에서 QR로 즉시 열리는 <b>설치 없는 모바일 웹(v005)</b> → ② 촬영 결과물 <b>인스타그램 스토리 카드 공유</b> 바이럴 → ③ 고도화 단계에서 <b>인스타/틱톡 AR 필터 & 기본 카메라 확장(SDK/플러그인)</b> 연계.</td>
          </tr>
          <tr>
            <td><b>Q5. 상점 제휴 수수료 시장가</b></td>
            <td>글로벌 OTA·투어 플랫폼(클룩/트립닷컴)은 15~25%, 일반 로컬 F&B/카페 쿠폰 제휴는 <b>8~12%</b> 또는 건당 CPA(₩1,000~2,500)가 시장 표준입니다. PILK는 고정 구독료 저항을 없애고 <b>성과형(CPA / 10% 내외 제휴 수수료) + 단기 여행 패스($2.99~4.99)</b> 혼합 모델을 제안합니다.</td>
          </tr>
          <tr>
            <td><b>우선순위: 차별성 vs 지불 의향 vs 저작권</b></td>
            <td><b>1순위: 차별성 (v005 즉시 해결)</b> — "한국인처럼 찍기(폰 180° 뒤집기·한 보 뒤로·발끝 정렬·앞발 빼기)" + "배경 자동 인식 → 주변 관광지·로컬 쿠폰 추천"으로 명확한 정체성 확보.<br><b>2순위: 지불 의향 검증</b> — 수정된 <code>v005/survey.html</code>로 B2C/로컬 제휴 수요 정량 검증.<br><b>3순위: 저작권</b> — 자체 일러스트·공공/허가 레퍼런스·유저 UGC 구조로 리스크 최소화.</td>
          </tr>
        </tbody>
      </table>
      <div class="modal-actions">
        <a class="btn primary" href="survey.html">개선된 고객 검증 설문(v005) 열기 ↗</a>
        <button type="button" class="btn outline" onclick="document.getElementById('modal').close()">닫기</button>
      </div>
    </div>
  `);
}

function showCreditsModal() {
  openModal(`
    <div class="modal-body">
      <span class="eyebrow">PHOTO CREDITS & PRIVACY</span>
      <h2>${t('creditsTitle')}</h2>
      <p style="color:var(--muted)">${t('creditsDesc')}</p>
      <ul style="font-size:12px;line-height:2;padding-left:18px;max-height:360px;overflow:auto">
        ${spots.map(s => `<li><a href="${s.source}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">${(s[lang] || s.ko)[0]} · ${s.credit || 'Reference'}</a></li>`).join('')}
      </ul>
    </div>
  `);
}

// === Event Bindings ===
['ko', 'en', 'ja'].forEach(code => {
  $(`#lang-${code}`).onclick = () => {
    lang = code;
    persist('pilk-v5-lang', code);
    renderAll();
  };
});

$('#heroStartCamBtn').onclick = () => {
  $('#director').scrollIntoView({ behavior: 'smooth' });
  if (!director.stream) toggleCamera();
};

$('#heroScanBtn').onclick = () => {
  $('#director').scrollIntoView({ behavior: 'smooth' });
  runBackgroundScan(true);
};

$('#mobileScanBtn').onclick = () => {
  $('#director').scrollIntoView({ behavior: 'smooth' });
  runBackgroundScan(true);
};

$('#toggleCamBtn').onclick = toggleCamera;
$('#runScanBtn').onclick = () => runBackgroundScan(true);
$('#speakCueBtn').onclick = () => speakCoaching();
$('#shutterBtn').onclick = () => captureViewfinder(false);
$('#exportStoryBtn').onclick = () => captureViewfinder(true);

$('#helperModeBtn').onclick = () => {
  director.helperOpen = !director.helperOpen;
  updateDirectorView();
};
$('#closeHelperBtn').onclick = () => {
  director.helperOpen = false;
  updateDirectorView();
};

// Mode A / B / C switcher — NEVER stops the live WebRTC camera!
$$('.mode-tab').forEach(btn => {
  btn.onclick = () => {
    director.mode = btn.dataset.mode;
    updateDirectorView();
    if (director.mode === 'C') speakCoaching();
  };
});

// Interactive Framing Controls
$('#btnFlip180').onclick = () => {
  director.flip180 = !director.flip180;
  updateDirectorView();
};
$('#btnFrontFoot').onclick = () => {
  director.frontFoot = !director.frontFoot;
  updateDirectorView();
};
$$('.lens-btn').forEach(btn => {
  btn.onclick = () => {
    director.lens = btn.dataset.lens;
    updateDirectorView();
  };
});
$('#distSlider').oninput = e => {
  director.distance = +e.target.value;
  updateDirectorView();
};
$('#opacitySlider').oninput = e => {
  director.opacity = +e.target.value;
  updateDirectorView();
};
$('#gridToggle').onchange = e => {
  director.showGrid = e.target.checked;
  updateDirectorView();
};

$('#quickSceneSelect').onchange = e => {
  director.customPhotoUrl = null;
  director.spotId = e.target.value;
  runBackgroundScan(true);
};

$('#recipeSelect').onchange = e => {
  director.recipeIdx = +e.target.value;
  const r = getActiveRecipe();
  director.flip180 = r.recommendedFlip;
  director.lens = r.recommendedLens;
  director.frontFoot = r.recommendedFrontFoot;
  updateDirectorView();
};

// Upload custom photo for live background scan
$('#uploadSceneInput').onchange = e => {
  const file = e.target.files?.[0];
  if (!file) return;
  if (director.customPhotoUrl) URL.revokeObjectURL(director.customPhotoUrl);
  director.customPhotoUrl = URL.createObjectURL(file);
  director.customPhotoName = file.name;
  stopCamera();
  const img = $('#stageBgImg');
  img.onload = () => runBackgroundScan(true);
  img.src = director.customPhotoUrl;
  e.target.value = '';
};

// Search & Filter
$('#searchInput').oninput = e => {
  searchQuery = e.target.value;
  spotLimit = 8;
  renderSpots();
};
$('#loadMoreBtn').onclick = () => {
  spotLimit += 8;
  renderSpots();
};

$('#openSaved').onclick = showSavedModal;
$('#openStrategyModalBtn').onclick = showStrategyModal;
$('#openCreditsBtn').onclick = showCreditsModal;

// Delegated clicks
document.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.dataset.filter) {
    activeFilter = btn.dataset.filter;
    spotLimit = 8;
    renderSpots();
    return;
  }

  if (btn.dataset.loadSpot) {
    director.customPhotoUrl = null;
    director.spotId = btn.dataset.loadSpot;
    if (btn.dataset.closeAfter && modal.open) closeModal();
    $('#director').scrollIntoView({ behavior: 'smooth' });
    runBackgroundScan(true);
    toast(t('toastSpotLoaded'));
    return;
  }

  if (btn.dataset.detailSpot) {
    showSpotDetail(btn.dataset.detailSpot);
    return;
  }

  if (btn.dataset.applyRecipe !== undefined) {
    director.recipeIdx = +btn.dataset.applyRecipe;
    const r = getActiveRecipe();
    director.flip180 = r.recommendedFlip;
    director.lens = r.recommendedLens;
    director.frontFoot = r.recommendedFrontFoot;
    director.distance = 0;
    updateDirectorView();
    $('#director').scrollIntoView({ behavior: 'smooth' });
    if (director.mode === 'C') speakCoaching();
    return;
  }

  if (btn.dataset.saveSpot) {
    const id = btn.dataset.saveSpot;
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

  if (btn.dataset.claimCoupon) {
    const cid = btn.dataset.claimCoupon;
    if (!claimedCoupons.includes(cid)) {
      claimedCoupons.push(cid);
      persist('pilk-v5-coupons', claimedCoupons);
      toast(t('toastCoupon'));
      renderScanCard();
      updateSaveCount();
      if (modal.open) {
        btn.classList.add('claimed');
        btn.textContent = t('couponClaimed');
      }
    }
    return;
  }

  if (btn.dataset.removeCoupon) {
    claimedCoupons = claimedCoupons.filter(x => x !== btn.dataset.removeCoupon);
    persist('pilk-v5-coupons', claimedCoupons);
    renderScanCard();
    updateSaveCount();
    showSavedModal();
  }
});

// Highlight active nav link
$$('.desktop-nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    $$('.desktop-nav a').forEach(x => x.classList.toggle('active', x === a));
  });
});

// Initial Boot
renderAll();
// Trigger gentle initial pixel analysis once default image loads
const initImg = $('#stageBgImg');
if (initImg.complete) {
  director.lastLightAnalysis = analyzeCanvasPixels();
  renderScanCard();
} else {
  initImg.addEventListener('load', () => {
    director.lastLightAnalysis = analyzeCanvasPixels();
    renderScanCard();
  }, { once: true });
}
