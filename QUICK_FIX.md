# 500 오류 빠른 해결 가이드

## 가장 가능성 높은 원인

### 1. 환경 변수가 Vercel에 없음 (90% 확률)

**해결 방법:**
1. Vercel 프로젝트 페이지 → Settings → Environment Variables
2. 다음 3개 변수 추가:

**변수 1: GOOGLE_SERVICE_ACCOUNT_EMAIL**
```
babaycam-sheets@babycam-landing.iam.gserviceaccount.com
```

**변수 2: GOOGLE_PRIVATE_KEY**
```
-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5BeHYy9VEG6Tg\nADmL3yeJSjtT5XZBqcBHWZ9HKAcpbTpanYVetrskL5EsBz3loY1iUCktFpvvLi2N\nfAHTwouyLyGXgsRjyQ3BYl/M7CzAgBlsKMgLajcPzod30d4/+zPnmDtV6SAvaCMb\nYOb9WjOxbV8ixgf9/7HBkGHkka2cEgyhHDsnpj/mttVXyxVQvaruLL8LOSEWY8t5\nULpRKfUiaEgaDH15mvD9OOxuiipOLT3Z5HjBMhO/fCnXG9CcoVP2ctnDO4+ftCWf\nnfOH3APVh7o6uKWCElwRjeaQp3R5XfT8AjbIsQlJt9f7XdwsIVqxrWuyaIdUJsno\nVhQiIL8LAgMBAAECggEAHMn4L5jdFjvhlk5ypdDogJ7hnFbtOkpaIL/73evchsBN\nfswDyeOk5XyBRNiGSQoEyxyt9itjwqjswuxeBxUTp3tYlA/vfuyfDKLB7/YlAHmY\n0GYyuj6h/VOlayoR6uKrW4h/CF8TIvfmfobAFQEetKd6phkqJTDOonpUwRE/HN7D\nrfkzmk0TZduvA8kRzx3jQhdFi92km06vR8RfwOqKzXFO7b325onhaWAxwB2xNyGn\n1XJXi0RBHfccDj42ucuqig9s8MsrTS2qjfwWe334rIiDf860hIX8Pq3deGTM6z8E\nKe963k+6IZq+IK8rEhTsU98ShD7o38hseqkemDGcAQKBgQDfDqeRloWWS27Iu1Wr\n4jwWgBriBDoGZYpPfY0xFWRdoQO5/DTnbwkbrJpS3b9/qKzPpIDhAeDtZw2DROyw\nVgI+v9WMjCzuXB1N6hDpsWOiu6651CNGQPjEfKA5DWEIfmTGzJW9kk9YhZVHvTno\nxXyjamjtIPUGF3JHAbs/fjyfVQKBgQDUWTqDlndZEHWVdhjAqDiMqjC8AuZSkQji\nP44O/exk0/eopp+Axf9sqgS/UKv42gyBtlauTRRR8DE199FHCYHJJzwOA04xQVsR\nH7Gcyz7V27E8LNIvGzZ+SwjSCrdK6HbrSF6yK/CbtjjLziQw9aOvSrr2LwFeMMGX\ntdybTUIk3wKBgQCVIe4lJ7cvEkYCjUWtQvgbrxDKNjs5VaBQn0fMHlpZQzMDoT0Z\n0yIKz67qYnoLdxH7TiggyCnDcBgXwPhiuU6M96Nmcb4Eq6+oDSu7oy9TeRpMAiqH\naR8p940EOA69KAxm4hfnhC/qpn11Vm2mVIuNkrKOgG9x4DE2ilDQFa2gdQKBgBCi\nhND2IpdZkLyKqdm90+BBHNw9pell7zo6HFjUT4Z+jHIry2b9G8tZblHGchJmkoA+\n1n+FDkh09oXxyfU0q3QknLHEVIXLRuUKhJFx4pRCR5odMMH78cLnAePibwVxPI+l\n9bUjeA/asIxWs8MaGx6KTicm+4Zzb1cBKi0IWlwlAoGBAKJlorvdWjqu34OYf4ZD\nqevon5B4PRJB0r+BxRQZ96MzPDM3PTfOXNQGvL3V/bzpN+kpqLrec2m1IQp9uVvU\nHU8r7LBtaAalZqRNiOKlgHwcWzywq9kdiCDXVA/72G1YpsNkSoYFGIhhsXR9MGiG\nQzURU8trhbBWpf04lqoOat9P\n-----END PRIVATE KEY-----\n
```

**변수 3: GOOGLE_SHEET_ID**
```
1KILkClX9321w2mQLFKWFD86rPVqyR-B6234kfhp2Jig
```

3. 각 변수 추가 시 Environment는 모두 체크:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

4. **재배포 필수!**
   - Deployments 탭 → 최신 배포의 "..." → "Redeploy"

### 2. Google Sheets 공유 설정

1. Google Sheets 열기:
   https://docs.google.com/spreadsheets/d/1KILkClX9321w2mQLFKWFD86rPVqyR-B6234kfhp2Jig/edit

2. "공유" 버튼 클릭

3. 다음 이메일 추가:
   ```
   babaycam-sheets@babycam-landing.iam.gserviceaccount.com
   ```

4. 권한: "편집자" 선택 → "전송"

## 확인 방법

환경 변수 추가 후 재배포하면 해결됩니다!

