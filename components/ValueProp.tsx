import Image from 'next/image'

export default function ValueProp() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            왜 선택할까요?
          </h2>
          <p className="text-xl text-gray-600">
            바쁜 육아 중에도 놓치지 않는 방법
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* 카드 1: 시간 절약 */}
          <div className="bg-gradient-to-br from-primary-50 to-warm-50 rounded-3xl p-8 text-center border-2 border-primary-100 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">시간 절약</h3>
            <p className="text-gray-600 leading-relaxed">
              하루 수 시간 영상을<br />
              <span className="font-bold text-primary-600">3분만에</span> 확인하세요
            </p>
          </div>

          {/* 카드 2: 안전 보호 */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 text-center border-2 border-red-100 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">안전 보호</h3>
            <p className="text-gray-600 leading-relaxed">
              위험한 자세를<br />
              <span className="font-bold text-red-600">즉시 알림</span>으로 대응하세요
            </p>
          </div>

          {/* 카드 3: 마음의 평안 */}
          <div className="bg-gradient-to-br from-mint-50 to-blue-50 rounded-3xl p-8 text-center border-2 border-mint-100 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">마음의 평안</h3>
            <p className="text-gray-600 leading-relaxed">
              놓친 순간 걱정 없이<br />
              <span className="font-bold text-mint-600">안심</span>하고 지내세요
            </p>
          </div>
        </div>

        {/* AI 인식 섹션 - 통합 */}
        <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-3xl p-8 md:p-12 border-2 border-primary-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                AI가 완벽하게 인식하고<br />
                정확히 전달합니다
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                최신 AI 기술로 사람과 행동을 정확하게 분석하고,<br />
                부모님께 <span className="font-bold text-primary-600">실시간으로 알림</span>을 보내드립니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">사람 감지 정확도 99%+</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">위험 상황 즉시 감지</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">실시간 푸시 알림</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden border-2 border-blue-300">
                <Image
                  src="/ai-recognition.jpg"
                  alt="AI 인식"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                  AI 분석
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden border-2 border-primary-300">
                <Image
                  src="/user-notification.jpg"
                  alt="사용자 알림"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs font-bold">
                  알림
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden border-2 border-red-300 col-span-2">
                <Image
                  src="/dangerous-position.jpg"
                  alt="위험한 자세"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                  ⚠ 위험 감지
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

