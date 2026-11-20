// PILK v005 — Picture It Like Korean (Camera-First AI Photo Director & Local Discovery Data)

const copy = {
  ko: {
    brandSub: 'Picture It Like Korean',
    navDirector: 'PILK 카메라',
    navCompare: '왜 한국식 구도?',
    navDiscover: '배경 인식 · 스팟',
    navRecipes: 'K-포즈 레시피',
    navEcosystem: '비즈니스 · 전략',
    navSurvey: '고객 설문 ↗',
    myFrames: '저장함',

    heroEyebrow: 'PICTURE IT LIKE KOREAN · 실시간 AI 포토 디렉터',
    heroTitle: '한국인처럼 찍는 법,<br>카메라가 <em>실시간으로</em> 알려줘요.',
    heroDesc: '한복에만 갇힌 여행 앱이 아닙니다. 스마트폰을 거꾸로 뒤집는 각도부터 "한 보 뒤로", "발끝 맞추기", "앞발 빼기"까지 실시간 AR·음성으로 코칭하고, 찍고 있는 배경을 자동 인식해 주변 관광지와 로컬 제휴 쿠폰까지 바로 추천합니다.',
    ctaStartCam: '실시간 카메라 연결',
    ctaScanBg: '배경 자동 인식 스캔',
    ctaSurvey: '검증 설문 ↗',
    heroPitch1: '🔄 180° 폰 뒤집기 & 0.5× 광각 실시간 가이드',
    heroPitch2: '🦶 발끝 정렬 · 앞발 빼기 · 거리 코칭',
    heroPitch3: '🗺️ 배경 자동 파악 → 주변 관광지 & 로컬 쿠폰 추천',

    // Interactive Studio
    studioEyebrow: 'LIVE PILK DIRECTOR · 인터랙티브 체험',
    modeA: 'A. 자동 AR 가이드',
    modeB: 'B. 단계별 레시피',
    modeC: 'C. 실시간 음성 코칭',
    helperModeBtn: '👥 찍어주는 사람용 10초 카드',
    helperModeTitle: '찍어주는 분께 이 화면을 보여주세요!',
    helperModeClose: '카메라로 돌아가기',
    connectCam: '실제 카메라 켜기',
    stopCam: '카메라 끄기',
    uploadBgBtn: '내 사진으로 배경 스캔',
    scanNowBtn: '배경 인식 & 주변 추천',
    speakCueBtn: '🔊 음성 코칭 듣기',
    snapCleanBtn: '사진 촬영 저장',
    snapStoryBtn: '인스타 스토리 카드 저장',
    demoBadge: '시뮬레이션 배경 · 실시간 테스트 가능',
    liveBadge: 'LIVE 카메라 연결됨',
    kMatchLabel: '한국 감성 구도 일치율',
    flipToggle: '폰 180° 뒤집기',
    lensLabel: '렌즈',
    distLabel: '촬영 거리 시뮬레이터',
    distClose: '너무 가까움 (한 보 뒤로)',
    distPerfect: '완벽한 비율 (발끝 정렬)',
    distFar: '조금 멀어요 (반 보 앞으로)',
    frontFootToggle: '앞발 반 걸음 빼기',
    gyroLabel: '자이로 기울기',
    sceneSelectLabel: '테스트 배경 선택',
    poseSelectLabel: 'K-포즈 / 앵글 선택',
    opacityLabel: 'AR 실루엣 투명도',
    gridLabel: '발끝 기준선 & 3분할 격자',

    // Scene Recognition Panel
    scanIdleTitle: '촬영 배경을 스캔해 보세요',
    scanIdleDesc: '현재 화면의 색감·밝기·장소를 자동 분석해 최적의 한국식 앵글과 도보 10분 내 추천 관광지·제휴 쿠폰을 찾아드립니다.',
    scanRunning: '배경 구도·조도·장소 특징 분석 중...',
    scanDetectedBadge: 'AI 배경 인식 완료',
    scanLightLabel: '조명 & 색감 분석',
    scanRecipeLabel: '자동 추천 한국식 촬영 세팅',
    scanNearbyTitle: '이 배경 근처 추천 관광지 & 로컬 제휴 혜택',
    claimCoupon: '쿠폰 받기',
    couponClaimed: '쿠폰 저장됨 ✓',
    tryNearbySpot: '이 배경으로 전환',

    // Before / After
    compareEyebrow: 'WHY PICTURE IT LIKE KOREAN?',
    compareTitle: '외국인 관광객의 흔한 사진 vs 한국인의 인생샷 공식',
    compareDesc: '비싼 장비가 아니라 "폰 뒤집기·발끝 하단 정렬·앞발 빼기·여백 비율" 네 가지 공식의 차이입니다. PILK가 이를 화면 위에서 실시간으로 맞춰줍니다.',
    beforeBadge: 'BEFORE · 흔한 여행 사진',
    afterBadge: 'AFTER · PILK 한국식 코칭',

    // Spots Explorer
    discoverEyebrow: '44 KOREAN SNS BEST-CUT SPOTS',
    discoverTitle: '배경 인식 지원 스팟 44곳 — 클릭하면 바로 카메라로',
    discoverDesc: '고궁·한옥을 넘어 성수·연남·을지로·한남·해변·드라마 성지까지. 스팟을 고르면 해당 배경과 주변 로컬 추천이 PILK 카메라에 즉시 로드됩니다.',
    filterAll: '전체',
    filterLocal: 'K-픽 로컬 핫플',
    filterDrama: 'K-드라마 성지',
    filterHeritage: '고궁 · 한옥',
    filterNature: '바다 · 자연',
    searchPlaceholder: '장소, 지역, 드라마, 해시태그 검색',
    emptySearch: '일치하는 장소가 없습니다. 다른 키워드를 입력해 보세요.',
    spotCountUnit: '개 스팟',
    shownUnit: '표시 중',
    loadMore: '스팟 더 보기',
    openInCamera: 'PILK 카메라로 체험',
    viewDetails: '상세 · 주변 추천',
    openMap: '구글 지도',
    instagramLink: '인스타 검색',
    save: '저장',
    saved: '저장됨',

    // Recipes
    recipesEyebrow: 'K-ANGLE & POSE RECIPES',
    recipesTitle: '한국인들이 실제로 쓰는 6가지 인생샷 촬영 공식',
    recipesDesc: '포즈를 억지로 외울 필요 없이, 원하는 무드를 누르면 AR 가이드와 실시간 음성 지시가 바로 켜집니다.',
    applyRecipe: '이 공식으로 코칭 시작',

    // Strategy / Ecosystem Section
    ecoEyebrow: 'DISTRIBUTION & MONETIZATION STRATEGY · MENTOR PIVOT',
    ecoTitle: '왜 단독 한복 앱이 아니라 "PILK 포토 & 로컬 디스커버리"인가?',
    ecoDesc: '멘토 피드백을 전면 반영해 좁은 한복 대여 시장을 넘어, 웹 즉시 실행 + SNS 공유 브릿지 + 배경 인식 기반 주변 카페/팝업/전시 제휴 모델로 확장했습니다.',
    ecoBtnDoc: '멘토 피드백 답변 & 사업 전략 전문 보기',
    ecoBtnSurvey: '개선된 고객 검증 설문 보기 ↗',

    // Modals & Toasts
    savedTitle: '저장한 스팟 & 로컬 쿠폰',
    savedEmpty: '아직 저장한 스팟이나 쿠폰이 없습니다. 마음에 드는 장소나 제휴 혜택을 저장해 보세요.',
    savedCouponsTitle: '발급받은 로컬 제휴 쿠폰',
    savedSpotsTitle: '저장한 촬영 스팟',
    creditsTitle: '사진 출처 및 안내',
    creditsDesc: '촬영지 참고 사진은 아래 출처를 사용했으며, AR 가이드·배경 분석 시뮬레이션·스토리 카드 기능은 브라우저 내에서 로컬 처리됩니다.',
    toastAdded: '저장함에 추가했어요.',
    toastRemoved: '저장함에서 삭제했어요.',
    toastCoupon: '로컬 제휴 쿠폰을 저장함에 발급했어요! 현장에서 PILK 화면을 보여주세요.',
    toastVoice: '실시간 음성 코칭을 재생합니다.',
    toastPhotoSaved: '사진을 기기에 저장했어요!',
    toastStorySaved: '인스타그램 스토리용 PILK 카드를 저장했어요!',
    toastCameraFail: '실제 카메라 권한을 확인할 수 없어 시뮬레이션 모드로 유지됩니다.',
    toastSpotLoaded: '배경이 PILK 카메라에 로드되었습니다! 아래 배경 스캔도 확인해 보세요.',
    footerLine: 'PILK v005 — Picture It Like Korean · 카메라로 시작하는 한국 로컬 여행',
    creditsBtn: '사진 출처'
  },

  en: {
    brandSub: 'Picture It Like Korean',
    navDirector: 'PILK Camera',
    navCompare: 'Why K-Angle?',
    navDiscover: 'Scene & Spots',
    navRecipes: 'K-Pose Recipes',
    navEcosystem: 'Strategy',
    navSurvey: 'Survey ↗',
    myFrames: 'Saved',

    heroEyebrow: 'PICTURE IT LIKE KOREAN · REAL-TIME AI PHOTO DIRECTOR',
    heroTitle: 'Shoot Like a Korean,<br>Coached <em>Live</em> on Screen.',
    heroDesc: 'Beyond narrow Hanbok rentals—PILK coaches you in real time ("Flip phone 180°", "Step back", "Align toes to bottom line", "Extend front foot") and automatically recognizes your background to recommend nearby attractions & local cafe/pop-up coupons.',
    ctaStartCam: 'Connect Live Camera',
    ctaScanBg: 'Auto-Scan Background',
    ctaSurvey: 'Validation Survey ↗',
    heroPitch1: '🔄 180° Phone-Flip & 0.5× Wide Live Guidance',
    heroPitch2: '🦶 Foot Alignment · Front-Foot Out · Step Cues',
    heroPitch3: '🗺️ Auto Scene Detection → Nearby Spots & Coupons',

    studioEyebrow: 'LIVE PILK DIRECTOR · INTERACTIVE DEMO',
    modeA: 'A. Auto-AR Guide',
    modeB: 'B. Step Recipe',
    modeC: 'C. Live Voice Coach',
    helperModeBtn: '👥 10s Helper Card',
    helperModeTitle: 'Show This Screen to Whoever Takes Your Photo!',
    helperModeClose: 'Back to Camera',
    connectCam: 'Turn On Live Camera',
    stopCam: 'Stop Camera',
    uploadBgBtn: 'Scan My Photo',
    scanNowBtn: 'Scan Scene & Nearby',
    speakCueBtn: '🔊 Play Voice Coach',
    snapCleanBtn: 'Save Photo',
    snapStoryBtn: 'Export IG Story Card',
    demoBadge: 'Interactive Scene Demo · Ready to Test',
    liveBadge: 'LIVE Camera Active',
    kMatchLabel: 'Korean Framing Match',
    flipToggle: 'Flip Phone 180°',
    lensLabel: 'Lens',
    distLabel: 'Distance Simulator',
    distClose: 'Too Close (Step Back)',
    distPerfect: 'Perfect Ratio (Foot Align)',
    distFar: 'Too Far (Half Step Forward)',
    frontFootToggle: 'Extend Front Foot',
    gyroLabel: 'Device Tilt',
    sceneSelectLabel: 'Test Background',
    poseSelectLabel: 'K-Angle / Pose Recipe',
    opacityLabel: 'AR Guide Opacity',
    gridLabel: 'Foot Line & 3×3 Grid',

    scanIdleTitle: 'Scan Your Background Scene',
    scanIdleDesc: 'Analyzes frame lighting, color warmth, and location context to suggest the best Korean angle plus nearby attractions & local partner deals within a 10-min walk.',
    scanRunning: 'Analyzing scene composition, lighting & nearby spots...',
    scanDetectedBadge: 'AI Scene Recognized',
    scanLightLabel: 'Lighting & Tone Analysis',
    scanRecipeLabel: 'Auto-Selected Korean Camera Setup',
    scanNearbyTitle: 'Nearby Attractions & Local Partner Deals',
    claimCoupon: 'Claim Coupon',
    couponClaimed: 'Claimed ✓',
    tryNearbySpot: 'Load Scene',

    compareEyebrow: 'WHY PICTURE IT LIKE KOREAN?',
    compareTitle: 'Typical Tourist Photo vs. Korean SNS Formula',
    compareDesc: 'It is not expensive gear—it is 4 simple rules: 180° phone-flip, toes on the bottom 10% line, front-foot extension, and intentional headroom. PILK guides them live.',
    beforeBadge: 'BEFORE · Typical Tourist Shot',
    afterBadge: 'AFTER · PILK Korean Formula',

    discoverEyebrow: '44 KOREAN SNS BEST-CUT SPOTS',
    discoverTitle: '44 Scene-Supported Spots — Tap to Launch in Camera',
    discoverDesc: 'From Seongsu pop-ups and Euljiro neon alleys to palaces, beaches, and K-Drama spots. Selecting any spot loads its scene & nearby local deals into the PILK Director.',
    filterAll: 'All',
    filterLocal: 'K-Pick Local',
    filterDrama: 'K-Drama',
    filterHeritage: 'Palace · Hanok',
    filterNature: 'Beach · Nature',
    searchPlaceholder: 'Search spot, district, drama, tag',
    emptySearch: 'No spots matched. Try another keyword or category.',
    spotCountUnit: 'spots',
    shownUnit: 'shown',
    loadMore: 'Load More Spots',
    openInCamera: 'Coach in PILK Camera',
    viewDetails: 'Details & Nearby',
    openMap: 'Google Maps',
    instagramLink: 'Instagram',
    save: 'Save',
    saved: 'Saved',

    recipesEyebrow: 'K-ANGLE & POSE RECIPES',
    recipesTitle: '6 Viral Korean Shooting Formulas Built Into Your Viewfinder',
    recipesDesc: 'No awkward posing—tap a mood to activate its AR silhouette, foot line, and live voice cues.',
    applyRecipe: 'Launch This Recipe',

    ecoEyebrow: 'DISTRIBUTION & MONETIZATION STRATEGY · MENTOR PIVOT',
    ecoTitle: 'Why "PILK Photo & Local Discovery" Beats a Narrow Hanbok App',
    ecoDesc: 'Built directly on mentor feedback: expanding beyond Hanbok rentals into an entertaining camera-first experience with instant web/QR access, IG Story sharing, and local cafe/pop-up affiliate discovery.',
    ecoBtnDoc: 'View Mentor Q&A & Business Strategy',
    ecoBtnSurvey: 'Open Updated Validation Survey ↗',

    savedTitle: 'Saved Spots & Local Partner Coupons',
    savedEmpty: 'Nothing saved yet. Bookmark spots or claim nearby local partner coupons.',
    savedCouponsTitle: 'Claimed Local Coupons',
    savedSpotsTitle: 'Bookmarked Spots',
    creditsTitle: 'Photo Credits & Privacy',
    creditsDesc: 'Spot reference photos belong to their original creators listed below. Camera frames and uploaded photos are processed 100% locally in your browser.',
    toastAdded: 'Saved to your collection.',
    toastRemoved: 'Removed from saved.',
    toastCoupon: 'Coupon saved! Show your PILK screen at the local partner shop.',
    toastVoice: 'Playing live voice coaching.',
    toastPhotoSaved: 'Photo downloaded to your device!',
    toastStorySaved: 'PILK Instagram Story card saved!',
    toastCameraFail: 'Camera permission unavailable—staying in interactive simulation mode.',
    toastSpotLoaded: 'Scene loaded into PILK Camera! Check the auto-scanned nearby spots below.',
    footerLine: 'PILK v005 — Picture It Like Korean · Camera-First Korea Travel Discovery',
    creditsBtn: 'Photo Credits'
  },

  ja: {
    brandSub: 'Picture It Like Korean',
    navDirector: 'PILKカメラ',
    navCompare: '韓国式構図とは',
    navDiscover: '背景認識・スポット',
    navRecipes: 'K-ポーズ公式',
    navEcosystem: '戦略・モデル',
    navSurvey: 'アンケート ↗',
    myFrames: '保存一覧',

    heroEyebrow: 'PICTURE IT LIKE KOREAN · リアルタイムAIフォトディレクター',
    heroTitle: '韓国人のように撮るコツ、<br>カメラが<em>リアルタイム</em>指導。',
    heroDesc: '韓服だけの狭いアプリではありません。「スマホを180°逆さまに」「一歩後ろへ」「つま先を下端に」「前足を半歩出す」までリアルタイムAR・音声でコーチングし、撮影中の背景を自動認識して周辺観光地やローカル提携クーポンまで提案します。',
    ctaStartCam: 'ライブカメラ起動',
    ctaScanBg: '背景を自動スキャン',
    ctaSurvey: '顧客検証アンケート ↗',
    heroPitch1: '🔄 スマホ180°逆さま＆0.5×広角ライブガイド',
    heroPitch2: '🦶 足元ライン合わせ・前足出し・距離コーチ',
    heroPitch3: '🗺️ 背景自動認識 → 周辺観光地＆提携クーポン提案',

    studioEyebrow: 'LIVE PILK DIRECTOR · インタラクティブ体験',
    modeA: 'A. 自動ARガイド',
    modeB: 'B. ステップ解説',
    modeC: 'C. リアルタイム音声',
    helperModeBtn: '👥 撮影者用10秒カード',
    helperModeTitle: '撮ってくれる人にこの画面を見せてください！',
    helperModeClose: 'カメラに戻る',
    connectCam: '実カメラをオン',
    stopCam: 'カメラをオフ',
    uploadBgBtn: '自分の写真で背景スキャン',
    scanNowBtn: '背景認識＆周辺おすすめ',
    speakCueBtn: '🔊 音声コーチを聞く',
    snapCleanBtn: '写真を保存',
    snapStoryBtn: 'IGストーリーカード保存',
    demoBadge: 'インタラクティブ背景・すぐテスト可能',
    liveBadge: 'LIVEカメラ接続中',
    kMatchLabel: '韓国感性アングル一致率',
    flipToggle: 'スマホ180°逆さま',
    lensLabel: 'レンズ',
    distLabel: '撮影距離シミュレーター',
    distClose: '近すぎ（一歩後ろへ）',
    distPerfect: '完璧な比率（足元合わせ）',
    distFar: '遠い（半歩前へ）',
    frontFootToggle: '前足を半歩前に出す',
    gyroLabel: '端末の傾き',
    sceneSelectLabel: 'テスト背景を選択',
    poseSelectLabel: 'K-ポーズ / アングル公式',
    opacityLabel: 'ARガイド透明度',
    gridLabel: '足元ライン＆3分割グリッド',

    scanIdleTitle: '撮影背景をスキャンしてみましょう',
    scanIdleDesc: '現在の画面の明るさ・色調・場所を自動分析し、最適な韓国式アングルと徒歩10分圏内のおすすめ観光地・提携クーポンを提案します。',
    scanRunning: '背景の構図・明るさ・周辺情報を分析中...',
    scanDetectedBadge: 'AI背景認識完了',
    scanLightLabel: '光・色調の自動分析',
    scanRecipeLabel: '自動おすすめ韓国式セッティング',
    scanNearbyTitle: 'この背景周辺のおすすめ観光地＆ローカル提携特典',
    claimCoupon: 'クーポン取得',
    couponClaimed: '取得済み ✓',
    tryNearbySpot: 'この背景へ切替',

    compareEyebrow: 'WHY PICTURE IT LIKE KOREAN?',
    compareTitle: 'よくある旅行写真 vs 韓国人の「人生ショット」公式',
    compareDesc: '高価な機材ではなく「スマホ逆さま・足元下端合わせ・前足出し・余白比率」の4つの公式の差。PILKが撮影画面でリアルタイムに導きます。',
    beforeBadge: 'BEFORE · よくある旅行写真',
    afterBadge: 'AFTER · PILK韓国式コーチング',

    discoverEyebrow: '44 KOREAN SNS BEST-CUT SPOTS',
    discoverTitle: '背景認識対応スポット44選 — タップですぐカメラへ',
    discoverDesc: '古宮・韓屋だけでなく聖水・延南・乙支路・漢南・海辺・ドラマ聖地まで。選ぶとそのままPILKカメラに背景と周辺提携情報が読み込まれます。',
    filterAll: 'すべて',
    filterLocal: 'Kピック人気街',
    filterDrama: 'Kドラマ聖地',
    filterHeritage: '古宮・韓屋',
    filterNature: '海・自然',
    searchPlaceholder: 'スポット・地域・ドラマで検索',
    emptySearch: '該当するスポットが見つかりません。',
    spotCountUnit: '件のスポット',
    shownUnit: '件表示中',
    loadMore: 'もっと見る',
    openInCamera: 'PILKカメラで体験',
    viewDetails: '詳細・周辺おすすめ',
    openMap: 'Googleマップ',
    instagramLink: 'Instagram',
    save: '保存',
    saved: '保存済み',

    recipesEyebrow: 'K-ANGLE & POSE RECIPES',
    recipesTitle: '韓国人が実際に使う6つの人生ショット撮影公式',
    recipesDesc: 'ポーズを暗記する必要なし。撮りたいムードを選ぶだけでARガイドと音声指示が起動します。',
    applyRecipe: 'この公式でコーチ開始',

    ecoEyebrow: 'DISTRIBUTION & MONETIZATION STRATEGY · MENTOR PIVOT',
    ecoTitle: 'なぜ「韓服アプリ」ではなく「PILKフォト＆ローカル発見」なのか？',
    ecoDesc: 'メンターのフィードバックを反映し、狭い韓服市場から脱却。インストール不要Web/QR＋SNSシェア＋背景認識連動の周辺カフェ・ポップアップ提携モデルへ進化しました。',
    ecoBtnDoc: 'メンター質問への回答・事業戦略を見る',
    ecoBtnSurvey: '改善版 顧客検証アンケート ↗',

    savedTitle: '保存したスポット＆提携クーポン',
    savedEmpty: 'まだ保存がありません。お気に入りの場所やローカルクーポンを保存してみてください。',
    savedCouponsTitle: '取得したローカル提携クーポン',
    savedSpotsTitle: '保存したスポット',
    creditsTitle: '写真の出典とプライバシー',
    creditsDesc: 'スポット参考写真は下記の出典を使用しています。カメラ映像やアップロード写真はブラウザ内でのみ処理され外部送信されません。',
    toastAdded: '保存一覧に追加しました。',
    toastRemoved: '保存一覧から削除しました。',
    toastCoupon: 'ローカル提携クーポンを保存しました！店舗でPILK画面をご提示ください。',
    toastVoice: 'リアルタイム音声コーチを再生します。',
    toastPhotoSaved: '写真を端末に保存しました！',
    toastStorySaved: 'Instagramストーリー用PILKカードを保存しました！',
    toastCameraFail: 'カメラ権限が取得できないためシミュレーションモードで動作します。',
    toastSpotLoaded: '背景をPILKカメラに読み込みました！下の周辺おすすめもご覧ください。',
    footerLine: 'PILK v005 — Picture It Like Korean · カメラから始まる韓国ローカル旅',
    creditsBtn: '写真の出典'
  }
};

