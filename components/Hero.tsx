'use client'

export default function Hero() {
  const scrollToSolution = () => {
    const solutionSection = document.getElementById('solution-section')
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="bg-gradient-to-b from-primary-50 via-warm-50 to-white py-20 px-4 sm:py-28 relative overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">👶</div>
      <div className="absolute top-20 right-20 text-5xl opacity-10">💕</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-10">🌟</div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6">
          <span className="text-5xl sm:text-6xl">👶</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
          <span className="text-primary-600">베이비캠 영상</span>,<br />
          하루치를 다 보고 계신가요? 😊
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
          <span className="font-semibold text-primary-600">AI가 하루 녹화 영상에서</span><br />
          꼭 확인해야 할 <span className="text-warm-500">소중한 순간</span>만 골라드려요 💝
        </p>
        
        {/* 시현 영상 */}
        <div className="mb-10 max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-200">
            <video
              className="w-full h-auto"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              브라우저가 비디오 태그를 지원하지 않습니다.
            </video>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            ✨ 실제 요약 영상 예시
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToSolution}
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            <span>✨</span>
            <span>베이비캠 요약 서비스 미리보기</span>
          </button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-xl">💖</span>
            <span>육아맘들이 선택한 서비스</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span>3분이면 확인 완료</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🔒</span>
            <span>안전한 영상 관리</span>
          </div>
        </div>
      </div>
    </section>
  )
}



