# ✳ PILK (Picture It Like Korean)

> **KU AI Hackathon · Team 12 Project (2026)**  
> **한국인처럼 감각적인 인생샷을 실시간으로 코칭하고, 촬영 배경을 인식해 주변 핫플·로컬 혜택까지 연결하는 모바일 포토 웹앱**

---

## 1. 프로젝트 소개

- **프로젝트명:** PILK (Picture It Like Korean)
- **팀 번호:** KU AI Hackathon – Team 12
- **개발 기간:** 2026년 11월
- **GitHub:** https://github.com/kkiihun/KUAI_team12
- **지원 언어:** 한국어(`KR`) · 영어(`EN`) · 일본어(`JP`) 3개 국어

### 기획 배경 및 멘토 피드백 기반 피벗
초기 프로토타입(`v001`~`v004`)은 일본인 관광객 대상 한복 스타일링·촬영지 안내에 초점을 맞췄으나, 멘토링 피드백을 통해 **한복 대여 단일 시장의 구조적 한계(방한 외국인 중 한복 유료 대여 비중 5~10%, 점포 수 천장, 여행사·유학생 스냅과의 경쟁)**를 점검했습니다.

이에 **`v005`에서는 한복 중심 구조에서 과감히 피벗**하여, 방한 외국인 90%+가 일상복으로 즐기는 **「한국인처럼 감각적으로 사진 찍는 법(항공샷 · 발끝 정렬 · 앞발 빼기 · 거리 코칭)」**과 **「촬영 배경 자동 인식 → 주변 관광지·지도·로컬 제휴 추천」**을 결합한 **카메라-퍼스트 모바일 웹앱**으로 재구성했습니다.

> 상세한 멘토 Q&A 및 수익 모델·시장 분석은 [`v005/MENTOR_FEEDBACK_AND_STRATEGY.md`](v005/MENTOR_FEEDBACK_AND_STRATEGY.md)에서 확인할 수 있습니다.

---

## 2. 주요 기능 (`v005` 최신 기준)

모바일 네이티브 카메라 앱처럼 **스크롤 없는 4개 탭 구조(`카메라` · `주변` · `스팟` · `보관함`)**와 상단 **`✨ AI 코치`** 바텀시트로 구성되어 있습니다.

### 📷 1) `카메라` 탭 — 실시간 한국식 포토 디렉터
- **실시간 WebRTC 카메라 + 전면/후면 전환**: 후면(`environment`) ↔ 전면 셀카(`user`) 전환 및 셀카 미러링 촬영 지원
- **실시간 한국식 구도 코칭 & K-Match(%)**:
  - 6종 한국 트렌드 포즈 AR 실루엣 오버레이 (`항공샷`, `전신 비율`, `뒤돌아보기`, `거울셀카`, `고양이그림자`, `볼콕`)
  - 1줄 퀵 컨트롤: `AR / 3단계 / 음성` 모드 전환(카메라 스트림 유지), `항공샷(? 가이드 모달 포함)`, `앞발`, `0.5× / 1× / 2×`, 거리 시뮬레이터(`뒤로 / 최적 / 앞으로`), 모바일 자이로 수평계(`DeviceOrientationEvent`)
- **모바일 음성 코칭**: Web Audio API 세션 언락 + `Web Speech API` 다국어(`ko-KR / en-US / ja-JP`) 음성 안내
- **찍어주는 사람용 10초 카드 (`👥`)**: 친구·연인·행인에게 보여주면 10초 만에 원하는 구도로 찍어줄 수 있는 대형 가이드 카드
- **사진 저장 & 인스타 스토리 카드(`1080×1920 PNG`)**: 촬영 컷을 즉시 기기에 저장하거나 인스타그램 스토리 규격 카드로 원클릭 내보내기

### 📍 2) `주변` 탭 — AI 배경 스캔 · 인터랙티브 지도 · 로컬 추천
- **배경 자동 분석 (`Canvas`)**: 현재 카메라 화면 또는 업로드한 사진의 밝기·색감(자연광/야간 등)을 로컬 분석해 최적 촬영 세팅 제안
- **인터랙티브 구글 지도 임베드**: 현재 스팟 및 추천 장소별 위치를 탭 내에서 바로 확대·확인하고 구글 지도 앱 길찾기로 연결
- **주변 관광지 & 로컬 제휴 쿠폰(`[예시]`)**: 도보 거리별 카페·팝업·명소 추천 및 시연용 예시 쿠폰 발급/저장

