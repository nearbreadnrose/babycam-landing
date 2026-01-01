# 500 Internal Server Error 해결 가이드

## 현재 상황
- POST /api/signup 요청이 500 오류를 반환
- 서버 측 문제입니다

## 확인해야 할 사항

### 1. Vercel 환경 변수 확인 (가장 중요!)

Vercel 프로젝트 페이지에서:
1. Settings → Environment Variables
2. 다음 3개 변수가 모두 있는지 확인:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
3. 각 변수의 Environment가 Production, Preview, Development 모두 체크되어 있는지 확인

**없으면 추가하고 재배포하세요!**

### 2. Vercel Functions 로그 확인

1. Vercel 프로젝트 페이지
2. "Deployments" 탭 클릭
3. 최신 배포 클릭
4. "Functions" 탭 클릭
5. `/api/signup` 함수 클릭
6. 로그에서 오류 메시지 확인

### 3. Google Sheets 공유 확인

1. Google Sheets 열기:
   https://docs.google.com/spreadsheets/d/1KILkClX9321w2mQLFKWFD86rPVqyR-B6234kfhp2Jig/edit

2. "공유" 버튼 클릭

3. 다음 이메일이 **편집자** 권한으로 추가되어 있는지 확인:
   ```
   babaycam-sheets@babycam-landing.iam.gserviceaccount.com
   ```

4. 없으면 추가:
   - 공유 필드에 이메일 입력
   - 권한: "편집자" 선택
   - "전송" 클릭

### 4. 재배포

환경 변수를 추가하거나 수정한 후:
1. Deployments 탭
2. 최신 배포의 "..." 메뉴
3. "Redeploy" 클릭

## 코드 개선

방금 코드를 개선했습니다:
- 더 자세한 오류 메시지 표시
- 오류 코드 표시
- 환경 변수 검증 강화

GitHub에 푸시했으므로 Vercel에서 자동 재배포가 시작됩니다.

## 재배포 후 테스트

1. 재배포 완료 대기 (몇 분 소요)
2. 공개 링크에서 다시 테스트
3. 이제 더 자세한 오류 메시지가 표시됩니다
4. 오류 메시지를 알려주시면 정확히 해결하겠습니다!

