# 배포 가이드 - 공개 링크 만들기

이 랜딩페이지를 다른 사람들이 접속할 수 있는 공개 링크로 만드는 방법입니다.

## 방법 1: Vercel 배포 (추천 - 가장 쉬움)

### 1-1. Vercel 계정 생성
1. [Vercel](https://vercel.com/) 접속
2. GitHub 계정으로 로그인 (또는 이메일로 가입)

### 1-2. 프로젝트 배포
1. Vercel 대시보드 → "Add New" → "Project"
2. GitHub 저장소 연결 (또는 "Import Git Repository")
3. 프로젝트 설정:
   - Framework Preset: Next.js (자동 감지)
   - Root Directory: `./` (기본값)
4. Environment Variables 추가:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
5. "Deploy" 클릭

### 1-3. 배포 완료
- 배포가 완료되면 `https://프로젝트명.vercel.app` 형태의 공개 링크가 생성됩니다
- 이 링크를 다른 사람에게 공유하면 됩니다!

### 1-4. 커스텀 도메인 (선택사항)
- Vercel 대시보드 → Settings → Domains
- 원하는 도메인 추가 가능

## 방법 2: Vercel CLI로 배포

### 2-1. Vercel CLI 설치 (이미 설치됨)
```bash
npm install -g vercel
```

### 2-2. 로그인
```bash
vercel login
```

### 2-3. 배포
```bash
vercel
```

처음 배포 시:
- 프로젝트 설정 질문에 기본값으로 답변
- Production 배포 선택

### 2-4. 환경 변수 설정
```bash
vercel env add GOOGLE_SERVICE_ACCOUNT_EMAIL
vercel env add GOOGLE_PRIVATE_KEY
vercel env add GOOGLE_SHEET_ID
```

각각 입력하라고 하면 값을 입력하세요.

### 2-5. 재배포
```bash
vercel --prod
```

## 배포 전 체크리스트

- [ ] Google Sheets 설정 완료 (GOOGLE_SHEETS_SETUP.md 참고)
- [ ] 환경 변수 준비 완료
- [ ] 로컬에서 테스트 완료
- [ ] `.env.local` 파일은 Git에 커밋하지 않음 (이미 .gitignore에 포함됨)

## 배포 후 확인

1. 공개 링크로 접속 테스트
2. 사전 신청 폼 제출 테스트
3. Google Sheets에 데이터가 추가되는지 확인

## 문제 해결

- **빌드 오류**: `npm run build`로 로컬에서 먼저 테스트
- **환경 변수 오류**: Vercel 대시보드에서 환경 변수 확인
- **Google Sheets 오류**: 서비스 계정 권한 확인

