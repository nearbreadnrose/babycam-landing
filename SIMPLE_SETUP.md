# 초간단 설정 가이드 (5분 완성) ⚡

## 단계별로 따라하세요 (각 링크 클릭만 하면 됩니다!)

### 1️⃣ 프로젝트 생성 (30초)
👉 [여기 클릭](https://console.cloud.google.com/cloud-resource-manager?project=&folder=&organizationId=)
- "프로젝트 만들기" 클릭
- 이름: `babycam-landing`
- "만들기" 클릭

### 2️⃣ Google Sheets API 활성화 (10초)
👉 [여기 클릭](https://console.cloud.google.com/apis/library/sheets.googleapis.com)
- "사용" 버튼 클릭

### 3️⃣ 서비스 계정 생성 (1분)
👉 [여기 클릭](https://console.cloud.google.com/apis/credentials)
- "+ 사용자 인증 정보 만들기" 클릭
- "서비스 계정" 선택
- 이름: `babycam-sheets`
- "만들기" → "완료"

### 4️⃣ 키 다운로드 (30초)
- 방금 만든 서비스 계정 클릭 (`babycam-sheets@...`)
- "키" 탭 → "키 추가" → "새 키 만들기"
- JSON 선택 → "만들기"
- **다운로드된 파일을 프로젝트 폴더에 `google-credentials.json`으로 저장**

### 5️⃣ Google Sheets 생성 (1분)
👉 [여기 클릭](https://sheets.google.com/)
- "+" 버튼으로 새 스프레드시트 생성
- 이름: "베이비캠 사전 신청"
- 첫 번째 행 입력:
  - A1: `이메일`
  - B1: `전화번호`
  - C1: `신청일시`
- "공유" 버튼 → `google-credentials.json` 파일의 `client_email` 값 입력
- 권한: "편집자" → "전송"

### 6️⃣ 환경 변수 설정 (30초)

터미널에서 실행:
```bash
node auto-setup.js
```

또는 수동으로:

1. `google-credentials.json` 파일 열기
2. `.env.local` 파일에 추가:
```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=여기에_client_email_값
GOOGLE_PRIVATE_KEY="여기에_private_key_값"
GOOGLE_SHEET_ID=여기에_스프레드시트_ID
```

스프레드시트 ID는 Google Sheets URL에서:
`https://docs.google.com/spreadsheets/d/여기가_ID/edit`

### 7️⃣ 완료! 🎉

```bash
npm run dev
```

테스트해보세요!

