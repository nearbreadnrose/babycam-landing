# 최종 체크리스트 ✅

## 1. 환경 변수 확인
- [ ] GOOGLE_SERVICE_ACCOUNT_EMAIL 추가됨
- [ ] GOOGLE_PRIVATE_KEY 추가됨
- [ ] GOOGLE_SHEET_ID 추가됨
- [ ] Production, Preview, Development 모두 체크됨

## 2. 재배포 확인
- [ ] Vercel에서 자동 재배포 완료
- [ ] 또는 수동으로 "Redeploy" 클릭
- [ ] 배포 상태: ✅ Ready

## 3. 공개 링크 확인
- [ ] Vercel 프로젝트 페이지에서 공개 링크 확인
- [ ] 링크 예시: `https://babycam-landing-xxx.vercel.app`
- [ ] 링크가 정상적으로 열리는지 확인

## 4. 기능 테스트
- [ ] 랜딩페이지가 정상적으로 표시됨
- [ ] 모든 섹션이 잘 보임 (Hero, Problem, Solution, Example, Pricing, Signup, FAQ)
- [ ] 영상이 정상 재생됨
- [ ] 사전 신청 폼 제출 테스트
- [ ] Google Sheets에 데이터가 추가되는지 확인

## 5. Google Sheets 확인
- [ ] Google Sheets 열기
- [ ] 서비스 계정이 편집자 권한으로 공유되어 있는지 확인
- [ ] 사전 신청 폼 제출 후 데이터가 추가되는지 확인

## 6. 완료!
- [ ] 모든 테스트 통과
- [ ] 공개 링크 준비 완료
- [ ] 다른 사람에게 공유 가능!

---

## 문제 해결

### 사전 신청 폼이 작동하지 않으면:
1. 환경 변수가 제대로 추가되었는지 확인
2. 재배포가 완료되었는지 확인
3. Google Sheets 공유 설정 확인
4. 브라우저 콘솔에서 오류 확인

### Google Sheets에 데이터가 안 들어가면:
1. 서비스 계정 이메일이 편집자 권한으로 공유되어 있는지 확인
2. 스프레드시트 ID가 올바른지 확인
3. Vercel 로그에서 오류 확인

