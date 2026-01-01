# Vercel 배포 단계별 가이드

## 1단계: Vercel 프로젝트 생성
1. 브라우저에서 열린 Vercel 페이지에서:
   - "Import Git Repository" 클릭
   - GitHub 계정으로 로그인 (필요시)
   - `nearbreadnrose/babycam-landing` 저장소 선택
   - "Import" 클릭

## 2단계: 프로젝트 설정
- Framework Preset: Next.js (자동 감지됨)
- Root Directory: `./` (기본값)
- Build Command: `npm run build` (기본값)
- Output Directory: `.next` (기본값)

## 3단계: 환경 변수 추가 (중요!)
"Environment Variables" 섹션에서 다음 3개 추가:

### 1. GOOGLE_SERVICE_ACCOUNT_EMAIL
```
babaycam-sheets@babycam-landing.iam.gserviceaccount.com
```

### 2. GOOGLE_PRIVATE_KEY
```
-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5BeHYy9VEG6Tg\nADmL3yeJSjtT5XZBqcBHWZ9HKAcpbTpanYVetrskL5EsBz3loY1iUCktFpvvLi2N\nfAHTwouyLyGXgsRjyQ3BYl/M7CzAgBlsKMgLajcPzod30d4/+zPnmDtV6SAvaCMb\nYOb9WjOxbV8ixgf9/7HBkGHkka2cEgyhHDsnpj/mttVXyxVQvaruLL8LOSEWY8t5\nULpRKfUiaEgaDH15mvD9OOxuiipOLT3Z5HjBMhO/fCnXG9CcoVP2ctnDO4+ftCWf\nnfOH3APVh7o6uKWCElwRjeaQp3R5XfT8AjbIsQlJt9f7XdwsIVqxrWuyaIdUJsno\nVhQiIL8LAgMBAAECggEAHMn4L5jdFjvhlk5ypdDogJ7hnFbtOkpaIL/73evchsBN\nfswDyeOk5XyBRNiGSQoEyxyt9itjwqjswuxeBxUTp3tYlA/vfuyfDKLB7/YlAHmY\n0GYyuj6h/VOlayoR6uKrW4h/CF8TIvfmfobAFQEetKd6phkqJTDOonpUwRE/HN7D\nrfkzmk0TZduvA8kRzx3jQhdFi92km06vR8RfwOqKzXFO7b325onhaWAxwB2xNyGn\n1XJXi0RBHfccDj42ucuqig9s8MsrTS2qjfwWe334rIiDf860hIX8Pq3deGTM6z8E\nKe963k+6IZq+IK8rEhTsU98ShD7o38hseqkemDGcAQKBgQDfDqeRloWWS27Iu1Wr\n4jwWgBriBDoGZYpPfY0xFWRdoQO5/DTnbwkbrJpS3b9/qKzPpIDhAeDtZw2DROyw\nVgI+v9WMjCzuXB1N6hDpsWOiu6651CNGQPjEfKA5DWEIfmTGzJW9kk9YhZVHvTno\nxXyjamjtIPUGF3JHAbs/fjyfVQKBgQDUWTqDlndZEHWVdhjAqDiMqjC8AuZSkQji\nP44O/exk0/eopp+Axf9sqgS/UKv42gyBtlauTRRR8DE199FHCYHJJzwOA04xQVsR\nH7Gcyz7V27E8LNIvGzZ+SwjSCrdK6HbrSF6yK/CbtjjLziQw9aOvSrr2LwFeMMGX\ntdybTUIk3wKBgQCVIe4lJ7cvEkYCjUWtQvgbrxDKNjs5VaBQn0fMHlpZQzMDoT0Z\n0yIKz67qYnoLdxH7TiggyCnDcBgXwPhiuU6M96Nmcb4Eq6+oDSu7oy9TeRpMAiqH\naR8p940EOA69KAxm4hfnhC/qpn11Vm2mVIuNkrKOgG9x4DE2ilDQFa2gdQKBgBCi\nhND2IpdZkLyKqdm90+BBHNw9pell7zo6HFjUT4Z+jHIry2b9G8tZblHGchJmkoA+\n1n+FDkh09oXxyfU0q3QknLHEVIXLRuUKhJFx4pRCR5odMMH78cLnAePibwVxPI+l\n9bUjeA/asIxWs8MaGx6KTicm+4Zzb1cBKi0IWlwlAoGBAKJlorvdWjqu34OYf4ZD\nqevon5B4PRJB0r+BxRQZ96MzPDM3PTfOXNQGvL3V/bzpN+kpqLrec2m1IQp9uVvU\nHU8r7LBtaAalZqRNiOKlgHwcWzywq9kdiCDXVA/72G1YpsNkSoYFGIhhsXR9MGiG\nQzURU8trhbBWpf04lqoOat9P\n-----END PRIVATE KEY-----\n
```

### 3. GOOGLE_SHEET_ID
```
1KILkClX9321w2mQLFKWFD86rPVqyR-B6234kfhp2Jig
```

## 4단계: 배포
- "Deploy" 버튼 클릭
- 배포가 완료되면 공개 링크가 생성됩니다!

## 완료 후
- 공개 링크 예시: `https://babycam-landing.vercel.app`
- 이 링크를 다른 사람에게 공유하면 됩니다!

