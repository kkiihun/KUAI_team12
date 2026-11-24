// PILK v005 (Multi-Tab Simple) — Minimal Trilingual Copy & 6 K-Pose Recipes

const copy = {
  ko: {
    // Tabs
    tabCam: '카메라',
    tabNearby: '주변',
    tabSpots: '스팟',
    tabSaved: '보관함',
    // Camera
    scanAction: '스캔',
    scanning: '스캔 중...',
    modeA: 'AR',
    modeB: '3단계',
    modeC: '음성',
    dockPhoto: '사진',
    dockCamOn: '라이브',
    dockCamOff: '끄기',
    dockStory: '스토리',
    dockVoice: '음성',
    flipShort: '항공샷',
    footShort: '앞발',
    distClose: '뒤로',
    distBest: '최적',
    distFar: '앞으로',
    helperTitle: '찍어주는 분께 보여주세요',
    helperClose: '카메라로',
    // High-angle guide modal
    flipGuideTitle: '📐 항공샷(하이앵글)이 뭔가요?',
    flipGuideDesc: '한 팔을 머리 위로 쭉 뻗고 폰을 바닥 쪽으로 돌려보세요. 가까운 머리와 팔이 크게 담깁니다.',
    flipGuideNormal: '일반 눈높이 촬영',
    flipGuideNormalNote: '정면 시선 → 평범하고 경직된 느낌',
    flipGuideInverted: '머리 위 광각 셀카',
    flipGuideInvertedNote: '팔은 화면 모서리에, 발끝은 멀리 작게',
    // Nearby page
    nearbyHeading: '주변 추천 · 쿠폰(예시)',
    rescanBtn: '배경 스캔',
    openBigMap: '지도 앱 열기 ↗',
    claimCoupon: '예시 쿠폰 받기',
    couponClaimed: '예시 발급됨 ✓',
    couponTag: '[예시]',
    couponDisclaimer: '※ 표시된 로컬 제휴 쿠폰은 서비스 시연용 예시입니다.',
    useScene: '이 배경으로 찍기',
    // Camera facing & audio toasts
    toastFrontCam: '전면(셀카) 카메라로 전환했어요.',
    toastRearCam: '후면 카메라로 전환했어요.',
    toastAudioMuted: '🔇 소리가 안 들리면 무음 모드를 끄거나 Safari/Chrome에서 열어주세요.',
    // Spots page
    spotsHeading: '촬영 스팟',
    searchPlaceholder: '장소 · 드라마 검색',
    filterAll: '전체',
    filterInsta: '인스타',
    filterTiktok: '틱톡',
    filterDrama: '드라마',
    filterHeritage: '고궁',
    filterNature: '자연',
    emptySearch: '검색 결과가 없어요.',
    loadMore: '더 보기',
    openInCamera: '카메라로 찍기',
    openMap: '지도',
    instagramLink: '인스타',
    // Saved & Settings page
    savedHeading: '보관함',
    savedCouponsTitle: '받은 쿠폰 (예시)',
    savedSpotsTitle: '저장한 스팟',
    savedEmpty: '아직 저장한 쿠폰이나 스팟이 없어요.',
    settingsTitle: '카메라 설정',
    opacityLabel: 'AR 가이드 투명도',
    gridLabel: '발끝선 · 3분할 격자',
    infoTitle: '정보',
    footerStrategy: 'PILK 사업 전략 요약',
    footerCredits: '사진 출처',
    creditsTitle: '사진 출처',
    creditsDesc: '촬영 사진과 업로드 이미지는 기기 내에서만 처리됩니다.',
    // Toasts
    toastAdded: '보관함에 저장했어요.',
    toastRemoved: '삭제했어요.',
    toastCoupon: '쿠폰이 보관함에 저장됐어요!',
    toastVoice: '음성 코칭 재생 중',
    toastPhotoSaved: '사진을 저장했어요!',
    toastStorySaved: '인스타 스토리 카드를 저장했어요!',
    toastCameraFail: '카메라 권한이 없어 데모 배경으로 동작합니다.',
    toastScanned: '배경 인식 완료! 주변 추천을 확인해 보세요.'
  },
  en: {
    tabCam: 'Camera',
    tabNearby: 'Nearby',
    tabSpots: 'Spots',
    tabSaved: 'Saved',
    scanAction: 'Scan',
    scanning: 'Scanning...',
    modeA: 'AR',
    modeB: 'Steps',
    modeC: 'Voice',
    dockPhoto: 'Upload',
    dockCamOn: 'Live',
    dockCamOff: 'Stop',
    dockStory: 'Story',
    dockVoice: 'Voice',
    flipShort: 'High Angle',
    footShort: 'Foot+',
    distClose: 'Back',
    distBest: 'Best',
    distFar: 'Closer',
    helperTitle: 'Show to Photographer',
    helperClose: 'Back',
    flipGuideTitle: '📐 What is a "High-Angle Shot"?',
    flipGuideDesc: 'Extend one arm above your crown and aim the phone straight down toward your shoes.',
    flipGuideNormal: 'Eye-Level Shot',
    flipGuideNormalNote: 'Straight ahead → flat & stiff',
    flipGuideInverted: 'Overhead wide selfie',
    flipGuideInvertedNote: 'Let your arm enter a corner and your shoes recede.',
    nearbyHeading: 'Nearby & Sample Coupons',
    rescanBtn: 'Scan Scene',
    openBigMap: 'Open Maps ↗',
    claimCoupon: 'Get Sample Coupon',
    couponClaimed: 'Sample Saved ✓',
    couponTag: '[Sample]',
    couponDisclaimer: '* Local partner coupons shown are demo examples.',
    useScene: 'Shoot Here',
    toastFrontCam: 'Switched to front (selfie) camera.',
    toastRearCam: 'Switched to rear camera.',
    toastAudioMuted: '🔇 No audio? Turn off silent mode or open in Safari/Chrome.',
    spotsHeading: 'Korea Spots',
    searchPlaceholder: 'Search spot or drama',
    filterAll: 'All',
    filterInsta: 'Instagram',
    filterTiktok: 'TikTok',
    filterDrama: 'K-Drama',
    filterHeritage: 'Palace',
    filterNature: 'Nature',
    emptySearch: 'No matching spots.',
    loadMore: 'Load More',
    openInCamera: 'Open in Camera',
    openMap: 'Maps',
    instagramLink: 'Instagram',
    savedHeading: 'Saved',
    savedCouponsTitle: 'Sample Coupons',
    savedSpotsTitle: 'Spots',
    savedEmpty: 'Nothing saved yet.',
    settingsTitle: 'Camera Settings',
    opacityLabel: 'AR Guide Opacity',
    gridLabel: 'Foot Line & Grid',
    infoTitle: 'About',
    footerStrategy: 'PILK Strategy Summary',
    footerCredits: 'Photo Credits',
    creditsTitle: 'Photo Credits',
    creditsDesc: 'All photos are processed locally in your browser.',
    toastAdded: 'Saved!',
    toastRemoved: 'Removed.',
    toastCoupon: 'Coupon saved!',
    toastVoice: 'Playing voice guide',
    toastPhotoSaved: 'Photo saved!',
    toastStorySaved: 'IG Story card saved!',
    toastCameraFail: 'Camera unavailable — using scene demo.',
    toastScanned: 'Scene recognized! Check nearby spots.'
  },
  ja: {
    tabCam: 'カメラ',
    tabNearby: 'さがす',
    tabSpots: 'スポット',
    tabSaved: 'お気に入り',
    scanAction: 'スキャン',
    scanning: '分析中...',
    modeA: 'AR',
    modeB: 'ステップ',
    modeC: 'ボイス',
    dockPhoto: 'アルバム',
    dockCamOn: 'カメラON',
    dockCamOff: 'カメラOFF',
    dockStory: 'ストーリー',
    dockVoice: 'ボイス',
    flipShort: '真上ショット',
    footShort: '片足前',
    distClose: '下がる',
    distBest: 'ちょうど',
    distFar: '近づく',
    helperTitle: '撮ってくれる方に見せてください',
    helperClose: 'カメラに戻る',
    flipGuideTitle: '📐 「真上ショット」ってなに？',
    flipGuideDesc: '片腕を頭の上までまっすぐ伸ばして、レンズを足元に向けます。顔が小さく、脚が長く見える韓国で人気の撮り方です。',
    flipGuideNormal: '通常の目線撮影',
    flipGuideNormalNote: '正面アングル → 普通で硬い印象',
    flipGuideInverted: '真上からの広角セルフィー',
    flipGuideInvertedNote: '腕は画面の角に、靴は奥に小さく入れるのがコツ',
    nearbyHeading: '近くのおすすめ・クーポン（例）',
    rescanBtn: '背景チェック',
    openBigMap: 'マップを開く ↗',
    claimCoupon: 'クーポンをもらう（例）',
    couponClaimed: 'ゲット済み ✓',
    couponTag: '[例]',
    couponDisclaimer: '※ 表示されている提携クーポンはデモ用の例です。',
    useScene: 'ここで撮る',
    toastFrontCam: 'インカメラ（自撮り）に切り替えました。',
    toastRearCam: 'アウトカメラ（背面）に切り替えました。',
    toastAudioMuted: '🔇 音が出ないときは、マナーモードを解除するか Safari / Chrome で開いてください',
    spotsHeading: '韓国の映えスポット',
    searchPlaceholder: '場所・ドラマ名でさがす',
    filterAll: 'すべて',
    filterInsta: 'インスタ映え',
    filterTiktok: 'TikTok',
    filterDrama: 'ドラマ',
    filterHeritage: '王宮・伝統',
    filterNature: '自然',
    emptySearch: '見つかりませんでした。別のキーワードでお試しください',
    loadMore: 'もっと見る',
    openInCamera: 'ここで撮る',
    openMap: '地図',
    instagramLink: 'インスタ',
    savedHeading: 'お気に入り',
    savedCouponsTitle: 'もらったクーポン（例）',
    savedSpotsTitle: '行きたいスポット',
    savedEmpty: 'まだ何もありません。気になるスポットの ♡ をタップしてね',
    settingsTitle: 'カメラ設定',
    opacityLabel: 'ARガイドの濃さ',
    gridLabel: '足元ライン・グリッド線',
    infoTitle: '情報',
    footerStrategy: 'PILK 事業戦略',
    footerCredits: '写真の出典',
    creditsTitle: '写真の出典',
    creditsDesc: '写真はブラウザ内でのみ処理されます。',
    toastAdded: 'お気に入りに追加しました ♡',
    toastRemoved: 'お気に入りから外しました',
    toastCoupon: 'クーポンをゲットしました ♪',
    toastVoice: 'ボイスガイド再生中…',
    toastPhotoSaved: '保存しました！いい感じです ✨',
    toastStorySaved: 'ストーリー用カードを保存しました ♡',
    toastCameraFail: 'カメラが使えないため、お手本画像で表示しています',
    toastScanned: 'チェック完了！近くのおすすめを見てみてね'
  }
};

