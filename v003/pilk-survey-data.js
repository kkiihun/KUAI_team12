// PILK (Picture It Like Korean) v003 — Trilingual Data (KR / EN / JP), Coaching Modes, Challenge & Customer Validation Survey

const pilkServiceIntro = {
  ko: {
    title: '📸 PILK (Picture It Like Korean) — "한국인처럼 감각적인 인생샷을 찍는 가장 쉬운 방법"',
    body: 'PILK는 단순한 구도·포즈 가이드 앱이 아닙니다. 한국인들이 SNS에 올린 실제 베스트 컷 데이터를 학습하여, 특정 장소(경복궁, 성수, 연남, 카페 등)에서 한국인처럼 감각적인 인생샷을 찍을 수 있도록 폰 뒤집기·앵글(0.5x 항공샷/로우앵글)·발끝 위치·포즈를 실시간으로 코칭해 주는 AI 포토 코칭 서비스입니다.'
  },
  en: {
    title: '📸 PILK (Picture It Like Korean) — "The Easiest Way to Capture Trendy Life Shots Like a Korean"',
    body: 'PILK is NOT just another simple pose or framing app. Trained on real SNS best-shot data uploaded by Koreans, PILK is a real-time AI photo-coaching service that guides your exact phone flip (upside-down lens), camera angle (0.5x high-angle, low-angle), foot placement, and natural poses right at the specific spot you are visiting.'
  },
  ja: {
    title: '📸 PILK (Picture It Like Korean) — 「韓国人のようなおしゃれな『人生ショット』を撮る一番かんたんな方法」',
    body: 'PILKは、単なる構図・ポーズガイドアプリではありません。韓国人がSNSに投稿した実際のベストショットデータを学習し、特定の場所（景福宮、聖水、延南洞、カフェなど）で韓国人のようなセンスあふれる写真が撮れるよう、「スマホの逆さま持ち・アングル（0.5倍ハイアングル／ローアングル）・足元の位置・ポーズ」をリアルタイムでコーチングするサービスです。'
  }
};

const pilkCoachingModes = [
  {
    id: 'A',
    badge: 'MODE A · AR SCREEN OVERLAY',
    ko: {
      title: 'A. AR 화면 가이드',
      subtitle: '실루엣 · 발끝 기준선 · 수평선 실시간 오버레이',
      desc: '카메라 화면 위에 인물 실루엣 라인, 발끝 위치, 배경 수평선 가이드가 반투명하게 표시되어 선에 맞춰 서기만 하면 한국인 비율의 인생샷이 완성됩니다.',
      steps: ['화면 하단 발끝 기준선(FOOT LINE)에 신발 끝 맞추기', '반투명 포즈 실루엣에 어깨와 시선 정렬', '동반자·행인에게 폰을 건네줄 때 선만 맞추도록 요청']
    },
    en: {
      title: 'A. AR Screen Overlay Guide',
      subtitle: 'Live Silhouette · Foot Marker · Horizon Grid',
      desc: 'Translucent pose silhouette lines, foot placement markers, and framing grids appear directly on the camera screen—just align with the lines for Korean-style proportions.',
      steps: ['Align your shoes with the bottom FOOT LINE marker', 'Match your shoulders and gaze to the translucent silhouette', 'Hand your phone to a friend/stranger—they just align the lines!']
    },
    ja: {
      title: 'A. AR画面オーバーレイガイド',
      subtitle: 'シルエット・足元の基準線・水平ガイド表示',
      desc: 'カメラ画面上に人物のシルエットライン、足元の位置、背景の水平ガイドが半透明で表示され、線に合わせるだけで韓国っぽ比率の一枚が完成します。',
      steps: ['画面下部の足元ライン（FOOT LINE）につま先を合わせる', '半透明のポーズシルエットに肩と視線を合わせる', '同行者や通行人にスマホを渡す際も、線に合わせるだけでOK']
    }
  },
  {
    id: 'B',
    badge: 'MODE B · SNS BEST-CUT & STEP TUTORIAL',
    ko: {
      title: 'B. 베스트컷 예시 및 단계별 튜토리얼',
      subtitle: '한국인 SNS 베스트컷 레퍼런스 + 3단계 카드 가이드',
      desc: '촬영 전 해당 장소의 한국인 SNS 베스트컷 예시를 보여주고, 1단계(폰 뒤집기/0.5x 설정) → 2단계(카메라 높이) → 3단계(시선·포즈)를 직관적인 일러스트로 안내합니다.',
      steps: ['STEP 1: 장소별 한국인 SNS 베스트컷 구도 & 배율(0.5x/1x) 확인', 'STEP 2: 폰 거꾸로 뒤집기(렌즈 하단 위치) 및 카메라 높이 맞추기', 'STEP 3: 자연스러운 시선 처리와 손끝 포즈 따라 하기']
    },
    en: {
      title: 'B. Best-Cut Reference & Step Tutorial',
      subtitle: 'Korean SNS Best-Shot Examples + 3-Step Visual Cards',
      desc: 'Shows real Korean SNS best-shot references for your current spot along with illustrated Step 1 (Phone flip / 0.5x zoom) → Step 2 (Height) → Step 3 (Pose) cards.',
      steps: ['STEP 1: Check Korean SNS best-shot framing & lens zoom (0.5x/1x)', 'STEP 2: Flip phone upside down (lens at bottom) & set camera height', 'STEP 3: Follow the natural gaze and hand pose card']
    },
    ja: {
      title: 'B. ベストショット例＆ステップ別チュートリアル',
      subtitle: '韓国人SNSベストショット見本＋3段階カードガイド',
      desc: '撮影前にその場所の韓国人SNSベストショット見本を表示し、Step 1（スマホ逆さま／0.5倍設定）→ Step 2（高さ）→ Step 3（視線・ポーズ）をカードで案内します。',
      steps: ['STEP 1: スポット別の韓国人SNSベスト構図と倍率（0.5x/1x）を確認', 'STEP 2: スマホを逆さまに持ち、カメラの高さ・角度を合わせる', 'STEP 3: 自然な視線と指先のポーズカードを真似する']
    }
  },
  {
    id: 'C',
    badge: 'MODE C · LIVE VOICE & TEXT COACHING',
    ko: {
      title: 'C. 실시간 음성·텍스트 액션 코칭',
      subtitle: '폰 뒤집기 · 거리 · 각도 실시간 보이스 디렉팅',
      desc: '화면을 계속 들여다보지 않아도 "폰을 거꾸로 뒤집으세요", "반 걸음 뒤로 이동하세요", "턱을 살짝 들고 지금 찍으세요!"처럼 음성(한/영/일)과 텍스트로 코칭합니다.',
      steps: ['🔊 "폰을 180도 뒤집어 렌즈가 아래로 향하게 들어주세요"', '🔊 "좋아요! 반 걸음 뒤로 물러나 발끝을 하단 끝에 맞추세요"', '🔊 "시선은 렌즈 위쪽, 자연스럽게 걸으며 3, 2, 1 찰칵!"']
    },
    en: {
      title: 'C. Real-Time Voice & Text Action Coaching',
      subtitle: 'Live Multilingual Voice Prompts for Phone-Flip & Angles',
      desc: 'No need to squint at the screen—live voice (KR/EN/JP) and text prompts direct you step by step: "Flip your phone upside down," "Half a step back," "Chin up and snap!"',
      steps: ['🔊 "Flip your phone 180° so the camera lens is at the bottom"', '🔊 "Great! Take half a step back and align feet to the bottom edge"', '🔊 "Look slightly above the lens, walk naturally—3, 2, 1, snap!"']
    },
    ja: {
      title: 'C. リアルタイム音声・テキストコーチング',
      subtitle: 'スマホの向き・距離・角度を音声でライブディレクション',
      desc: '画面をずっと見なくても、「スマホを逆さまにして」「半歩後ろに下がって」「少し顎を上げて、今シャッターを押して！」と多言語音声とテキストで案内します。',
      steps: ['🔊「スマホを180度逆さまにして、レンズを下に向けてください」', '🔊「いい感じ！半歩後ろに下がって、つま先を画面下端に合わせましょう」', '🔊「視線はレンズの少し上、自然に歩きながら 3、2、1、パシャ！」']
    }
  }
];