// 6 Signature Korean Shooting Recipes (incorporating mentor's exact micro-directives)
const kRecipes = [
  {
    id: 'phone_flip_ratio',
    svgType: 'flip',
    tag: '폰뒤집기샷',
    bg: '#f4ebe2',
    recommendedFlip: true,
    recommendedLens: '1×',
    recommendedFrontFoot: true,
    badge: 'SIGNATURE #01 · PHONE FLIP 180°',
    ko: {
      title: '180° 폰 뒤집기 비율 깡패 샷',
      subtitle: '다리 길어 보이는 한국인 1순위 국룰 공식',
      microCue: '스마트폰을 거꾸로 뒤집어 배꼽 높이에 두고, 발끝을 하단 선에 맞춘 뒤 앞발을 반 걸음 빼세요!',
      steps: [
        '스마트폰을 180° 거꾸로 뒤집어 렌즈가 바닥에 가깝게 잡으세요.',
        '피사체에서 한 보 뒤로 물러나고, 화면 맨 아래 기준선에 발끝을 딱 맞추세요.',
        '모델은 앞발을 카메라 쪽으로 반 걸음 살짝 내밀고 시선은 자연스럽게 옆으로.'
      ],
      helperText: '① 폰을 180° 거꾸로 뒤집어 주세요\n② 발끝을 화면 맨 아래 점선에 맞춰주세요\n③ 머리 위 배경 여백을 35% 남겨주세요!'
    },
    en: {
      title: '180° Upside-Down Leg-Lengthening Shot',
      subtitle: 'Korea\'s #1 viral secret for editorial full-body proportions',
      microCue: 'Flip your phone 180° upside down at waist height, align toes to the bottom line, and extend your front foot half a step!',
      steps: [
        'Turn your smartphone 180° upside down so the lens sits lower.',
        'Step one pace back and anchor the subject\'s shoes directly on the bottom guide line.',
        'Extend the front foot half a step toward the lens and relax your shoulders.'
      ],
      helperText: '① Flip the phone 180° upside down\n② Put my toes right on the bottom dashed line\n③ Leave ~35% sky/background above my head!'
    },
    ja: {
      title: '180°スマホ逆さま・脚長黄金比ショット',
      subtitle: '韓国人が必ず使うNo.1の全身撮影テクニック',
      microCue: 'スマホを180度逆さまにして腰の高さで構え、つま先を下端ラインに合わせて前足を半歩出してください！',
      steps: [
        'スマホを180°逆さまに持ち、レンズを地面に近づけます。',
        '一歩後ろに下がり、画面一番下のガイド線につま先をぴったり合わせます。',
        '写る人は前足を半歩前に出し、肩の力を抜いて撮影します。'
      ],
      helperText: '① スマホを180°逆さまに持ってください\n② つま先を画面下の点線に合わせてください\n③ 頭の上に背景の余白を35%残してください！'
    }
  },
  {
    id: 'high_angle_05',
    svgType: 'high05',
    tag: '항공샷',
    bg: '#f2e5d9',
    recommendedFlip: false,
    recommendedLens: '0.5×',
    recommendedFrontFoot: false,
    badge: 'MZ TREND #02 · 0.5× HIGH ANGLE',
    ko: {
      title: '0.5× 초광각 MZ 항공샷',
      subtitle: '카메라는 머리 위로 높게, 턱은 살짝 들고 시선은 위로',
      microCue: '렌즈를 0.5× 초광각으로 바꾸고 팔을 머리 위로 쭉 올려 아래로 45° 기울이세요!',
      steps: [
        '기본 카메라에서 0.5× 초광각 렌즈로 전환하세요.',
        '촬영자는 한 보 앞으로 다가와 폰을 머리 위로 높이 들고 아래로 기울입니다.',
        '모델은 턱을 살짝 들고 렌즈를 올려다보며 한 손을 가볍게 뻗어보세요.'
      ],
      helperText: '① 렌즈를 0.5× 광각으로 바꿔주세요\n② 폰을 머리 위로 높이 들어 아래를 향해 주세요\n③ 신발 끝까지 화면에 담아주세요!'
    },
    en: {
      title: '0.5× Ultra-Wide MZ High-Angle',
      subtitle: 'Hold high above head, gaze up for trendy Korean street energy',
      microCue: 'Switch to 0.5× ultra-wide, raise the phone high above your head, and tilt 45° downward!',
      steps: [
        'Switch your camera to the 0.5× ultra-wide lens.',
        'Take one step closer, hold the phone high overhead, and angle down.',
        'Lift your chin slightly toward the lens so your full outfit and pavement show.'
      ],
      helperText: '① Switch to 0.5× ultra-wide lens\n② Hold the phone high overhead tilted down\n③ Keep my shoes inside the lower frame!'
    },
    ja: {
      title: '0.5× 超広角 MZハイアングル',
      subtitle: 'カメラは頭上高く、視線は上へ。韓国Z世代の定番',
      microCue: 'レンズを0.5×超広角に切り替え、腕を頭上に高く上げて下に45°傾けてください！',
      steps: [
        'カメラを0.5×超広角レンズに切り替えます。',
        '一歩近づいてスマホを頭より高く掲げ、見下ろす角度に傾けます。',
        '少しあごを上げてレンズを見上げ、靴先までフレームに入れます。'
      ],
      helperText: '① レンズを0.5×超広角にしてください\n② スマホを頭上に高く上げて見下ろしてください\n③ 靴の先まで画面に入れてください！'
    }
  },
  {
    id: 'candid_lookback',
    svgType: 'lookback',
    tag: '뒤돌아보기포즈',
    bg: '#e9eddf',
    recommendedFlip: true,
    recommendedLens: '1×',
    recommendedFrontFoot: true,
    badge: 'CINEMATIC #03 · WALK & LOOK BACK',
    ko: {
      title: '앞발 빼기 & 자연스러운 뒤돌아보기',
      subtitle: '카메라 앞에서 어색할 때 100% 성공하는 시네마틱 스냅',
      microCue: '한 보 뒤로 물러나고, 천천히 걸어가다 앞발을 딛는 순간 어깨 너머로 뒤돌아보세요!',
      steps: [
        '골목이나 회랑의 소실점이 중앙에 오도록 프레임을 잡으세요.',
        '천천히 두 걸음 걸어가다 앞발을 내딛는 순간 어깨 너머로 돌아봅니다.',
        '셔터를 3~4번 연속 촬영해 가장 자연스러운 순간을 고르세요.'
      ],
      helperText: '① 한 보 뒤로 가서 길의 선을 맞춰주세요\n② 제가 걸어가다 뒤돌 때 3~4장 연사해 주세요\n③ 발끝을 하단 선에 맞춰주세요!'
    },
    en: {
      title: 'Front-Foot Walk & Candid Look-Back',
      subtitle: 'Zero awkwardness—movie-still energy along alleys & palaces',
      microCue: 'Step back one pace, walk slowly forward, and glance over your shoulder as your front foot steps!',
      steps: [
        'Align the alley or corridor lines toward the center vanishing point.',
        'Walk two slow steps away and glance back over your shoulder mid-stride.',
        'Fire 3–4 burst shots to catch effortless natural motion.'
      ],
      helperText: '① Step one pace back to capture the alley depth\n② Tap shutter 3–4 times while I walk & look back\n③ Keep my feet near the bottom line!'
    },
    ja: {
      title: '自然な歩き＆肩越し振り返りスナップ',
      subtitle: 'カメラの前でぎこちない時に100%成功する映画風カット',
      microCue: '一歩下がって、ゆっくり歩きながら前足を出した瞬間に肩越しに振り返ってください！',
      steps: [
        '路地や回廊のラインが中央に集まるよう構えます。',
        'ゆっくり2歩ほど歩き、前足を踏み出す瞬間に肩越しに振り返ります。',
        '3〜4枚連写して一番自然な動きの一枚を選びます。'
      ],
      helperText: '① 一歩下がって路地の奥行きを入れてください\n② 歩きながら振り返る瞬間を3〜4枚連写してください\n③ 足元を下端ラインに合わせてください！'
    }
  },
  {
    id: 'mirror_ootd',
    svgType: 'mirror',
    tag: '거울셀카',
    bg: '#e8e8f1',
    recommendedFlip: true,
    recommendedLens: '1×',
    recommendedFrontFoot: true,
    badge: 'STREET OOTD #04 · MIRROR SELFIE',
    ko: {
      title: '성수·한남 쇼룸 무심한 거울 셀카',
      subtitle: '팝업스토어·카페 전신거울에서 혼자서도 완벽하게',
      microCue: '거울 앞에서 몸을 15° 틀고 앞발을 반 걸음 앞으로 빼세요. 폰으로 턱선을 살짝 가리면 완성!',
      steps: [
        '전신거울 앞에서 몸을 살짝 사선(15°)으로 돌리고 앞발을 반 걸음 내밀어요.',
        '스마트폰을 뒤집어 잡거나 눈 아래 위치로 들어 얼굴 일부를 자연스럽게 가립니다.',
        '신발 끝과 거울 프레임 상단 여백이 모두 들어오게 맞춰 촬영하세요.'
      ],
      helperText: '① 전신거울 앞 사선(15°) 서기\n② 앞발을 반 걸음 거울 쪽으로 내밀기\n③ 신발까지 화면에 모두 담기!'
    },
    en: {
      title: 'Seongsu Showroom Effortless Mirror Selfie',
      subtitle: 'Nail solo OOTD shots in cafes, pop-ups, and boutiques',
      microCue: 'Angle your body 15° to the mirror, step your front foot forward, and hold the phone slightly low!',
      steps: [
        'Stand at a slight 15° angle in front of a full-length mirror and step one foot forward.',
        'Flip your phone or hold it around chin level to frame a relaxed Korean OOTD vibe.',
        'Leave breathing room above your head and include down to your shoes.'
      ],
      helperText: '① Angle body 15° in front of mirror\n② Extend front foot half a step forward\n③ Include full outfit down to shoes!'
    },
    ja: {
      title: '聖水・漢南ショールーム風 鏡セルフィー',
      subtitle: 'ポップアップやカフェの全身鏡でひとりでもおしゃれに',
      microCue: '鏡の前で体を15°斜めにし、前足を半歩前に出してください。スマホで顎を少し隠すと完成！',
      steps: [
        '全身鏡の前で体を少し斜め（15°）にし、片足を半歩前に出します。',
        'スマホを逆さまに持つか顔の下半分をさりげなく隠します。',
        '靴先と頭上の余白がバランスよく入るようにシャッターを押します。'
      ],
      helperText: '① 鏡の前で体を15°斜めにする\n② 前足を半歩前に出す\n③ 靴の先までフレームに収める！'
    }
  },
  {
    id: 'cat_shadow',
    svgType: 'shadow',
    tag: '고양이그림자',
    bg: '#e6e9dc',
    recommendedFlip: false,
    recommendedLens: '0.5×',
    recommendedFrontFoot: false,
    badge: 'FUN VIRAL #05 · SHADOW PLAY',
    ko: {
      title: '햇살 좋은 날 고양이 그림자 샷',
      subtitle: '얼굴 부담 없이 한국 감성 피드 완성하는 재미있는 컷',
      microCue: '해를 등지고 서서 팔꿈치로 고양이 귀, 양손 세 손가락으로 수염을 만들고 바닥 그림자를 찍으세요!',
      steps: [
        '오후 햇살에 바닥 그림자가 선명하게 떨어지는 자리를 찾으세요.',
        '양팔을 접어 팔꿈치로 뾰족한 귀를, 세 손가락을 펼쳐 양쪽 수염을 만듭니다.',
        '친구와 함께 바닥의 그림자만 0.5× 또는 1×로 위에서 촬영하세요.'
      ],
      helperText: '① 사람 대신 바닥의 그림자를 화면 중앙에 맞춰주세요\n② 귀(팔꿈치)와 수염(손가락) 윤곽이 또렷하게!\n③ 신발 앞코가 하단에 살짝 걸치면 더 귀여워요!'
    },
    en: {
      title: 'Sunny Pavement Cat Shadow Play',
      subtitle: 'Camera-shy? Capture Korea\'s viral playful shadow trend',
      microCue: 'Turn your back to the sun, use elbows for cat ears and 3 fingers for whiskers, and shoot the pavement shadow!',
      steps: [
        'Find bright afternoon sunlight casting a sharp shadow on the pavement.',
        'Fold arms for pointed cat ears and spread 3 fingers on each side for whiskers.',
        'Frame the ground shadow cleanly from above with shoe tips at the bottom.'
      ],
      helperText: '① Point the camera at the ground shadow, not faces\n② Keep the cat ears & finger whiskers crisp\n③ Include shoe tips at the bottom edge!'
    },
    ja: {
      title: '晴れた日の「ねこの影」ショット',
      subtitle: '顔出しなしでも韓国っぽフィードが作れる人気ポーズ',
      microCue: '太陽を背にしてひじで猫耳、指3本でヒゲを作り、地面の影を上から撮影してください！',
      steps: [
        '日差しで地面にくっきり影ができる場所を探します。',
        '腕を折ってひじで耳を作り、両手の指3本ずつ広げてヒゲを作ります。',
        '人物ではなく地面の影を上からフレームに収めて撮影します。'
      ],
      helperText: '① 人物ではなく地面の影を中央に合わせてください\n② 耳（ひじ）とヒゲ（指）の輪郭をはっきり！\n③ 靴先を少し下に入れるとさらに可愛いです！'
    }
  },
  {
    id: 'cheek_heart',
    svgType: 'cheek',
    tag: '볼콕포즈',
    bg: '#f0ede3',
    recommendedFlip: false,
    recommendedLens: '1×',
    recommendedFrontFoot: false,
    badge: 'CLOSE-UP #06 · K-IDOL PORTRAIT',
    ko: {
      title: '카페·디저트 K-아이돌 볼콕 클로즈업',
      subtitle: '손 처리가 어색할 때 가장 자연스러운 상반신 구도',
      microCue: '한 보 앞으로 다가와 눈높이에서 찍고, 검지를 볼에 가볍게 톡 대고 고개를 10° 기울이세요!',
      steps: [
        '카페 테이블이나 배경 간판이 뒤로 살짝 흐려지게 1× 또는 2× 인물 모드를 쓰세요.',
        '한 손 검지를 볼에 가볍게 대고 어깨 힘을 뺀 뒤 고개를 살짝 기울입니다.',
        '앞쪽에 커피잔이나 디저트를 소품으로 걸치면 한국 감성 브이로그 컷 완성!'
      ],
      helperText: '① 한 보 앞으로 와서 눈높이에서 찍어주세요\n② 배경과 테이블 음료가 살짝 걸치게 담아주세요\n③ 상반신 중심으로 밝게 촬영해 주세요!'
    },
    en: {
      title: 'Cafe K-Idol Cheek-Poke Close-Up',
      subtitle: 'Fixes awkward hands during cafe & dessert photo moments',
      microCue: 'Step half a pace closer at eye level, lightly touch your cheek, and tilt your head 10°!',
      steps: [
        'Use 1× or 2× portrait framing at eye level so the cafe background softens.',
        'Rest one fingertip lightly on your cheek and tilt your head gently.',
        'Include an iced coffee or pastry in the foreground for authentic Seoul cafe vibes.'
      ],
      helperText: '① Step closer and shoot at eye level\n② Keep the cafe drink slightly in the foreground\n③ Focus clearly on upper body & smile!'
    },
    ja: {
      title: 'カフェで映える Kアイドル風ほっぺツン',
      subtitle: '手の置き場に困った時に一番自然なバストアップ構図',
      microCue: '半歩近づいて目の高さで構え、人差し指をほっぺに添えて首を10°傾けてください！',
      steps: [
        '目の高さで1×または2×ポートレートを使い、背景をやさしくぼかします。',
        '人差し指を軽くほっぺに添え、肩の力を抜いて首を少し傾けます。',
        '手前にコーヒーやスイーツを入れると韓国カフェ感性の一枚に！'
      ],
      helperText: '① 半歩近づいて目の高さで撮ってください\n② 手前のドリンクやカフェ背景も少し入れてください\n③ 上半身中心で明るく撮ってください！'
    }
  }
];