const kRecipes = [
  {
    id: 'high_angle_aerial',
    svgType: 'high05',
    recommendedFlip: true,
    recommendedLens: '0.5×',
    recommendedFrontFoot: false,
    ko: {
      chip: '항공샷',
      shortCue: '폰을 정수리 위에 들고 렌즈가 발끝을 향하게 해보세요.',
      steps: ['가능하면 0.5× 광각', '한 팔을 정수리 위로', '팔과 발끝이 함께 보이게'],
      helperText: '한 팔을 머리 위로 쭉 뻗고 폰을 바닥 쪽으로 돌려보세요. 가까운 머리와 팔이 크게 담깁니다.'
    },
    en: {
      chip: 'High Angle',
      shortCue: 'Reach above your crown and point the lens toward your feet.',
      steps: ['Use ultra-wide if available', 'Extend one arm overhead', 'Frame your arm and shoes'],
      helperText: 'Extend one arm above your crown and aim the phone straight down toward your shoes.'
    },
    ja: {
      chip: '真上ショット',
      shortCue: 'スマホを頭の真上に掲げて、レンズを足元に向けてみて',
      steps: ['0.5倍の超広角がおすすめ', '片腕を頭の真上へ', '腕と足先を一緒に入れる'],
      helperText: '片腕を頭上へ伸ばし、レンズを足元に向けます。近くの頭や腕が大きく写ります。'
    }
  },
  {
    id: 'full_body_ratio',
    svgType: 'flip',
    recommendedFlip: false,
    recommendedLens: '1×',
    recommendedFrontFoot: true,
    ko: {
      chip: '전신 비율',
      shortCue: '몸을 살짝 옆으로 돌리고, 천천히 한 걸음 걸어보세요',
      steps: ['처마까지 넉넉히 담기', '중앙에서 조금 비켜서기', '걸음을 내딛는 순간 찍기'],
      helperText: '① 카메라를 허리 높이로 낮춰주세요\n② 발끝을 맨 아래 점선에 맞춰주세요\n③ 한 발 내디딜 때 눌러주세요!'
    },
    en: {
      chip: 'Full Body',
      shortCue: 'Turn slightly sideways and take an easy step.',
      steps: ['Include the roofline', 'Stand slightly off-center', 'Catch a natural step'],
      helperText: '① Hold camera at waist height\n② Align toes on the bottom dashed line\n③ Capture a natural step!'
    },
    ja: {
      chip: '全身スタイルアップ',
      shortCue: '体を少しななめにして、自然に一歩ふみ出して',
      steps: ['屋根まで広く入れる', '真ん中から少しずれて立つ', '歩き出す瞬間を撮る'],
      helperText: '① カメラを腰の高さにしてください\n② つま先を下の点線に合わせてください\n③ 自然に歩き出す瞬間を撮ってください！'
    }
  },
  {
    id: 'candid_lookback',
    svgType: 'lookback',
    recommendedFlip: true,
    recommendedLens: '1×',
    recommendedFrontFoot: true,
    ko: {
      chip: '뒤돌아보기',
      shortCue: '천천히 걷다 앞발 딛는 순간 뒤돌아보세요',
      steps: ['한 보 뒤로', '걸으며 뒤돌기', '3~4장 연사'],
      helperText: '① 한 보 뒤로 물러나 주세요\n② 걸어가다 뒤돌 때 3~4장 연사해 주세요\n③ 발끝을 하단 선에 맞춰주세요!'
    },
    en: {
      chip: 'Look Back',
      shortCue: 'Walk slowly & glance back mid-step',
      steps: ['Step back', 'Walk & turn', 'Burst 3–4'],
      helperText: '① Step one pace back\n② Tap shutter 3–4 times as I look back\n③ Keep feet on the bottom line!'
    },
    ja: {
      chip: '振り返りショット',
      shortCue: 'ゆっくり歩いて、一歩ふみ出す瞬間に振り返って',
      steps: ['撮る人は一歩下がる', '歩きながら振り返る', '3〜4枚連写'],
      helperText: '① 一歩下がってください\n② 歩きながら振り返る瞬間を連写してください\n③ 足元を下端に合わせてください！'
    }
  },
  {
    id: 'mirror_ootd',
    svgType: 'mirror',
    recommendedFlip: true,
    recommendedLens: '1×',
    recommendedFrontFoot: true,
    ko: {
      chip: '거울셀카',
      shortCue: '거울 앞 15° 틀고 앞발을 반 걸음 내미세요',
      steps: ['15° 사선', '앞발 빼기', '신발까지'],
      helperText: '① 거울 앞 15° 사선 서기\n② 앞발을 반 걸음 앞으로 빼기\n③ 신발 끝까지 담기!'
    },
    en: {
      chip: 'Mirror',
      shortCue: 'Angle 15° to mirror & step front foot out',
      steps: ['Angle 15°', 'Foot forward', 'Full outfit'],
      helperText: '① Stand 15° angled to mirror\n② Extend front foot half a step\n③ Include down to shoes!'
    },
    ja: {
      chip: '鏡越しコーデ',
      shortCue: '鏡に対して15°ななめに立って、前足を半歩出して',
      steps: ['15°ななめに立つ', '前足を半歩出す', '靴まで入れる'],
      helperText: '① 鏡の前で15°斜めに立つ\n② 前足を半歩前に出す\n③ 靴までフレームに入れる！'
    }
  },
  {
    id: 'cat_shadow',
    svgType: 'shadow',
    recommendedFlip: false,
    recommendedLens: '1×',
    recommendedFrontFoot: false,
    ko: {
      chip: '고양이 그림자',
      shortCue: '몸을 낮추고 팔을 얼굴 앞으로 모아, 바닥에 맺힌 귀 모양을 보세요',
      steps: ['빛을 왼쪽 뒤에 두기', '웅크리고 팔을 얼굴 앞으로', '손끝을 움직여 그림자 귀 맞추기'],
      helperText: '위에서 비스듬히 내려다보세요. 웅크린 사람은 왼쪽, 바닥의 그림자는 오른쪽에 담고 손끝의 각도를 조금씩 바꿔보세요.'
    },
    en: {
      chip: 'Cat Shadow',
      shortCue: 'Crouch and bring your arms in front of your face. Watch the ears form on the ground.',
      steps: ['Light behind your left side', 'Crouch with arms in front', 'Angle fingertips to shape the ears'],
      helperText: 'Shoot diagonally from above. Frame the crouching person on the left and the shadow on the right. Adjust fingertips while watching the shadow.'
    },
    ja: {
      chip: '猫の影',
      shortCue: 'しゃがんで顔の前に腕を寄せ、地面に映る耳の形を見てください',
      steps: ['光を左後ろに', 'しゃがんで顔の前に腕を', '指先で影の耳を整える'],
      helperText: '斜め上から、左にしゃがんだ人、右に地面の影を入れます。影を見ながら指の角度を少しずつ変えてください。'
    }
  },
  {
    id: 'cheek_heart',
    svgType: 'cheek',
    recommendedFlip: false,
    recommendedLens: '1×',
    recommendedFrontFoot: false,
    ko: {
      chip: '볼콕',
      shortCue: '눈높이에서 검지를 볼에 톡, 고개 10° 기울이기',
      steps: ['한 보 가까이', '검지 볼에 톡', '음료 배치'],
      helperText: '① 한 보 가까이 와서 눈높이로 찍어주세요\n② 카페 음료가 앞쪽에 살짝 걸치게!\n③ 상반신 중심으로 찍어주세요!'
    },
    en: {
      chip: 'Cheek Poke',
      shortCue: 'Eye level, finger on cheek, tilt head 10°',
      steps: ['Step closer', 'Finger cheek', 'Frame drink'],
      helperText: '① Step closer at eye level\n② Keep cafe drink in foreground\n③ Focus on upper body!'
    },
    ja: {
      chip: 'ほっぺツン',
      shortCue: '目の高さで、人差し指をほっぺにツン。首を10°かしげて',
      steps: ['半歩近づく', '指でほっぺにツン', 'ドリンクを手前に'],
      helperText: '① 半歩近づいて目の高さで撮ってください\n② 手前のドリンクも少し入れてください\n③ 上半身中心で撮ってください！'
    }
  }
];

