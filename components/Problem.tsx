export default function Problem() {
  const problems = [
    {
      emoji: '😫',
      title: '영상이 너무 길어서 못 봄',
      description: '하루 수 시간 분량의 녹화 영상을 다 볼 시간이 없어요... 육아에 바쁜데 언제 다 보죠?',
    },
    {
      emoji: '😰',
      title: '알림은 왔는데 확인이 어려움',
      description: '무슨 일이 있었는지, 왜 울었는지 찾기 위해 긴 영상을 뒤져야 해요. 정말 번거롭죠?',
    },
    {
      emoji: '😟',
      title: '중요한 순간을 놓쳤을까 불안함',
      description: '영상은 쌓이기만 하고 확인하지 못해 항상 불안해요. 혹시 놓친 건 아닐까 걱정돼요.',
    },
    {
      emoji: '😤',
      title: '다시 찾으려면 몇 시간짜리 영상 탐색',
      description: '특정 시간대를 찾으려면 전체 영상을 스크롤하며 찾아야 해요. 시간이 너무 아까워요!',
    },
  ]

  return (
    <section className="py-16 px-4 sm:py-24 bg-gradient-to-b from-white to-warm-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-4xl">💭</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            이런 고민 있으신가요? 🤔
          </h2>
          <p className="text-gray-600 text-lg">맘카페에서도 자주 나오는 이야기예요</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white border-2 border-primary-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-primary-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{problem.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-primary-600">많은 엄마들이</span> 같은 고민을 하고 계세요 💕
          </p>
        </div>
      </div>
    </section>
  )
}



