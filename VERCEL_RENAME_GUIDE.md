# Vercel 프로젝트 이름 변경 가이드

## 회사명에 맞춰 URL 변경하기

### 방법 1: Vercel 대시보드에서 변경 (가장 쉬움)

1. **Vercel 대시보드 접속**
   - https://vercel.com/dashboard
   - 로그인

2. **프로젝트 선택**
   - 현재 프로젝트: `babycam-landing` (또는 다른 이름)
   - 프로젝트 클릭

3. **Settings 탭 클릭**
   - 상단 메뉴에서 "Settings" 선택

4. **프로젝트 이름 변경**
   - "General" 섹션으로 스크롤
   - "Project Name" 찾기
   - 현재 이름을 `camsum` 또는 `camsum-landing`으로 변경
   - "Save" 클릭

5. **자동 재배포**
   - 이름 변경 시 자동으로 재배포됩니다
   - 새로운 URL이 생성됩니다

### 변경 후 URL

- **기존**: `https://babycam-landing.vercel.app`
- **변경**: `https://camsum.vercel.app` (또는 `https://camsum-landing.vercel.app`)

### 방법 2: 커스텀 도메인 설정 (더 전문적)

1. **Vercel 대시보드 → Settings → Domains**
2. **도메인 추가**
   - `camsum.com` 또는 `www.camsum.com` 입력
   - DNS 설정 안내에 따라 도메인 연결

### 주의사항

- 프로젝트 이름은 소문자와 하이픈(-)만 사용 가능
- 공백이나 특수문자는 사용 불가
- 이름 변경 후 기존 URL은 자동으로 리다이렉트됩니다

### URL 단축 서비스 업데이트

프로젝트 이름을 변경한 후:
1. URL 단축 서비스에서 새 URL로 업데이트
2. 또는 원본 Vercel URL을 직접 사용