// Display extras: K-vibe meter label and pose badges (Japanese users scan for 人気/トレンド cues).
Object.assign(copy.ko, {themeLabel:'테마 색상',themePink:'핑크',themeBlue:'블루',themeDark:'다크',btnGuide:'가이드 표시/숨기기',btnSwitch:'전면/후면 카메라 전환',btnHelper:'찍어주는 분께 보여줄 안내',guideOn:'가이드 표시',guideOff:'가이드 숨김',toolsMenu:'기능',btnScan:'배경 스캔',menuGuide:'가이드',menuSwitch:'카메라 전환',menuHelper:'촬영 안내 카드',menuAutoCam:'자동 켜기',autoCamOn:'카메라 자동 켜기 ON',autoCamOff:'카메라 자동 켜기 OFF',camFront:'전면',camRear:'후면',skipIntro:'바로 카메라 ›',skipIntroSetting:'예시 포즈 건너뛰고 바로 카메라 켜기',skeletonSetting:'자세 가이드 선 표시',vibeLabel:'한국st 지수', eyebrowCam:'Camera', tagline:'한국인처럼 찍는 카메라'});
Object.assign(copy.en, {themeLabel:'Theme',themePink:'Pink',themeBlue:'Blue',themeDark:'Dark',btnGuide:'Show/hide guide',btnSwitch:'Switch front/rear camera',btnHelper:'Guide card for your photographer',guideOn:'Guide shown',guideOff:'Guide hidden',toolsMenu:'Tools',btnScan:'Scan Scene',menuGuide:'Guide',menuSwitch:'Flip Camera',menuHelper:'Helper Card',menuAutoCam:'Auto Camera',autoCamOn:'Auto-start camera ON',autoCamOff:'Auto-start camera OFF',camFront:'Front',camRear:'Rear',skipIntro:'Camera now ›',skipIntroSetting:'Skip the example pose and open the camera',skeletonSetting:'Show pose guide lines',vibeLabel:'K-vibe', eyebrowCam:'Camera', tagline:'Shoot like a Korean local'});
Object.assign(copy.ja, {themeLabel:'テーマカラー',themePink:'ピンク',themeBlue:'ブルー',themeDark:'ダーク',btnGuide:'ガイドの表示/非表示',btnSwitch:'イン/アウトカメラ切替',btnHelper:'撮ってくれる方への説明カード',guideOn:'ガイドを表示',guideOff:'ガイドを非表示',toolsMenu:'機能',btnScan:'背景スキャン',menuGuide:'ガイド',menuSwitch:'カメラ切替',menuHelper:'撮影案内カード',menuAutoCam:'自動起動',autoCamOn:'カメラ自動起動 ON',autoCamOff:'カメラ自動起動 OFF',camFront:'イン',camRear:'アウト',skipIntro:'すぐ撮る ›',skipIntroSetting:'お手本をとばしてすぐカメラを起動',skeletonSetting:'ポーズガイド線を表示',vibeLabel:'韓国っぽ度', eyebrowCam:'Camera', tagline:'韓国っぽ写真が撮れるカメラ'});
const recipeBadges = {
  high05:{ko:'트렌드',en:'Trend',ja:'トレンド'},
  flip:{ko:'인기 1위',en:'#1',ja:'人気No.1'},
  cheek:{ko:'러블리',en:'Cute',ja:'かわいい'}
};

