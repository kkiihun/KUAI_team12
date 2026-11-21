// PILK v005 — 44 Korean SNS Best-Cut Spots (Full KR / EN / JP + Scene Recipes + Nearby Local Partners)
const nearbyPools = {
  "jongno": [
    {
      "name": {
        "ko": "서촌 루프탑 한옥 카페",
        "en": "Seochon Rooftop Hanok Cafe",
        "ja": "西村ルーフトップ韓屋カフェ"
      },
      "cat": {
        "ko": "제휴 카페",
        "en": "Partner Cafe",
        "ja": "提携カフェ"
      },
      "walk": "4 min",
      "deal": {
        "ko": "PILK 인증 시 아메리카노 15% 할인",
        "en": "15% Off Drinks with PILK Shot",
        "ja": "PILK認証でドリンク15%OFF"
      },
      "spotId": "seochon"
    },
    {
      "name": {
        "ko": "북촌 숨은 기와 전망 골목",
        "en": "Bukchon Hidden Roofline Spot",
        "ja": "北村の隠れ瓦屋根スポット"
      },
      "cat": {
        "ko": "주변 포토스팟",
        "en": "Nearby Spot",
        "ja": "周辺スポット"
      },
      "walk": "7 min",
      "deal": {
        "ko": "사람 적은 오전 10시 추천",
        "en": "Quiet Best-Cut Spot (10 AM)",
        "ja": "穴場ベストカット（午前10時）"
      },
      "spotId": "bukchon"
    },
    {
      "name": {
        "ko": "종로 셀프 포토부스 (인생네컷)",
        "en": "Jongno K-Photo Booth",
        "ja": "鍾路 セルフ写真館"
      },
      "cat": {
        "ko": "제휴 체험",
        "en": "Partner Studio",
        "ja": "提携体験"
      },
      "walk": "5 min",
      "deal": {
        "ko": "프레임 1매 무료 업그레이드",
        "en": "Free Special K-Frame Upgrade",
        "ja": "限定フレーム1枚無料"
      },
      "spotId": "corridor"
    }
  ],
  "seongsu": [
    {
      "name": {
        "ko": "연무장길 브릭 로스터리",
        "en": "Yeonmujang Brick Roastery",
        "ja": "練武場キル ブリックカフェ"
      },
      "cat": {
        "ko": "제휴 카페",
        "en": "Partner Cafe",
        "ja": "提携カフェ"
      },
      "walk": "2 min",
      "deal": {
        "ko": "시그니처 라떼 ₩1,500 즉시 할인",
        "en": "₩1,500 Off Signature Latte",
        "ja": "シグネチャーラテ₩1,500割引"
      },
      "spotId": "seongsu"
    },
    {
      "name": {
        "ko": "성수 팝업 & 플래그십 존",
        "en": "Seongsu Pop-up & Flagship Zone",
        "ja": "聖水ポップアップ＆ショップ"
      },
      "cat": {
        "ko": "주변 핫플",
        "en": "Nearby Hotspot",
        "ja": "周辺ホットスポット"
      },
      "walk": "3 min",
      "deal": {
        "ko": "실내 거울셀카 0.5× 추천 스팟",
        "en": "Top 0.5× Mirror Selfie Spot",
        "ja": "0.5×鏡セルフィー人気場所"
      },
      "spotId": "seongsu"
    },
    {
      "name": {
        "ko": "서울숲 은행나무 산책로",
        "en": "Seoul Forest Ginkgo Walk",
        "ja": "ソウルの森 イチョウ並木"
      },
      "cat": {
        "ko": "주변 관광지",
        "en": "Nearby Attraction",
        "ja": "周辺観光地"
      },
      "walk": "8 min",
      "deal": {
        "ko": "오후 4시 역광 스냅 명소",
        "en": "Golden Hour Walk & Picnic",
        "ja": "午後4時の逆光スナップ名所"
      },
      "spotId": "seoulforest"
    }
  ],
  "mapo": [
    {
      "name": {
        "ko": "연남동 디저트 아틀리에",
        "en": "Yeonnam Dessert Atelier",
        "ja": "延南洞デザートアトリエ"
      },
      "cat": {
        "ko": "제휴 디저트",
        "en": "Partner Bakery",
        "ja": "提携ベーカリー"
      },
      "walk": "3 min",
      "deal": {
        "ko": "음료 주문 시 미니 휘낭시에 증정",
        "en": "Free Financier with Any Drink",
        "ja": "ドリンク注文で焼き菓子進呈"
      },
      "spotId": "yeonnam"
    },
    {
      "name": {
        "ko": "망원시장 로컬 간식 투어",
        "en": "Mangwon Market Street Snacks",
        "ja": "望遠市場ローカルグルメ"
      },
      "cat": {
        "ko": "주변 관광지",
        "en": "Nearby Market",
        "ja": "周辺市場"
      },
      "walk": "9 min",
      "deal": {
        "ko": "닭강정·고로케 제휴 ₩1,000 쿠폰",
        "en": "₩1,000 Off Partner Snack Stalls",
        "ja": "提携屋台₩1,000割引クーポン"
      },
      "spotId": "mangwon"
    },
    {
      "name": {
        "ko": "하늘공원 노을 전망대",
        "en": "Haneul Park Sunset Deck",
        "ja": "ハヌル公園 夕日展望台"
      },
      "cat": {
        "ko": "주변 포토스팟",
        "en": "Nearby Spot",
        "ja": "周辺スポット"
      },
      "walk": "15 min",
      "deal": {
        "ko": "일몰 30분 전 폰 뒤집기 추천",
        "en": "Best Sunset Silhouette Angle",
        "ja": "日没30分前の逆光スポット"
      },
      "spotId": "haneul"
    }
  ],
  "yongsan": [
    {
      "name": {
        "ko": "해방촌 남산뷰 루프탑",
        "en": "HBC Namsan-View Rooftop",
        "ja": "解放村 南山ビュールーフトップ"
      },
      "cat": {
        "ko": "제휴 카페",
        "en": "Partner Cafe",
        "ja": "提携カフェ"
      },
      "walk": "4 min",
      "deal": {
        "ko": "PILK 제시 시 웰컴 쿠키 + 10% OFF",
        "en": "10% Off + Free Cookie via PILK",
        "ja": "PILK提示で10%OFF＋クッキー"
      },
      "spotId": "haebangchon"
    },
    {
      "name": {
        "ko": "녹사평 육교 야경 포인트",
        "en": "Noksapyeong Night Bridge",
        "ja": "緑莎坪 歩道橋の夜景"
      },
      "cat": {
        "ko": "주변 포토스팟",
        "en": "Nearby Spot",
        "ja": "周辺スポット"
      },
      "walk": "6 min",
      "deal": {
        "ko": "이태원 클라쓰 시그니처 앵글",
        "en": "Iconic K-Drama Night Angle",
        "ja": "ドラマ名場面の夜景アングル"
      },
      "spotId": "noksapyeong"
    },
    {
      "name": {
        "ko": "한남동 디자이너 쇼룸 거리",
        "en": "Hannam Designer Showrooms",
        "ja": "漢南洞デザイナー通り"
      },
      "cat": {
        "ko": "주변 핫플",
        "en": "Nearby Shopping",
        "ja": "周辺ショップ"
      },
      "walk": "10 min",
      "deal": {
        "ko": "제휴 편집숍 5% 택스프리 추가 혜택",
        "en": "Extra 5% Off Partner Boutiques",
        "ja": "提携セレクトショップ5%特典"
      },
      "spotId": "hannam"
    }
  ],
  "jung": [
    {
      "name": {
        "ko": "을지로 레트로 LP 바 & 카페",
        "en": "Euljiro Retro Vinyl Cafe",
        "ja": "乙支路レトロLPカフェ"
      },
      "cat": {
        "ko": "제휴 카페",
        "en": "Partner Cafe",
        "ja": "提携カフェ"
      },
      "walk": "3 min",
      "deal": {
        "ko": "시그니처 에이드 15% 할인",
        "en": "15% Off Signature Ade",
        "ja": "シグネチャーエイド15%OFF"
      },
      "spotId": "euljiro"
    },
    {
      "name": {
        "ko": "덕수궁 돌담길 산책 코스",
        "en": "Deoksugung Stone Wall Walk",
        "ja": "徳寿宮トルダムキル散策"
      },
      "cat": {
        "ko": "주변 관광지",
        "en": "Nearby Attraction",
        "ja": "周辺観光地"
      },
      "walk": "7 min",
      "deal": {
        "ko": "뒤돌아보기 연사 촬영 추천",
        "en": "Best Candid Look-Back Alley",
        "ja": "振り返り連写おすすめコース"
      },
      "spotId": "deoksu"
    },
    {
      "name": {
        "ko": "남산골 한옥마을 전망 마당",
        "en": "Namsangol Hanok Courtyard",
        "ja": "南山コル韓屋村"
      },
      "cat": {
        "ko": "주변 포토스팟",
        "en": "Nearby Spot",
        "ja": "周辺スポット"
      },
      "walk": "8 min",
      "deal": {
        "ko": "무료 입장 · 남산타워 동시 프레임",
        "en": "Free Entry · Tower + Hanok Frame",
        "ja": "入場無料・タワー同時構図"
      },
      "spotId": "namsangol"
    }
  ],
  "yeouido": [
    {
      "name": {
        "ko": "여의도 한강 피크닉 세트 대여",
        "en": "Han River Picnic Mat Rental",
        "ja": "漢江ピクニックセット貸出"
      },
      "cat": {
        "ko": "제휴 체험",
        "en": "Partner Rental",
        "ja": "提携レンタル"
      },
      "walk": "5 min",
      "deal": {
        "ko": "PILK 앱 인증 시 ₩3,000 즉시 할인",
        "en": "₩3,000 Off Sunset Picnic Kit",
        "ja": "PILK認証で₩3,000即時割引"
      },
      "spotId": "yeouido"
    },
    {
      "name": {
        "ko": "더현대 서울 사운즈 포레스트",
        "en": "The Hyundai Sounds Forest",
        "ja": "ザ・現代ソウル 屋内庭園"
      },
      "cat": {
        "ko": "주변 핫플",
        "en": "Nearby Hotspot",
        "ja": "周辺ホットスポット"
      },
      "walk": "4 min",
      "deal": {
        "ko": "비 오는 날 최고의 0.5× 실내 스팟",
        "en": "Best Rainy-Day 0.5× Indoor Spot",
        "ja": "雨の日最強の0.5×屋内スポット"
      },
      "spotId": "hyundai"
    },
    {
      "name": {
        "ko": "선유도공원 노을 브릿지",
        "en": "Seonyudo Sunset Bridge",
        "ja": "仙遊島公園 夕日ブリッジ"
      },
      "cat": {
        "ko": "주변 관광지",
        "en": "Nearby Attraction",
        "ja": "周辺観光地"
      },
      "walk": "12 min",
      "deal": {
        "ko": "양화대교 실루엣 스냅 명소",
        "en": "River Bridge Silhouette Point",
        "ja": "橋のシルエット名所"
      },
      "spotId": "seonyudo"
    }
  ],
  "ocean": [
    {
      "name": {
        "ko": "오션뷰 스페셜티 커피 바",
        "en": "Ocean-View Specialty Coffee",
        "ja": "オーシャンビューカフェ"
      },
      "cat": {
        "ko": "제휴 카페",
        "en": "Partner Cafe",
        "ja": "提携カフェ"
      },
      "walk": "3 min",
      "deal": {
        "ko": "바다 컷 인증 시 음료 10% 할인",
        "en": "10% Off with PILK Ocean Shot",
        "ja": "海ショット認証で10%OFF"
      },
      "spotId": "anmok"
    },
    {
      "name": {
        "ko": "해변 감성 소품 & 엽서 숍",
        "en": "Coastal Postcard & Gift Shop",
        "ja": "海辺の雑貨・ポストカード店"
      },
      "cat": {
        "ko": "제휴 소품샵",
        "en": "Partner Shop",
        "ja": "提携ショップ"
      },
      "walk": "5 min",
      "deal": {
        "ko": "로컬 포토 엽서 1매 무료 증정",
        "en": "1 Free Local Photo Postcard",
        "ja": "ご当地ポストカード1枚進呈"
      },
      "spotId": "jumunjin"
    },
    {
      "name": {
        "ko": "인근 노을 전망 해안 산책로",
        "en": "Nearby Sunset Coastal Trail",
        "ja": "近隣の夕日海岸遊歩道"
      },
      "cat": {
        "ko": "주변 관광지",
        "en": "Nearby Attraction",
        "ja": "周辺観光地"
      },
      "walk": "6 min",
      "deal": {
        "ko": "일몰 역광 폰 뒤집기 추천",
        "en": "Golden Hour Horizon Framing",
        "ja": "夕日逆光・スマホ逆さま推奨"
      },
      "spotId": "dadaepo"
    }
  ],
  "regional": [
    {
      "name": {
        "ko": "로컬 감성 한옥·정원 카페",
        "en": "Local Garden & Hanok Cafe",
        "ja": "ローカル韓屋・庭園カフェ"
      },
      "cat": {
        "ko": "제휴 카페",
        "en": "Partner Cafe",
        "ja": "提携カフェ"
      },
      "walk": "4 min",
      "deal": {
        "ko": "PILK 제시 시 시그니처 디저트 10% OFF",
        "en": "10% Off Local Signature Dessert",
        "ja": "PILK提示でデザート10%OFF"
      },
      "spotId": "jeonjuhanok"
    },
    {
      "name": {
        "ko": "인근 골목 로컬 편집숍",
        "en": "Nearby Local Craft Boutique",
        "ja": "近隣のローカル雑貨店"
      },
      "cat": {
        "ko": "제휴 숍",
        "en": "Partner Shop",
        "ja": "提携ショップ"
      },
      "walk": "6 min",
      "deal": {
        "ko": "₩20,000 이상 구매 시 키링 증정",
        "en": "Free K-Keyring Over ₩20,000",
        "ja": "₩20,000以上でキーリング贈呈"
      },
      "spotId": "mongted"
    },
    {
      "name": {
        "ko": "주변 숨은 인생샷 전망 포인트",
        "en": "Hidden Scenic Photo Point",
        "ja": "周辺の隠れ絶景ポイント"
      },
      "cat": {
        "ko": "주변 관광지",
        "en": "Nearby Attraction",
        "ja": "周辺観光地"
      },
      "walk": "7 min",
      "deal": {
        "ko": "인파 없는 서브 앵글 추천",
        "en": "Crowd-Free Alternative Angle",
        "ja": "人混みを避ける穴場アングル"
      },
      "spotId": "gyochon"
    }
  ]
};

