# 배포 후 환경 변수 추가하기

## 방법 1: Vercel 프로젝트 페이지에서

1. **프로젝트 페이지로 이동**
   - Vercel 대시보드에서 방금 배포한 프로젝트 클릭
   - 또는 배포 완료 페이지에서 프로젝트 이름 클릭

2. **Settings 탭 클릭**
   - 상단 메뉴에서 "Settings" 선택

3. **Environment Variables 클릭**
   - 왼쪽 사이드바에서 "Environment Variables" 선택
   - 또는 "Environment Variables" 섹션 찾기

4. **환경 변수 추가**
   - "Add New" 또는 "+" 버튼 클릭
   - 다음 3개 변수 추가:

### 변수 1: GOOGLE_SERVICE_ACCOUNT_EMAIL
```
babaycam-sheets@babycam-landing.iam.gserviceaccount.com
```

### 변수 2: GOOGLE_PRIVATE_KEY
```
-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5BeHYy9VEG6Tg\nADmL3yeJSjtT5XZBqcBHWZ9HKAcpbTpanYVetrskL5EsBz3loY1iUCktFpvvLi2N\nfAHTwouyLyGXgsRjyQ3BYl/M7CzAgBlsKMgLajcPzod30d4/+zPnmDtV6SAvaCMb\nYOb9WjOxbV8ixgf9/7HBkGHkka2cEgyhHDsnpj/mttVXyxVQvaruLL8LOSEWY8t5\nULpRKfUiaEgaDH15mvD9OOxuiipOLT3Z5HjBMhO/fCnXG9CcoVP2ctnDO4+ftCWf\nnfOH3APVh7o6uKWCElwRjeaQp3R5XfT8AjbIsQlJt9f7XdwsIVqxrWuyaIdUJsno\nVhQiIL8LAgMBAAECggEAHMn4L5jdFjvhlk5ypdDogJ7hnFbtOkpaIL/73evchsBN\nfswDyeOk5XyBRNiGSQoEyxyt9itjwqjswuxeBxUTp3tYlA/vfuyfDKLB7/YlAHmY\n0GYyuj6h/VOlayoR6uKrW4h/CF8TIvfmfobAFQEetKd6phkqJTDOonpUwRE/HN7D\nrfkzmk0TZduvA8kRzx3jQhdFi92km06vR8RfwOqKzXFO7b325onhaWAxwB2xNyGn\n1XJXi0RBHfccDj42ucuqig9s8MsrTS2qjfwWe334rIiDf860hIX8Pq3deGTM6z8E\nKe963k+6IZq+IK8rEhTsU98ShD7o38hseqkemDGcAQKBgQDfDqeRloWWS27Iu1Wr\n4jwWgBriBDoGZYpPfY0xFWRdoQO5/DTnbwkbrJpS3b9/qKzPpIDhAeDtZw2DROyw\nVgI+v9WMjCzuXB1N6hDpsWOiu6651CNGQPjEfKA5DWEIfmTGzJW9kk9YhZVHvTno\nxXyjamjtIPUGF3JHAbs/fjyfVQKBgQDUWTqDlndZEHWVdhjAqDiMqjC8AuZSkQji\nP44O/exk0/eopp+Axf9sqgS/UKv42gyBtlauTRRR8DE199FHCYHJJzwOA04xQVsR\nH7Gcyz7V27E8LNIvGzZ+SwjSCrdK6HbrSF6yK/CbtjjLziQw9aOvSrr2LwFeMMGX\ntdybTUIk3wKBgQCVIe4lJ7cvEkYCjUWtQvgbrxDKNjs5VaBQn0fMHlpZQzMDoT0Z\n0yIKz67qYnoLdxH7TiggyCnDcBgXwPhiuU6M96Nmcb4Eq6+oDSu7oy9TeRpMAiqH\naR8p940EOA69KAxm4hfnhC/qpn11Vm2mVIuNkrKOgG9x4DE2ilDQFa2gdQKBgBCi\nhND2IpdZkLyKqdm90+BBHNw9pell7zo6HFjUT4Z+jHIry2b9G8tZblHGchJmkoA+\n1n+FDkh09oXxyfU0q3QknLHEVIXLRuUKhJFx4pRCR5odMMH78cLnAePibwVxPI+l\n9bUjeA/asIxWs8MaGx6KTicm+4Zzb1cBKi0IWlwlAoGBAKJlorvdWjqu34OYf4ZD\nqevon5B4PRJB0r+BxRQZ96MzPDM3PTfOXNQGvL3V/bzpN+kpqLrec2m1IQp9uVvU\nHU8r7LBtaAalZqRNiOKlgHwcWzywq9kdiCDXVA/72G1YpsNkSoYFGIhhsXR9MGiG\nQzURU8trhbBWpf04lqoOat9P\n-----END PRIVATE KEY-----\n
```

### 변수 3: GOOGLE_SHEET_ID
```
1KILkClX9321w2mQLFKWFD86rPVqyR-B6234kfhp2Jig
```

5. **재배포**
   - 환경 변수 추가 후 자동으로 재배포되거나
   - "Deployments" 탭에서 최신 배포의 "..." 메뉴 → "Redeploy" 클릭

## 방법 2: 배포 완료 페이지에서

배포가 완료된 페이지에 있다면:
1. "Go to Dashboard" 또는 프로젝트 이름 클릭
2. 위의 방법 1을 따라 진행

## 중요 사항

- 환경 변수는 **Production, Preview, Development** 모두에 적용되도록 설정하세요
- 각 변수 추가 시 "Environment" 선택에서 "Production", "Preview", "Development" 모두 체크

## 확인

환경 변수 추가 후:
1. 사전 신청 폼 테스트
2. Google Sheets에서 데이터 확인
3. 정상 작동하면 완료!