const pilkChallenges = [
  {
    id: 'coupon',
    badge: 'FREE ENTRY · INSTANT LOCAL REWARD',
    icon: '🎟️',
    ko: {
      title: '성수 · 연남 · 경복궁 인생샷 찍고 로컬 제휴 쿠폰 받기',
      desc: '참가비 무료! PILK 코칭 가이드로 핫플 인증샷을 촬영하면 주변 인기 카페·소품샵·한복 대여점 즉시 할인 쿠폰(10~20% OFF)을 드립니다.',
      cta: '무료 쿠폰 챌린지 체험하기',
      reward: '주변 제휴 카페 · 한복 대여점 즉시 할인권'
    },
    en: {
      title: 'Snap at Hotspots & Get Instant Local Cafe/Shop Coupons',
      desc: 'Free entry! Take a verified shot with PILK coaching at Seongsu, Yeonnam, or Gyeongbokgung to unlock instant 10–20% discount coupons at partner cafes & Hanbok shops.',
      cta: 'Try Free Coupon Challenge',
      reward: 'Instant Partner Cafe & Hanbok Discount Coupon'
    },
    ja: {
      title: '聖水・延南・景福宮で撮ってローカル提携クーポンGET',
      desc: '参加費無料！PILKのガイドで人気スポットの認証ショットを撮ると、周辺の人気カフェ・雑貨店・韓服レンタル店の即時割引クーポン（10〜20% OFF）をプレゼント。',
      cta: '無料クーポンチャレンジを体験',
      reward: '周辺提携カフェ・韓服レンタル即時割引券'
    }
  },
  {
    id: 'prize',
    badge: 'WEEKLY BEST-SHOT CONTEST · PRIZE POOL',
    icon: '🏆',
    ko: {
      title: '주간 베스트 K-인생샷 챌린지 (소액 참가비 추첨 상금)',
      desc: '소액 참가비($1~2 / 1,500원)로 응모하는 주간 베스트컷 챌린지! 한국인처럼 가장 감각적인 구도로 찍은 여행자에게 추첨 상금 및 올리브영·여행 기프트카드를 드립니다.',
      cta: '주간 베스트컷 응모 체험',
      reward: '주간 상금 풀 & 올리브영 기프트카드 추첨'
    },
    en: {
      title: 'Weekly Best K-Life-Shot Contest (Prize Pool & Gift Cards)',
      desc: 'Join with a small entry fee ($1–$2)! Upload your best PILK-coached shot to win weekly prize pool rewards and Olive Young / Korea Travel gift cards.',
      cta: 'Try Weekly Prize Contest',
      reward: 'Weekly Prize Pool & Olive Young Gift Card Draw'
    },
    ja: {
      title: '週間ベストK-人生ショットコンテスト（少額参加費・抽選賞金）',
      desc: '少額の参加費（約150〜300円）で応募する週間ベストショットチャレンジ！韓国っぽ構図で素敵な一枚を撮った旅行者に抽選で賞金やオリーブヤングギフトカードを贈呈。',
      cta: '週間ベストショット応募を体験',
      reward: '週間賞金プール＆オリーブヤングギフトカード抽選'
    }
  }
];