// In-app "How to use" guide (shown on first visit, reopen with the ? button).
const howtoCopy = {
  ko:{btn:'이용 안내',title:'Pilk 사용법',sub:'4단계면 한국 감성 인생샷 완성!',start:'시작하기',steps:[
    ['🧍','포즈 고르기','카메라 아래 목록에서 따라 할 예시 포즈를 골라요. 처음이라면 「인기 1위」 전신 비율 추천!'],
    ['📸','카메라 비추기','몸 위에 선이 겹쳐요. 흰 점선이 예시 포즈, 빨갛게 빛나는 부분을 고치면 「한국st 지수」가 올라가요. 👁 버튼으로 선을 숨길 수 있어요.'],
    ['👆','사람이 많을 땐','찍고 싶은 사람을 화면에서 탭하면 그 사람만 따라가며 코칭해요.'],
    ['✨','찍고 공유하기','셔터로 저장·편집, 「스토리」로 인스타용 카드를 만들어요. 👥 버튼은 찍어주는 분께 보여줄 안내 카드예요.']],
    privacy:'🔒 카메라 영상과 사진은 기기 안에서만 처리되고 외부로 전송되지 않아요.'},
  en:{btn:'How to use',title:'How to use Pilk',sub:'Four steps to a Korean-style shot',start:"Let's go",steps:[
    ['🧍','Pick a pose','Choose an example pose under the camera. New here? Try the #1 “Full Body”.'],
    ['📸','Point the camera','Lines appear on your body. The white dotted line is the example; fix the part glowing red to raise your K-vibe score. Hide the lines with 👁.'],
    ['👆','Crowded spot?','Tap the person you want to shoot and Pilk follows only them.'],
    ['✨','Shoot & share','Save and edit with the shutter, or make an Instagram card with “Story”. 👥 shows a guide card for whoever is taking your photo.']],
    privacy:'🔒 Camera frames and photos are processed on your device and never uploaded.'},
  ja:{btn:'使い方',title:'Pilkの使い方',sub:'4ステップで韓国っぽ写真が撮れます ♡',start:'はじめる',steps:[
    ['🧍','ポーズを選ぶ','カメラの下からお手本ポーズを選びます。はじめての方は「人気No.1」の全身スタイルアップがおすすめ！'],
    ['📸','カメラを向ける','体にガイド線が重なります。白い点線がお手本、赤く光る部分を直すと「韓国っぽ度」がアップ。👁ボタンで線を隠せます。'],
    ['👆','人が多いときは','撮りたい人を画面でタップすると、その人だけを追いかけてアドバイスします。'],
    ['✨','撮ってシェア','シャッターで保存・編集、「ストーリー」でインスタ用カードに。👥ボタンは撮ってくれる方に見せる説明カードです。']],
    privacy:'🔒 カメラ映像と写真はスマホの中だけで処理され、外部に送信されません。'}
};

