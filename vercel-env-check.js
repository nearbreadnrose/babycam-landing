/**
 * Vercel 환경 변수 확인 스크립트
 * 이 스크립트로 필요한 환경 변수를 확인할 수 있습니다
 */

console.log(`
╔══════════════════════════════════════════════════════════════╗
║     Vercel 환경 변수 확인 체크리스트                          ║
╚══════════════════════════════════════════════════════════════╝

Vercel 프로젝트 페이지에서 다음을 확인하세요:

1. Settings → Environment Variables로 이동

2. 다음 3개 변수가 모두 있는지 확인:
   ✅ GOOGLE_SERVICE_ACCOUNT_EMAIL
   ✅ GOOGLE_PRIVATE_KEY
   ✅ GOOGLE_SHEET_ID

3. 각 변수의 Environment 설정 확인:
   - Production: ✅ 체크
   - Preview: ✅ 체크
   - Development: ✅ 체크

4. 변수 값 확인:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
변수 1: GOOGLE_SERVICE_ACCOUNT_EMAIL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
값: babaycam-sheets@babycam-landing.iam.gserviceaccount.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
변수 2: GOOGLE_PRIVATE_KEY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
값: -----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5BeHYy9VEG6Tg\nADmL3yeJSjtT5XZBqcBHWZ9HKAcpbTpanYVetrskL5EsBz3loY1iUCktFpvvLi2N\nfAHTwouyLyGXgsRjyQ3BYl/M7CzAgBlsKMgLajcPzod30d4/+zPnmDtV6SAvaCMb\nYOb9WjOxbV8ixgf9/7HBkGHkka2cEgyhHDsnpj/mttVXyxVQvaruLL8LOSEWY8t5\nULpRKfUiaEgaDH15mvD9OOxuiipOLT3Z5HjBMhO/fCnXG9CcoVP2ctnDO4+ftCWf\nnfOH3APVh7o6uKWCElwRjeaQp3R5XfT8AjbIsQlJt9f7XdwsIVqxrWuyaIdUJsno\nVhQiIL8LAgMBAAECggEAHMn4L5jdFjvhlk5ypdDogJ7hnFbtOkpaIL/73evchsBN\nfswDyeOk5XyBRNiGSQoEyxyt9itjwqjswuxeBxUTp3tYlA/vfuyfDKLB7/YlAHmY\n0GYyuj6h/VOlayoR6uKrW4h/CF8TIvfmfobAFQEetKd6phkqJTDOonpUwRE/HN7D\nrfkzmk0TZduvA8kRzx3jQhdFi92km06vR8RfwOqKzXFO7b325onhaWAxwB2xNyGn\n1XJXi0RBHfccDj42ucuqig9s8MsrTS2qjfwWe334rIiDf860hIX8Pq3deGTM6z8E\nKe963k+6IZq+IK8rEhTsU98ShD7o38hseqkemDGcAQKBgQDfDqeRloWWS27Iu1Wr\n4jwWgBriBDoGZYpPfY0xFWRdoQO5/DTnbwkbrJpS3b9/qKzPpIDhAeDtZw2DROyw\nVgI+v9WMjCzuXB1N6hDpsWOiu6651CNGQPjEfKA5DWEIfmTGzJW9kk9YhZVHvTno\nxXyjamjtIPUGF3JHAbs/fjyfVQKBgQDUWTqDlndZEHWVdhjAqDiMqjC8AuZSkQji\nP44O/exk0/eopp+Axf9sqgS/UKv42gyBtlauTRRR8DE199FHCYHJJzwOA04xQVsR\nH7Gcyz7V27E8LNIvGzZ+SwjSCrdK6HbrSF6yK/CbtjjLziQw9aOvSrr2LwFeMMGX\ntdybTUIk3wKBgQCVIe4lJ7cvEkYCjUWtQvgbrxDKNjs5VaBQn0fMHlpZQzMDoT0Z\n0yIKz67qYnoLdxH7TiggyCnDcBgXwPhiuU6M96Nmcb4Eq6+oDSu7oy9TeRpMAiqH\naR8p940EOA69KAxm4hfnhC/qpn11Vm2mVIuNkrKOgG9x4DE2ilDQFa2gdQKBgBCi\nhND2IpdZkLyKqdm90+BBHNw9pell7zo6HFjUT4Z+jHIry2b9G8tZblHGchJmkoA+\n1n+FDkh09oXxyfU0q3QknLHEVIXLRuUKhJFx4pRCR5odMMH78cLnAePibwVxPI+l\n9bUjeA/asIxWs8MaGx6KTicm+4Zzb1cBKi0IWlwlAoGBAKJlorvdWjqu34OYf4ZD\nqevon5B4PRJB0r+BxRQZ96MzPDM3PTfOXNQGvL3V/bzpN+kpqLrec2m1IQp9uVvU\nHU8r7LBtaAalZqRNiOKlgHwcWzywq9kdiCDXVA/72G1YpsNkSoYFGIhhsXR9MGiG\nQzURU8trhbBWpf04lqoOat9P\n-----END PRIVATE KEY-----\n

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
변수 3: GOOGLE_SHEET_ID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
값: 1KILkClX9321w2mQLFKWFD86rPVqyR-B6234kfhp2Jig

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. 환경 변수 추가/수정 후:
   - Deployments 탭으로 이동
   - 최신 배포의 "..." 메뉴 클릭
   - "Redeploy" 선택

6. Google Sheets 공유 확인:
   https://docs.google.com/spreadsheets/d/1KILkClX9321w2mQLFKWFD86rPVqyR-B6234kfhp2Jig/edit
   - "공유" 버튼 클릭
   - babaycam-sheets@babycam-landing.iam.gserviceaccount.com
   - 편집자 권한으로 추가되어 있는지 확인

`)

