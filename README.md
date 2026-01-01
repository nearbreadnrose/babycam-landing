# 베이비캠 영상 요약 서비스 랜딩 페이지

베이비캠 녹화 영상을 AI가 자동으로 요약해주는 서비스의 검증용 랜딩 페이지입니다.

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/
│   ├── Hero.tsx        # 히어로 섹션
│   ├── Problem.tsx    # 문제 상황 섹션
│   ├── Solution.tsx    # 해결 방식 섹션
│   ├── Example.tsx     # 예시 결과 섹션
│   ├── Pricing.tsx     # 가격 섹션
│   ├── Signup.tsx      # 사전 신청 섹션
│   └── FAQ.tsx         # FAQ 섹션
└── package.json
```

## 주요 기능

- 모바일 퍼스트 반응형 디자인
- 단일 페이지 랜딩 페이지
- 사전 신청 폼 (프론트엔드만)
- FAQ 아코디언



