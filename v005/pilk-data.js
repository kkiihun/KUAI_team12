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
    flipShort: '180°',
    footShort: '앞발',
    distClose: '뒤로',
    distBest: '최적',
    distFar: '앞으로',
    helperTitle: '찍어주는 분께 보여주세요',
    helperClose: '카메라로',
    // Nearby page
    nearbyHeading: '주변 추천 · 쿠폰',
    rescanBtn: '배경 스캔',
    claimCoupon: '쿠폰 받기',
    couponClaimed: '발급됨 ✓',
    useScene: '이 배경으로 찍기',
    // Spots page
    spotsHeading: '촬영 스팟',
    searchPlaceholder: '장소 · 드라마 검색',
    filterAll: '전체',
    filterLocal: '핫플',
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
    savedCouponsTitle: '받은 쿠폰',
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
    flipShort: '180°',
    footShort: 'Foot+',
    distClose: 'Back',
    distBest: 'Best',
    distFar: 'Closer',
    helperTitle: 'Show to Photographer',
    helperClose: 'Back',
    nearbyHeading: 'Nearby & Coupons',
    rescanBtn: 'Scan Scene',
    claimCoupon: 'Get Coupon',
    couponClaimed: 'Saved ✓',
    useScene: 'Shoot Here',
    spotsHeading: 'Korea Spots',
    searchPlaceholder: 'Search spot or drama',
    filterAll: 'All',
    filterLocal: 'Hotspots',
    filterDrama: 'K-Drama',
    filterHeritage: 'Palace',
    filterNature: 'Nature',
    emptySearch: 'No matching spots.',
    loadMore: 'Load More',
    openInCamera: 'Open in Camera',
    openMap: 'Maps',
    instagramLink: 'Instagram',
    savedHeading: 'Saved',
    savedCouponsTitle: 'Coupons',
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
    tabNearby: '周辺',
    tabSpots: 'スポット',
    tabSaved: '保存',
    scanAction: 'スキャン',
    scanning: '分析中...',
    modeA: 'AR',
    modeB: '3手順',
    modeC: '音声',
    dockPhoto: '写真',
    dockCamOn: 'ライブ',
    dockCamOff: 'オフ',
    dockStory: 'ストーリー',
    dockVoice: '音声',
    flipShort: '180°',
    footShort: '前足',
    distClose: '下がる',
    distBest: '最適',
    distFar: '近づく',
    helperTitle: '撮影者に見せてください',
    helperClose: 'カメラへ',
    nearbyHeading: '周辺おすすめ・クーポン',
    rescanBtn: '背景スキャン',
    claimCoupon: 'クーポン取得',
    couponClaimed: '取得済 ✓',
    useScene: 'この背景で撮る',
    spotsHeading: '撮影スポット',
    searchPlaceholder: '場所・ドラマ検索',
    filterAll: 'すべて',
    filterLocal: '人気街',
    filterDrama: 'ドラマ',
    filterHeritage: '古宮',
    filterNature: '自然',
    emptySearch: '見つかりませんでした。',
    loadMore: 'もっと見る',
    openInCamera: 'カメラで開く',
    openMap: '地図',
    instagramLink: 'インスタ',
    savedHeading: '保存一覧',
    savedCouponsTitle: 'クーポン',
    savedSpotsTitle: 'スポット',
    savedEmpty: 'まだ保存がありません。',
    settingsTitle: 'カメラ設定',
    opacityLabel: 'ARガイド透明度',
    gridLabel: '足元線・グリッド',
    infoTitle: '情報',
    footerStrategy: 'PILK 事業戦略',
    footerCredits: '写真の出典',
    creditsTitle: '写真の出典',
    creditsDesc: '写真はブラウザ内でのみ処理されます。',
    toastAdded: '保存しました',
    toastRemoved: '削除しました',
    toastCoupon: 'クーポンを保存しました！',
    toastVoice: '音声コーチ再生中',
    toastPhotoSaved: '写真を保存しました！',
    toastStorySaved: 'ストーリーカードを保存しました！',
    toastCameraFail: 'カメラ権限がないためデモ背景で動作します。',
    toastScanned: '背景認識完了！周辺おすすめをご覧ください。'
  }
};

