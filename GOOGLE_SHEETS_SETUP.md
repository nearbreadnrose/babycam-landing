# Google Sheets 연동 설정 가이드

사전 신청 정보가 Google Sheets에 자동으로 저장되도록 설정하는 방법입니다.

## 1. Google Cloud Console 설정

### 1-1. 프로젝트 생성
1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 상단 프로젝트 선택 → "새 프로젝트" 클릭
3. 프로젝트 이름 입력 (예: "베이비캠 랜딩") → "만들기"

### 1-2. Google Sheets API 활성화
1. 왼쪽 메뉴 → "API 및 서비스" → "라이브러리"
2. "Google Sheets API" 검색 → 선택 → "사용" 클릭

### 1-3. 서비스 계정 생성
1. 왼쪽 메뉴 → "API 및 서비스" → "사용자 인증 정보"
2. 상단 "+ 사용자 인증 정보 만들기" → "서비스 계정" 선택
3. 서비스 계정 이름 입력 (예: "babycam-sheets") → "만들기"
4. 역할은 선택 안 해도 됨 → "완료" 클릭

### 1-4. 서비스 계정 키 생성
1. 생성된 서비스 계정 클릭
2. "키" 탭 → "키 추가" → "새 키 만들기"
3. 키 유형: "JSON" 선택 → "만들기"
4. JSON 파일이 자동으로 다운로드됨

### 1-5. 서비스 계정 이메일 확인
- 서비스 계정 페이지에서 "이메일" 주소 복사 (예: `babycam-sheets@프로젝트ID.iam.gserviceaccount.com`)

## 2. Google Sheets 설정

### 2-1. 새 스프레드시트 생성
1. [Google Sheets](https://sheets.google.com/) 접속
2. 새 스프레드시트 생성
3. 첫 번째 행에 헤더 입력: `이메일 | 전화번호 | 신청일시`

### 2-2. 서비스 계정 공유
1. 스프레드시트 우측 상단 "공유" 버튼 클릭
2. 서비스 계정 이메일 주소 입력 (1-5에서 복사한 이메일)
3. 권한: "편집자" 선택 → "전송"

### 2-3. 스프레드시트 ID 확인
- Google Sheets URL에서 ID 복사
  - 예: `https://docs.google.com/spreadsheets/d/여기가_스프레드시트_ID/edit`
  - `d/`와 `/edit` 사이의 긴 문자열이 스프레드시트 ID

## 3. 환경 변수 설정

### 3-1. JSON 키 파일에서 정보 추출
다운로드한 JSON 파일을 열어서 다음 정보 확인:
- `client_email`: 서비스 계정 이메일
- `private_key`: 개인 키 (전체를 복사)

### 3-2. .env.local 파일 업데이트
프로젝트 루트의 `.env.local` 파일에 추가:

```env
# 기존 이메일 설정 (선택사항)
EMAIL_USER=kimdw970428@gmail.com
EMAIL_PASSWORD=rlaeodnjs970428!
RECEIVER_EMAIL=kimdw970428@gmail.com

# Google Sheets 설정 (필수)
GOOGLE_SERVICE_ACCOUNT_EMAIL=서비스계정이메일@프로젝트ID.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...전체 키...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=스프레드시트_ID
```

**중요:**
- `GOOGLE_PRIVATE_KEY`는 큰따옴표로 감싸고, `\n`을 그대로 유지하세요
- JSON 파일의 `private_key` 값을 그대로 복사하세요

## 4. Vercel 배포 시 환경 변수 설정

Vercel에 배포할 때도 환경 변수를 설정해야 합니다:

1. Vercel 대시보드 → 프로젝트 선택
2. Settings → Environment Variables
3. 위의 3개 환경 변수 추가:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`

## 5. 테스트

설정 완료 후:
1. 개발 서버 재시작: `npm run dev`
2. 랜딩페이지에서 사전 신청 폼 제출
3. Google Sheets에서 데이터가 자동으로 추가되는지 확인

## 문제 해결

- **403 오류**: 서비스 계정에 스프레드시트 공유 권한이 없는 경우
- **401 오류**: 환경 변수가 잘못 설정된 경우
- **데이터가 안 들어감**: 스프레드시트 ID가 잘못되었거나 범위가 틀린 경우

