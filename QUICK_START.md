# 빠른 시작 가이드 🚀

## 1단계: Google Sheets 자동 설정 (5분)

### 자동 설정 스크립트 사용

1. **Google Cloud Console에서 서비스 계정 생성**
   - https://console.cloud.google.com/ 접속
   - 새 프로젝트 생성 → "Google Sheets API" 활성화
   - 서비스 계정 생성 → JSON 키 다운로드
   - 다운로드한 파일을 `google-credentials.json`으로 이름 변경

2. **Google Sheets 생성**
   - https://sheets.google.com/ 접속
   - 새 스프레드시트 생성
   - 첫 번째 행: `이메일 | 전화번호 | 신청일시`
   - 공유 → 서비스 계정 이메일 추가 (JSON 파일의 `client_email`)

3. **환경 변수 자동 생성**
   ```bash
   node setup-google-sheets.js --setup
   ```
   출력된 내용을 `.env.local`에 추가하고, 스프레드시트 ID만 입력하세요.

## 2단계: Vercel 배포 (2분)

### 방법 A: Vercel 웹사이트 사용 (추천)

1. https://vercel.com 접속 → GitHub로 로그인
2. "Add New" → "Project"
3. GitHub 저장소 연결 (또는 파일 업로드)
4. 환경 변수 추가:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
5. "Deploy" 클릭

### 방법 B: Vercel CLI 사용

```bash
# 로그인 (브라우저가 열립니다)
vercel login

# 배포
vercel --prod

# 환경 변수 설정
vercel env add GOOGLE_SERVICE_ACCOUNT_EMAIL
vercel env add GOOGLE_PRIVATE_KEY
vercel env add GOOGLE_SHEET_ID
```

## 완료! 🎉

배포가 완료되면 `https://프로젝트명.vercel.app` 링크가 생성됩니다.
이 링크를 다른 사람에게 공유하면 됩니다!

## 테스트

1. 공개 링크로 접속
2. 사전 신청 폼 제출
3. Google Sheets에서 데이터 확인

