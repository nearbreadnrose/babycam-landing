'use client'

import Image from 'next/image'

export default function MainHero() {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup-section')
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-primary-50 via-warm-50 to-white flex items-center relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-20 left-10 text-7xl opacity-5">👶</div>
      <div className="absolute bottom-20 right-20 text-6xl opacity-5">💕</div>
      
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 텍스트 */}
          <div>
            <div className="inline-block mb-6">
              <span className="text-6xl">👶</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
              베이비캠 영상,<br />
              <span className="text-primary-600">하루치를 다 볼 시간</span> 있으세요? 😊
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              <span className="font-semibold text-primary-600">AI가 하루 녹화 영상에서</span><br />
              꼭 확인해야 할 <span className="text-warm-500 font-bold">소중한 순간</span>만 골라드려요 💝
            </p>
            
            {/* 주요 기능 요약 */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-primary-100">
                <div className="text-2xl mb-2">📹</div>
                <p className="text-sm font-semibold text-gray-800">영상 요약</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-primary-100">
                <div className="text-2xl mb-2">⚠️</div>
                <p className="text-sm font-semibold text-gray-800">위험 감지</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-primary-100">
                <div className="text-2xl mb-2">🔔</div>
                <p className="text-sm font-semibold text-gray-800">실시간 알림</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-primary-100">
                <div className="text-2xl mb-2">✨</div>
                <p className="text-sm font-semibold text-gray-800">자동 편집</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToSignup}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-5 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>✨</span>
                <span>무료로 시작하기</span>
              </button>
              <button className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-bold py-5 px-10 rounded-full text-lg transition-all flex items-center justify-center gap-2">
                <span>▶️</span>
                <span>서비스 보기</span>
              </button>
            </div>
          </div>

          {/* 오른쪽: 영상 */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-200">
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
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border-2 border-primary-200">
              <div className="flex items-center gap-3">
                <div className="text-3xl">💖</div>
                <div>
                  <p className="font-bold text-gray-800">1,234명의 엄마들이</p>
                  <p className="text-sm text-gray-600">이미 사용 중이에요!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

