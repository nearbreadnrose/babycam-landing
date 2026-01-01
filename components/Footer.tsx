export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">camsum</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI 기반 베이비캠 영상 요약 서비스로<br />
              부모님의 소중한 순간을 놓치지 않도록 도와드립니다.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#signup-section" className="hover:text-white transition-colors">
                  사전 신청
                </a>
              </li>
              <li>
                <span className="text-gray-500">영상 요약</span>
              </li>
              <li>
                <span className="text-gray-500">위험 감지</span>
              </li>
              <li>
                <span className="text-gray-500">실시간 알림</span>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-white font-semibold mb-4">문의</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                이메일: support@camsum.com
              </li>
              <li className="text-gray-400">
                서비스 문의는 사전 신청 폼을 이용해주세요.
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} camsum. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors text-gray-400">
                이용약관
              </a>
              <a href="#" className="hover:text-white transition-colors text-gray-400">
                개인정보처리방침
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

