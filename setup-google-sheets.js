/**
 * Google Sheets 자동 설정 스크립트
 * 
 * 이 스크립트는 Google Sheets API 설정을 도와줍니다.
 * 실행 방법: node setup-google-sheets.js
 */

console.log(`
╔══════════════════════════════════════════════════════════════╗
║     Google Sheets 자동 설정 가이드                           ║
╚══════════════════════════════════════════════════════════════╝

다음 단계를 따라주세요:

1단계: Google Cloud Console 설정
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. https://console.cloud.google.com/ 접속
2. 새 프로젝트 생성 (이름: "babycam-landing")
3. API 및 서비스 → 라이브러리 → "Google Sheets API" 검색 → 사용

2단계: 서비스 계정 생성
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. API 및 서비스 → 사용자 인증 정보
2. "+ 사용자 인증 정보 만들기" → "서비스 계정"
3. 서비스 계정 이름: "babycam-sheets" → 만들기
4. 역할은 선택 안 함 → 완료

3단계: 키 생성
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. 생성된 서비스 계정 클릭
2. "키" 탭 → "키 추가" → "새 키 만들기"
3. JSON 선택 → 만들기
4. 다운로드된 JSON 파일을 이 폴더에 "google-credentials.json"으로 저장

4단계: Google Sheets 생성
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. https://sheets.google.com/ 접속
2. 새 스프레드시트 생성
3. 첫 번째 행에 입력: 이메일 | 전화번호 | 신청일시
4. 공유 버튼 → 서비스 계정 이메일 입력 (JSON 파일의 client_email)
5. 권한: 편집자 → 전송

5단계: 환경 변수 설정
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
google-credentials.json 파일과 Google Sheets URL을 준비한 후
다음 명령어를 실행하세요:

node setup-google-sheets.js --setup

또는 수동으로 .env.local 파일에 추가하세요.
`)

// 간단한 설정 자동화
const fs = require('fs')
const path = require('path')

if (process.argv.includes('--setup')) {
  try {
    const credsPath = path.join(__dirname, 'google-credentials.json')
    
    if (!fs.existsSync(credsPath)) {
      console.log('\n❌ google-credentials.json 파일을 찾을 수 없습니다.')
      console.log('3단계를 완료하고 파일을 이 폴더에 저장해주세요.\n')
      process.exit(1)
    }

    const credentials = JSON.parse(fs.readFileSync(credsPath, 'utf8'))
    
    console.log('\n✅ JSON 파일을 읽었습니다.')
    console.log('\n다음 정보를 복사해서 .env.local 파일에 추가하세요:\n')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`GOOGLE_SERVICE_ACCOUNT_EMAIL=${credentials.client_email}`)
    console.log(`GOOGLE_PRIVATE_KEY="${credentials.private_key.replace(/\n/g, '\\n')}"`)
    console.log('GOOGLE_SHEET_ID=여기에_스프레드시트_ID_입력')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('\n💡 Google Sheets URL에서 스프레드시트 ID를 복사하세요:')
    console.log('   https://docs.google.com/spreadsheets/d/여기가_ID/edit\n')
    
  } catch (error) {
    console.error('\n❌ 오류:', error.message)
    process.exit(1)
  }
}

