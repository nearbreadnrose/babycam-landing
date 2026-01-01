export default function Pricing() {
  return (
    <section className="py-16 px-4 sm:py-24 bg-gradient-to-b from-mint-50 via-primary-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl">💰</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            합리적인 가격으로 시작하세요! 💝
          </h2>
          <p className="text-gray-600 text-lg">육아맘들을 위한 특별 가격이에요</p>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="bg-white border-4 border-primary-300 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {/* 장식 요소 */}
            <div className="absolute top-4 right-4 text-3xl opacity-20">✨</div>
            <div className="absolute bottom-4 left-4 text-2xl opacity-20">💕</div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  베이비캠 영상 요약
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  월 구독 플랜
                </h3>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-primary-600">12,900</span>
                  <span className="text-2xl text-gray-600">원</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">월간 구독</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  { icon: '📹', text: '하루 녹화 영상 요약' },
                  { icon: '🎬', text: '이벤트 자동 클립 생성' },
                  { icon: '✂️', text: '중요 장면 자동 편집' },
                  { icon: '💾', text: '영상 다운로드 가능' },
                  { icon: '🔒', text: '안전한 영상 보관' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gradient-to-r from-warm-100 to-primary-100 border-2 border-warm-300 rounded-2xl p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">🎁</span>
                  <p className="font-bold text-gray-800">출시 전 사전 신청 특가!</p>
                </div>
                <p className="text-sm text-gray-600">
                  지금 신청하시면 특별 가격으로 이용하실 수 있어요
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            <span className="text-primary-600 font-semibold">많은 엄마들이</span> 이미 신청하셨어요! 💖
          </p>
        </div>
      </div>
    </section>
  )
}



