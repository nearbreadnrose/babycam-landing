# 베이비캠 영상 요약 서비스 랜딩 페이지 🎬

베이비캠 녹화 영상을 AI가 자동으로 요약해주는 서비스의 랜딩 페이지입니다.

## 🚀 빠른 시작

### 1. 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 2. Google Sheets 연동 설정

사전 신청 정보를 Google Sheets에 자동 저장하려면:

1. **자동 설정 스크립트 사용** (추천)
   ```bash
   node setup-google-sheets.js
   ```
   자세한 내용은 [AUTO_SETUP.md](./AUTO_SETUP.md) 참고

2. **수동 설정**
   - [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) 참고

### 3. 공개 링크 배포

다른 사람이 접속할 수 있는 공개 링크를 만들려면:

- [QUICK_START.md](./QUICK_START.md) - 빠른 시작 가이드
- [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md) - 상세 배포 가이드

## 📁 프로젝트 구조

```
├── app/
│   ├── api/
│   │   └── signup/
│   │       └── route.ts    # 사전 신청 API (Google Sheets 연동)
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 전역 스타일
├── components/
│   ├── Hero.tsx            # 히어로 섹션
│   ├── Problem.tsx         # 문제 상황 섹션
│   ├── Solution.tsx        # 해결 방식 섹션
│   ├── Example.tsx         # 예시 결과 섹션 (영상 포함)
│   ├── Pricing.tsx         # 가격 섹션
│   ├── Signup.tsx          # 사전 신청 섹션
│   └── FAQ.tsx             # FAQ 섹션
├── public/
│   ├── demo-video.mp4      # 시현 영상
│   ├── crying-demo.mp4      # 울음 감지 영상
│   └── movement-demo.mp4   # 움직임 감지 영상
└── package.json
```

## ✨ 주요 기능

- 🎨 맘카페 스타일의 따뜻한 디자인
- 📱 모바일 퍼스트 반응형 디자인
- 📹 실제 영상 예시
- 📝 사전 신청 폼 (Google Sheets 자동 저장)
- ❓ FAQ 아코디언
- 🔗 공개 링크 배포 지원

## 🛠 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **데이터 저장**: Google Sheets API
- **배포**: Vercel

## 📚 문서

- [QUICK_START.md](./QUICK_START.md) - 빠른 시작 가이드
- [AUTO_SETUP.md](./AUTO_SETUP.md) - Google Sheets 자동 설정
- [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) - Google Sheets 상세 설정
- [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md) - 배포 가이드



