export default function SimplePricing() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            합리적인 가격으로 시작하세요
          </h2>
          <p className="text-xl text-gray-600">
            부모님들을 위한 특별 가격입니다
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-primary-300 max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                베이비캠 영상 요약
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-bold text-primary-600">12,900</span>
                <span className="text-2xl text-gray-600">원</span>
              </div>
              <p className="text-gray-500">월간 구독</p>
            </div>

            <div className="space-y-4 mb-8 text-left">
              {[
                { text: '하루 녹화 영상 요약' },
                { text: '위험한 자세 실시간 감지 및 알림', highlight: true },
                { text: '이벤트 자동 클립 생성' },
                { text: '영상 다운로드 가능' },
              ].map((item, index) => (
                <div key={index} className={`flex items-center gap-3 ${item.highlight ? 'bg-red-50 border-2 border-red-200 rounded-lg p-3' : ''}`}>
                  <span className="text-primary-600 font-bold">✓</span>
                  <span className={`${item.highlight ? 'font-bold text-red-700' : 'text-gray-700'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-warm-100 to-primary-100 border-2 border-warm-300 rounded-2xl p-5 mb-6">
              <p className="font-bold text-gray-800 mb-2">출시 전 사전 신청 특가</p>
              <p className="text-sm text-gray-600">
                지금 신청하시면 특별 가격으로 이용하실 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

