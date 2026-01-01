/**
 * 빠른 설정 스크립트
 * JSON 파일만 있으면 자동으로 설정합니다
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
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║     빠른 설정 - JSON 파일만 있으면 됩니다!                     ║
╚══════════════════════════════════════════════════════════════╝

1. 다운로드한 JSON 파일 경로를 입력하세요
   (예: C:\\Users\\james\\Downloads\\babycam-landing-xxxxx.json)
   
2. Google Sheets URL을 입력하세요
   (예: https://docs.google.com/spreadsheets/d/여기가_ID/edit)

`);

  // JSON 파일 경로 입력
  let jsonPath = await question('JSON 파일 경로: ');
  jsonPath = jsonPath.trim().replace(/"/g, '');

  if (!fs.existsSync(jsonPath)) {
    console.log('\n❌ 파일을 찾을 수 없습니다. 경로를 확인해주세요.');
    rl.close();
    return;
  }

  // 파일 복사
  const targetPath = path.join(__dirname, 'google-credentials.json');
  fs.copyFileSync(jsonPath, targetPath);
  console.log(`\n✅ JSON 파일을 복사했습니다.`);

  // JSON 읽기
  const credentials = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  console.log(`\n📧 서비스 계정 이메일: ${credentials.client_email}`);

  // Google Sheets URL 입력
  let sheetUrl = await question('\nGoogle Sheets URL: ');
  sheetUrl = sheetUrl.trim();

  // 스프레드시트 ID 추출
  const match = sheetUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (!match) {
    console.log('\n❌ URL 형식이 올바르지 않습니다.');
    console.log('예: https://docs.google.com/spreadsheets/d/여기가_ID/edit');
    rl.close();
    return;
  }

  const sheetId = match[1];
  console.log(`\n✅ 스프레드시트 ID: ${sheetId}`);

  // .env.local 업데이트
  const envPath = path.join(__dirname, '.env.local');
  let envContent = '';

  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
    // 기존 Google 설정 제거
    envContent = envContent.replace(/GOOGLE_SERVICE_ACCOUNT_EMAIL=.*\n/g, '');
    envContent = envContent.replace(/GOOGLE_PRIVATE_KEY=.*\n/g, '');
    envContent = envContent.replace(/GOOGLE_SHEET_ID=.*\n/g, '');
  }

  // 새 설정 추가
  const privateKey = credentials.private_key.replace(/\n/g, '\\n');
  
  envContent += `\n# Google Sheets 설정\n`;
  envContent += `GOOGLE_SERVICE_ACCOUNT_EMAIL=${credentials.client_email}\n`;
  envContent += `GOOGLE_PRIVATE_KEY="${privateKey}"\n`;
  envContent += `GOOGLE_SHEET_ID=${sheetId}\n`;

  fs.writeFileSync(envPath, envContent);

  console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    ✅ 설정 완료!                             ║
╚══════════════════════════════════════════════════════════════╝

다음 단계:

1. Google Sheets 공유 설정:
   - Google Sheets 열기
   - "공유" 버튼 클릭
   - 다음 이메일 추가: ${credentials.client_email}
   - 권한: "편집자" → "전송"

2. 테스트:
   npm run dev
   
   랜딩페이지에서 사전 신청 폼을 제출하고
   Google Sheets에서 데이터가 추가되는지 확인하세요!

3. 배포:
   - QUICK_START.md 파일 참고
   - Vercel에 배포하면 공개 링크 생성

`);

  rl.close();
}

main().catch(console.error);

