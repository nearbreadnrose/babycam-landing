import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: NextRequest) {
  try {
    const { email, phone, babycamType } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: '이메일은 필수입니다.' },
        { status: 400 }
      )
    }

    if (!babycamType) {
      return NextResponse.json(
        { error: '베이비캠 종류는 필수입니다.' },
        { status: 400 }
      )
    }

    // 환경 변수 확인
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.error('환경 변수 누락:', {
        hasEmail: !!serviceAccountEmail,
        hasKey: !!privateKey,
        hasSheetId: !!spreadsheetId,
      })
      return NextResponse.json(
        { 
          error: '서버 설정 오류입니다. 관리자에게 문의해주세요.',
          details: '환경 변수가 설정되지 않았습니다.'
        },
        { status: 500 }
      )
    }

    // 현재 날짜와 시간
    const now = new Date()
    const dateStr = now.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    // Google Sheets API 인증
    let auth
    try {
      // private_key의 \n 처리
      const formattedPrivateKey = privateKey.replace(/\\n/g, '\n')
      
      auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: serviceAccountEmail,
          private_key: formattedPrivateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      })
    } catch (authError) {
      console.error('인증 설정 오류:', authError)
      return NextResponse.json(
        { 
          error: '인증 설정 중 오류가 발생했습니다.',
          details: authError instanceof Error ? authError.message : String(authError)
        },
        { status: 500 }
      )
    }

    const sheets = google.sheets({ version: 'v4', auth })

    // Google Sheets에 데이터 추가
    try {
      // 먼저 시트 정보 확인
      const sheetMetadata = await sheets.spreadsheets.get({
        spreadsheetId,
      })
      
      // 첫 번째 시트 이름 가져오기
      const sheetName = sheetMetadata.data.sheets?.[0]?.properties?.title || 'Sheet1'
      
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:D`, // A열: 이메일, B열: 전화번호, C열: 베이비캠 종류, D열: 신청일시
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[email, phone || '', babycamType, dateStr]],
        },
      })

      console.log('✅ Google Sheets에 데이터 추가 성공:', { email, phone, babycamType, dateStr })

      return NextResponse.json(
        { message: '신청이 완료되었습니다!' },
        { status: 200 }
      )
    } catch (sheetsError: any) {
      console.error('Google Sheets API 오류:', sheetsError)
      console.error('오류 상세:', JSON.stringify(sheetsError, null, 2))
      
      // 구체적인 오류 메시지
      let errorMessage = '데이터 저장 중 오류가 발생했습니다.'
      const errorCode = sheetsError?.code || sheetsError?.response?.status
      
      if (errorCode === 403) {
        errorMessage = 'Google Sheets 접근 권한이 없습니다. 공유 설정을 확인해주세요.'
      } else if (errorCode === 404) {
        errorMessage = 'Google Sheets를 찾을 수 없습니다. 스프레드시트 ID를 확인해주세요.'
      } else if (sheetsError?.message) {
        errorMessage = sheetsError.message
      }

      return NextResponse.json(
        { 
          error: errorMessage,
          details: sheetsError?.message || sheetsError?.response?.data?.error?.message || String(sheetsError),
          code: errorCode,
          fullError: process.env.NODE_ENV === 'development' ? String(sheetsError) : undefined
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('예상치 못한 오류:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    const errorStack = error instanceof Error ? error.stack : undefined
    
    console.error('오류 스택:', errorStack)
    
    return NextResponse.json(
      { 
        error: '신청 처리 중 오류가 발생했습니다.',
        details: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      { status: 500 }
    )
  }
}