// 2-person poses (couples / friends). Judged by pair rules in pose-tracking.js, not by a reference photo.
kRecipes.push(
  {
    id: 'pair_heart', svgType: 'pair_heart', people: 2, image: 'assets/poses/pair_heart.svg',
    recommendedFlip: false, recommendedLens: '1×', recommendedFrontFoot: false,
    ko: {chip:'둘이서 하트', shortCue:'서로 가까이 서서, 안쪽 손을 맞대 하트를 만들어요',
      steps:['어깨가 닿을 만큼 가까이', '안쪽 손으로 반쪽 하트', '가슴 높이에서 맞대기'],
      helperText:'① 두 사람이 화면 가운데 오게\n② 두 사람의 손 하트가 잘 보이게\n③ 웃는 순간 눌러주세요!'},
    en: {chip:'Couple Heart', shortCue:'Stand close and join your inner hands into one heart',
      steps:['Shoulders almost touching', 'Each makes half a heart', 'Join at chest height'],
      helperText:'① Keep both of us centered\n② Make sure the hand heart is visible\n③ Shoot when we smile!'},
    ja: {chip:'ふたりでハート', shortCue:'くっついて立って、内側の手でハートを作ってね',
      steps:['肩が触れるくらい近くに', '内側の手で半分ずつハート', '胸の高さで合わせる'],
      helperText:'① ふたりが真ん中に来るように\n② 手のハートがしっかり入るように\n③ 笑った瞬間に押してください！'}
  },
  {
    id: 'pair_walk', svgType: 'pair_walk', people: 2, image: 'assets/poses/pair_walk.svg',
    recommendedFlip: false, recommendedLens: '1×', recommendedFrontFoot: true,
    ko: {chip:'나란히 걷기', shortCue:'카메라에서 같은 거리로 나란히, 함께 한 걸음 내디뎌요',
      steps:['같은 거리에 나란히', '손을 잡거나 가까이', '같은 발로 한 걸음'],
      helperText:'① 허리 높이에서 두 사람 전신을\n② 발끝까지 화면에 담아주세요\n③ 걸음을 내딛는 순간 연속으로!'},
    en: {chip:'Walk Together', shortCue:'Side by side at the same distance, step out together',
      steps:['Same distance from camera', 'Hold hands or stay close', 'Step out together'],
      helperText:'① Shoot both of us full-length at waist height\n② Include our feet\n③ Burst as we step!'},
    ja: {chip:'並んで歩く', shortCue:'カメラから同じ距離で並んで、一緒に一歩ふみ出して',
      steps:['同じ距離に並ぶ', '手をつなぐか近くに', 'ふたりで一歩ふみ出す'],
      helperText:'① 腰の高さでふたりの全身を\n② 足元まで入れてください\n③ 歩き出す瞬間に連写で！'}
  },
  {
    id: 'pair_back', svgType: 'pair_back', people: 2, image: 'assets/poses/pair_back.svg',
    recommendedFlip: false, recommendedLens: '1×', recommendedFrontFoot: false,
    ko: {chip:'등 맞대기', shortCue:'등을 맞대고 서서, 둘 다 바깥쪽을 바라봐요',
      steps:['등을 맞대기', '키 높이 맞추기', '둘 다 바깥쪽 보기'],
      helperText:'① 두 사람 사이가 화면 가운데\n② 상반신이 크게 나오게\n③ 둘이 동시에 웃을 때!'},
    en: {chip:'Back to Back', shortCue:'Stand back to back and both look outward',
      steps:['Backs touching', 'Same distance from camera', 'Both look outward'],
      helperText:'① Center the gap between us\n② Frame our upper bodies large\n③ Shoot when we both smile!'},
    ja: {chip:'背中合わせ', shortCue:'背中をくっつけて、ふたりとも外側を向いてね',
      steps:['背中をくっつける', '同じ距離に立つ', 'ふたりとも外側を向く'],
      helperText:'① ふたりの間が真ん中に来るように\n② 上半身を大きめに\n③ ふたり同時に笑ったときに！'}
  }
);
Object.assign(recipeBadges, {pair_heart:{ko:'커플',en:'Couple',ja:'カップル'}});
Object.assign(copy.ko, {soloMode:'혼자', pairMode:'둘이서'});
Object.assign(copy.en, {soloMode:'Solo', pairMode:'Two'});
Object.assign(copy.ja, {soloMode:'ひとり', pairMode:'ふたり'});
