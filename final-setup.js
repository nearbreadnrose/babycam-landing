/**
 * 최종 설정 스크립트
 * JSON 파일 경로만 입력하면 자동으로 모든 설정 완료
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  const SHEET_ID = '1KILkClX9321w2mQLFKWFD86rPVqyR-B6234kfhp2Jig';

  console.log(`
╔══════════════════════════════════════════════════════════════╗
║     최종 설정 - 거의 다 왔습니다!                              ║
╚══════════════════════════════════════════════════════════════╝

스프레드시트 ID: ${SHEET_ID}
✅ 확인 완료!

이제 JSON 파일 경로만 입력하세요:
(예: C:\\Users\\james\\Downloads\\babycam-landing-xxxxx.json)

`);

  // JSON 파일 경로 입력
  let jsonPath = await question('JSON 파일 경로: ');
  jsonPath = jsonPath.trim().replace(/"/g, '').replace(/'/g, '');

  if (!fs.existsSync(jsonPath)) {
    console.log('\n❌ 파일을 찾을 수 없습니다.');
    console.log('경로를 다시 확인해주세요.\n');
    rl.close();
    return;
  }

  console.log('\n✅ JSON 파일을 찾았습니다. 설정 중...\n');

  try {
    // 파일 복사
    const targetPath = path.join(__dirname, 'google-credentials.json');
    fs.copyFileSync(jsonPath, targetPath);
    console.log('✅ JSON 파일 복사 완료');

    // JSON 읽기
    const credentials = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
    console.log(`✅ 서비스 계정 이메일: ${credentials.client_email}`);

    // .env.local 업데이트
    const envPath = path.join(__dirname, '.env.local');
    let envContent = '';

    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
      // 기존 Google 설정 제거
      envContent = envContent.replace(/# Google Sheets 설정[\s\S]*?GOOGLE_SHEET_ID=.*\n/g, '');
      envContent = envContent.replace(/GOOGLE_SERVICE_ACCOUNT_EMAIL=.*\n/g, '');
      envContent = envContent.replace(/GOOGLE_PRIVATE_KEY=.*\n/g, '');
      envContent = envContent.replace(/GOOGLE_SHEET_ID=.*\n/g, '');
    }

    // 새 설정 추가
    const privateKey = credentials.private_key.replace(/\n/g, '\\n');
    
    envContent += `\n# Google Sheets 설정\n`;
    envContent += `GOOGLE_SERVICE_ACCOUNT_EMAIL=${credentials.client_email}\n`;
    envContent += `GOOGLE_PRIVATE_KEY="${privateKey}"\n`;
    envContent += `GOOGLE_SHEET_ID=${SHEET_ID}\n`;

    fs.writeFileSync(envPath, envContent);
    console.log('✅ .env.local 파일 업데이트 완료');

    console.log(`
╔══════════════════════════════════════════════════════════════╗
║                  🎉 설정 완료!                              ║
╚══════════════════════════════════════════════════════════════╝

마지막 단계: Google Sheets 공유 설정

1. Google Sheets 열기:
   https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit

2. "공유" 버튼 클릭

3. 다음 이메일 추가:
   ${credentials.client_email}

4. 권한: "편집자" 선택 → "전송"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ 테스트:
   npm run dev
   
   랜딩페이지에서 사전 신청 폼을 제출하고
   Google Sheets에서 데이터 확인!

✅ 배포:
   - QUICK_START.md 파일 참고
   - Vercel에 배포하면 공개 링크 생성

`);

  } catch (error) {
    console.error('\n❌ 오류 발생:', error.message);
    console.log('\nJSON 파일 형식이 올바른지 확인해주세요.\n');
  }

  rl.close();
}

main().catch(console.error);