// Before vs After visual story data
const beforeAfterItems = [
  {
    ko: {
      metric: '비율 +18% 개선',
      beforeTitle: '눈높이 정면 + 화면 중앙 배치',
      beforeDesc: '카메라를 가슴·눈높이로 들고 사람을 정중앙에 두면 다리가 짧아 보이고 배경 건축물이 잘립니다.',
      afterTitle: '180° 폰 뒤집기 + 발끝 하단 정렬',
      afterDesc: '폰을 거꾸로 뒤집어 렌즈를 낮추고 발끝을 하단 라인에 맞추면 8등신 비율과 시원한 하늘 여백이 완성됩니다.'
    },
    en: {
      metric: '+18% Longer Proportions',
      beforeTitle: 'Eye-Level + Centered Subject',
      beforeDesc: 'Shooting straight at eye level with the person centered shortens legs and crops iconic Korean rooftops.',
      afterTitle: '180° Phone Flip + Bottom Foot Line',
      afterDesc: 'Flipping the phone upside down and anchoring shoes to the bottom line creates effortless editorial height & sky framing.'
    },
    ja: {
      metric: '脚長比率 +18% UP',
      beforeTitle: '目線の高さ＋中央配置',
      beforeDesc: '目線の高さで人物をど真ん中に置くと脚が短く見え、背景の建物や空も切れてしまいます。',
      afterTitle: '180°スマホ逆さま＋足元下端合わせ',
      afterDesc: 'スマホを逆さまにしてレンズを下げ、つま先を下端に合わせるだけでモデル比率と抜け感のある構図に。'
    }
  },
  {
    ko: {
      metric: '어색함 ZERO',
      beforeTitle: '정면 차렷 + 브이(V) 포즈',
      beforeDesc: '찍어주는 사람에게 원하는 각도를 설명하기도 어렵고, 카메라 앞에서 매번 똑같은 경직된 자세가 됩니다.',
      afterTitle: '앞발 빼기 + 10초 동반자 코칭 카드',
      afterDesc: 'PILK가 "앞발 반 걸음 빼기"와 "찍어주는 사람 전용 큰 글씨 카드"를 제공해 행인·친구도 10초 만에 성공합니다.'
    },
    en: {
      metric: 'Zero Awkwardness',
      beforeTitle: 'Stiff Front Stance + Peace Sign',
      beforeDesc: 'Hard to explain desired angles to friends or passersby, resulting in stiff poses and endless retakes.',
      afterTitle: 'Front-Foot Out + 10s Helper Card',
      afterDesc: 'Live step cues plus a giant multilingual Helper Card let any travel buddy or stranger nail the angle in 10 seconds.'
    },
    ja: {
      metric: 'ぎこちなさ ZERO',
      beforeTitle: '正面直立＋ピースサイン',
      beforeDesc: '撮ってくれる人に構図を説明できず、毎回ぎこちない棒立ちポーズで何度も撮り直すことに。',
      afterTitle: '前足出し＋10秒撮影者コーチカード',
      afterDesc: '「前足を半歩出す」指示と多言語の大型コーチカードで、同行者や通行人でも10秒でベストショット！'
    }
  },
  {
    ko: {
      metric: '촬영 → 로컬 발견',
      beforeTitle: '사진만 찍고 바로 이동',
      beforeDesc: '명소에서 10분 찍고 나면 근처 어디서 커피를 마실지, 숨은 포토존이 어딘지 또 검색해야 합니다.',
      afterTitle: '배경 자동 인식 → 주변 관광지·쿠폰 추천',
      afterDesc: '촬영 중인 배경을 자동 분석해 도보 5분 내 숨은 포토스팟과 제휴 카페·팝업·전시 즉시 할인 쿠폰을 띄워줍니다.'
    },
    en: {
      metric: 'Snap → Local Discovery',
      beforeTitle: 'Snap & Search Again',
      beforeDesc: 'After taking one photo, travelers waste time searching maps and SNS for where to walk or grab coffee next.',
      afterTitle: 'Auto Scene Scan → Nearby Spots & Coupons',
      afterDesc: 'PILK reads your current backdrop to instantly surface hidden nearby photo angles plus instant local cafe & pop-up perks.'
    },
    ja: {
      metric: '撮影 → ローカル発見',
      beforeTitle: '撮ったらまた検索し直し',
      beforeDesc: '名所で撮った後、近くの隠れカフェや次の撮影スポットをSNSや地図で検索し直す手間が発生。',
      afterTitle: '背景自動認識 → 周辺観光地＆クーポン',
      afterDesc: '撮影中の背景を自動分析し、徒歩5分圏内の穴場スポットや提携カフェ・ポップアップ割引を即座に提案。'
    }
  }
];