### 🔍 3) `스팟` 탭 — 한국 SNS 스팟 44곳 탐색
- **SNS 중심 카테고리 필터**: `전체(44)` · **`인스타(15)`** · **`틱톡(12)`** · `드라마(11)` · `고궁(13)` · `자연(11)`
- 한/영/일 3개 국어 통합 검색, 북마크, 스팟 사진 1탭으로 `카메라` 탭 배경 즉시 로드

### 🔖 4) `보관함` 탭 — 쿠폰 · 스팟 · 카메라 설정
- 발급받은 예시 쿠폰 및 저장한 스팟 관리 (`localStorage` 로컬 보관)
- AR 가이드 투명도 슬라이더, 발끝선·3분할 격자 표시 설정, 사진 출처 안내

### ✨ 5) `AI 코치` 채팅 (`Upstage Solar Pro`)
- 상단 **`✨ AI 코치`** 버튼으로 어느 탭에서나 모바일 바텀시트 채팅 실행
- 현재 보고 있는 **스팟 · 선택 포즈 · 렌즈 · 언어(`KR/EN/JP`)** 맥락을 시스템 프롬프트에 자동 주입해 맞춤 촬영 코칭 제공
- 원클릭 추천 질문 칩 3종 제공 및 API 키 미설정 시 Demo 폴백 자동 지원

---

## 3. 버전 및 브랜치별 작업 히스토리

### 폴더 버전 진화 (`v001` → `v005`)
| 버전 | 서비스명 | 주요 내용 |
| :--- | :--- | :--- |
| **`v001`** | 韓旅フォト | 단일 HTML 파일(992줄), 100% 인라인 SVG 기반 16개 명소·한복·MZ 포즈 프로토타입 (JP/KR) |
| **`v002`** | seoul:frame | 반응형 웹 SPA 리디자인, 실제 사진 기반 44개 스팟, 17색 한복 아틀리에, 2D 포즈 카메라 (KR/JP) |
| **`v003`** | PILK:frame v003 | PILK 리브랜딩, 3개 국어(KR/EN/JP), A/B/C 코칭 모드, 포토 챌린지 및 고객 검증 설문 통합 |
| **`v004`** | PILK:frame | 경량화 및 고객 검증 설문 별도 페이지(`survey.html`) 분리 |
| **`v005`** | **PILK (최신)** | **멘토 피드백 피벗 반영**: 한복 중심 탈피 → 카메라-퍼스트 4탭 모바일 앱 + 배경 인식 지도/주변 추천 + Upstage Solar Pro AI 채팅 |

### `v005` 브랜치별 고도화 내역
| 브랜치 | 커밋 | 주요 작업 내용 |
| :--- | :--- | :--- |
| `main` | `1a2bab1` | `v003`, `v004`, `v005` 초기 업로드 및 `.gitignore` 추가 |
| `feat/pilk-v005` | `c3c7339` | 앱 화면 내 설문조사 메뉴·링크 제거 (`설문조사제거`) |
| `feat/mobile-compact` | `18169da` | 불필요한 설명 텍스트 ~70% 축소, 모바일 CSS Grid 가로 팽창 버그 수정 및 360px/390px 검증 |
| `feat/tab-pages-simple` | `efd423f` → `266600f` | 4개 탭 페이지 분리(`카메라`/`주변`/`스팟`/`보관함`), 전면/후면 카메라 전환, `주변` 탭 구글 지도 임베드, 스팟 `인스타`/`틱톡` 카테고리 분리 |
| `feat/ux-polish-voice-guide` | `91bf50c` | 직관적 촬영 가이드 모달(`?`), 모바일 iOS/Android 음성 코칭 무음 버그 수정, 쿠폰 `[예시]` 표기 |
| `feat/solar-ai-chat` *(최신)* | `43d931d` | **Upstage `solar-pro` AI 코치 채팅**(`api/chat.js`, `server.mjs`), `항공샷` 명칭·도해 정비, `보관함` 사업전략 요약 제거 |

---

## 4. 기술 스택 및 아키텍처

