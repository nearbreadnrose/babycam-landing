# 오류 해결 가이드

## 사전 신청 폼 오류 해결

### 1. 환경 변수 확인

Vercel 프로젝트 페이지에서:
1. Settings → Environment Variables
2. 다음 3개 변수가 모두 있는지 확인:
   - GOOGLE_SERVICE_ACCOUNT_EMAIL
   - GOOGLE_PRIVATE_KEY
   - GOOGLE_SHEET_ID

**없으면 추가하고 재배포하세요!**

### 2. 재배포 확인

환경 변수를 추가한 후:
1. Deployments 탭으로 이동
2. 최신 배포의 "..." 메뉴 클릭
3. "Redeploy" 선택
4. 배포 완료 대기

### 3. Google Sheets 공유 확인

1. Google Sheets 열기:
   https://docs.google.com/spreadsheets/d/1KILkClX9321w2mQLFKWFD86rPVqyR-B6234kfhp2Jig/edit

2. "공유" 버튼 클릭
3. 다음 이메일이 편집자 권한으로 추가되어 있는지 확인:
   `babaycam-sheets@babycam-landing.iam.gserviceaccount.com`

4. 없으면 추가:
   - 공유 필드에 이메일 입력
   - 권한: "편집자" 선택
   - "전송" 클릭

### 4. Vercel 로그 확인

1. Vercel 프로젝트 페이지
2. "Deployments" 탭
3. 최신 배포 클릭
4. "Functions" 탭에서 로그 확인
5. 오류 메시지 확인

### 5. 일반적인 오류

#### "환경 변수를 확인해주세요"
- 환경 변수가 제대로 설정되지 않음
- 재배포 필요

#### "The caller does not have permission"
- Google Sheets 공유 설정 문제
- 서비스 계정 이메일을 편집자로 추가

#### "Requested entity was not found"
- 스프레드시트 ID가 잘못됨
- 환경 변수의 GOOGLE_SHEET_ID 확인

### 6. 테스트 방법

1. 공개 링크에서 사전 신청 폼 제출
2. 브라우저 개발자 도구 (F12) → Console 탭에서 오류 확인
3. Network 탭에서 `/api/signup` 요청 확인
4. 응답 메시지 확인

