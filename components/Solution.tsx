export default function Solution() {
  const steps = [
    {
      emoji: '📤',
      number: '1',
      title: '베이비캠 녹화 영상 업로드',
      description: '하루 단위 또는 특정 시간대의 영상을 간단히 업로드하세요. 복잡한 설정은 필요 없어요!',
    },
    {
      emoji: '🤖',
      number: '2',
      title: 'AI가 이벤트 자동 감지',
      description: '울음, 움직임, 사람 등장 등 의미 있는 순간을 AI가 똑똑하게 찾아드려요. 놓치지 않아요!',
    },
    {
      emoji: '✨',
      number: '3',
      title: '요약 영상 자동 생성',
      description: '하루 요약 영상과 이벤트별 클립이 자동으로 만들어져요. 바로 확인하시면 돼요!',
    },
  ]

  return (
    <section id="solution-section" className="py-16 px-4 sm:py-24 bg-gradient-to-b from-warm-50 via-primary-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl">💡</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            간단한 3단계로 해결돼요! 🎉
          </h2>
          <p className="text-gray-600 text-lg">복잡한 건 없어요. 정말 쉬워요!</p>
        </div>
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary-200"
            >
              <div className="flex-shrink-0 flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="text-4xl hidden sm:block">{step.emoji}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl sm:hidden">{step.emoji}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-primary-100 to-warm-100 border-2 border-primary-200 rounded-2xl p-8 text-center shadow-sm">
          <div className="text-4xl mb-4">💕</div>
          <p className="text-xl sm:text-2xl font-bold text-gray-800 leading-relaxed">
            하루 영상을 전부 볼 필요가 없어요!<br />
            <span className="text-primary-600">소중한 순간만</span> 골라서 보시면 돼요 ✨
          </p>
        </div>
      </div>
    </section>
  )
}



