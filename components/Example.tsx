export default function Example() {
  const examples = [
    {
      emoji: '😢',
      time: '14:32',
      event: '울음 감지',
      duration: '20초',
      description: '아기가 깨어서 우는 순간을 포착했어요',
      video: '/crying-demo.mp4',
    },
    {
      emoji: '👶',
      time: '16:10',
      event: '움직임 감지',
      duration: '15초',
      description: '아기가 뒤집거나 움직이는 모습이에요',
      video: '/movement-demo.mp4',
    },
    {
      emoji: '📹',
      time: '하루 요약',
      event: '전체 요약',
      duration: '1분 30초',
      description: '하루의 모든 중요한 순간을 한눈에!',
      video: '/demo-video.mp4',
    },
  ]

  return (
    <section className="py-16 px-4 sm:py-24 bg-gradient-to-b from-white to-mint-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl">🎬</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            이렇게 요약돼요! 👀
          </h2>
          <p className="text-gray-600 text-lg">실제로 이렇게 만들어져요</p>
        </div>
        <div className="space-y-6 mb-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-white border-2 border-primary-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{example.emoji}</span>
                    <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full border border-primary-200">
                      {example.time}
                    </span>
                    <span className="text-xl font-bold text-gray-800">
                      {example.event}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{example.description}</p>
                  {example.video ? (
                    <div className="rounded-xl overflow-hidden border-2 border-primary-200 shadow-lg">
                      <video
                        className="w-full h-auto"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={example.video} type="video/mp4" />
                        브라우저가 비디오 태그를 지원하지 않습니다.
                      </video>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-primary-50 to-warm-50 rounded-xl h-40 sm:h-48 flex items-center justify-center border-2 border-dashed border-primary-200 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl mb-2">📹</div>
                          <span className="text-gray-500 text-sm font-medium">영상 미리보기</span>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-sm">
                        <span className="text-xs">▶️</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="sm:w-32 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:gap-0">
                  <div className="text-center sm:text-right">
                    <p className="text-xs text-gray-500 mb-1">재생 시간</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⏱️</span>
                      <p className="text-2xl font-bold text-primary-600">
                        {example.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-mint-100 to-primary-100 border-2 border-mint-200 rounded-2xl p-8 text-center shadow-sm">
          <div className="text-4xl mb-4">💖</div>
          <p className="text-gray-700 leading-relaxed text-lg">
            부모님께서는 <span className="font-bold text-primary-600">빠르게 확인</span>하고{' '}
            <span className="font-bold text-primary-600">저장</span>할 수 있어요!<br />
            <span className="text-sm text-gray-600 mt-2 block">더 이상 긴 영상을 스크롤할 필요 없어요 ✨</span>
          </p>
        </div>
      </div>
    </section>
  )
}



