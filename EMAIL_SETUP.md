# 이메일 설정 가이드

사전 신청 정보를 이메일로 받기 위한 설정 방법입니다.

## 1. 환경 변수 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECEIVER_EMAIL=your-email@gmail.com
```

## 2. Gmail 앱 비밀번호 생성 (Gmail 사용 시)

1. Google 계정 설정으로 이동: https://myaccount.google.com/
2. 보안 → 2단계 인증 활성화 (필수)
3. 앱 비밀번호 생성:
   - Google 계정 → 보안 → 앱 비밀번호
   - "메일"과 "기타(맞춤 이름)" 선택
   - 생성된 16자리 비밀번호를 복사
4. `.env.local` 파일의 `EMAIL_PASSWORD`에 붙여넣기

## 3. 환경 변수 설정

- `EMAIL_USER`: 발신자 Gmail 주소
- `EMAIL_PASSWORD`: Gmail 앱 비밀번호 (16자리)
- `RECEIVER_EMAIL`: 신청 정보를 받을 이메일 주소 (보통 본인 이메일)

## 4. 다른 이메일 서비스 사용하기

Gmail 외의 서비스(네이버, 다음 등)를 사용하려면 `app/api/signup/route.ts` 파일의 transporter 설정을 수정하세요.

## 5. 테스트

설정 완료 후 개발 서버를 재시작하고 사전 신청 폼을 제출해보세요.
신청 정보가 CSV 파일로 첨부되어 이메일로 전송됩니다.

