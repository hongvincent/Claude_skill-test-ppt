# 🔧 GitHub Pages 404 오류 해결 가이드

404 오류가 발생하는 경우 아래 단계를 순서대로 따라해주세요.

## ✅ 체크리스트

### 1단계: GitHub Pages 설정 확인

1. **GitHub 저장소 페이지 접속**
   ```
   https://github.com/hongvincent/Claude_skill-test-ppt
   ```

2. **Settings → Pages 확인**
   - 왼쪽 메뉴에서 `Settings` 클릭
   - 왼쪽 사이드바에서 `Pages` 클릭

3. **올바른 설정 확인**

   **현재 설정해야 하는 값:**
   ```
   Source
   ├─ Branch: claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV
   └─ Folder: / (root)
   ```

4. **잘못된 설정 예시**
   - ❌ Branch: None (선택되지 않음)
   - ❌ Branch: gh-pages (존재하지 않음)
   - ❌ Branch: main (존재하지 않음)
   - ❌ Folder: /docs

5. **올바르게 설정 후 Save 버튼 클릭**

### 2단계: 배포 상태 확인

1. **Actions 탭으로 이동**
   ```
   https://github.com/hongvincent/Claude_skill-test-ppt/actions
   ```

2. **"pages build and deployment" 워크플로우 확인**
   - 녹색 체크마크(✓): 배포 성공
   - 노란색 원(○): 배포 진행 중 (1-2분 대기)
   - 빨간색 X(✗): 배포 실패 (로그 확인 필요)

3. **배포 완료 대기**
   - 최대 2-3분 정도 소요
   - 페이지를 새로고침하여 상태 확인

### 3단계: 올바른 URL 접속

**정확한 URL:**
```
https://hongvincent.github.io/Claude_skill-test-ppt/
```

**주의사항:**
- URL 끝의 `/` (슬래시) 포함 여부 확인
- 대소문자 정확히 입력 (Claude_skill-test-ppt)
- 브라우저 캐시 삭제 후 재접속

### 4단계: 브라우저 캐시 삭제

**Chrome / Edge:**
1. `Ctrl + Shift + Delete` (Windows) 또는 `Cmd + Shift + Delete` (Mac)
2. "캐시된 이미지 및 파일" 체크
3. "인터넷 사용 기록 삭제" 클릭

**Firefox:**
1. `Ctrl + Shift + Delete`
2. "캐시" 체크
3. "지금 삭제" 클릭

**Safari:**
1. `Cmd + Option + E`
2. "개발자용" → "캐시 비우기"

**또는 시크릿/익명 모드로 접속:**
- Chrome: `Ctrl + Shift + N`
- Firefox: `Ctrl + Shift + P`

---

## 🔍 상세 문제 해결

### 문제 A: "There isn't a GitHub Pages site here."

**원인:** GitHub Pages가 아직 활성화되지 않았거나 배포가 진행 중

**해결 방법:**
1. Settings → Pages에서 Source가 올바르게 설정되었는지 확인
2. 2-3분 대기 후 다시 접속
3. Actions 탭에서 배포 상태 확인

### 문제 B: "404 - File not found"

**원인 1:** 잘못된 브랜치 선택

**해결:**
```
Settings → Pages → Source
Branch를 다음으로 변경:
claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV
```

**원인 2:** 폴더 경로 잘못 설정

**해결:**
```
Settings → Pages → Source
Folder를 다음으로 변경:
/ (root)
```

**원인 3:** index.html 파일이 없음

**확인 방법:**
1. 저장소의 브랜치를 `claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV`로 전환
2. 루트 디렉토리에 `index.html` 파일 존재 확인
3. 파일이 없다면 다시 커밋 필요

### 문제 C: HTML은 보이지만 CSS/JS가 로드되지 않음

**증상:**
- 페이지가 스타일 없이 흰 배경에 검정 텍스트로만 표시
- 슬라이드 네비게이션이 작동하지 않음

**원인:** Jekyll이 CSS/JS 파일을 무시함

**해결:** ✅ 이미 해결됨!
- `.nojekyll` 파일이 추가되어 Jekyll 처리가 비활성화됨
- 최신 코드를 푸시했으므로 2-3분 후 자동 해결

### 문제 D: "pages build and deployment" 실패

**확인 방법:**
1. Actions 탭 클릭
2. 실패한 워크플로우 클릭
3. 빨간색 X 표시된 단계 클릭
4. 오류 로그 확인

**일반적인 해결:**
1. Settings → Pages에서 Save 버튼 다시 클릭
2. Actions 탭에서 "Re-run jobs" 클릭

---

## 📋 단계별 완전 재설정 가이드

모든 것이 작동하지 않는 경우, 처음부터 다시 설정:

### Step 1: GitHub Pages 비활성화
1. Settings → Pages
2. Source를 "None" 으로 변경
3. Save 클릭

### Step 2: 1분 대기

### Step 3: GitHub Pages 재활성화
1. Settings → Pages
2. Source 설정:
   - Branch: `claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV`
   - Folder: `/ (root)`
3. Save 클릭

### Step 4: 배포 완료 대기
1. Actions 탭에서 새 배포 확인
2. 2-3분 대기

### Step 5: 접속 테스트
```
https://hongvincent.github.io/Claude_skill-test-ppt/
```

---

## 🆘 여전히 해결되지 않는 경우

### 방법 1: 브랜치 확인

터미널에서 실행:
```bash
git branch -a
```

다음 브랜치가 있는지 확인:
```
claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV
```

### 방법 2: 파일 존재 확인

GitHub 웹에서:
1. 저장소 메인 페이지
2. 브랜치 드롭다운에서 `claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV` 선택
3. 다음 파일들이 보이는지 확인:
   - ✅ index.html
   - ✅ styles.css
   - ✅ script.js
   - ✅ .nojekyll

### 방법 3: GitHub Support

위의 모든 방법이 실패한 경우:
1. GitHub Settings → Pages 스크린샷 촬영
2. Actions 탭의 오류 로그 복사
3. GitHub Support에 문의

---

## ✅ 성공 확인 방법

다음이 모두 확인되면 배포 성공:

1. **Settings → Pages:**
   ```
   ✅ Your site is live at https://hongvincent.github.io/Claude_skill-test-ppt/
   ```

2. **Actions 탭:**
   ```
   ✅ pages build and deployment - 녹색 체크마크
   ```

3. **실제 접속:**
   - URL 접속 시 슬라이드가 정상 표시
   - 보라색 그라디언트 배경 확인
   - 키보드 화살표로 슬라이드 이동 가능

---

## 📞 빠른 체크 명령어

다음 사항을 순서대로 확인하세요:

```
✓ GitHub Pages Source 설정됨?
  → Settings → Pages → Branch 확인

✓ 올바른 브랜치 선택됨?
  → claude/create-web-slides-011CUKprwMMoLSHdiR2FKFzV

✓ 폴더가 / (root)로 설정됨?
  → Folder: / (root)

✓ 배포가 완료됨?
  → Actions 탭에서 녹색 체크마크 확인

✓ 브라우저 캐시 삭제함?
  → Ctrl+Shift+Delete

✓ 올바른 URL 접속?
  → https://hongvincent.github.io/Claude_skill-test-ppt/
```

---

**마지막 업데이트:** 2025-10-21
**상태:** .nojekyll 파일 추가 완료 ✅