const kRecipes = [
  {
    id: 'phone_flip_ratio',
    svgType: 'flip',
    recommendedFlip: true,
    recommendedLens: '1×',
    recommendedFrontFoot: true,
    ko: {
      chip: '180° 뒤집기',
      shortCue: '폰을 180° 뒤집고 발끝을 선에 맞추세요',
      steps: ['폰 180° 거꾸로', '발끝 하단 정렬', '앞발 반 걸음'],
      helperText: '① 폰을 180° 거꾸로 뒤집어 주세요\n② 발끝을 맨 아래 점선에 맞춰주세요\n③ 머리 위 여백 35% 남겨주세요!'
    },
    en: {
      chip: '180° Flip',
      shortCue: 'Flip phone 180° & align toes on bottom line',
      steps: ['Flip 180°', 'Align toes', 'Front foot out'],
      helperText: '① Flip phone 180° upside down\n② Align toes on the bottom dashed line\n③ Leave 35% headroom above!'
    },
    ja: {
      chip: '180°逆さま',
      shortCue: 'スマホを180°逆さま・つま先を下端に',
      steps: ['180°逆さま', 'つま先下端', '前足を半歩'],
      helperText: '① スマホを180°逆さまに持ってください\n② つま先を下の点線に合わせてください\n③ 頭上に35%余白を残してください！'
    }
  },
  {
    id: 'high_angle_05',
    svgType: 'high05',
    recommendedFlip: false,
    recommendedLens: '0.5×',
    recommendedFrontFoot: false,
    ko: {
      chip: '0.5× 항공',
      shortCue: '0.5× 광각으로 머리 위에서 내려다보세요',
      steps: ['0.5× 광각', '머리 위 높게', '턱 들고 위 보기'],
      helperText: '① 0.5× 광각 렌즈로 바꿔주세요\n② 머리 위로 높이 들어 아래로 찍어주세요\n③ 신발까지 담아주세요!'
    },
    en: {
      chip: '0.5× High',
      shortCue: 'Switch to 0.5× & shoot down from above',
      steps: ['0.5× wide', 'Hold high', 'Look up'],
      helperText: '① Switch to 0.5× ultra-wide\n② Hold high overhead tilted down\n③ Include down to my shoes!'
    },
    ja: {
      chip: '0.5×航空',
      shortCue: '0.5×広角で頭上から見下ろして撮影',
      steps: ['0.5×広角', '頭上高く', '上目遣い'],
      helperText: '① 0.5×超広角にしてください\n② 頭上に高く上げて見下ろしてください\n③ 靴先まで入れてください！'
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
      chip: '振り返り',
      shortCue: 'ゆっくり歩きながら肩越しに振り返る',
      steps: ['一歩下がる', '歩いて振返る', '3〜4枚連写'],
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
      chip: '鏡セルフィー',
      shortCue: '鏡に15°斜め立ち・前足を半歩前に',
      steps: ['15°斜め', '前足出し', '靴まで'],
      helperText: '① 鏡の前で15°斜めに立つ\n② 前足を半歩前に出す\n③ 靴までフレームに入れる！'
    }
  },
  {
    id: 'cat_shadow',
    svgType: 'shadow',
    recommendedFlip: false,
    recommendedLens: '0.5×',
    recommendedFrontFoot: false,
    ko: {
      chip: '고양이그림자',
      shortCue: '팔꿈치 귀 + 세 손가락 수염 바닥 그림자',
      steps: ['햇살 등지기', '귀·수염 포즈', '그림자 촬영'],
      helperText: '① 바닥의 그림자를 중앙에 맞춰주세요\n② 귀(팔꿈치)와 수염(손가락)이 또렷하게!\n③ 신발 앞코를 하단에 걸쳐주세요!'
    },
    en: {
      chip: 'Cat Shadow',
      shortCue: 'Elbows for ears & 3 fingers for whiskers',
      steps: ['Back to sun', 'Cat pose', 'Shoot shadow'],
      helperText: '① Aim at the pavement shadow\n② Keep cat ears & whiskers crisp\n③ Include shoe tips at bottom!'
    },
    ja: {
      chip: 'ねこの影',
      shortCue: 'ひじで猫耳・指3本でヒゲの影を撮影',
      steps: ['太陽を背に', '耳とヒゲ', '影を撮影'],
      helperText: '① 地面の影を中央に合わせてください\n② 耳とヒゲの輪郭をはっきり！\n③ 靴先を少し下に入れてください！'
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
      shortCue: '目の高さで人差し指をほっぺに・首10°',
      steps: ['半歩近づく', 'ほっぺに指', 'ドリンク手前'],
      helperText: '① 半歩近づいて目の高さで撮ってください\n② 手前のドリンクも少し入れてください\n③ 上半身中心で撮ってください！'
    }
  }
];
