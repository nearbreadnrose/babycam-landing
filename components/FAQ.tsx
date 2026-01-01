'use client'

import { useState } from 'react'

interface FAQItem {
  emoji: string
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      emoji: '📹',
      question: '어떤 베이비캠을 지원하나요?',
      answer: '영상 파일 업로드 방식으로 대부분의 베이비캠을 지원해요! 특정 브랜드에 종속되지 않아서 어떤 베이비캠이든 사용하실 수 있어요 😊',
    },
    {
      emoji: '🔒',
      question: '영상은 안전한가요?',
      answer: '네, 안전해요! 영상은 분석 후 일정 기간 내 자동 삭제되며, 개인정보 보호를 최우선으로 생각하고 있어요. 엄마들의 소중한 순간을 안전하게 보관해드려요 💕',
    },
    {
      emoji: '⏰',
      question: '실시간 감시 서비스인가요?',
      answer: '아니에요! 녹화된 영상을 요약해주는 서비스예요. 실시간이 아니라 하루치 영상을 업로드하시면 AI가 중요한 순간만 골라서 요약해드려요 ✨',
    },
    {
      emoji: '💰',
      question: '무료 체험이 가능한가요?',
      answer: '출시 전 사전 신청하시는 분들께는 특별 혜택을 준비하고 있어요! 자세한 내용은 출시 시 안내해드릴게요 💝',
    },
    {
      emoji: '📱',
      question: '모바일에서도 사용할 수 있나요?',
      answer: '네, 물론이에요! 모바일과 태블릿에서도 편리하게 사용하실 수 있도록 최적화되어 있어요. 언제 어디서나 아기의 소중한 순간을 확인하실 수 있어요 📲',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 sm:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl">❓</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            자주 묻는 질문 💬
          </h2>
          <p className="text-gray-600 text-lg">맘카페에서 자주 나오는 질문들이에요</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-primary-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-primary-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-3xl flex-shrink-0">{faq.emoji}</span>
                  <span className="font-semibold text-gray-800 text-lg pr-4">
                    {faq.question}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-gradient-to-r from-primary-50 to-warm-50 border-t-2 border-primary-100">
                  <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-warm-50 border-2 border-warm-200 rounded-2xl px-8 py-6">
            <p className="text-gray-700 mb-2">
              <span className="text-2xl">💌</span>
            </p>
            <p className="text-gray-700 font-semibold">
              더 궁금한 점이 있으시면 언제든 문의해주세요!
            </p>
            <p className="text-sm text-gray-500 mt-2">
              엄마들의 목소리를 소중히 듣고 있어요 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