const spots = [
  {
    "id": "gyeongbok",
    "image": "palace-courtyard.webp",
    "type": "heritage",
    "ko": [
      "경복궁",
      "서울 · 종로구",
      "고궁 시그니처",
      "#경복궁스냅",
      "#폰뒤집기",
      "스마트폰을 180° 거꾸로 뒤집어 허리 아래에서 찍고 발끝을 하단 라인에 맞추세요. 근정전 처마와 다리 비율이 완벽하게 살아납니다."
    ],
    "en": [
      "Gyeongbokgung Palace",
      "Seoul · Jongno-gu",
      "Royal Palace",
      "#Gyeongbokgung",
      "#PhoneFlip",
      "Flip your phone 180° at waist level and align your toes to the bottom line so both palace eaves and full-body proportions shine."
    ],
    "ja": [
      "景福宮",
      "ソウル・鍾路区",
      "王宮シグネチャー",
      "#景福宮スナップ",
      "#スマホ逆さま",
      "スマホを180度逆さまにして腰の下から撮影。つま先を下端に合わせると屋根の反りと脚長比率が際立ちます。"
    ],
    "map": "Gyeongbokgung Palace Seoul",
    "source": "https://royal.khs.go.kr/",
    "credit": "PILK · AI-generated palace scene",
    "pose": 0,
    "instagram": "경복궁스냅",
    "pool": "jongno",
    "recipe": {
      "flip": false,
      "lens": "1×",
      "pose": 1,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "bukchon",
    "image": "bukchon.jpg",
    "type": "heritage",
    "ko": [
      "북촌 한옥마을",
      "서울 · 종로구",
      "골목 시그니처",
      "#한옥골목",
      "#뒤돌아보기",
      "기와지붕 선이 이어지는 골목에서 천천히 걷다 앞발을 반 걸음 내밀며 어깨 너머로 뒤돌아보세요. (주민 구역 정숙 촬영 필수)"
    ],
    "en": [
      "Bukchon Hanok Village",
      "Seoul · Jongno-gu",
      "Hanok Alley",
      "#BukchonHanok",
      "#LookBackShot",
      "Walk naturally along the tiled-roof slope, extend your front foot half a step, and glance back over your shoulder. Keep quiet in residential zones."
    ],
    "ja": [
      "北村韓屋村",
      "ソウル・鍾路区",
      "韓屋の路地",
      "#北村韓屋村",
      "#振り返りショット",
      "瓦屋根が連なる坂道でゆっくり歩き、前足を半歩出して肩越しに振り返って。住宅地のため静かに撮影しましょう。"
    ],
    "map": "Bukchon Hanok Village Seoul",
    "source": "https://talesfromrails.com/posts/trips/2023-12-21-south-korea-by-train/",
    "credit": "Tales from Rails · Bukchon",
    "pose": 2,
    "instagram": "북촌한옥마을",
    "pool": "jongno",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "jumunjin",
    "image": "beach.jpg",
    "type": "drama",
    "nature": true,
    "ko": [
      "주문진 방사제",
      "강원 · 강릉시",
      "도깨비 명장면",
      "#주문진방사제",
      "#수평선구도",
      "수평선을 화면 1/3 선에 맞추고 한 보 뒤로 물러나 측면 실루엣을 담아보세요. 파도 안전선을 꼭 확인하세요."
    ],
    "en": [
      "Jumunjin Breakwater",
      "Gangwon · Gangneung",
      "Goblin Filming Spot",
      "#Jumunjin",
      "#OceanHorizon",
      "Place the horizon along the lower third, step one pace back, and frame a dramatic ocean silhouette like the K-drama scene."
    ],
    "ja": [
      "注文津 防砂堤",
      "江原・江陵市",
      "トッケビ名場面",
      "#注文津防砂堤",
      "#水平線構図",
      "水平線を画面の下1/3に合わせ、一歩後ろに下がって海辺のシルエットを収めましょう。高波に注意してください。"
    ],
    "map": "Jumunjin Breakwater Goblin filming location",
    "source": "https://my.trip.com/moments/detail/gangneung-si-14776-145106173?locale=en-MY",
    "credit": "Trip.com · Jumunjin",
    "pose": 0,
    "instagram": "주문진방사제",
    "pool": "ocean",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "drama_scene",
      "lighting": {
        "ko": "드라마 시네마틱 · 어깨 너머 시선 + 연사",
        "en": "Cinematic Drama · Over-Shoulder Gaze + Burst",
        "ja": "ドラマ風シネマティック・肩越し視線＋連写"
      }
    }
  },
  {
    "id": "corridor",
    "image": "palace.jpg",
    "type": "heritage",
    "ko": [
      "경복궁 회랑",
      "서울 · 종로구",
      "대칭 프레임",
      "#회랑구도",
      "#2x인물샷",
      "반복되는 기둥의 소실점 중앙에 서고, 찍는 사람이 2보 뒤로 물러나 2× 줌으로 당겨 찍으면 영화 같은 깊이감이 생겨요."
    ],
    "en": [
      "Gyeongbokgung Corridor",
      "Seoul · Jongno-gu",
      "Symmetry Frame",
      "#PalaceCorridor",
      "#2xPortrait",
      "Stand centered along the repeating wooden columns while the photographer steps 2 paces back and zooms to 2× for cinematic depth."
    ],
    "ja": [
      "景福宮の回廊",
      "ソウル・鍾路区",
      "シンメトリー構図",
      "#回廊フォト",
      "#2倍ポートレート",
      "連なる柱の消失点の中央に立ち、撮影者が2歩下がって2倍ズームで撮ると映画のような奥行きが出ます。"
    ],
    "map": "Gyeongbokgung Palace Seoul",
    "source": "https://french.korea.net/NewsFocus/Society/view?articleId=136742",
    "credit": "Korea.net · Gyeongbokgung Corridor",
    "pose": 2,
    "instagram": "경복궁회랑",
    "pool": "jongno",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "hyundai",
    "type": "local",
    "image": "places/hyundai.jpg",
    "ko": [
      "더현대 서울",
      "서울 · 영등포구",
      "실내 정원 · 팝업",
      "#실내정원",
      "#팝업",
      "사운즈 포레스트를 위층에서 내려다보며 곡선 난간을 프레임으로 써보세요. 실내 식재와 채광을 함께 담으면 좋아요."
    ],
    "ja": [
      "ザ・現代ソウル",
      "ソウル・永登浦区",
      "屋内庭園・ポップアップ",
      "#실내정원",
      "#팝업",
      "サウンズフォレストを上階から見下ろし、曲線の手すりをフレームに。緑と自然光を一緒に入れてみて。"
    ],
    "map": "더현대 서울 서울",
    "source": "https://mediahub.seoul.go.kr/archives/2000769",
    "credit": "서울시 - 내 손안에 서울",
    "pose": 3,
    "instagram": "더현대 서울",
    "en": [
      "The Hyundai Seoul",
      "Seoul · Yeongdeungpo",
      "Indoor Garden · Pop-ups",
      "#TheHyundaiSeoul",
      "#SoundsForest",
      "Shoot from the upper glass railing looking down at Sounds Forest using 0.5× high-angle to capture natural skylight and greenery."
    ],
    "pool": "yeouido",
    "recipe": {
      "flip": false,
      "lens": "0.5×",
      "pose": 3,
      "stepCue": "high_angle",
      "lighting": {
        "ko": "밝은 자연 채광 · 0.5× 광각 추천",
        "en": "Bright Daylight · 0.5× High-Angle",
        "ja": "明るい自然光・0.5×ハイアングル推奨"
      }
    }
  },
  {
    "id": "seongsu",
    "type": "local",
    "image": "places/seongsu.jpg",
    "ko": [
      "성수 연무장길",
      "서울 · 성동구",
      "쇼룸 · 팝업 산책",
      "#성수팝업",
      "#스트리트",
      "붉은 벽돌과 개성 있는 간판을 배경으로 걸어가는 순간을 담아보세요. 매장 내부 촬영은 현장 안내를 확인해주세요."
    ],
    "ja": [
      "聖水・練武場キル",
      "ソウル・城東区",
      "ショールーム・街歩き",
      "#성수팝업",
      "#스트리트",
      "赤レンガや個性的な看板を背景に、歩く瞬間を一枚。店内撮影はお店の案内を確認しましょう。"
    ],
    "map": "성수 연무장길 서울",
    "source": "https://www.khan.co.kr/article/202302211350001",
    "credit": "관리비 증액·갱신주기 축소…성수 ‘핫플’ 연무장길, 젠트리피케이션 미리 막는다 - 경향신문",
    "pose": 3,
    "instagram": "성수 연무장길",
    "en": [
      "Seongsu Yeonmujang-gil",
      "Seoul · Seongdong-gu",
      "Pop-ups · Red Brick",
      "#Seongsu",
      "#SeoulBrooklyn",
      "Flip phone 180° along the red-brick facade and walk casually across the frame with your front foot extended."
    ],
    "pool": "seongsu",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 4,
      "stepCue": "street_local",
      "lighting": {
        "ko": "스트리트 감성 · 한 보 뒤로 + 앞발 빼기",
        "en": "Seoul Street Mood · Step Back + Front Foot Out",
        "ja": "ストリート感性・一歩下がる＋前足出し"
      }
    }
  },
  {
    "id": "yeonnam",
    "type": "local",
    "image": "places/yeonnam.jpg",
    "ko": [
      "연남동 경의선숲길",
      "서울 · 마포구",
      "카페에서 숲길까지",
      "#연트럴파크",
      "#카페산책",
      "철길을 따라 이어지는 산책로를 대각선으로 담아보세요. 테이크아웃 컵을 들고 편하게 걷는 포즈가 잘 어울려요."
    ],
    "ja": [
      "延南洞・京義線森の道",
      "ソウル・麻浦区",
      "カフェから緑道へ",
      "#연트럴파크",
      "#카페산책",
      "線路跡の遊歩道を斜めに入れて。テイクアウトのカップを持ち、自然に歩くポーズが似合います。"
    ],
    "map": "연남동 경의선숲길 서울",
    "source": "https://arexkorea.blogspot.com/2017/08/yeonnam-dong-hongdae-gyeongui-line.html",
    "credit": "AREX: [Yeonnam-dong / Hongdae] Gyeongui Line Forest Park & Bear's Den Cafe",
    "pose": 3,
    "instagram": "연남동 경의선숲길",
    "en": [
      "Yeonnam Forest Park",
      "Seoul · Mapo-gu",
      "Cafes · Urban Park",
      "#Yeonnamdong",
      "#YeontralPark",
      "Frame the leafy pathway behind you at waist height and capture candid walking bursts during golden hour."
    ],
    "pool": "mapo",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 4,
      "stepCue": "street_local",
      "lighting": {
        "ko": "스트리트 감성 · 한 보 뒤로 + 앞발 빼기",
        "en": "Seoul Street Mood · Step Back + Front Foot Out",
        "ja": "ストリート感性・一歩下がる＋前足出し"
      }
    }
  },
  {
    "id": "mangwon",
    "type": "local",
    "image": "places/mangwon.jpg",
    "ko": [
      "망원시장 · 망리단길",
      "서울 · 마포구",
      "시장 간식 · 동네 산책",
      "#망원산책",
      "#시장먹거리",
      "시장 입구의 간판을 배경으로 간식을 든 손을 가까이 담아보세요. 장보는 사람과 상점의 동선을 비워두면 좋아요."
    ],
    "ja": [
      "望遠市場・マンリダンキル",
      "ソウル・麻浦区",
      "市場グルメ・街歩き",
      "#망원산책",
      "#시장먹거리",
      "市場の看板を背景に、おやつを持つ手を近くに。買い物客やお店の通路をふさがずに撮りましょう。"
    ],
    "map": "망원시장 · 망리단길 서울",
    "source": "https://mediahub.seoul.go.kr/archives/2017292",
    "credit": "서울시 - 내 손안에 서울",
    "pose": 3,
    "instagram": "망원시장 망리단길",
    "en": [
      "Mangwon Market & Street",
      "Seoul · Mapo-gu",
      "Street Food · Local Walk",
      "#MangwonMarket",
      "#LocalSeoul",
      "Hold your street snack slightly toward the lens at 0.5× angle to blend lively market signs with a relaxed street look."
    ],
    "pool": "mapo",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 4,
      "stepCue": "street_local",
      "lighting": {
        "ko": "스트리트 감성 · 한 보 뒤로 + 앞발 빼기",
        "en": "Seoul Street Mood · Step Back + Front Foot Out",
        "ja": "ストリート感性・一歩下がる＋前足出し"
      }
    }
  },
  {
    "id": "hannam",
    "type": "local",
    "image": "places/hannam.jpg",
    "ko": [
      "한남동 쇼룸 거리",
      "서울 · 용산구",
      "디자이너 숍 · 갤러리",
      "#쇼룸투어",
      "#오늘의룩",
      "쇼룸의 단정한 벽면을 배경으로 오늘의 옷차림을 남겨보세요. 골목의 경사를 살짝 넣으면 한남동 분위기가 살아나요."
    ],
    "ja": [
      "漢南洞・ショールーム通り",
      "ソウル・龍山区",
      "デザイナーズショップ",
      "#쇼룸투어",
      "#오늘의룩",
      "ショールームのすっきりした壁で今日のコーデを。坂道を少し入れると漢南洞らしい雰囲気に。"
    ],
    "map": "한남동 쇼룸 거리 서울",
    "source": "https://www.konest.com/contents/hot_report_detail.html?id=4504",
    "credit": "漢南洞(ハンナムドン)トレンドスポット巡り | ソウルおすすめエリア｜韓国旅行「コネスト」",
    "pose": 3,
    "instagram": "한남동 쇼룸 거리",
    "en": [
      "Hannam-dong Showrooms",
      "Seoul · Yongsan-gu",
      "Designers · Galleries",
      "#Hannamdong",
      "#KFashion",
      "Use clean minimalist showroom walls with a 180° low-angle phone flip and align your shoes right on the bottom line."
    ],
    "pool": "yongsan",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 4,
      "stepCue": "street_local",
      "lighting": {
        "ko": "스트리트 감성 · 한 보 뒤로 + 앞발 빼기",
        "en": "Seoul Street Mood · Step Back + Front Foot Out",
        "ja": "ストリート感性・一歩下がる＋前足出し"
      }
    }
  },
  {
    "id": "euljiro",
    "type": "local",
    "image": "places/euljiro.jpg",
    "ko": [
      "을지로 골목",
      "서울 · 중구",
      "오래된 간판 · 밤 산책",
      "#힙지로",
      "#네온무드",
      "오래된 간판과 조명이 보이는 골목에서 한쪽 어깨를 카메라 쪽으로 돌려보세요. 밝은 간판 가까이 서면 얼굴이 덜 어두워요."
    ],
    "ja": [
      "乙支路の路地",
      "ソウル・中区",
      "レトロな看板・夜散歩",
      "#힙지로",
      "#네온무드",
      "古い看板と灯りのある路地で、片方の肩をカメラへ。明るい看板のそばなら顔が暗くなりにくいです。"
    ],
    "map": "을지로 골목 서울",
    "source": "https://ameblo.jp/waimanalobeach/entry-12475890151.html",
    "credit": "衝撃の光景！「乙支路３街 ノガリ横丁」で道端ビアホール！ | KOREA(こりぁ〜)やっぱり韓国だワン！～韓国旅行ブログ",
    "pose": 3,
    "instagram": "을지로 골목",
    "en": [
      "Euljiro Retro Alley",
      "Seoul · Jung-gu",
      "Neon Signs · Night Walk",
      "#Hipjiro",
      "#NightSnap",
      "Tilt slightly upward against vintage neon signboards at night and leave headroom so the retro Korean typography glows."
    ],
    "pool": "jung",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 0,
      "stepCue": "night_flip",
      "lighting": {
        "ko": "야간 네온/야경 · 폰 뒤집기 + 노출 살짝 낮춤",
        "en": "Night Neon · Flip 180° & Lower Exposure",
        "ja": "夜景ネオン・180°逆さま＋露出やや低め"
      }
    }
  },
  {
    "id": "seochon",
    "type": "local",
    "image": "places/seochon.jpg",
    "ko": [
      "서촌 골목 산책",
      "서울 · 종로구",
      "작은 서점 · 카페",
      "#서촌카페",
      "#동네서점",
      "낮은 담장과 골목이 만나는 지점에서 옆모습을 담아보세요. 주택의 문 앞이나 창문을 가까이 촬영하지 않도록 배려해주세요."
    ],
    "ja": [
      "西村の路地さんぽ",
      "ソウル・鍾路区",
      "小さな書店・カフェ",
      "#서촌카페",
      "#동네서점",
      "低い塀と路地が交わる場所で横顔を。住宅の玄関や窓を近くから撮らないよう気を配りましょう。"
    ],
    "map": "서촌 골목 산책 서울",
    "source": "https://korean.visitseoul.net/palace/SeochonHanokVillage/KOPhyd9ee",
    "credit": "",
    "pose": 3,
    "instagram": "서촌 골목 산책",
    "en": [
      "Seochon Alley Walk",
      "Seoul · Jongno-gu",
      "Bookstores · Cafes",
      "#Seochon",
      "#SlowSeoul",
      "Lean lightly near wooden cafe windows and glance sideways for a natural Korean film-photo mood."
    ],
    "pool": "jongno",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 4,
      "stepCue": "street_local",
      "lighting": {
        "ko": "스트리트 감성 · 한 보 뒤로 + 앞발 빼기",
        "en": "Seoul Street Mood · Step Back + Front Foot Out",
        "ja": "ストリート感性・一歩下がる＋前足出し"
      }
    }
  },
  {
    "id": "haebangchon",
    "type": "local",
    "image": "places/haebangchon.jpg",
    "ko": [
      "해방촌 신흥시장",
      "서울 · 용산구",
      "언덕 위 작은 가게들",
      "#해방촌",
      "#골목감성",
      "시장 입구와 좁은 골목의 깊이감을 살려보세요. 계단에서는 멈춰 서서 찍고, 지나가는 사람을 먼저 보내주세요."
    ],
    "ja": [
      "解放村・新興市場",
      "ソウル・龍山区",
      "坂の上の小さなお店",
      "#해방촌",
      "#골목감성",
      "市場の入口と細い路地の奥行きを生かして。階段では立ち止まり、通行する人を先に通しましょう。"
    ],
    "map": "해방촌 신흥시장 서울",
    "source": "https://mediahub.seoul.go.kr/archives/2014955",
    "credit": "서울시 - 내 손안에 서울",
    "pose": 3,
    "instagram": "해방촌 신흥시장",
    "en": [
      "Haebangchon Sinheung Market",
      "Seoul · Yongsan-gu",
      "Hillside · Rooftops",
      "#Haebangchon",
      "#NamsanView",
      "Frame N Seoul Tower diagonally over the hillside roofs and step back half a pace to keep both skyline and posture balanced."
    ],
    "pool": "yongsan",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 4,
      "stepCue": "street_local",
      "lighting": {
        "ko": "스트리트 감성 · 한 보 뒤로 + 앞발 빼기",
        "en": "Seoul Street Mood · Step Back + Front Foot Out",
        "ja": "ストリート感性・一歩下がる＋前足出し"
      }
    }
  },
  {
    "id": "songridan",
    "type": "local",
    "image": "places/songridan.jpg",
    "ko": [
      "송리단길",
      "서울 · 송파구",
      "디저트 · 석촌호수 산책",
      "#송리단길카페",
      "#디저트투어",
      "카페 앞 거리와 멀리 보이는 롯데월드타워를 함께 담아보세요. 석촌호수 산책과 이어 찍으면 서로 다른 분위기를 남길 수 있어요."
    ],
    "ja": [
      "ソンリダンキル",
      "ソウル・松坡区",
      "スイーツ・湖畔さんぽ",
      "#송리단길카페",
      "#디저트투어",
      "カフェのある通りと遠くのロッテワールドタワーを一緒に。石村湖の散歩と組み合わせて違う雰囲気も楽しめます。"
    ],
    "map": "송리단길 서울",
    "source": "https://mediahub.seoul.go.kr/archives/2008967",
    "credit": "서울시 - 내 손안에 서울",
    "pose": 3,
    "instagram": "송리단길",
    "en": [
      "Songridan-gil",
      "Seoul · Songpa-gu",
      "Desserts · Lake Walk",
      "#Songridangil",
      "#SeokchonLake",
      "Use cafe terrace railings and Seokchon Lake trees as foreground framing, keeping Lotte Tower lightly off-center."
    ],
    "pool": "seongsu",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 4,
      "stepCue": "street_local",
      "lighting": {
        "ko": "스트리트 감성 · 한 보 뒤로 + 앞발 빼기",
        "en": "Seoul Street Mood · Step Back + Front Foot Out",
        "ja": "ストリート感性・一歩下がる＋前足出し"
      }
    }
  },
  {
    "id": "seoulforest",
    "type": "local",
    "image": "places/seoulforest.jpg",
    "ko": [
      "서울숲",
      "서울 · 성동구",
      "성수에서 쉬어가는 곳",
      "#서울숲산책",
      "#초록한컷",
      "거울연못의 반사를 가로 프레임에 담아보세요. 숲길에서는 나무 사이에 서서 고개만 살짝 돌리는 포즈를 추천해요."
    ],
    "ja": [
      "ソウルの森",
      "ソウル・城東区",
      "聖水から緑の休憩へ",
      "#서울숲산책",
      "#초록한컷",
      "鏡池の反射を横構図で。木立の間では、顔だけそっと振り返るポーズがおすすめです。"
    ],
    "map": "서울숲 서울",
    "source": "https://mediahub.seoul.go.kr/archives/2001822",
    "credit": "서울시 - 내 손안에 서울",
    "pose": 3,
    "instagram": "서울숲",
    "en": [
      "Seoul Forest",
      "Seoul · Seongdong-gu",
      "Picnic · Nature",
      "#SeoulForest",
      "#PicnicSnap",
      "Try a 0.5× overhead high-angle shot on the grass or align yourself between tall ginkgo rows with feet at the bottom edge."
    ],
    "pool": "seongsu",
    "recipe": {
      "flip": false,
      "lens": "0.5×",
      "pose": 3,
      "stepCue": "high_angle",
      "lighting": {
        "ko": "밝은 자연 채광 · 0.5× 광각 추천",
        "en": "Bright Daylight · 0.5× High-Angle",
        "ja": "明るい自然光・0.5×ハイアングル推奨"
      }
    }
  },
  {
    "id": "changdeok",
    "type": "heritage",
    "image": "places/changdeok.jpg",
    "ko": [
      "창덕궁",
      "서울 · 종로구",
      "자연과 어우러진 궁궐",
      "#궁궐산책",
      "#한복스냅",
      "인정전의 처마선을 수평으로 맞추고 인물을 아래쪽에 작게 배치해보세요. 후원은 별도 관람 안내를 확인해주세요."
    ],
    "ja": [
      "昌徳宮",
      "ソウル・鍾路区",
      "自然と調和する宮殿",
      "#궁궐산책",
      "#한복스냅",
      "仁政殿の軒を水平にし、人物は下側に小さく。後苑を訪れる場合は別途観覧案内を確認しましょう。"
    ],
    "map": "창덕궁 서울",
    "source": "https://www.flipkorea.com/post/changdeokgung-palace-wander-through-the-charming-changdeokgung-palace",
    "credit": "Changdeokgung Palace: Wander Through the Charming Changdeokgung Palace",
    "pose": 2,
    "instagram": "창덕궁",
    "en": [
      "Changdeokgung Palace",
      "Seoul · Jongno-gu",
      "UNESCO · Secret Garden",
      "#Changdeokgung",
      "#HeritageWalk",
      "Frame through wooden palace doors for natural depth and stand slightly off-center looking toward the garden."
    ],
    "pool": "jongno",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "changgyeong",
    "type": "heritage",
    "image": "places/changgyeong.jpg",
    "ko": [
      "창경궁",
      "서울 · 종로구",
      "궁궐의 단정한 선",
      "#명정전",
      "#고궁감성",
      "명정전 앞에서 좌우 대칭을 맞춰보세요. 기둥 사이에서 치맛자락을 가볍게 잡으면 한복의 곡선이 돋보여요."
    ],
    "ja": [
      "昌慶宮",
      "ソウル・鍾路区",
      "宮殿の端正なライン",
      "#명정전",
      "#고궁감성",
      "明政殿の前で左右対称に。柱の間で裾をそっと持つと、韓服の曲線が引き立ちます。"
    ],
    "map": "창경궁 서울",
    "source": "https://en.wikipedia.org/wiki/Changgyeonggung",
    "credit": "",
    "pose": 2,
    "instagram": "창경궁",
    "en": [
      "Changgyeonggung Palace",
      "Seoul · Jongno-gu",
      "Quiet Courtyard · Greenhouse",
      "#Changgyeonggung",
      "#GlassHouse",
      "Shoot symmetrically in front of the white Victorian greenhouse using a low-angle phone flip for elongated lines."
    ],
    "pool": "jongno",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "deoksu",
    "type": "heritage",
    "image": "places/deoksu.jpg",
    "ko": [
      "덕수궁",
      "서울 · 중구",
      "전통과 근대의 만남",
      "#석조전",
      "#도심고궁",
      "석조전 앞에서는 긴 기둥을 세로로 담아보세요. 전통 전각과 석조 건물을 번갈아 배경으로 찍는 재미가 있어요."
    ],
    "ja": [
      "徳寿宮",
      "ソウル・中区",
      "伝統と近代の出会い",
      "#석조전",
      "#도심고궁",
      "石造殿の前では長い柱を縦構図に。伝統的な殿閣と石造建築で、違う背景を楽しめます。"
    ],
    "map": "덕수궁 서울",
    "source": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=110650",
    "credit": "Deoksugung Palace (덕수궁)-  VISITKOREA",
    "pose": 2,
    "instagram": "덕수궁",
    "en": [
      "Deoksugung Palace",
      "Seoul · Jung-gu",
      "Stone Wall · Heritage",
      "#Deoksugung",
      "#StoneWallWalk",
      "Follow the diagonal leading line of the stone wall road; step half a foot forward and look back over your shoulder."
    ],
    "pool": "jung",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "gyeonghui",
    "type": "heritage",
    "image": "places/gyeonghui.jpg",
    "ko": [
      "경희궁",
      "서울 · 종로구",
      "고즈넉한 궁궐 마당",
      "#숭정전",
      "#여백의미",
      "숭정전 마당의 넓은 여백과 처마를 함께 담아보세요. 인물은 중앙보다 한쪽에 두면 편안한 구도가 돼요."
    ],
    "ja": [
      "慶熙宮",
      "ソウル・鍾路区",
      "静かな宮殿の庭",
      "#숭정전",
      "#여백의미",
      "崇政殿の庭の余白と軒を一緒に。人物を中央から少しずらすと、落ち着いた構図になります。"
    ],
    "map": "경희궁 서울",
    "source": "https://mediahub.seoul.go.kr/archives/2001518",
    "credit": "서울시 - 내 손안에 서울",
    "pose": 2,
    "instagram": "경희궁",
    "en": [
      "Gyeonghuigung Palace",
      "Seoul · Jongno-gu",
      "Peaceful Courtyard",
      "#Gyeonghuigung",
      "#HiddenPalace",
      "Take advantage of the uncrowded wide stone stairs with a low-angle wide frame showing sky and tiled roofs."
    ],
    "pool": "jongno",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "unhyeon",
    "type": "heritage",
    "image": "places/unhyeon.jpg",
    "ko": [
      "운현궁",
      "서울 · 종로구",
      "한옥의 소박한 아름다움",
      "#한옥마당",
      "#단아한한복",
      "나무 기둥과 낮은 툇마루를 배경으로 몸을 살짝 틀어보세요. 출입이 가능한 구역 안에서만 촬영해주세요."
    ],
    "ja": [
      "雲峴宮",
      "ソウル・鍾路区",
      "韓屋の素朴な美しさ",
      "#한옥마당",
      "#단아한한복",
      "木の柱と低い縁側を背景に、少し体を斜めに。立ち入り可能な場所から撮影しましょう。"
    ],
    "map": "운현궁 서울",
    "source": "https://mediahub.seoul.go.kr/archives/2004813",
    "credit": "서울시 - 내 손안에 서울",
    "pose": 2,
    "instagram": "운현궁",
    "en": [
      "Unhyeongung Royal Residence",
      "Seoul · Jongno-gu",
      "Intimate Hanok",
      "#Unhyeongung",
      "#HanokMood",
      "Sit casually on the wooden maru veranda and shoot slightly from the side at 1× for warm traditional texture."
    ],
    "pool": "jongno",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "namsangol",
    "type": "heritage",
    "image": "places/namsangol.jpg",
    "ko": [
      "남산골 한옥마을",
      "서울 · 중구",
      "도심에서 만나는 한옥",
      "#남산골",
      "#한옥여행",
      "기와지붕이 겹쳐 보이는 지점에서 한옥의 층을 담아보세요. 한복 차림으로 천천히 걷는 장면이 잘 어울려요."
    ],
    "ja": [
      "南山コル韓屋村",
      "ソウル・中区",
      "都心で出会う韓屋",
      "#남산골",
      "#한옥여행",
      "瓦屋根が重なる場所で韓屋の奥行きを。韓服でゆっくり歩くシーンが似合います。"
    ],
    "map": "남산골 한옥마을 서울",
    "source": "https://www.koreatimes.co.kr/lifestyle/travel-food/20220406/namsangol-hanok-village-reopens-for-walk-in-visitors-cyber-avatars",
    "credit": "Namsangol Hanok Village reopens for walk-in visitors, cyber avatars - The Korea Times",
    "pose": 2,
    "instagram": "남산골 한옥마을",
    "en": [
      "Namsangol Hanok Village",
      "Seoul · Jung-gu",
      "Hanok · Tower View",
      "#Namsangol",
      "#SeoulView",
      "Align traditional eaves in the foreground with N Seoul Tower rising cleanly in the upper-right sky."
    ],
    "pool": "jung",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "eunpyeong",
    "type": "heritage",
    "image": "places/eunpyeong.jpg",
    "ko": [
      "은평한옥마을",
      "서울 · 은평구",
      "북한산 아래 한옥",
      "#북한산뷰",
      "#한옥풍경",
      "북한산 능선과 기와지붕이 함께 보이는 구도를 찾아보세요. 주민이 사는 마을이니 조용히 촬영해주세요."
    ],
    "ja": [
      "恩平韓屋村",
      "ソウル・恩平区",
      "北漢山の麓の韓屋",
      "#북한산뷰",
      "#한옥풍경",
      "北漢山の稜線と瓦屋根が一緒に見える構図を探して。住民の暮らす村なので、静かに撮影しましょう。"
    ],
    "map": "은평한옥마을 서울",
    "source": "https://www.mk.co.kr/news/culture/10507657",
    "credit": "절정의 이 단풍, 이대로 보낼 수 없다면 ‘여기’ - 매일경제",
    "pose": 2,
    "instagram": "은평한옥마을",
    "en": [
      "Eunpyeong Hanok Village",
      "Seoul · Eunpyeong-gu",
      "Mountain Backdrop",
      "#EunpyeongHanok",
      "#Bukhansan",
      "Capture Bukhansan peaks behind the tiled roofs from a rooftop cafe terrace with feet anchored to the lower frame."
    ],
    "pool": "jongno",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "jeonjuhanok",
    "type": "heritage",
    "image": "places/jeonjuhanok.jpg",
    "ko": [
      "전주한옥마을",
      "전북 · 전주시",
      "한복으로 걷는 골목",
      "#전주한복",
      "#한옥골목",
      "골목의 기와선이 이어지는 방향으로 걸어보세요. 조금 떨어져 전신을 찍으면 한복과 마을을 함께 담을 수 있어요."
    ],
    "ja": [
      "全州韓屋村",
      "全北・全州市",
      "韓服で歩く路地",
      "#전주한복",
      "#한옥골목",
      "瓦屋根が続く方向へ歩いてみて。少し離れて全身を撮ると、韓服と街並みが一緒に写ります。"
    ],
    "map": "전주한옥마을 전북",
    "source": "https://www.mk.co.kr/news/all/7830116",
    "credit": "[공감! 여행스케치] 한복 입고 돌아보는 전주 한옥마을 베스트 여행지 - 매일경제",
    "pose": 2,
    "instagram": "전주한옥마을",
    "en": [
      "Jeonju Hanok Village",
      "Jeonbuk · Jeonju",
      "Traditional Village",
      "#JeonjuHanok",
      "#KTravel",
      "Shoot down the gently sloping stone alley using 2× zoom to compress the rows of curved roof tiles."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "haenggung",
    "type": "heritage",
    "image": "places/haenggung.jpg",
    "ko": [
      "수원 화성행궁",
      "경기 · 수원시",
      "넓은 마당과 궁궐",
      "#수원여행",
      "#궁궐한복",
      "신풍루와 마당을 넓게 담고 인물은 앞쪽에 작게 배치해보세요. 담장을 따라 걷는 뒷모습도 좋아요."
    ],
    "ja": [
      "水原・華城行宮",
      "京畿・水原市",
      "広い庭と宮殿",
      "#수원여행",
      "#궁궐한복",
      "新豊楼と庭を広く入れ、人物を手前に小さく。塀に沿って歩く後ろ姿もおすすめです。"
    ],
    "map": "수원 화성행궁 경기",
    "source": "https://www.expedia.com.hk/en/Hwaseong-Palace-Paldal-gu.d553248621532769441.Place-To-Visit",
    "credit": "Hwaseong Palace in Paldal-gu | Expedia",
    "pose": 2,
    "instagram": "수원 화성행궁",
    "en": [
      "Suwon Hwaseong Haenggung",
      "Gyeonggi · Suwon",
      "Fortress Palace",
      "#SuwonHaenggung",
      "#FortressWalk",
      "Stand near the palace courtyard pillars and flip your phone 180° to fit both fortress walls and full silhouette."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "gyochon",
    "type": "heritage",
    "image": "places/gyochon.jpg",
    "ko": [
      "경주 교촌마을",
      "경북 · 경주시",
      "돌담 따라 시간 여행",
      "#경주한복",
      "#돌담길",
      "낮은 돌담을 대각선으로 넣고 한복 소매를 가볍게 펼쳐보세요. 월정교 주변 산책과 함께 촬영하기 좋아요."
    ],
    "ja": [
      "慶州・校村村",
      "慶北・慶州市",
      "石垣に沿う時間旅行",
      "#경주한복",
      "#돌담길",
      "低い石垣を斜めに入れて、韓服の袖をそっと広げて。月精橋周辺の散歩と合わせて楽しめます。"
    ],
    "map": "경주 교촌마을 경북",
    "source": "https://www.klook.com/activity/74147-gyeongju-oneday-tour-gyeongju/",
    "credit": "Gyeongju The Old Capital of Korea One Day Tour from Busan - Klook",
    "pose": 2,
    "instagram": "경주 교촌마을",
    "en": [
      "Gyeongju Gyochon Village",
      "Gyeongbuk · Gyeongju",
      "Stone Wall Time-Slip",
      "#Gyeongju",
      "#Gyochon",
      "Frame yourself beside the historic stone fences and nearby Woljeonggyo Bridge reflections at dusk."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "heritage_flip",
      "lighting": {
        "ko": "고궁/한옥 처마 구도 · 폰 뒤집기 180° + 발끝 정렬",
        "en": "Palace/Hanok Eaves · 180° Flip + Foot Align",
        "ja": "古宮・韓屋の軒構図・180°逆さま＋足元合わせ"
      }
    }
  },
  {
    "id": "nami",
    "type": "drama",
    "image": "places/nami.jpg",
    "ko": [
      "남이섬 메타세쿼이아길",
      "강원 · 춘천시",
      "겨울연가",
      "#겨울연가",
      "#나무사이",
      "나무가 양옆으로 반복되는 길 가운데에서 두 사람이 나란히 걸어보세요. 계절에 따라 전혀 다른 장면을 남길 수 있어요."
    ],
    "ja": [
      "南怡島・メタセコイア並木",
      "江原・春川市",
      "冬のソナタ",
      "#겨울연가",
      "#나무사이",
      "両側に木が並ぶ道の中央で、ふたり並んで歩いて。季節によって違うワンシーンを残せます。"
    ],
    "map": "남이섬 메타세쿼이아길 강원",
    "source": "https://www.news-wa.com/article/travel/tour-korea/2026/01/26/20260126500004",
    "credit": "가을 단풍은 잊어라… 눈 내리면 ‘딴 세상’ 되는 낭만 여행지",
    "pose": 2,
    "instagram": "남이섬 메타세쿼이아길",
    "en": [
      "Nami Island Metasequoia Lane",
      "Gangwon · Chuncheon",
      "Winter Sonata",
      "#NamiIsland",
      "#TreeLane",
      "Stand dead-center on the tree-lined lane and let the perspective converge behind you while walking slowly."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "drama_scene",
      "lighting": {
        "ko": "드라마 시네마틱 · 어깨 너머 시선 + 연사",
        "en": "Cinematic Drama · Over-Shoulder Gaze + Burst",
        "ja": "ドラマ風シネマティック・肩越し視線＋連写"
      }
    }
  },
  {
    "id": "nseoul",
    "type": "drama",
    "image": "places/nseoul.jpg",
    "ko": [
      "N서울타워 사랑의 자물쇠",
      "서울 · 용산구",
      "별에서 온 그대",
      "#드라마데이트",
      "#남산뷰",
      "자물쇠가 있는 난간을 배경으로 가까운 인물 사진을 찍어보세요. 타워를 담을 때는 카메라를 조금 낮춰 위로 기울여요."
    ],
    "ja": [
      "Nソウルタワー・愛の南京錠",
      "ソウル・龍山区",
      "星から来たあなた",
      "#드라마데이트",
      "#남산뷰",
      "南京錠のあるフェンスを背景に近めのポートレートを。タワーを入れるならカメラを少し低くして上向きに。"
    ],
    "map": "N서울타워 사랑의 자물쇠 서울",
    "source": "https://n-seoul-tower.com/articles/n-seoul-tower-love-locks/",
    "credit": "N Seoul Tower Love Locks",
    "pose": 2,
    "instagram": "N서울타워 사랑의 자물쇠",
    "en": [
      "N Seoul Tower Lock Terrace",
      "Seoul · Yongsan-gu",
      "My Love from the Star",
      "#NSeoulTower",
      "#SeoulNight",
      "Place colorful padlocks in the foreground and tilt slightly upward so the tower rises beside your shoulder."
    ],
    "pool": "yongsan",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 0,
      "stepCue": "night_flip",
      "lighting": {
        "ko": "야간 네온/야경 · 폰 뒤집기 + 노출 살짝 낮춤",
        "en": "Night Neon · Flip 180° & Lower Exposure",
        "ja": "夜景ネオン・180°逆さま＋露出やや低め"
      }
    }
  },
  {
    "id": "noksapyeong",
    "type": "drama",
    "image": "places/noksapyeong.jpg",
    "ko": [
      "녹사평 육교",
      "서울 · 용산구",
      "이태원 클라쓰",
      "#이태원클라쓰",
      "#서울야경",
      "육교 위에서 도로의 곡선과 멀리 보이는 남산을 함께 담아보세요. 통행을 방해하지 않는 쪽에서 짧게 촬영해주세요."
    ],
    "ja": [
      "緑莎坪歩道橋",
      "ソウル・龍山区",
      "梨泰院クラス",
      "#이태원클라쓰",
      "#서울야경",
      "歩道橋から道路の曲線と遠くの南山を一緒に。通行を妨げない側で短時間の撮影を。"
    ],
    "map": "녹사평 육교 서울",
    "source": "https://english.visitkorea.or.kr/svc/sp/HallyuNew/contentsView.do?dataSetId=70&vcontsId=200508",
    "credit": "“Itaewon Class” Filming Locations-  VISITKOREA :: Hallyu with you",
    "pose": 2,
    "instagram": "녹사평 육교",
    "en": [
      "Noksapyeong Overpass",
      "Seoul · Yongsan-gu",
      "Itaewon Class",
      "#Noksapyeong",
      "#SeoulNightSnap",
      "Lean lightly on the bridge rail at blue hour with Namsan Tower directly behind and car light trails below."
    ],
    "pool": "yongsan",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 0,
      "stepCue": "night_flip",
      "lighting": {
        "ko": "야간 네온/야경 · 폰 뒤집기 + 노출 살짝 낮춤",
        "en": "Night Neon · Flip 180° & Lower Exposure",
        "ja": "夜景ネオン・180°逆さま＋露出やや低め"
      }
    }
  },
  {
    "id": "mongted",
    "type": "drama",
    "image": "places/mongted.jpg",
    "ko": [
      "수원 몽테드 골목",
      "경기 · 수원시",
      "선재 업고 튀어",
      "#솔선커플",
      "#수원로케",
      "카페 외관과 골목을 함께 담아 드라마의 설렘을 떠올려보세요. 맞은편 주택의 출입문과 주민 사생활을 존중해주세요."
    ],
    "ja": [
      "水原・モンテドの路地",
      "京畿・水原市",
      "ソンジェ背負って走れ",
      "#솔선커플",
      "#수원로케",
      "カフェの外観と路地を一緒に、ドラマのときめきを。向かいの住宅の入口や住民のプライバシーに配慮しましょう。"
    ],
    "map": "수원 몽테드 골목 경기",
    "source": "https://news.nate.com/view/20240618n11690",
    "credit": "'선재 업고 튀어' 솔선 커플처럼 로맨틱한 수원 데이트 코스 : 네이트 뉴스",
    "pose": 2,
    "instagram": "수원 몽테드 골목",
    "en": [
      "Suwon Haenggung-dong Alley",
      "Gyeonggi · Suwon",
      "Lovely Runner",
      "#LovelyRunner",
      "#SuwonAlley",
      "Recreate the sunny alley walk by stepping one foot forward along the yellow-accented street facade."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "drama_scene",
      "lighting": {
        "ko": "드라마 시네마틱 · 어깨 너머 시선 + 연사",
        "en": "Cinematic Drama · Over-Shoulder Gaze + Burst",
        "ja": "ドラマ風シネマティック・肩越し視線＋連写"
      }
    }
  },
  {
    "id": "gongjin",
    "type": "drama",
    "image": "places/gongjin.jpg",
    "ko": [
      "포항 청하공진시장",
      "경북 · 포항시",
      "갯마을 차차차",
      "#공진마을",
      "#드라마여행",
      "시장 간판을 프레임 위쪽에 두고 친구와 나란히 서보세요. 상점과 시장의 실제 영업 동선을 비워주세요."
    ],
    "ja": [
      "浦項・清河コンジン市場",
      "慶北・浦項市",
      "海街チャチャチャ",
      "#공진마을",
      "#드라마여행",
      "市場の看板をフレーム上部に入れ、友だちと並んで。お店の営業や買い物の通路を空けましょう。"
    ],
    "map": "포항 청하공진시장 경북",
    "source": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=199639",
    "credit": "Cheongha Market (청하시장(공진시장))-  VISITKOREA",
    "pose": 2,
    "instagram": "포항 청하공진시장",
    "en": [
      "Pohang Cheongha Market",
      "Gyeongbuk · Pohang",
      "Hometown Cha-Cha-Cha",
      "#GongjinMarket",
      "#KDramaTrip",
      "Stand slightly off-center in front of the vintage market signs using 1× natural eye-level street framing."
    ],
    "pool": "ocean",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "drama_scene",
      "lighting": {
        "ko": "드라마 시네마틱 · 어깨 너머 시선 + 연사",
        "en": "Cinematic Drama · Over-Shoulder Gaze + Burst",
        "ja": "ドラマ風シネマティック・肩越し視線＋連写"
      }
    }
  },
  {
    "id": "hanmi",
    "type": "drama",
    "image": "places/hanmi.jpg",
    "ko": [
      "인천 배다리 한미서점",
      "인천 · 동구",
      "도깨비",
      "#노란책방",
      "#도깨비촬영지",
      "노란 외벽과 책방 간판을 배경으로 책을 든 손을 자연스럽게 내려보세요. 서점 내부는 촬영 가능 여부를 먼저 확인해요."
    ],
    "ja": [
      "仁川・ペダリ韓美書店",
      "仁川・東区",
      "トッケビ",
      "#노란책방",
      "#도깨비촬영지",
      "黄色い外壁と看板を背景に、本を持つ手を自然に。店内撮影は可能かどうか先に確認しましょう。"
    ],
    "map": "인천 배다리 한미서점 인천",
    "source": "https://ameblo.jp/koreaarex/entry-12482647749.html",
    "credit": "ドラマ 鬼(トッケビ)を見て仁川旅行に行こう－鬼(トッケビ)撮影場所(韓米書店,自由公園…) | 韓国空港鉄道 AREX",
    "pose": 2,
    "instagram": "인천 배다리 한미서점",
    "en": [
      "Incheon Hanmi Bookstore",
      "Incheon · Dong-gu",
      "Goblin Yellow Wall",
      "#HanmiBookstore",
      "#YellowWall",
      "Stand near the signature yellow wall and flip phone 180° from slightly across the lane for vibrant color contrast."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "drama_scene",
      "lighting": {
        "ko": "드라마 시네마틱 · 어깨 너머 시선 + 연사",
        "en": "Cinematic Drama · Over-Shoulder Gaze + Burst",
        "ja": "ドラマ風シネマティック・肩越し視線＋連写"
      }
    }
  },
  {
    "id": "sunshine",
    "type": "drama",
    "image": "places/sunshine.jpg",
    "ko": [
      "논산 선샤인스튜디오",
      "충남 · 논산시",
      "미스터 션샤인",
      "#시대극한컷",
      "#드라마세트",
      "옛 거리의 건물과 전차 선로가 보이는 방향으로 구도를 잡아보세요. 의상 체험을 한다면 전신을 담는 세로 사진이 잘 어울려요."
    ],
    "ja": [
      "論山・サンシャインスタジオ",
      "忠南・論山市",
      "ミスター・サンシャイン",
      "#시대극한컷",
      "#드라마세트",
      "昔の街並みや路面電車の線路が見える方向で。衣装体験なら全身を入れた縦写真が似合います。"
    ],
    "map": "논산 선샤인스튜디오 충남",
    "source": "https://japanese.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=215639",
    "credit": "サンシャインスタジオ（논산 선샤인스튜디오）- 韓国観光公社公式サイト「VISITKOREA」",
    "pose": 2,
    "instagram": "논산 선샤인스튜디오",
    "en": [
      "Nonsan Sunshine Studio",
      "Chungnam · Nonsan",
      "Mr. Sunshine",
      "#SunshineStudio",
      "#RetroKorea",
      "Use the vintage streetcar tracks as a leading line and capture a poised side-profile walking shot."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "drama_scene",
      "lighting": {
        "ko": "드라마 시네마틱 · 어깨 너머 시선 + 연사",
        "en": "Cinematic Drama · Over-Shoulder Gaze + Burst",
        "ja": "ドラマ風シネマティック・肩越し視線＋連写"
      }
    }
  },
  {
    "id": "hanbyeok",
    "type": "drama",
    "image": "places/hanbyeok.jpg",
    "ko": [
      "전주 한벽굴",
      "전북 · 전주시",
      "스물다섯 스물하나",
      "#청춘드라마",
      "#터널프레임",
      "터널 입구를 둥근 프레임처럼 사용해 두 사람이 마주 보는 장면을 담아보세요. 차량과 보행 흐름을 먼저 확인해주세요."
    ],
    "ja": [
      "全州・寒碧トンネル",
      "全北・全州市",
      "二十五、二十一",
      "#청춘드라마",
      "#터널프레임",
      "トンネルの入口を丸いフレームにして、向かい合うシーンを。車両や歩行者の流れを先に確認しましょう。"
    ],
    "map": "전주 한벽굴 전북",
    "source": "https://tour.jeonju.go.kr/board/view.jeonju?boardId=BBS_0000003&dataSid=16670&menuCd=DOM_000000101006001000&paging=ok&startPage=1",
    "credit": "전주 나들이 > 주요명소 > 역사·전통 | 한벽굴 글보기",
    "pose": 2,
    "instagram": "전주 한벽굴",
    "en": [
      "Jeonju Hanbyeok Tunnel",
      "Jeonbuk · Jeonju",
      "Twenty-Five Twenty-One",
      "#HanbyeokTunnel",
      "#YouthVibe",
      "Stand just inside the arched stone tunnel facing the bright greenery outside for a crisp silhouette frame."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "drama_scene",
      "lighting": {
        "ko": "드라마 시네마틱 · 어깨 너머 시선 + 연사",
        "en": "Cinematic Drama · Over-Shoulder Gaze + Burst",
        "ja": "ドラマ風シネマティック・肩越し視線＋連写"
      }
    }
  },
  {
    "id": "boseong",
    "type": "drama",
    "image": "places/boseong.jpg",
    "ko": [
      "보성 대한다원",
      "전남 · 보성군",
      "여름향기",
      "#녹차밭",
      "#초록드라마",
      "차밭의 곡선이 겹쳐 보이는 곳에서 인물은 한쪽에 작게 담아보세요. 차나무 사이로 들어가지 말고 관람로에서 촬영해요."
    ],
    "ja": [
      "宝城・大韓茶園",
      "全南・宝城郡",
      "夏の香り",
      "#녹차밭",
      "#초록드라마",
      "茶畑の曲線が重なる場所で、人物は片側に小さく。茶の木の中に入らず、観覧路から撮影しましょう。"
    ],
    "map": "보성 대한다원 전남",
    "source": "https://www.tourtoctoc.com/news/articleView.html?idxno=9065",
    "credit": "\"초록의 평화, 감성 포토존!\" 보성 대한다원, 5월 신록 속에서 즐기는 녹차밭 산책 < 국내 여행 < 기사본문 - 여행톡톡",
    "pose": 2,
    "instagram": "보성 대한다원",
    "en": [
      "Boseong Green Tea Fields",
      "Jeonnam · Boseong",
      "Summer Scent",
      "#Boseong",
      "#TeaFields",
      "Shoot slightly from above along the curving green tea ridges so the terraced lines wrap around you."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "drama_scene",
      "lighting": {
        "ko": "드라마 시네마틱 · 어깨 너머 시선 + 연사",
        "en": "Cinematic Drama · Over-Shoulder Gaze + Burst",
        "ja": "ドラマ風シネマティック・肩越し視線＋連写"
      }
    }
  },
  {
    "id": "mungyeong",
    "type": "drama",
    "image": "places/mungyeong.jpg",
    "ko": [
      "문경새재 오픈세트장",
      "경북 · 문경시",
      "킹덤 · 사극 촬영지",
      "#사극속으로",
      "#문경새재",
      "궁궐 문이나 한옥 골목의 중앙에서 옛 시대의 한 장면처럼 찍어보세요. 촬영 중 통제 구역은 현장 안내를 따라요."
    ],
    "ja": [
      "聞慶セジェ・オープンセット場",
      "慶北・聞慶市",
      "キングダム・時代劇ロケ地",
      "#사극속으로",
      "#문경새재",
      "宮殿の門や韓屋の路地の中央で、時代劇の一場面のように。撮影などによる立入制限は現地案内に従って。"
    ],
    "map": "문경새재 오픈세트장 경북",
    "source": "https://www.yeongnam.com/web/view.php?key=20260407028434982",
    "credit": "영남일보 - 사람과 지역의 가치를 생각합니다.",
    "pose": 2,
    "instagram": "문경새재 오픈세트장",
    "en": [
      "Mungyeong Saejae Set",
      "Gyeongbuk · Mungyeong",
      "Kingdom · Historical Set",
      "#Mungyeong",
      "#KPeriodDrama",
      "Frame the grand wooden palace gates symmetrically with mountain fog behind for an epic cinematic shot."
    ],
    "pool": "regional",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 2,
      "stepCue": "drama_scene",
      "lighting": {
        "ko": "드라마 시네마틱 · 어깨 너머 시선 + 연사",
        "en": "Cinematic Drama · Over-Shoulder Gaze + Burst",
        "ja": "ドラマ風シネマティック・肩越し視線＋連写"
      }
    }
  },
  {
    "id": "yeouido",
    "type": "nature",
    "image": "places/yeouido.jpg",
    "ko": [
      "여의도 한강공원",
      "서울 · 영등포구",
      "강변 피크닉",
      "#한강피크닉",
      "#노을산책",
      "돗자리와 간단한 소품을 앞에 두고 강을 넓게 담아보세요. 해가 낮아질 때 옆모습을 찍으면 부드러운 분위기가 나요."
    ],
    "ja": [
      "汝矣島漢江公園",
      "ソウル・永登浦区",
      "川辺のピクニック",
      "#한강피크닉",
      "#노을산책",
      "シートや小物を手前に、川を広く入れて。日が低くなった頃の横顔はやわらかな雰囲気に。"
    ],
    "map": "여의도 한강공원 서울",
    "source": "https://www.runsen.net/en",
    "credit": "Runsen Seoul — Seoul Running & Sauna Guide",
    "pose": 2,
    "instagram": "여의도 한강공원",
    "en": [
      "Yeouido Hangang Park",
      "Seoul · Yeongdeungpo",
      "Riverside Picnic",
      "#HangangPark",
      "#SeoulPicnic",
      "Shoot low from the picnic mat during sunset with the Han River skyline sparkling behind you."
    ],
    "pool": "yeouido",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 0,
      "stepCue": "nature_wide",
      "lighting": {
        "ko": "넓은 수평선/자연광 · 하단 발끝 정렬 + 여백 40%",
        "en": "Wide Horizon · Foot Align + 40% Sky Margin",
        "ja": "広い水平線・足元合わせ＋空の余白40%"
      }
    }
  },
  {
    "id": "ttukseom",
    "type": "nature",
    "image": "places/ttukseom.jpg",
    "ko": [
      "뚝섬 한강공원",
      "서울 · 광진구",
      "강바람과 도시 풍경",
      "#한강산책",
      "#강바람",
      "강변 산책로에서 머리카락이 바람에 움직이는 순간을 담아보세요. 자전거길을 피해 보행 구역에서 찍어요."
    ],
    "ja": [
      "トゥクソム漢江公園",
      "ソウル・広津区",
      "川風と都会の景色",
      "#한강산책",
      "#강바람",
      "川沿いで髪が風に揺れる瞬間を。自転車道を避け、歩行者エリアで撮影しましょう。"
    ],
    "map": "뚝섬 한강공원 서울",
    "source": "https://www.hanchao.com/contents/spot_detail.html?id=16462",
    "credit": "纛岛汉江公园_韩国景点推荐_韩国旅游网-韩巢",
    "pose": 2,
    "instagram": "뚝섬 한강공원",
    "en": [
      "Ttukseom Hangang Park",
      "Seoul · Gwangjin-gu",
      "River Breeze · Sunset",
      "#Ttukseom",
      "#HanRiverSunset",
      "Face the sunset reflection over the river and switch to 0.5× wide angle to include sky clouds and city bridges."
    ],
    "pool": "seongsu",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 0,
      "stepCue": "nature_wide",
      "lighting": {
        "ko": "넓은 수평선/자연광 · 하단 발끝 정렬 + 여백 40%",
        "en": "Wide Horizon · Foot Align + 40% Sky Margin",
        "ja": "広い水平線・足元合わせ＋空の余白40%"
      }
    }
  },
  {
    "id": "haneul",
    "type": "nature",
    "image": "places/haneul.jpg",
    "ko": [
      "하늘공원",
      "서울 · 마포구",
      "하늘과 억새 사이",
      "#억새산책",
      "#하늘한컷",
      "억새가 있는 계절에는 얼굴 앞쪽에 풀을 살짝 겹쳐보세요. 지정된 길 안에서 하늘을 넉넉히 넣어 찍어요."
    ],
    "ja": [
      "ハヌル公園",
      "ソウル・麻浦区",
      "空とススキの間で",
      "#억새산책",
      "#하늘한컷",
      "ススキの季節は顔の手前に草を少し重ねて。指定の道から、空をたっぷり入れて撮りましょう。"
    ],
    "map": "하늘공원 서울",
    "source": "https://mediahub.seoul.go.kr/archives/2005991",
    "credit": "서울시 - 내 손안에 서울",
    "pose": 2,
    "instagram": "하늘공원",
    "en": [
      "Haneul Park",
      "Seoul · Mapo-gu",
      "Silver Grass · Sky",
      "#HaneulPark",
      "#GoldenHour",
      "Hold the camera at waist height among the tall silver grass and tilt gently upward into the open sky."
    ],
    "pool": "mapo",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 0,
      "stepCue": "nature_wide",
      "lighting": {
        "ko": "넓은 수평선/자연광 · 하단 발끝 정렬 + 여백 40%",
        "en": "Wide Horizon · Foot Align + 40% Sky Margin",
        "ja": "広い水平線・足元合わせ＋空の余白40%"
      }
    }
  },
  {
    "id": "seonyudo",
    "type": "nature",
    "image": "places/seonyudo.jpg",
    "ko": [
      "선유도공원",
      "서울 · 영등포구",
      "수생식물과 산책",
      "#수변정원",
      "#초록산책",
      "물과 옛 구조물이 만나는 곳에서 선을 맞춰보세요. 초록 식물이 많은 곳에서는 밝은 옷이 배경과 잘 구분돼요."
    ],
    "ja": [
      "仙遊島公園",
      "ソウル・永登浦区",
      "水辺の植物と散歩",
      "#수변정원",
      "#초록산책",
      "水と古い構造物が出会う場所でラインを整えて。緑の多い場所では明るい服が背景に映えます。"
    ],
    "map": "선유도공원 서울",
    "source": "https://korean.visitseoul.net/nature/%EC%84%A0%EC%9C%A0%EB%8F%84%EA%B3%B5%EC%9B%90/KOP000378",
    "credit": "",
    "pose": 2,
    "instagram": "선유도공원",
    "en": [
      "Seonyudo Island Park",
      "Seoul · Yeongdeungpo",
      "Eco Park · Bridge",
      "#Seonyudo",
      "#RiverSunset",
      "Use the concrete ivy arches as natural foreground framing, then capture silhouettes on Seonyugyo Bridge at sunset."
    ],
    "pool": "yeouido",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 0,
      "stepCue": "nature_wide",
      "lighting": {
        "ko": "넓은 수평선/자연광 · 하단 발끝 정렬 + 여백 40%",
        "en": "Wide Horizon · Foot Align + 40% Sky Margin",
        "ja": "広い水平線・足元合わせ＋空の余白40%"
      }
    }
  },
  {
    "id": "olympic",
    "type": "nature",
    "image": "places/olympic.jpg",
    "ko": [
      "올림픽공원 나홀로나무",
      "서울 · 송파구",
      "잔디와 큰 여백",
      "#나홀로나무",
      "#피크닉무드",
      "나무를 한쪽에 두고 인물과 거리를 띄워 넓은 풍경을 담아보세요. 잔디 출입 안내와 현장 통제선을 따라주세요."
    ],
    "ja": [
      "オリンピック公園・一本の木",
      "ソウル・松坡区",
      "芝生と大きな余白",
      "#나홀로나무",
      "#피크닉무드",
      "木を片側に置き、人物との間に距離をつくって広い景色を。芝生の利用案内や規制線に従いましょう。"
    ],
    "map": "올림픽공원 나홀로나무 서울",
    "source": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=226462",
    "credit": "7 BEST Urban Parks to Visit in Spring-  VISITKOREA",
    "pose": 2,
    "instagram": "올림픽공원 나홀로나무",
    "en": [
      "Olympic Park Lone Tree",
      "Seoul · Songpa-gu",
      "Wide Lawn · Minimal",
      "#LoneTree",
      "#OlympicPark",
      "Step far back on the green hill so the solitary tree and open sky give a serene minimalist Korean aesthetic."
    ],
    "pool": "seongsu",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 0,
      "stepCue": "nature_wide",
      "lighting": {
        "ko": "넓은 수평선/자연광 · 하단 발끝 정렬 + 여백 40%",
        "en": "Wide Horizon · Foot Align + 40% Sky Margin",
        "ja": "広い水平線・足元合わせ＋空の余白40%"
      }
    }
  },
  {
    "id": "dadaepo",
    "type": "nature",
    "image": "places/dadaepo.jpg",
    "ko": [
      "부산 다대포해수욕장",
      "부산 · 사하구",
      "노을 속 실루엣",
      "#노을실루엣",
      "#바다반사",
      "해질녘 수평선 앞에서 팔을 벌리거나 두 사람이 손을 잡아보세요. 젖은 모래의 반사를 낮은 앵글로 담으면 좋아요."
    ],
    "ja": [
      "釜山・多大浦海水浴場",
      "釜山・沙下区",
      "夕焼けのシルエット",
      "#노을실루엣",
      "#바다반사",
      "夕暮れの水平線を背景に、腕を広げたり手をつないだり。濡れた砂の反射は低いアングルで。"
    ],
    "map": "부산 다대포해수욕장 부산",
    "source": "https://view.nate.com/travel/view/406327/",
    "credit": "다대포 가볼만한곳 추천 5곳 — 2026 최신판 | 오늘의모두",
    "pose": 2,
    "instagram": "부산 다대포해수욕장",
    "en": [
      "Dadaepo Beach",
      "Busan · Saha-gu",
      "Sunset Reflection",
      "#Dadaepo",
      "#BusanSunset",
      "Shoot low near the wet tidal sand at sunset to mirror the glowing orange sky and full silhouette."
    ],
    "pool": "ocean",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 0,
      "stepCue": "nature_wide",
      "lighting": {
        "ko": "넓은 수평선/자연광 · 하단 발끝 정렬 + 여백 40%",
        "en": "Wide Horizon · Foot Align + 40% Sky Margin",
        "ja": "広い水平線・足元合わせ＋空の余白40%"
      }
    }
  },
  {
    "id": "gwangalli",
    "type": "nature",
    "image": "places/gwangalli.jpg",
    "ko": [
      "부산 광안리해수욕장",
      "부산 · 수영구",
      "광안대교 야경",
      "#광안대교",
      "#부산밤바다",
      "광안대교를 어깨 뒤로 두고 얼굴은 주변 조명 쪽으로 돌려보세요. 휴대폰을 단단히 잡고 잠깐 멈춰 찍어요."
    ],
    "ja": [
      "釜山・広安里海水浴場",
      "釜山・水営区",
      "広安大橋の夜景",
      "#광안대교",
      "#부산밤바다",
      "広安大橋を肩の後ろに置き、顔は周囲の灯りへ。スマホをしっかり持ち、少し静止して撮影を。"
    ],
    "map": "부산 광안리해수욕장 부산",
    "source": "https://brunch.co.kr/%40947138c947af435/149",
    "credit": "11화 제목을 정할 수 없는 잔잔했던 하루",
    "pose": 2,
    "instagram": "부산 광안리해수욕장",
    "en": [
      "Gwangalli Beach",
      "Busan · Suyeong-gu",
      "Gwangan Bridge Night",
      "#Gwangalli",
      "#BusanNight",
      "Frame Gwangan Bridge horizontally across the upper third and stand near the shoreline with soft portrait flash."
    ],
    "pool": "ocean",
    "recipe": {
      "flip": true,
      "lens": "1×",
      "pose": 0,
      "stepCue": "night_flip",
      "lighting": {
        "ko": "야간 네온/야경 · 폰 뒤집기 + 노출 살짝 낮춤",
        "en": "Night Neon · Flip 180° & Lower Exposure",
        "ja": "夜景ネオン・180°逆さま＋露出やや低め"
      }
    }
  },
  {
    "id": "anmok",
    "type": "nature",
    "image": "places/anmok.jpg",
    "ko": [
      "강릉 안목해변",
      "강원 · 강릉시",
      "커피와 파란 바다",
      "#커피거리",
      "#강릉바다",
      "커피 컵을 손에 들고 수평선과 눈높이를 맞춰보세요. 카페 창가에서는 창틀을 자연스러운 액자로 사용할 수 있어요."
    ],
    "ja": [
      "江陵・安木海辺",
      "江原・江陵市",
      "コーヒーと青い海",
      "#커피거리",
      "#강릉바다",
      "コーヒーを片手に、水平線と目線を合わせて。カフェの窓辺では窓枠を自然な額縁にできます。"
    ],
    "map": "강릉 안목해변 강원",
    "source": "https://www.expedia.co.kr/en/Anmok-Beach-Gangneung.d553248621555836422.Vacation-Attraction",
    "credit": "Anmok Beach Tours - Book Now | Expedia",
    "pose": 2,
    "instagram": "강릉 안목해변",
    "en": [
      "Anmok Coffee Beach",
      "Gangwon · Gangneung",
      "Ocean · Cafe Street",
      "#AnmokBeach",
      "#GangneungCoffee",
      "Pair an iced coffee cup in the foreground with the deep blue East Sea from a 2nd-floor window seat."
    ],
    "pool": "ocean",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 0,
      "stepCue": "nature_wide",
      "lighting": {
        "ko": "넓은 수평선/자연광 · 하단 발끝 정렬 + 여백 40%",
        "en": "Wide Horizon · Foot Align + 40% Sky Margin",
        "ja": "広い水平線・足元合わせ＋空の余白40%"
      }
    }
  },
  {
    "id": "hyeopjae",
    "type": "nature",
    "image": "places/hyeopjae.jpg",
    "ko": [
      "제주 협재해수욕장",
      "제주 · 제주시",
      "비양도와 에메랄드빛",
      "#제주바다",
      "#비양도뷰",
      "비양도가 보이는 방향에서 흰 모래와 바다의 색을 함께 담아보세요. 물가보다 안전한 모래사장에서 촬영해요."
    ],
    "ja": [
      "済州・挟才海水浴場",
      "済州・済州市",
      "飛揚島とエメラルド色の海",
      "#제주바다",
      "#비양도뷰",
      "飛揚島が見える方向で、白い砂と海の色を一緒に。水際より安全な砂浜から撮影しましょう。"
    ],
    "map": "제주 협재해수욕장 제주",
    "source": "https://www.kwaveblog.com/hyeopjae-beach-jeju/",
    "credit": "Picture-Perfect Day at Hyeopjae Beach in Jeju - KwaveBlog",
    "pose": 2,
    "instagram": "제주 협재해수욕장",
    "en": [
      "Hyeopjae Beach",
      "Jeju · Jeju-si",
      "Emerald Water · Biyangdo",
      "#Hyeopjae",
      "#JejuIsland",
      "Stand on the dark volcanic basalt rocks with Biyangdo Island behind you and align feet to the bottom edge."
    ],
    "pool": "ocean",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 0,
      "stepCue": "nature_wide",
      "lighting": {
        "ko": "넓은 수평선/자연광 · 하단 발끝 정렬 + 여백 40%",
        "en": "Wide Horizon · Foot Align + 40% Sky Margin",
        "ja": "広い水平線・足元合わせ＋空の余白40%"
      }
    }
  },
  {
    "id": "suncheon",
    "type": "nature",
    "image": "places/suncheon.jpg",
    "ko": [
      "순천만습지",
      "전남 · 순천시",
      "갈대밭 사이 산책",
      "#갈대밭",
      "#생태산책",
      "나무 데크의 곡선을 따라 뒷모습을 담아보세요. 갈대밭에 들어가지 않고 산책로의 선을 활용하면 깊이감이 생겨요."
    ],
    "ja": [
      "順天湾湿地",
      "全南・順天市",
      "葦原の中を散歩",
      "#갈대밭",
      "#생태산책",
      "木のデッキの曲線に沿って後ろ姿を。葦原に入らず、遊歩道のラインで奥行きをつくりましょう。"
    ],
    "map": "순천만습지 전남",
    "source": "https://www.travelzoo.com/jp/blog/kankokukankokosha_as20200130/",
    "credit": "本当は教えたくない“ブレイク寸前”の旅先 | トラベルズー",
    "pose": 2,
    "instagram": "순천만습지",
    "en": [
      "Suncheon Bay Wetland",
      "Jeonnam · Suncheon",
      "Golden Reed Fields",
      "#SuncheonBay",
      "#NatureKorea",
      "Walk along the wooden boardwalk through endless reed fields and shoot from behind for an atmospheric travel frame."
    ],
    "pool": "ocean",
    "recipe": {
      "flip": true,
      "lens": "0.5×",
      "pose": 0,
      "stepCue": "nature_wide",
      "lighting": {
        "ko": "넓은 수평선/자연광 · 하단 발끝 정렬 + 여백 40%",
        "en": "Wide Horizon · Foot Align + 40% Sky Margin",
        "ja": "広い水平線・足元合わせ＋空の余白40%"
      }
    }
  }
];
