# 커스텀 도메인 설정 가이드

## camsum.com 같은 커스텀 도메인으로 변경하기

### 방법 1: Vercel에서 커스텀 도메인 추가 (추천)

#### 1단계: 도메인 준비
- 도메인 구매 (예: camsum.com)
- 도메인 구매 사이트:
  - [가비아](https://www.gabia.com/)
  - [후이즈](https://whois.co.kr/)
  - [Namecheap](https://www.namecheap.com/)
  - [GoDaddy](https://www.godaddy.com/)

#### 2단계: Vercel에서 도메인 추가
1. **Vercel 대시보드 접속**
   - https://vercel.com/dashboard
   - 프로젝트 선택

2. **Settings → Domains**
   - 상단 메뉴에서 "Settings" 선택
   - "Domains" 섹션으로 스크롤

3. **도메인 추가**
   - "Add" 또는 "Add Domain" 버튼 클릭
   - 도메인 입력: `camsum.com` 또는 `www.camsum.com`
   - "Add" 클릭

4. **DNS 설정 안내 확인**
   - Vercel이 DNS 레코드를 안내합니다
   - 예시:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

#### 3단계: 도메인 제공업체에서 DNS 설정
1. **도메인 관리 페이지 접속**
   - 구매한 도메인 제공업체 사이트 로그인
   - DNS 관리 또는 네임서버 설정 메뉴 찾기

2. **DNS 레코드 추가**
   - Vercel에서 안내한 레코드를 추가
   - A 레코드: 루트 도메인 (camsum.com)
   - CNAME 레코드: www 서브도메인 (www.camsum.com)

3. **저장 및 대기**
   - DNS 변경사항이 전파되는데 24-48시간 소요
   - 보통 몇 시간 내에 적용됩니다

#### 4단계: SSL 인증서 자동 발급
- Vercel이 자동으로 HTTPS 인증서를 발급합니다
- 별도 설정 불필요
- 보통 몇 분 내에 완료됩니다

### 방법 2: Vercel에서 도메인 구매 (더 쉬움)

1. **Vercel 대시보드 → Settings → Domains**
2. **"Buy Domain" 클릭**
3. **원하는 도메인 검색 및 구매**
4. **자동으로 연결됨**

### 변경 후 URL

- **기존**: `https://babycam-landing.vercel.app`
- **변경**: `https://camsum.com` 또는 `https://www.camsum.com`
- **기존 URL**: 자동으로 새 도메인으로 리다이렉트됩니다

### 비용

- 도메인 구매: 연간 약 10,000원 ~ 20,000원 (도메인에 따라 다름)
- Vercel 호스팅: 무료 (Hobby 플랜)
- SSL 인증서: 무료 (자동 발급)

### 주의사항

1. **도메인 구매 필요**: 커스텀 도메인을 사용하려면 도메인을 구매해야 합니다
2. **DNS 전파 시간**: DNS 변경 후 전 세계에 전파되는데 시간이 걸립니다
3. **HTTPS 자동**: Vercel은 자동으로 HTTPS를 설정하므로 별도 작업 불필요

### 빠른 테스트 방법

도메인을 구매하기 전에:
1. Vercel 프로젝트 이름을 `camsum`으로 변경
2. URL이 `https://camsum.vercel.app`로 변경됨
3. 이 방법은 무료이고 즉시 적용됩니다

