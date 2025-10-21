# RAG 완벽 가이드 - 웹 슬라이드 교안

105개의 핵심 Q&A로 마스터하는 Retrieval-Augmented Generation (RAG) 실전 교육 자료

## 📚 목차

1. **RAG 기초** - RAG의 필요성과 핵심 개념
2. **RAG 파이프라인** - 인덱싱, 검색, 생성 프로세스
3. **청킹 전략** - 효과적인 문서 분할 기법
4. **검색 시스템** - 임베딩, 벡터 DB, 검색 전략
5. **리랭킹** - 검색 품질 향상 기법
6. **평가 메트릭** - RAG 시스템 성능 측정
7. **고급 기법** - Query Transformation & 최적화

## 🚀 사용 방법

### 로컬에서 실행

1. 파일 다운로드 또는 클론
```bash
git clone <repository-url>
cd Claude_skill-test-ppt
```

2. 브라우저에서 `index.html` 열기
```bash
# 방법 1: 직접 파일 열기
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux

# 방법 2: 간단한 HTTP 서버 실행
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

### 온라인 호스팅 (GitHub Pages)

#### 🌐 GitHub Pages로 배포하기

**방법 1: 현재 브랜치 사용 (가장 빠름)**

1. GitHub 저장소 페이지로 이동
2. **Settings** → **Pages** 메뉴 클릭
3. **Source** 섹션에서:
   - Branch: `claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV` 선택
   - Folder: `/ (root)` 선택
   - **Save** 클릭
4. 1-2분 후 URL 확인: `https://<username>.github.io/Claude_skill-test-ppt/`

**방법 2: Main 브랜치로 병합 후 배포 (권장)**

1. Pull Request 생성:
   - 브랜치 `claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV` → `main`
2. PR 병합 (Merge)
3. GitHub **Settings** → **Pages**:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
   - **Save** 클릭
4. 배포 완료 후 접속: `https://<username>.github.io/Claude_skill-test-ppt/`

**배포 확인:**
- Settings → Pages에서 "Your site is live at..." 메시지 확인
- Actions 탭에서 배포 진행 상황 확인 가능

**기타 호스팅 옵션:**
- Netlify: 저장소 연결 후 자동 배포
- Vercel: GitHub 연동으로 즉시 배포
- 정적 HTML 파일이므로 별도 빌드 설정 불필요

## ⌨️ 키보드 단축키

| 키 | 기능 |
|---|---|
| `→` / `Space` / `PageDown` | 다음 슬라이드 |
| `←` / `PageUp` | 이전 슬라이드 |
| `Home` | 첫 슬라이드로 이동 |
| `End` | 마지막 슬라이드로 이동 |
| `F` | 전체화면 토글 |
| `P` | 컨트롤 숨기기/보이기 |
| `Esc` | 전체화면 종료 |

## 📱 모바일 지원

- 터치 스와이프로 슬라이드 이동 가능
  - 왼쪽 스와이프: 다음 슬라이드
  - 오른쪽 스와이프: 이전 슬라이드
- 반응형 디자인으로 모든 화면 크기 지원

## ✨ 주요 기능

- ✅ 35개 이상의 상세 슬라이드
- ✅ 인터랙티브 네비게이션
- ✅ 진행률 표시 바
- ✅ 키보드 단축키 지원
- ✅ 터치/스와이프 지원
- ✅ 자동 슬라이드 위치 저장
- ✅ 전체화면 모드
- ✅ 코드 블록 신택스 하이라이팅
- ✅ 섹션별 색상 구분
- ✅ 모바일 반응형 디자인

## 📖 콘텐츠 출처

이 교안은 [AIxFunda Newsletter](https://aixfunda.substack.com)의 "RAG Interview Questions and Answers" 자료를 기반으로 제작되었습니다.

**저자:** Kalyan KS
**원본 자료:** 105 RAG Q&A

## 🛠️ 기술 스택

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- 외부 라이브러리 없음 (Zero Dependencies)

## 📂 파일 구조

```
Claude_skill-test-ppt/
├── index.html       # 메인 HTML 파일 (슬라이드 내용)
├── styles.css       # 스타일시트 (디자인)
├── script.js        # JavaScript (네비게이션 로직)
└── README.md        # 사용 설명서
```

## 🎯 학습 목표

이 교안을 완료하면 다음을 이해할 수 있습니다:

- RAG의 필요성과 작동 원리
- RAG 파이프라인의 각 단계 (Retrieval, Augmented, Generation)
- 효과적인 청킹 전략과 선택 기준
- 임베딩, 벡터 데이터베이스, 검색 알고리즘
- 리랭킹의 중요성과 구현 방법
- RAG 시스템 평가를 위한 핵심 메트릭
- 고급 최적화 기법 (HyDE, HyPE, Query Transformation 등)

## 💡 사용 팁

1. **프레젠테이션 모드**: `P` 키를 눌러 컨트롤을 숨기고 깔끔한 프레젠테이션 진행
2. **전체화면**: `F` 키로 전체화면 모드 활성화하여 집중도 향상
3. **자동 저장**: 브라우저를 닫아도 마지막 슬라이드 위치가 자동 저장됨
4. **콘솔 명령**: 개발자 도구에서 `slideShow.goToSlide(10)` 로 특정 슬라이드 이동 가능

## 🤝 기여

개선 제안이나 버그 리포트는 이슈로 등록해주세요.

## 📄 라이선스

교육 목적으로 자유롭게 사용 가능합니다.
원본 콘텐츠의 저작권은 Kalyan KS (AIxFunda)에게 있습니다.

---

**제작일:** 2025
**버전:** 1.0
**문의:** GitHub Issues