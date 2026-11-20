# 📊 프로젝트 분석 (`v002`) 및 `v003` (PILK: Picture It Like Korean) 적용 내역

## 1. 기존 프로젝트 (`v002` — `seoul:frame`) 분석

### 1.1 아키텍처 및 파일 구성
- **[index.html](file:///Users/kimkihun/Documents/projects/kuai/v002/index.html)**: 단일 페이지 웹 애플리케이션(SPA) 엔트리 포인트.
- **[app.js](file:///Users/kimkihun/Documents/projects/kuai/v002/app.js)**: 다국어 번역 객체(`copy`), SVG 기반 포즈/한복 렌더링(`poseSvg`, `hanbokSvg`), 명소 탐색 및 필터링, WebRTC 카메라 오버레이(`showCamera`), 로컬 스토리지(`sf-saved`, `sf-style`) 관리.
- **[spots-extra.js](file:///Users/kimkihun/Documents/projects/kuai/v002/spots-extra.js)**: 서울 로컬 핫플(`local`), K-드라마 촬영지(`drama`), 고궁·한옥(`heritage`), 바다·자연(`nature`) 등 총 39개 촬영 스팟 데이터.
- **[studio-data.js](file:///Users/kimkihun/Documents/projects/kuai/v002/studio-data.js)**: 17종 전통 배색, 4계절 퍼스널컬러 프리셋, 4종 배경 및 조명 필터 데이터.
- **[style.css](file:///Users/kimkihun/Documents/projects/kuai/v002/style.css)**: 반응형 그리드 및 모달 UI 스타일시트.

### 1.2 `v002`의 강점과 `PILK` 전환 시 보완 필요점 (Gap Analysis)
1. **서비스 포지셔닝 고도화 필요**:
   - `v002`는 "드라마 촬영지 탐색 + 한복 스타일링 + 단순 2D 포즈 오버레이" 중심(`seoul:frame`)으로 구성됨.
   - **PILK 핵심 차별점**인 *"한국인이 SNS에 올린 베스트 컷 데이터를 학습해, 특정 장소에서 한국인처럼 감각적인 인생샷을 찍을 수 있도록 폰 뒤집기·앵글(0.5×)·포즈를 실시간 코칭해 주는 서비스"*가 전면적으로 드러나야 함.
2. **지원 언어 확장 필요 (`KR / JP` → `KR / EN / JP` 3개 국어)**:
   - `v002`는 한국어(`ko`)와 일본어(`ja`) 2개 국어만 지원하여 영미권·동남아·유럽 관광객 대응 및 3개 국어 고객 검증 설문 연동이 부족했음.
3. **3가지 코칭 방식(A / B / C) 및 포토 챌린지·설문 검증 기능 부재**:
   - 고객 검증 설문 Part 4의 핵심인 **코칭 방식 3종(A. AR 화면 가이드 / B. 베스트컷 예시 및 단계별 튜토리얼 / C. 실시간 음성·텍스트 코칭)**, **포토 챌린지 & 로컬 쿠폰 리워드**, 그리고 **고객 검증용 설문지(외국인 본 설문 + 한국인 분기 부록 섹션)**가 프로토타입에 통합되어야 함.

---

## 2. `v003` 폴더 적용 내역 (`PILK: Picture It Like Korean`)

- **[v003/index.html](file:///Users/kimkihun/Documents/projects/kuai/v002/v003/index.html)**:
  - 브랜드 아이덴티티를 **`PILK:frame v003 (Picture It Like Korean)`**으로 업그레이드.
  - 상단 언어 전환기에 **`KR / EN / JP` (한국어 / 영어 / 일본어) 3개 국어 버튼** 적용.
  - 히어로 섹션에 **PILK 핵심 차별점 배지**(한국인 SNS 베스트컷 학습 기반 폰 뒤집기·앵글·포즈 실시간 코칭) 및 HUD 칩(`🔄 폰 뒤집기 180°`, `📐 0.5× 광각 · 발끝 정렬`) 추가.
  - 신규 섹션 추가:
    1. **3가지 실시간 코칭 모드 (`#coaching` — Mode A / B / C)**
    2. **포토 챌린지 & 로컬 제휴 쿠폰 리워드 (`#challenge`)**
    3. **고객 검증용 설문 시뮬레이터 & 구글 폼 복사 센터 (`#survey`)**
- **[v003/pilk-survey-data.js](file:///Users/kimkihun/Documents/projects/kuai/v002/v003/pilk-survey-data.js)**:
  - Part 4 서비스 소개문(한/영/일), 코칭 모드 A/B/C 데이터, 포토 챌린지 데이터, 그리고 **Part 1~4 + 부록(한국인 전용 섹션 K1~K4)** 전체 설문 데이터 구조화.
- **[v003/app.js](file:///Users/kimkihun/Documents/projects/kuai/v002/v003/app.js)** & **[v003/style.css](file:///Users/kimkihun/Documents/projects/kuai/v002/v003/style.css)**:
  - 한국어(`ko`), 영어(`en`), 일본어(`ja`) 3개 국어 전체 UI·명소·포즈·한복 스튜디오 연동.
  - 카메라 모달 내 **Mode A(AR 화면 가이드 + 발끝 기준선) / Mode B(베스트컷 3단계 튜토리얼) / Mode C(Web Speech API 기반 다국어 실시간 음성·텍스트 코칭)** 실시간 전환 구현.
  - 설문 섹션 내 **Q1 대한민국 선택 시 부록(K1~K4) 자동 분기**, **Q4 스크리닝 종료 안내**, **Q13 최대 3개 복수 선택 제한**, **Q16 코칭 방식 A/B/C 시각 프리뷰**, **구글 폼 복사용 원클릭 복사 기능** 구현.
- **[v003/PILK_Google_Forms_Survey.md](file:///Users/kimkihun/Documents/projects/kuai/v002/v003/PILK_Google_Forms_Survey.md)**:
  - 구글 폼에 즉시 복사·붙여넣기 가능한 **[한국어 / 영어 / 일본어] 3개 국어 병기 설문지 최종본 문서**.
