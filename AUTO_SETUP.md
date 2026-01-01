# 자동 설정 가이드

## Google Sheets 설정을 자동으로 도와주는 스크립트

### 1. Google Cloud Console 설정 (한 번만)

1. **프로젝트 생성**
   - https://console.cloud.google.com/ 접속
   - 상단 프로젝트 선택 → "새 프로젝트"
   - 이름: `babycam-landing` → 만들기

2. **Google Sheets API 활성화**
   - 왼쪽 메뉴 → "API 및 서비스" → "라이브러리"
   - "Google Sheets API" 검색 → 선택 → "사용" 클릭

3. **서비스 계정 생성**
   - "API 및 서비스" → "사용자 인증 정보"
   - "+ 사용자 인증 정보 만들기" → "서비스 계정"
   - 서비스 계정 이름: `babycam-sheets`
   - 역할: 선택 안 함 → "만들기" → "완료"

4. **키 생성 및 다운로드**
   - 생성된 서비스 계정 클릭
   - "키" 탭 → "키 추가" → "새 키 만들기"
   - 키 유형: "JSON" → "만들기"
   - JSON 파일이 자동 다운로드됨
   - **다운로드한 파일을 프로젝트 폴더에 `google-credentials.json`으로 저장**

### 2. Google Sheets 생성

1. **새 스프레드시트 생성**
   - https://sheets.google.com/ 접속
   - "+" 버튼으로 새 스프레드시트 생성
   - 이름: "베이비캠 사전 신청"

2. **헤더 입력**
   - A1: `이메일`
   - B1: `전화번호`
   - C1: `신청일시`

3. **서비스 계정 공유**
   - 우측 상단 "공유" 버튼
   - `google-credentials.json` 파일을 열어서 `client_email` 값 복사
   - 예: `babycam-sheets@프로젝트ID.iam.gserviceaccount.com`
   - 공유 필드에 이메일 입력
   - 권한: "편집자" → "전송"

4. **스프레드시트 ID 복사**
   - Google Sheets URL에서 ID 복사
   - 예: `https://docs.google.com/spreadsheets/d/여기가_ID/edit`
   - `d/`와 `/edit` 사이의 긴 문자열이 ID

### 3. 자동 설정 실행

```bash
node setup-google-sheets.js --setup
```

이 명령어를 실행하면:
- `google-credentials.json` 파일을 읽어서
- 환경 변수 형식으로 출력합니다
- 출력된 내용을 `.env.local` 파일에 추가하세요
- `GOOGLE_SHEET_ID`만 스프레드시트 ID로 변경하면 됩니다

### 4. 완료 확인

```bash
npm run dev
```

개발 서버를 실행하고 사전 신청 폼을 테스트해보세요.
Google Sheets에 데이터가 자동으로 추가됩니다!

