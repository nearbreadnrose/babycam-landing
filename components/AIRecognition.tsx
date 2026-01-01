import Image from 'next/image'

export default function AIRecognition() {
  return (
    <section className="py-16 px-4 sm:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl">🤖</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            AI가 완벽하게 인식하고 정확히 전달해요! 🎯
          </h2>
          <p className="text-gray-600 text-lg">
            최신 AI 기술로 사람과 행동을 정확하게 분석합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* 첫 번째: AI 인식 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">👁️</span>
                <h3 className="text-2xl font-bold text-gray-800">
                  완벽한 AI 인식
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                최신 AI 기술로 <span className="font-bold text-blue-600">사람과 행동을 정확하게</span> 인식합니다.
                울음, 움직임, 위험한 자세 등 모든 것을 놓치지 않아요!
              </p>
            </div>
            <div className="relative w-full h-64 rounded-xl overflow-hidden border-4 border-blue-300 shadow-md">
              <Image
                src="/ai-recognition.jpg"
                alt="AI가 사람과 행동을 인식하는 모습"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                🤖 AI 분석 중
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                <span>사람 감지 정확도 99%+</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                <span>행동 패턴 실시간 분석</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                <span>위험 상황 즉시 감지</span>
              </div>
            </div>
          </div>

          {/* 두 번째: 사용자 전달 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-200 hover:shadow-xl transition-all">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📱</span>
                <h3 className="text-2xl font-bold text-gray-800">
                  정확한 정보 전달
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                AI가 인식한 내용을 <span className="font-bold text-primary-600">정확하고 명확하게</span> 부모님께 전달합니다.
                무엇이 일어났는지, 언제 일어났는지 한눈에 알 수 있어요!
              </p>
            </div>
            <div className="relative w-full h-64 rounded-xl overflow-hidden border-4 border-primary-300 shadow-md">
              <Image
                src="/user-notification.jpg"
                alt="사용자에게 정확히 전달되는 모습"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-2 right-2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                📲 알림 전송
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                <span>실시간 푸시 알림</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                <span>상세한 이벤트 정보</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                <span>즉시 확인 가능한 클립</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-primary-100 border-2 border-blue-200 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">✨</div>
          <p className="text-xl font-bold text-gray-800 mb-2">
            AI가 인식하고, 부모님이 확인하세요!
          </p>
          <p className="text-gray-700 leading-relaxed">
            최신 AI 기술로 <span className="font-bold text-blue-600">완벽하게 인식</span>하고,<br />
            <span className="font-bold text-primary-600">정확하게 전달</span>합니다.<br />
            이제 놓치는 순간이 없어요! 💕
          </p>
        </div>
      </div>
    </section>
  )
}

