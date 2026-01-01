import Image from 'next/image'

export default function Safety() {
  return (
    <section className="py-16 px-4 sm:py-24 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl">⚠️</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            위험한 자세도 자동으로 감지해요! 🚨
          </h2>
          <p className="text-gray-600 text-lg">
            아이가 위험한 자세를 취할 때 즉시 알림을 보내드려요
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-red-200 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="relative w-full max-w-md h-64 rounded-xl overflow-hidden border-4 border-red-300 shadow-lg">
                <Image
                  src="/dangerous-position.jpg"
                  alt="위험한 자세 예시"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ⚠️ 위험 감지
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
                <h3 className="text-xl font-bold text-red-700 mb-2">
                  이런 순간을 놓치지 마세요!
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  아이가 위험한 자세를 취하면 <span className="font-bold text-red-600">즉시 알림</span>이 
                  부모님께 전송됩니다. 빠르게 대응할 수 있어요! 💕
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔔</span>
                  <div>
                    <p className="font-semibold text-gray-800">실시간 알림</p>
                    <p className="text-sm text-gray-600">위험 감지 즉시 스마트폰으로 알림</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <p className="font-semibold text-gray-800">안전 보호</p>
                    <p className="text-sm text-gray-600">아이의 안전을 지키는 첫 번째 단계</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold text-gray-800">빠른 대응</p>
                    <p className="text-sm text-gray-600">알림을 받으면 바로 확인하고 조치 가능</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-3">💡</div>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            안전은 작은 순간도 놓치면 안 되죠
          </p>
          <p className="text-gray-700">
            베이비캠 요약 서비스는 <span className="font-bold text-red-600">위험한 자세 감지</span> 기능도 포함되어 있어요.<br />
            부모님의 마음이 조금 더 편안해질 거예요 😊
          </p>
        </div>
      </div>
    </section>
  )
}

