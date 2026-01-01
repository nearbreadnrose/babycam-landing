export default function VideoExamples() {
  const examples = [
    {
      emoji: '😢',
      title: '울음 감지',
      description: '아기가 깨어서 우는 순간을 포착했어요',
      video: '/crying-demo.mp4',
    },
    {
      emoji: '👶',
      title: '움직임 감지',
      description: '아기가 뒤집거나 움직이는 모습이에요',
      video: '/movement-demo.mp4',
    },
    {
      emoji: '📹',
      title: '하루 요약',
      description: '하루의 모든 중요한 순간을 한눈에!',
      video: '/demo-video.mp4',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl">🎬</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            이렇게 요약돼요! 👀
          </h2>
          <p className="text-xl text-gray-600">
            실제로 이렇게 만들어져요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-100 hover:shadow-xl transition-all"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{example.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {example.title}
                </h3>
                <p className="text-sm text-gray-600">{example.description}</p>
              </div>
              <div className="rounded-xl overflow-hidden border-2 border-primary-200 shadow-md">
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
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-mint-100 to-primary-100 border-2 border-mint-200 rounded-2xl p-8 text-center">
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

