'use client'

import { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone }),
      })

      const data = await response.json()

      if (!response.ok) {
        let errorMsg = data.error || '신청 처리 중 오류가 발생했습니다.'
        
        if (data.details) {
          errorMsg += `\n\n상세: ${data.details}`
        }
        
        if (data.code === 403) {
          errorMsg += '\n\n💡 Google Sheets 공유 설정을 확인해주세요.'
        } else if (data.code === 404) {
          errorMsg += '\n\n💡 스프레드시트 ID를 확인해주세요.'
        }
        
        throw new Error(errorMsg)
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : '신청 처리 중 오류가 발생했습니다.')
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-16 px-4 sm:py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-green-50 to-mint-50 border-4 border-green-300 rounded-3xl p-10 shadow-xl">
            <div className="text-6xl mb-6">🎉</div>
            <div className="text-5xl mb-4">✅</div>
            <p className="text-2xl font-bold text-gray-800 mb-3">
              신청이 완료되었어요! 💕
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              출시 전 <span className="font-semibold text-primary-600">우선 안내</span>드릴게요!<br />
              조금만 기다려주세요 😊
            </p>
            <div className="mt-6 text-3xl">💌</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 sm:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="text-5xl">📝</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            사전 신청하기 💖
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            이런 서비스가 필요하셨다면<br />
            <span className="font-semibold text-primary-600">사전 신청</span>으로 먼저 안내받아보세요!<br />
            <span className="text-sm text-gray-500">많은 엄마들이 기다리고 계세요 😊</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary-100">
          <div className="space-y-5 mb-8">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span>📧</span>
                <span>이메일 주소</span>
                <span className="text-primary-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all text-lg"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span>📱</span>
                <span>전화번호</span>
                <span className="text-gray-400 text-xs">(선택사항)</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-1234-5678"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all text-lg"
              />
            </div>
          </div>
          {error && (
            <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">⏳</span>
                <span>처리 중...</span>
              </>
            ) : (
              <>
                <span>✨</span>
                <span>사전 신청하기</span>
                <span>💕</span>
              </>
            )}
          </button>
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-primary-600 mb-2">
              📅 2026년 1월 리뉴얼 후 1월 둘째주 안내 메일 보내드리겠습니다.
            </p>
            <p className="text-xs text-gray-500">
              🔒 개인정보는 안전하게 보관되며, 서비스 안내 목적으로만 사용돼요
            </p>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-warm-50 px-6 py-3 rounded-full border border-warm-200">
            <span className="text-2xl">💬</span>
            <p className="text-sm text-gray-600">
              궁금한 점이 있으시면 언제든 문의해주세요!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