| 구분 | 기술 |
| :--- | :--- |
| **Frontend** | Vanilla HTML5, CSS3 (Mobile-First Responsive), JavaScript (ES6+) |
| **Browser Web APIs** | `WebRTC (getUserMedia)`, `Canvas 2D`, `DeviceOrientationEvent`, `Web Speech API`, `Web Audio API`, `localStorage`, `<dialog>` |
| **AI / Proxy Server** | Upstage API (`solar-pro`), Node.js Zero-Dependency Server (`v005/server.mjs`), Vercel Serverless Function (`v005/api/chat.js`) |
| **Map & Hosting** | Google Maps Embed, Cloudflare Quick Tunnel (개발 테스트), Vercel / GitHub Pages (정식 배포) |

```text
[모바일 브라우저 (v005 정적 UI + WebRTC/Canvas/TTS 로컬 처리)]
        │
        ├── 정적 파일 요청 (HTML / CSS / JS / 44개 스팟 이미지)
        └── POST /api/chat (현재 스팟·포즈·언어 컨텍스트 포함)
                 │
                 ▼
[프록시 서버: 로컬 v005/server.mjs 또는 Vercel v005/api/chat.js]
                 │  Authorization: Bearer $UPSTAGE_API_KEY (서버 환경변수 보안 보관)
                 ▼
        [Upstage API (solar-pro)]
```

---

## 5. 프로젝트 구조

```text
KUAI_team12/
├── README.md
├── .gitignore
├── v001/                          # 초기 단일 HTML SVG 프로토타입 (韓旅フォト)
├── v002/                          # seoul:frame (44개 스팟 + 한복 아틀리에)
├── v003/                          # PILK 리브랜딩 + A/B/C 코칭 + 설문 통합판
├── v004/                          # PILK 경량화 + 설문 페이지 분리
└── v005/                          # ★ 최신 PILK 모바일 4탭 앱 + Solar Pro AI 코치
    ├── index.html                 # 4탭 모바일 앱 엔트리 + AI 채팅 바텀시트
    ├── style.css                  # 모바일 퍼스트 반응형 스타일시트
    ├── app.js                     # 카메라 디렉터, 배경 스캔, 지도, 음성, AI 채팅 로직
    ├── pilk-data.js               # 한/영/일 UI 텍스트 & 6종 K-포즈 레시피
    ├── spots-data.js              # 44개 스팟(한/영/일) & 권역별 주변 추천 데이터
    ├── server.mjs                 # 로컬 정적 서빙 + /api/chat Upstage 프록시 서버
    ├── api/
    │   └── chat.js                # Vercel Serverless Function (Upstage solar-pro)
    ├── .env.example               # UPSTAGE_API_KEY 환경변수 템플릿
    ├── survey.html                # 고객 검증 설문지 (독립 페이지)
    ├── MENTOR_FEEDBACK_AND_STRATEGY.md  # 멘토 피드백 답변 및 피벗 전략 보고서
    └── assets/                    # 44개 스팟 참고 이미지
```

---

## 6. 실행 및 배포 방법

### 1) 로컬 실행 (Node.js 18+)
```bash
git clone https://github.com/kkiihun/KUAI_team12.git
cd KUAI_team12
git checkout feat/solar-ai-chat

# (선택) 실제 Upstage Solar Pro 연결 시 .env 파일 생성
cp v005/.env.example v005/.env
# v005/.env 파일에 UPSTAGE_API_KEY=up_... 입력

# 서버 실행 (http://localhost:8005)
node v005/server.mjs
```
- `UPSTAGE_API_KEY`를 넣지 않아도 **Demo 모드**로 UI 및 AI 채팅 전체 기능을 바로 체험할 수 있습니다.

### 2) 휴대폰에서 실시간 카메라 테스트 (HTTPS 터널)
모바일 브라우저에서 실시간 카메라(`WebRTC`)와 자이로 센서는 HTTPS 환경이 필요합니다.
```bash
npx --yes cloudflared tunnel --url http://localhost:8005
```
출력되는 `https://*.trycloudflare.com` 주소를 휴대폰 Safari/Chrome에서 열면 즉시 테스트할 수 있습니다.

### 3) 상시 배포 (Vercel 추천)
1. Vercel에서 본 GitHub 저장소를 Import하고 **Root Directory를 `v005`**로 지정합니다.
2. **Environment Variables**에 `UPSTAGE_API_KEY` (및 선택적으로 `UPSTAGE_MODEL=solar-pro`)를 등록합니다.
3. 배포 완료 시 정적 프론트엔드와 `/api/chat` Upstage 서버리스 함수가 HTTPS로 자동 연동됩니다.

---

*KU AI Hackathon · Team 12 · PILK (Picture It Like Korean) · 2026*
