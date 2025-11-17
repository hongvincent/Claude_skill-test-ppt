# 🚀 GitHub Pages 배포 가이드

이 문서는 RAG 웹 슬라이드를 GitHub Pages에 배포하는 상세한 단계를 안내합니다.

## 📋 목차

- [방법 1: 현재 브랜치로 즉시 배포](#방법-1-현재-브랜치로-즉시-배포)
- [방법 2: Main 브랜치로 병합 후 배포 (권장)](#방법-2-main-브랜치로-병합-후-배포-권장)
- [배포 확인 및 문제 해결](#배포-확인-및-문제-해결)

---

## 방법 1: 현재 브랜치로 즉시 배포

현재 작업 브랜치를 그대로 사용하여 빠르게 배포하는 방법입니다.

### 단계별 안내

#### Step 1: GitHub 저장소 접속
1. 웹 브라우저에서 GitHub 저장소 페이지로 이동
   ```
   https://github.com/hongvincent/Claude_skill-test-ppt
   ```

#### Step 2: Settings 메뉴 접근
1. 저장소 상단 메뉴에서 **⚙️ Settings** 클릭
2. 왼쪽 사이드바에서 **📄 Pages** 클릭

#### Step 3: GitHub Pages 설정
1. **Source** 섹션 찾기
2. **Branch** 드롭다운 메뉴 클릭
3. 다음 브랜치 선택:
   ```
   claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV
   ```
4. **Folder** 드롭다운에서 `/ (root)` 선택
5. **💾 Save** 버튼 클릭

#### Step 4: 배포 대기
1. 페이지 상단에 "GitHub Pages source saved" 메시지 확인
2. 1-2분 대기 (GitHub가 사이트를 빌드하는 시간)
3. 페이지 새로고침

#### Step 5: 배포 완료 확인
Settings → Pages 페이지에서 다음과 같은 메시지 확인:
```
✅ Your site is live at https://hongvincent.github.io/Claude_skill-test-ppt/
```

#### Step 6: 사이트 접속
위의 URL을 클릭하거나 브라우저 주소창에 입력하여 접속!

---

## 방법 2: Main 브랜치로 병합 후 배포 (권장)

더 깔끔한 관리를 위해 작업을 main 브랜치로 병합한 후 배포하는 방법입니다.

### 단계별 안내

#### Step 1: Pull Request 생성

1. GitHub 저장소 페이지 상단의 **Pull requests** 탭 클릭
2. **New pull request** 버튼 클릭
3. 브랜치 비교 설정:
   - **base**: `main` (또는 `master`)
   - **compare**: `claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV`
4. **Create pull request** 클릭
5. PR 제목과 설명 작성:
   ```
   제목: Add RAG Interactive Slide Presentation

   설명:
   - 35+ interactive slides about RAG
   - Full keyboard navigation
   - Mobile responsive design
   - Based on AIxFunda Newsletter (105 Q&A)
   ```
6. **Create pull request** 클릭

#### Step 2: Pull Request 병합

1. PR 페이지에서 **Merge pull request** 버튼 클릭
2. **Confirm merge** 클릭
3. (선택) **Delete branch** 클릭하여 작업 브랜치 삭제

#### Step 3: GitHub Pages 설정

1. 저장소 **Settings** → **Pages** 이동
2. **Source** 섹션에서:
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
   - **Save** 클릭

#### Step 4: 배포 확인

1. **Actions** 탭 클릭하여 배포 진행 상황 확인
2. "pages build and deployment" 워크플로우가 완료될 때까지 대기
3. Settings → Pages에서 사이트 URL 확인

---

## 배포 확인 및 문제 해결

### ✅ 배포 성공 확인 방법

1. **Settings → Pages**에서 녹색 체크마크와 함께 다음 메시지 확인:
   ```
   ✅ Your site is live at https://hongvincent.github.io/Claude_skill-test-ppt/
   ```

2. **Actions** 탭에서 "pages build and deployment" 워크플로우 성공 확인

3. 실제 URL 접속하여 슬라이드 정상 작동 확인

### 🔍 배포 진행 상황 확인

GitHub Actions 탭에서 실시간 배포 로그 확인:
```
Repository → Actions → pages build and deployment → 최신 워크플로우 클릭
```

### ⚠️ 문제 해결

#### 문제 1: "There isn't a GitHub Pages site here"
**원인**: 배포가 아직 완료되지 않음
**해결**: 2-5분 대기 후 새로고침

#### 문제 2: 404 오류
**원인**: 브랜치나 폴더 설정이 잘못됨
**해결**:
1. Settings → Pages에서 올바른 브랜치 선택 확인
2. Folder가 `/ (root)`로 설정되어 있는지 확인

#### 문제 3: CSS/JS 파일이 로드되지 않음
**원인**: 파일 경로 문제
**해결**:
1. 브라우저 개발자 도구(F12) → Console 탭 확인
2. 404 에러가 있는지 확인
3. (이 프로젝트는 상대 경로 사용으로 문제 없음)

#### 문제 4: 배포가 실패함
**원인**: GitHub Actions 워크플로우 오류
**해결**:
1. Actions 탭에서 실패한 워크플로우 클릭
2. 오류 로그 확인
3. 대부분 자동 재시도로 해결됨

### 📞 추가 도움

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [GitHub Pages 문제 해결 가이드](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

---

## 🎉 배포 완료!

배포가 완료되면 다음 URL로 접속 가능합니다:

```
https://hongvincent.github.io/Claude_skill-test-ppt/
```

### 공유하기

- URL을 복사하여 동료, 학생들과 공유
- QR 코드 생성하여 세미나에서 활용
- 소셜 미디어에 공유

### 업데이트 방법

1. 코드 수정 후 커밋 & 푸시
2. GitHub Pages가 자동으로 재배포 (1-2분 소요)
3. 변경사항이 사이트에 자동 반영

---

**제작:** Claude Code
**날짜:** 2025
**버전:** 1.0