// Survey sections & questions (Part 1 ~ Part 4 + Korean Respondent Appendix K1 ~ K4)
const pilkSurveySections = [
  {
    id: 'part1',
    badge: 'PART 1 · BASIC INFO & SCREENING',
    title: {
      ko: 'Part 1. 기본 정보 (Basic Information)',
      en: 'Part 1. Basic Information',
      ja: 'Part 1. 基本情報'
    },
    desc: {
      ko: '⚙️ [구글 폼 분기 안내] Q1에서 "대한민국" 선택 시 → [부록: 한국인 전용 섹션]으로 자동 이동합니다. Q4에서 "방문 경험도 계획도 없음" 선택 시 → 설문이 종료됩니다.',
      en: '⚙️ [Google Forms Branching] Selecting "South Korea" in Q1 jumps to the [Appendix: Korean Respondents Section]. Selecting "No experience & no plan" in Q4 ends the survey.',
      ja: '⚙️ [Googleフォーム分岐案内] Q1で「大韓民国」を選択すると[付録：韓国人回答者専用セクション]へ移動します。Q4で「訪問経験も予定もない」を選択するとアンケート終了となります。'
    },
    questions: [
      {
        id: 'Q1',
        type: 'single',
        required: true,
        branchingNote: '⚙️ 구글 폼 설정: [응답을 기준으로 섹션 이동] → "대한민국" 선택 시 [부록: 한국인 응답자 전용 섹션]으로 이동',
        q: {
          ko: 'Q1. 귀하의 국적(또는 문화권)은 어디입니까?',
          en: 'What is your nationality (or region)?',
          ja: 'あなたの国籍（または地域）はどこですか？'
        },
        options: [
          { value: 'jp', ko: '일본', en: 'Japan', ja: '日本' },
          { value: 'en_us', ko: '미국·캐나다·영미권', en: 'USA, Canada, UK, Australia, etc.', ja: '北米・英語圏' },
          { value: 'cn_tw', ko: '중화권 (대만·홍콩·중국 등)', en: 'Greater China (Taiwan, Hong Kong, China, etc.)', ja: '中華圏（台湾・香港・中国など）' },
          { value: 'sea', ko: '동남아시아 (태국·베트남·필리핀·싱가포르 등)', en: 'Southeast Asia', ja: '東南アジア' },
          { value: 'eu_other', ko: '유럽·중남미·기타 지역', en: 'Europe, Latin America, Others', ja: 'ヨーロッパ・中南米・その他' },
          { value: 'kr', ko: '대한민국 (→ 한국인 전용 비교 섹션으로 이동)', en: 'South Korea (→ Moves to Korean Appendix Section)', ja: '大韓民国（→ 韓国人専用セクションへ移動）' }
        ]
      },
      {
        id: 'Q2',
        type: 'single',
        required: true,
        q: {
          ko: 'Q2. 귀하의 연령대는 어떻게 되십니까?',
          en: 'What is your age group?',
          ja: 'あなたの年齢層を教えてください。'
        },
        options: [
          { value: '10s', ko: '10대 (만 19세 이하)', en: 'Teens (Under 20)', ja: '10代（19歳以下）' },
          { value: '20s', ko: '20대 (만 20~29세)', en: '20s (20–29)', ja: '20代（20〜29歳）' },
          { value: '30s', ko: '30대 (만 30~39세)', en: '30s (30–39)', ja: '30代（30〜39歳）' },
          { value: '40plus', ko: '40대 이상 (만 40세 이상)', en: '40s and above (40+)', ja: '40代以上（40歳以上）' }
        ]
      },
      {
        id: 'Q3',
        type: 'single',
        required: true,
        q: {
          ko: 'Q3. 한국 여행 시(또는 여행할 때) 주로 누구와 함께 동행하십니까?',
          en: 'Who is your main travel companion when traveling (or planning to travel) to Korea?',
          ja: '韓国旅行の際（または旅行する際）、主に誰と同行しますか？'
        },
        options: [
          { value: 'solo', ko: '혼자 (나홀로 여행)', en: 'Solo (Traveling alone)', ja: 'ひとり（一人旅）' },
          { value: 'friends', ko: '친구·지인', en: 'Friends', ja: '友人・知人' },
          { value: 'partner', ko: '연인·배우자', en: 'Partner or Spouse', ja: '恋人・配偶者' },
          { value: 'family', ko: '가족·친척', en: 'Family or Relatives', ja: '家族・親戚' }
        ]
      },
      {
        id: 'Q4',
        type: 'single',
        required: true,
        branchingNote: '⚙️ [스크리닝 문항] "방문한 적도 없고 향후 방문할 계획도 없다" 선택 시 → [설문 종료 / 설문지 제출]로 이동 안내',
        q: {
          ko: 'Q4. [스크리닝 문항] 한국을 방문해 본 경험이나 향후 방문할 계획이 있으십니까?',
          en: 'Have you ever visited Korea, or do you plan to visit in the future?',
          ja: '韓国を訪問した経験、または今後訪問する予定はありますか？'
        },
        options: [
          { value: 'visited_1_2', ko: '한국에 방문한 적이 있다 (1~2회)', en: 'Yes, I have visited Korea (1–2 times)', ja: '韓国に行ったことがある（1〜2回）' },
          { value: 'visited_3plus', ko: '한국에 여러 번 방문한 적이 있다 (3회 이상)', en: 'Yes, I have visited Korea multiple times (3+ times)', ja: '韓国に何度も行ったことがある（3回以上）' },
          { value: 'plan_to', ko: '아직 방문 경험은 없지만, 향후 방문할 계획(또는 관심)이 있다', en: 'Never visited yet, but I plan (or want) to visit in the future', ja: 'まだ行ったことはないが、今後行く予定（または関心）がある' },
          { value: 'no_plan_screen_out', ko: '방문한 적도 없고, 향후 방문할 계획도 없다 (→ 선택 시 설문 종료 안내)', en: 'Never visited, and have no plans to visit Korea (→ Ends survey)', ja: '行ったこともなく、今後行く予定もない（→ 選択時アンケート終了）' }
        ]
      }
    ]
  },
  {
    id: 'part2',
    badge: 'PART 2 · PHOTO EXPERIENCE & K-STYLE PERCEPTION',
    title: {
      ko: 'Part 2. 촬영 경험 & 한국인 스타일 인식 (Photo Experience & K-Style Perception)',
      en: 'Part 2. Photo Experience & Perception of Korean Style',
      ja: 'Part 2. 撮影経験＆韓国スタイルへの認識'
    },
    desc: {
      ko: '여행 중 사진 촬영 습관과 한국인의 감각적인 SNS 사진 스타일(폰 뒤집기, 0.5x 각도, 포즈 등)에 대한 인식을 여쭤봅니다.',
      en: 'Questions about your travel photo habits and how you perceive Korean-style SNS photography (angles, phone-flip, poses).',
      ja: '旅行中の写真撮影の習慣と、韓国人のおしゃれなSNS写真スタイル（角度・スマホ逆さま・ポーズなど）に対する認識をお伺いします。'
    },
    questions: [
      {
        id: 'Q5',
        type: 'single',
        required: true,
        q: {
          ko: 'Q5. 여행지에서 본인의 모습을 담은 사진을 얼마나 자주 촬영하십니까?',
          en: 'How often do you take photos of yourself at travel destinations?',
          ja: '旅行先でご自身が写った写真をどのくらい頻繁に撮りますか？'
        },
        options: [
          { value: 'every_spot', ko: '방문하는 모든 명소·카페마다 수시로 찍는다', en: 'Very frequently at every spot and cafe I visit', ja: '訪れるすべてのスポットやカフェで頻繁に撮る' },
          { value: 'few_per_day', ko: '마음에 드는 주요 장소에서 하루에 몇 번씩 찍는다', en: 'A few times a day at favorite spots', ja: '気に入った主な場所で1日に数回撮る' },
          { value: 'occasionally', ko: '여행 전체 기간 중 꼭 남기고 싶은 곳에서만 가끔 찍는다', en: 'Occasionally, only at must-capture places', ja: '旅行中、どうしても残したい場所でのみ時々撮る' },
          { value: 'rarely', ko: '인물 사진은 거의 찍지 않고 풍경·음식 위주로만 찍는다', en: 'Rarely take portraits; mostly scenery and food', ja: '人物写真はほとんど撮らず、風景や食べ物中心に撮る' }
        ]
      },
      {
        id: 'Q6',
        type: 'single',
        required: true,
        q: {
          ko: 'Q6. 여행지에서 본인의 사진을 찍을 때 주로 어떤 방식을 이용하십니까?',
          en: 'How do you mainly take photos of yourself while traveling?',
          ja: '旅行先で自分の写真を撮る際、主にどのような方法を使いますか？'
        },
        options: [
          { value: 'companion', ko: '함께 간 동반자(친구·연인·가족)가 찍어준다', en: 'Taken by my travel companion (friend, partner, family)', ja: '一緒に行った同行者（友人・恋人・家族）に撮ってもらう' },
          { value: 'selfie', ko: '직접 손으로 들고 셀카(전면 카메라·거울 셀카 등)를 찍는다', en: 'Take selfies myself (front camera, mirror selfie, etc.)', ja: '自分でスマホを持って自撮り（インカメラ・鏡セルフィーなど）をする' },
          { value: 'tripod', ko: '삼각대·셀카봉·타이머를 세워두고 혼자 찍는다', en: 'Use a tripod, selfie stick, or timer by myself', ja: '三脚・自撮り棒・タイマーをセットして一人で撮る' },
          { value: 'stranger', ko: '현장에 있는 다른 관광객이나 행인·직원에게 부탁한다', en: 'Ask passersby, other tourists, or staff on site', ja: '現地にいる他の観光客や通行人・スタッフにお願いする' }
        ]
      },
      {
        id: 'Q7',
        type: 'checkbox',
        required: true,
        q: {
          ko: 'Q7. 여행지에서 사진을 찍을 때 가장 어렵거나 스트레스받는 점은 무엇입니까? (복수 선택 가능)',
          en: 'What are the biggest difficulties or frustrations when taking photos on a trip? (Select all that apply)',
          ja: '旅行先で写真を撮る際、最も難しい・ストレスに感じることは何ですか？（複数選択可）'
        },
        options: [
          { value: 'angle', ko: '배경과 인물이 조화롭게 나오는 예쁜 구도·앵글(각도)을 잡기 어렵다', en: 'Hard to find a flattering composition and camera angle that balances me and the background', ja: '背景と人物が調和するきれいな構図・アングル（角度）を決めるのが難しい' },
          { value: 'pose', ko: '카메라 앞에 서면 손 처리나 포즈·표정이 어색해진다', en: 'My hands, poses, and facial expressions feel awkward in front of the camera', ja: 'カメラの前に立つと、手の位置やポーズ・表情がぎこちなくなる' },
          { value: 'explain', ko: '동반자나 행인에게 내가 원하는 구도·느낌을 정확히 설명하기 어렵다', en: 'Hard to explain the exact angle or vibe I want to my companion or a stranger', ja: '同行者や通行人に、自分が望む構図や雰囲気を正確に説明するのが難しい' },
          { value: 'spot_point', ko: '유명한 핫플레이스에 갔지만 정작 어느 위치에서 어떻게 찍어야 예쁜지 모르겠다', en: 'Even at famous hotspots, I don\'t know the exact spot or angle for the best shot', ja: '有名な人気スポットに行っても、具体的にどの位置でどう撮ればきれいに写るかわからない' },
          { value: 'crowd_light', ko: '주변에 사람이 너무 많거나, 역광·어두운 조명 때문에 사진이 망가진다', en: 'Too many people in the background, or bad lighting/backlight ruins the photo', ja: '周りに人が多すぎたり、逆光や暗い照明のせいで写真がうまく撮れない' }
        ]
      },
      {
        id: 'Q8',
        type: 'single',
        required: true,
        branchingNote: '※ 기존 Q8 삭제 후 구 Q9(재촬영/포기 경험) 문항만 핵심으로 유지',
        q: {
          ko: 'Q8. 찍힌 사진이 마음에 들지 않아 같은 자리에서 여러 번 재촬영하거나, 결국 만족스러운 사진을 건지지 못하고 포기한 경험이 있으십니까?',
          en: 'Have you ever had to retake photos many times at the same spot because you weren\'t satisfied, or ended up giving up without getting a good shot?',
          ja: '撮った写真が気に入らず同じ場所で何度も撮り直したり、結局満足のいく写真が撮れずに諦めた経験はありますか？'
        },
        options: [
          { value: 'very_often', ko: '매우 자주 있다 (여행 때마다 겪는다)', en: 'Very often (Happens on almost every trip)', ja: '非常によくある（旅行のたびに経験する）' },
          { value: 'sometimes', ko: '종종 있다 (중요한 명소에서 가끔 겪는다)', en: 'Sometimes (Happens occasionally at key spots)', ja: '時々ある（重要なスポットでたまに経験する）' },
          { value: 'rarely', ko: '거의 없다 (대체로 한두 번 만에 만족한다)', en: 'Rarely (Usually satisfied within 1–2 shots)', ja: 'ほとんどない（たいてい1〜2回で満足する）' },
          { value: 'never', ko: '전혀 없다', en: 'Never', ja: '全くない' }
        ]
      },
      {
        id: 'Q9',
        type: 'scale5',
        required: true,
        branchingNote: '✨ [신규 필수 문항] 한국인의 사진 촬영 스타일(구도, 각도, 포즈 등)이 감각적이거나 참고할 만하다고 생각한 경험 (5점 척도)',
        q: {
          ko: 'Q9. [신규 문항] SNS(인스타그램, 틱톡, 핀터레스트 등)에서 한국인들이 찍은 사진 스타일(폰 뒤집기, 0.5x 광각 앵글, 구도, 자연스러운 포즈 등)을 보며 "감각적이다" 또는 "참고할 만하다(따라 찍어보고 싶다)"고 생각한 적이 있으십니까? (5점 척도)',
          en: 'When seeing Korean-style photos on social media (e.g., upside-down phone angles, 0.5x wide shots, trendy framing, natural poses), have you ever found them trendy or worth referencing? (5-point scale)',
          ja: 'SNSで韓国人の写真の撮り方（スマホ逆さま撮影、0.5倍広角アングル、構図、自然なポーズなど）を見て、「おしゃれだな」「参考になる（真似してみたい）」と思ったことはありますか？（5段階評価）'
        },
        scaleLabels: {
          min: { ko: '1점: 전혀 그렇지 않다', en: '1: Strongly Disagree', ja: '1: 全くそう思わない' },
          max: { ko: '5점: 매우 그렇다 (꼭 따라 해보고 싶다)', en: '5: Strongly Agree (Want to try)', ja: '5: とてもそう思う（ぜひ真似したい）' }
        }
      }
    ]
  },
  {
    id: 'part3',
    badge: 'PART 3 · EXISTING ALTERNATIVES & LIMITATIONS',
    title: {
      ko: 'Part 3. 기존 대안 및 한계 (Existing Alternatives & Limitations)',
      en: 'Part 3. Existing Alternatives & Limitations',
      ja: 'Part 3. 既存の代替手段とその限界'
    },
    desc: {
      ko: '인생샷을 찍기 위해 기존에 시도해 본 방법과 그 과정에서 느낀 한계점을 확인합니다.',
      en: 'Understanding what you have tried before to take better travel photos and what was lacking.',
      ja: '「人生ショット」を撮るためにこれまで試した方法と、その限界点を確認します。'
    },
    questions: [
      {
        id: 'Q10',
        type: 'checkbox',
        required: true,
        q: {
          ko: 'Q10. 여행지에서 ‘인생샷(잘 나온 사진)’을 건지기 위해 지금까지 시도해 본 노력을 모두 골라주세요. (복수 선택 가능)',
          en: 'Which of the following have you tried to get great travel photos? (Select all that apply)',
          ja: '旅行先で「人生ショット（最高の一枚）」を撮るために、これまで試したことをすべて選んでください。（複数選択可）'
        },
        options: [
          { value: 'sns_search', ko: '인스타그램·틱톡·샤오홍슈·핀터레스트 등에서 장소별 레퍼런스 사진 검색 및 저장', en: 'Searched and saved reference photos on Instagram, TikTok, Xiaohongshu, or Pinterest', ja: 'Instagram・TikTok・RED・Pinterestなどで場所別の参考写真を検索・保存した' },
          { value: 'youtube_blog', ko: '유튜브·블로그 등에서 ‘사진 잘 찍는 법(폰 뒤집기, 비율 맞추기 등)’ 팁 학습', en: 'Watched tutorials on YouTube or blogs on how to take better phone photos', ja: 'YouTubeやブログなどで「写真をうまく撮るコツ」を調べた' },
          { value: 'show_companion', ko: '동반자에게 레퍼런스 사진을 미리 보여주며 "똑같이 찍어달라"고 요청', en: 'Showed a reference photo to my companion and asked them to copy the exact framing', ja: '同行者に参考写真を見せて「これと同じように撮って」とお願いした' },
          { value: 'grid_apps', ko: '카메라 격자선(Grid) 기능, 보정 앱, 또는 포즈 가이드 앱 사용', en: 'Used camera grid lines, photo editing apps, or pose guide apps', ja: 'カメラのグリッド線機能、加工アプリ、またはポーズガイドアプリを使用した' },
          { value: 'none', ko: '별다른 준비 없이 현장에서 감으로 찍었다', en: 'Just took photos on the spot without special preparation', ja: '特別な準備はせず、現地で感覚で撮った' }
        ]
      },
      {
        id: 'Q11',
        type: 'scale5',
        required: true,
        q: {
          ko: 'Q11. 위와 같은 기존 방식들로 사진을 찍었을 때, 결과물에 대해 전반적으로 얼마나 만족하셨습니까? (5점 척도)',
          en: 'Overall, how satisfied were you with the photo results using your existing methods above? (5-point scale)',
          ja: '上記のような既存の方法で写真を撮った際、仕上がりに対して全体的にどの程度満足しましたか？（5段階評価）'
        },
        scaleLabels: {
          min: { ko: '1점: 매우 불만족', en: '1: Very Dissatisfied', ja: '1: 非常に不満' },
          max: { ko: '5점: 매우 만족', en: '5: Very Satisfied', ja: '5: 非常に満足' }
        }
      },
      {
        id: 'Q12',
        type: 'checkbox',
        required: true,
        q: {
          ko: 'Q12. 기존 방식(SNS 검색 후 따라 찍기, 동반자에게 부탁하기 등)을 사용할 때 가장 아쉬웠던 점은 무엇입니까? (복수 선택 가능)',
          en: 'What were the biggest limitations or frustrations when using those existing methods? (Select all that apply)',
          ja: '既存の方法（SNSで検索して真似する、同行者にお願いするなど）を使った際、最も物足りなかった・残念だった点は何ですか？（複数選択可）'
        },
        options: [
          { value: 'hard_recreate', ko: '저장해 둔 레퍼런스 사진을 보더라도 막상 현장에서 똑같은 구도·비율로 재현하기 어렵다', en: 'Even with a saved reference photo, it is hard to recreate the exact framing and proportions on site', ja: '保存した参考写真を見ても、いざ現地で同じ構図や比率を再現するのが難しい' },
          { value: 'no_exact_setting', ko: '폰을 뒤집어야 하는지, 몇 배율(0.5x/1x/2x)로 찍어야 하는지 등 구체적인 촬영 세팅을 알 수 없다', en: 'Can\'t tell the exact camera settings (e.g., flipping phone upside down, lens zoom 0.5x/1x/2x, camera height)', ja: 'スマホを逆さまにすべきか、何倍（0.5x/1x/2x）で撮るべきかなど、具体的な撮影設定がわからない' },
          { value: 'time_consuming', ko: '여행지 현장에서 일일이 어울리는 포즈와 구도를 검색하느라 시간이 너무 많이 걸린다', en: 'Searching for poses and angles on the spot takes too much time during the trip', ja: '旅行先の現地でいちいち似合うポーズや構図を検索するのに時間がかかりすぎる' },
          { value: 'helper_mismatch', ko: '찍어주는 사람(동반자·행인)이 레퍼런스 사진을 봐도 그 느낌과 각도를 맞추지 못한다', en: 'The person taking the photo (companion or passerby) still can\'t match the angle even after seeing the reference', ja: '撮ってくれる人（同行者や通行人）に参考写真を見せても、その角度や雰囲気を合わせられない' }
        ]
      }
    ]
  },
  {
    id: 'part4',
    badge: 'PART 4 · PILK SERVICE DEMAND & PREFERENCES',
    title: {
      ko: 'Part 4. PILK 수요 및 선호도 조사 (PILK Service Demand & Preferences)',
      en: 'Part 4. PILK Service Demand & Preferences',
      ja: 'Part 4. PILKの需要および選好度調査'
    },
    serviceIntro: pilkServiceIntro,
    desc: {
      ko: '💡 [필수 반영 서비스 소개문] 단순 구도/포즈 앱이 아니라, "한국인이 SNS에 올린 베스트 컷 데이터를 학습해, 특정 장소에서 한국인처럼 감각적인 인생샷을 찍을 수 있도록 폰 뒤집기·앵글·포즈를 실시간 코칭해 주는 서비스"입니다.',
      en: '💡 [Service Intro] Not a simple pose app—PILK learns from Korean SNS best-cut data to coach your phone flip, camera angle, and pose in real time at specific locations.',
      ja: '💡 [サービス紹介] 単なる構図・ポーズアプリではなく、「韓国人がSNSに投稿したベストショットデータを学習し、特定の場所で韓国人のような人生ショットが撮れるようスマホ逆さま持ち・アングル・ポーズをリアルタイムコーチングするサービス」です。'
    },
    questions: [
      {
        id: 'Q13',
        type: 'checkbox',
        maxSelect: 3,
        required: true,
        branchingNote: '⚙️ 구글 폼 응답 확인 설정: 선택할 수 있는 최대 개수 = 3개',
        q: {
          ko: 'Q13. PILK 서비스가 출시된다면, 가장 필요하다고 생각하는 핵심 기능은 무엇입니까? (최대 3개 선택)',
          en: 'Which core features of PILK would be most useful to you? (Select up to 3)',
          ja: 'PILKがリリースされたら、最も必要だと思うコア機能は何ですか？（最大3つまで選択）'
        },
        options: [
          { value: 'sns_best_spot', ko: '장소별 한국인 SNS 베스트컷 추천 (내 주변 명소·카페 인생샷 스팟 & 구도)', en: 'Spot-based Korean SNS Best-Shot Recommendations near me', ja: '場所別の韓国人SNSベストショット推薦（現在地周辺のスポット＆構図）' },
          { value: 'angle_flip_coach', ko: '실시간 앵글·폰 뒤집기 코칭 ("폰을 뒤집으세요", "0.5x 광각 항공샷" 등 실시간 안내)', en: 'Real-time Angle & Phone-Flip Coaching ("Flip phone upside down", "0.5x high angle")', ja: 'リアルタイムのアングル・スマホ逆さま持ちコーチング（「スマホを逆さまにして」「0.5倍広角」など）' },
          { value: 'ar_silhouette', ko: '화면 위 2D/AR 실루엣 가이드 (발끝 기준선과 포즈 실루엣 오버레이)', en: 'On-Screen AR Silhouette & Foot Placement Line Guide', ja: '画面上のARシルエット＆足元基準線ガイド' },
          { value: 'helper_10s', ko: '\'찍어주는 사람(동반자·행인)\' 전용 10초 다국어 코칭 모드', en: '"For the Photographer" 10-Second Multilingual Helper Mode', ja: '「撮ってくれる人（同行者・通行人）」専用の10秒多言語コーチングモード' },
          { value: 'pose_hanbok_color', ko: '한국 트렌드 포즈 & 장소별 어울리는 한복·코디 컬러 매칭 가이드', en: 'K-Trend Poses & Spot-matched Outfit/Hanbok Color Guide', ja: '韓国トレンドポーズ＆場所に似合う韓服・コーデカラー診断ガイド' },
          { value: 'challenge_reward', ko: '인생샷 포토 챌린지 & 주변 로컬 카페·상점 할인 쿠폰 리워드', en: 'Photo Challenge & Nearby Local Cafe/Shop Coupon Rewards', ja: 'フォトチャレンジ＆周辺ローカルカフェ・ショップ割引クーポン特典' }
        ]
      },
      {
        id: 'Q14',
        type: 'single',
        required: true,
        q: {
          ko: 'Q14. PILK 서비스를 어떤 형태로 이용하는 것이 가장 편리하겠습니까?',
          en: 'How would you prefer to access and use the PILK service?',
          ja: 'PILKサービスをどのような形で利用するのが最も便利だと思いますか？'
        },
        options: [
          { value: 'web', ko: '모바일 웹 (설치 없이 QR코드·링크로 브라우저에서 즉시 사용)', en: 'Mobile Web (Instant access via browser/QR without app installation)', ja: 'モバイルWeb（インストール不要、QRやリンクからブラウザですぐ利用）' },
          { value: 'plugin', ko: '기본 카메라 / SNS(인스타그램·틱톡 등) 연동 플러그인·필터', en: 'Native Camera / SNS (Instagram, TikTok) Plugin or Filter', ja: '標準カメラ／SNS（Instagram・TikTokなど）連携プラグイン・フィルター' },
          { value: 'app', ko: '전용 모바일 앱 (App Store / Google Play 다운로드)', en: 'Dedicated Mobile App (iOS / Android download)', ja: '専用モバイルアプリ（App Store / Google Playでダウンロード）' }
        ]
      },
      {
        id: 'Q15',
        type: 'scale5',
        required: true,
        q: {
          ko: 'Q15. 한국 여행 시 위와 같은 PILK 서비스를 실제로 이용해 볼 의향이 있으십니까? (5점 척도)',
          en: 'How likely are you to use PILK during your trip to Korea? (5-point scale)',
          ja: '韓国旅行の際、このようなPILKサービスを実際に利用してみたいと思いますか？（5段階評価）'
        },
        scaleLabels: {
          min: { ko: '1점: 전혀 이용할 생각이 없다', en: '1: Definitely would not use', ja: '1: 全く利用するつもりはない' },
          max: { ko: '5점: 매우 적극적으로 이용해 보고 싶다', en: '5: Definitely would use', ja: '5: ぜひ積極的に利用してみたい' }
        }
      },
      {
        id: 'Q16',
        type: 'single',
        required: true,
        imageAttachmentNotice: {
          ko: '🖼️ [이미지 첨부 안내 문구] 아래 첨부된 A, B, C 코칭 화면 예시 이미지를 확인하신 후 가장 마음에 드는 방식을 선택해 주세요.',
          en: '🖼️ [Image Attachment Note] Please check the attached example images for Coaching Styles A, B, and C below before selecting your favorite option.',
          ja: '🖼️ [画像添付のご案内] 下に添付されたA・B・Cのコーチング画面イメージをご確認の上、最も気に入った方式をお選びください。'
        },
        q: {
          ko: 'Q16. [코칭 방식 선호도] 아래 3가지 실시간 코칭 방식(A, B, C) 중 가장 선호하는 방식은 무엇입니까?',
          en: 'Which of the following 3 real-time coaching styles (A, B, or C) do you prefer the most?',
          ja: '以下の3つのリアルタイムコーチング方式（A・B・C）のうち、最も好む方式はどれですか？'
        },
        options: [
          {
            value: 'mode_a',
            ko: 'A. AR 화면 가이드 (카메라 화면 위에 실루엣 라인·발끝 위치·수평선 가이드를 겹쳐 보여주기)',
            en: 'A. AR Screen Overlay Guide (Translucent pose silhouette, foot marker & grid on live camera)',
            ja: 'A. AR画面オーバーレイガイド（カメラ画面上にシルエット・足元位置・水平ガイドを重ねて表示）'
          },
          {
            value: 'mode_b',
            ko: 'B. 베스트컷 예시 및 단계별 튜토리얼 (한국인 SNS 베스트컷 예시 + 폰 뒤집기·앵글·포즈 3단계 카드 안내)',
            en: 'B. Best-Shot Reference & Step-by-Step Tutorial (Korean SNS best-shot example + 3-step visual cards)',
            ja: 'B. ベストショット例＆ステップ別チュートリアル（韓国人SNS見本写真＋スマホ逆さま・角度・ポーズの3段階カード）'
          },
          {
            value: 'mode_c',
            ko: 'C. 실시간 음성·텍스트 코칭 ("폰을 거꾸로 뒤집으세요", "반 걸음 뒤로" 등 다국어 음성·자막 실시간 디렉팅)',
            en: 'C. Real-Time Voice & Text Coaching ("Flip phone upside down", "Half a step back" live voice/text prompts)',
            ja: 'C. リアルタイム音声・テキストコーチング（「スマホを逆さまにして」「半歩後ろへ」など多言語音声と字幕で案内）'
          }
        ]
      },
      {
        id: 'Q17',
        type: 'single',
        required: true,
        q: {
          ko: 'Q17. [포토 챌린지 및 리워드] 한국 명소에서 PILK 가이드로 인생샷을 찍어 인증하면 혜택을 주는 \'포토 챌린지\'가 있다면 어떤 방식에 가장 참여하고 싶으십니까?',
          en: 'If PILK offered a "Photo Challenge & Reward" program when you take a verified shot at a Korean hotspot, which option sounds most appealing?',
          ja: '韓国のスポットでPILKのガイドを使って写真を撮り認証すると特典がもらえる「フォトチャレンジ」がある場合、どの方式に最も参加したいですか？'
        },
        options: [
          { value: 'free_coupon', ko: '무료 참여 + 로컬 제휴 즉시 쿠폰 (주변 인기 카페·소품샵·한복 대여점 할인권)', en: 'Free Entry + Instant Local Partner Coupons (Nearby cafes, gift shops, Hanbok rentals)', ja: '無料参加＋ローカル提携即時クーポン（周辺の人気カフェ・雑貨店・韓服レンタル割引券）' },
          { value: 'paid_prize', ko: '소액 참가비($1~2) + 주간 베스트컷 추첨 상금·여행 기프트카드 리워드', en: 'Small Entry Fee ($1–$2) + Weekly Best-Shot Prize Pool & Gift Card Draw', ja: '少額の参加費（約150〜300円）＋週間ベストショット抽選賞金・ギフトカード' },
          { value: 'both', ko: '둘 다 매력적이어서 상황에 따라 모두 참여해 보고 싶다', en: 'Both sound appealing and I would love to try both!', ja: 'どちらも魅力的なので、状況に応じて両方参加してみたい' },
          { value: 'none', ko: '리워드/챌린지 기능에는 별로 관심이 없다 (촬영 코칭 기능만 쓰면 된다)', en: 'Not interested in challenges or rewards (Only need photo coaching)', ja: 'リワードやチャレンジ機能にはあまり関心がない（撮影コーチング機能だけでよい）' }
        ]
      },
      {
        id: 'Q18',
        type: 'single',
        required: true,
        q: {
          ko: 'Q18. PILK 서비스를 유료 또는 제휴 모델로 이용한다면, 가장 선호하는 결제/이용 모델은 무엇입니까?',
          en: 'Which pricing or access model would you prefer for PILK?',
          ja: 'PILKを利用する場合、最も好む料金・利用モデルはどれですか？'
        },
        options: [
          { value: 'free_ad', ko: '기본 기능 무료 + 로컬 카페·매장 추천/제휴 쿠폰 모델', en: 'Free Core Features + Local Partner/Ad Supported Model', ja: '基本機能は無料＋ローカルカフェ・ショップ提携クーポンモデル' },
          { value: 'travel_pass', ko: '단기 여행 기간권 (트래블 패스: 예 3일권 $2.99 / 7일권 $4.99 무제한 이용)', en: 'Short-Term Travel Pass (e.g., 3-Day Pass $2.99 / 7-Day Pass $4.99 unlimited)', ja: '短期旅行パス（トラベルパス：例 3日パス450円／7日パス750円で使い放題）' },
          { value: 'bundle', ko: '투어·한복 대여·티켓 패키지 예약 시 무료 바우처 코드로 제공받기', en: 'Included Free as a Voucher when booking Hanbok rentals, tours, or tickets', ja: 'ツアー・韓服レンタル・チケット予約時の無料特典バウチャーとして利用' },
          { value: 'sub_per_spot', ko: '월간 구독 또는 스팟별 단건 결제', en: 'Monthly Subscription or Pay-per-Spot', ja: '月額サブスクリプション、またはスポットごとの都度課金' }
        ]
      },
      {
        id: 'Q19',
        type: 'text',
        required: false,
        q: {
          ko: 'Q19. [자유 의견] 한국 여행 사진 촬영이나 PILK 서비스에 바라는 점이 있다면 자유롭게 남겨주세요! (선택)',
          en: 'Do you have any other thoughts, wishes, or feedback regarding taking travel photos in Korea or the PILK service? (Optional)',
          ja: '韓国旅行での写真撮影やPILKサービスに期待することがあれば、ご自由にお書きください！（任意回答）'
        }
      }
    ]
  },
  {
    id: 'appendix_kr',
    badge: 'APPENDIX · FOR KOREAN RESPONDENTS ONLY (한국인 분기 섹션)',
    title: {
      ko: '부록 섹션. 한국인 응답자 전용 비교 설문 (For Korean Respondents)',
      en: 'Appendix Section. For Korean Respondents Only (Comparison Group)',
      ja: '付録セクション. 韓国人回答者専用比較アンケート'
    },
    desc: {
      ko: '🇰🇷 [한국인 응답자 분기 처리 안내] Part 1의 Q1(국적)에서 "대한민국"을 선택한 응답자만 이동하는 별도 비교 섹션입니다. 평소 핫플 구도 고민 여부, 한국식 감성 촬영 팁, 외국인 친구에게 PILK 추천 의향 등을 검증합니다.',
      en: '🇰🇷 [Branching Note] Respondents who select "South Korea" in Q1 are routed here to compare domestic hotspot photo habits and willingness to recommend PILK to foreign friends.',
      ja: '🇰🇷 [分岐案内] Part 1のQ1（国籍）で「大韓民国」を選択した回答者が移動する比較セクションです。普段の人気スポットでの構図の悩みや、外国人の友人への推薦意向などを検証します。'
    },
    questions: [
      {
        id: 'K1',
        type: 'scale5',
        required: true,
        q: {
          ko: 'K1. 평소 성수·연남·경복궁·카페 등 핫플레이스에서 사진을 찍거나 찍어줄 때, 구도·앵글·포즈 때문에 고민하거나 여러 번 재촬영한 경험이 얼마나 자주 있으십니까? (5점 척도)',
          en: 'How often do you struggle with angles/poses or retake photos multiple times when visiting Korean hotspots (Seongsu, Yeonnam, Gyeongbokgung, cafes)? (5-point scale)',
          ja: '普段、聖水・延南洞・景福宮・カフェなどの人気スポットで写真を撮る（または撮ってあげる）際、構図・アングル・ポーズに悩んだり何度も撮り直したりする経験はどのくらいありますか？（5段階評価）'
        },
        scaleLabels: {
          min: { ko: '1점: 전혀 없다', en: '1: Never', ja: '1: 全くない' },
          max: { ko: '5점: 매우 자주 있다 (구도 맞추느라 늘 진땀 뺀다)', en: '5: Very often (Always struggle with framing)', ja: '5: 非常によくある（いつも苦労する）' }
        }
      },
      {
        id: 'K2',
        type: 'checkbox',
        required: true,
        q: {
          ko: 'K2. 본인이 평소 인생샷을 찍을 때 활용하거나 가장 중요하다고 생각하는 ‘한국식 감성 촬영 팁’은 무엇입니까? (복수 선택 가능)',
          en: 'Which "Korean-style photo tips" do you personally use or consider most important for getting a great shot? (Select all that apply)',
          ja: 'ご自身が普段「人生ショット」を撮る際に活用している、または最も重要だと思う「韓国っぽ撮影テクニック」は何ですか？（複数選択可）'
        },
        options: [
          { value: 'flip_phone', ko: '폰 거꾸로 뒤집기 (로우앵글/다리가 길어 보이는 비율)', en: 'Flipping the phone upside down (Low angle for longer proportions)', ja: 'スマホを逆さまに持つ（ローアングル／脚長効果）' },
          { value: 'wide_05', ko: '0.5x 초광각 항공샷 (위에서 아래로 내려다보는 MZ 구도)', en: '0.5x Ultra-Wide High Angle (Top-down MZ shot)', ja: '0.5倍超広角ハイアングル（上から見下ろすMZ構図）' },
          { value: 'foot_edge', ko: '발끝을 화면 하단 끝에 맞추고 머리 위 여백 남기기', en: 'Aligning feet to the bottom edge of the frame & leaving headroom', ja: 'つま先を画面の下端に合わせ、頭上に余白を残す' },
          { value: 'candid_burst', ko: '인위적인 차렷 포즈 대신 걷거나 뒤돌아보는 자연스러운 스냅(연사) 연출', en: 'Candid walking/looking-back burst shots instead of stiff poses', ja: '不自然な直立ポーズではなく、歩いたり振り返ったりする自然なスナップ（連写）' },
          { value: 'color_match', ko: '장소·배경 색감과 어울리는 옷(또는 한복) 컬러 매칭', en: 'Matching outfit (or Hanbok) colors with the location\'s background', ja: '場所や背景の色味に似合う服（または韓服）のカラーマッチング' }
        ]
      },
      {
        id: 'K3',
        type: 'scale5',
        required: true,
        q: {
          ko: 'K3. 외국인 친구와 한국 여행을 함께하거나 외국인 관광객이 사진 촬영을 부탁할 때, "한국인 SNS 베스트컷 기반으로 폰 뒤집기·앵글·포즈를 실시간 코칭해 주는 PILK 서비스"가 있다면 추천하거나 함께 사용할 의향이 있으십니까? (5점 척도)',
          en: 'If you were traveling with foreign friends in Korea or asked by foreign tourists to take their photo, how likely would you be to recommend or use PILK together? (5-point scale)',
          ja: '外国人の友人と韓国を旅行するときや、外国人観光客に写真撮影を頼まれたとき、「韓国人SNSベストショットをもとにスマホの向き・アングル・ポーズをリアルタイムコーチングしてくれるPILK」があれば、勧めたり一緒に使ったりしたいですか？（5段階評価）'
        },
        scaleLabels: {
          min: { ko: '1점: 전혀 없다', en: '1: Definitely Not', ja: '1: 全くない' },
          max: { ko: '5점: 매우 적극적으로 추천하고 나도 국내 핫플에서 쓰고 싶다', en: '5: Definitely recommend & use myself', ja: '5: ぜひ積極的に勧めたいし自分も使いたい' }
        }
      },
      {
        id: 'K4',
        type: 'text',
        required: false,
        q: {
          ko: 'K4. 한국인 유저로서 PILK의 \'포토 챌린지(내 인생샷 구도를 공유하거나 핫플 인증샷 업로드 시 카페 쿠폰·상금 리워드 제공)\'에 참여할 의향이나, 서비스에 바라는 점이 있다면 자유롭게 남겨주세요! (선택)',
          en: 'As a Korean user, would you be interested in joining PILK\'s "Photo Challenge" (sharing your best-shot angles at hotspots for cafe coupons or prize rewards), or do you have any suggestions? (Optional)',
          ja: '韓国人ユーザーとして、PILKの「フォトチャレンジ（自分のベストショット構図を共有したり人気スポットの認証ショットを投稿するとカフェクーポンや賞金リワードを提供）」への参加意向や、サービスへのご意見があれば自由にお書きください！（任意回答）'
        }
      }
    ]
  }
];
