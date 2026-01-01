/**
 * Google Sheets 자동 설정 도우미
 * 이 스크립트가 가능한 한 많은 것을 자동화합니다.
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

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
║     Google Sheets 자동 설정 도우미                            ║
╚══════════════════════════════════════════════════════════════╝

이 스크립트가 설정을 도와드립니다.
각 단계를 따라주세요.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1단계: Google Cloud Console 설정
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

다음 링크를 브라우저에서 열어주세요:
https://console.cloud.google.com/cloud-resource-manager?project=&folder=&organizationId=

1. "프로젝트 만들기" 클릭
2. 프로젝트 이름: babycam-landing
3. "만들기" 클릭

완료되면 Enter를 누르세요...
`);
  await question('');

  console.log(`
2. Google Sheets API 활성화
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

다음 링크를 열어주세요:
https://console.cloud.google.com/apis/library/sheets.googleapis.com

1. "사용" 버튼 클릭
2. 완료되면 Enter를 누르세요...
`);
  await question('');

  console.log(`
3. 서비스 계정 생성
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

다음 링크를 열어주세요:
https://console.cloud.google.com/apis/credentials

1. "+ 사용자 인증 정보 만들기" 클릭
2. "서비스 계정" 선택
3. 서비스 계정 이름: babycam-sheets
4. "만들기" 클릭
5. 역할은 선택 안 함 → "완료" 클릭

완료되면 Enter를 누르세요...
`);
  await question('');

  console.log(`
4. 키 생성 및 다운로드
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. 방금 만든 서비스 계정 클릭 (babycam-sheets@...)
2. "키" 탭 클릭
3. "키 추가" → "새 키 만들기"
4. 키 유형: JSON 선택
5. "만들기" 클릭
6. JSON 파일이 자동 다운로드됨

다운로드한 JSON 파일의 경로를 입력하세요:
(예: C:\\Users\\james\\Downloads\\babycam-landing-xxxxx.json)
`);
  
  const jsonPath = await question('JSON 파일 경로: ');
  
  if (!fs.existsSync(jsonPath)) {
    console.log('\n❌ 파일을 찾을 수 없습니다. 경로를 확인해주세요.');
    rl.close();
    return;
  }

  // 파일을 프로젝트 폴더로 복사
  const targetPath = path.join(__dirname, 'google-credentials.json');
  fs.copyFileSync(jsonPath, targetPath);
  console.log(`\n✅ 파일을 ${targetPath}로 복사했습니다.`);

  // JSON 파일 읽기
  const credentials = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  
  console.log(`
5. Google Sheets 생성
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

다음 링크를 열어주세요:
https://sheets.google.com/

1. "+" 버튼으로 새 스프레드시트 생성
2. 이름: "베이비캠 사전 신청"
3. 첫 번째 행에 입력:
   A1: 이메일
   B1: 전화번호
   C1: 신청일시

4. 우측 상단 "공유" 버튼 클릭
5. 다음 이메일 주소를 입력하세요:
   ${credentials.client_email}
6. 권한: "편집자" 선택
7. "전송" 클릭

완료되면 Enter를 누르세요...
`);
  await question('');

  console.log(`
6. 스프레드시트 ID 입력
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Google Sheets URL에서 스프레드시트 ID를 복사하세요.
URL 예시: https://docs.google.com/spreadsheets/d/여기가_ID/edit

스프레드시트 ID를 입력하세요:
`);
  
  const sheetId = await question('스프레드시트 ID: ');

  // .env.local 파일 생성/업데이트
  const envPath = path.join(__dirname, '.env.local');
  let envContent = '';
  
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
  }

  // 기존 Google 관련 설정 제거
  envContent = envContent.replace(/GOOGLE_SERVICE_ACCOUNT_EMAIL=.*\n/g, '');
  envContent = envContent.replace(/GOOGLE_PRIVATE_KEY=.*\n/g, '');
  envContent = envContent.replace(/GOOGLE_SHEET_ID=.*\n/g, '');

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

.env.local 파일이 업데이트되었습니다.

다음 단계:
1. 개발 서버 재시작: npm run dev
2. 랜딩페이지에서 사전 신청 폼 테스트
3. Google Sheets에서 데이터 확인

배포하려면:
- QUICK_START.md 파일을 참고하세요
- Vercel에 배포하면 공개 링크가 생성됩니다

`);
  
  rl.close();
}

main().catch(console.error);

