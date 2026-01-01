# 간단한 배포 방법 (GitHub 사용)

## 방법 1: GitHub + Vercel 웹사이트 (가장 쉬움)

### 1단계: GitHub 저장소 생성
1. https://github.com/new 접속
2. 저장소 이름: `babycam-landing`
3. Public 또는 Private 선택
4. "Create repository" 클릭

### 2단계: 코드 푸시
터미널에서:
```bash
git remote add origin https://github.com/당신의사용자명/babycam-landing.git
git branch -M main
git push -u origin main
```

### 3단계: Vercel 배포
1. https://vercel.com 접속 → GitHub로 로그인
2. "Add New" → "Project"
3. 방금 만든 저장소 선택
4. 환경 변수 추가:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
5. "Deploy" 클릭

## 방법 2: Netlify 사용 (GitHub 없이도 가능)

1. https://app.netlify.com 접속
2. "Add new site" → "Deploy manually"
3. 프로젝트 폴더를 zip으로 압축
4. 드래그 앤 드롭으로 업로드
5. 환경 변수 설정

## 방법 3: GitHub만 사용 (GitHub Pages)

더 간단하지만 Next.js는 정적 export 필요

