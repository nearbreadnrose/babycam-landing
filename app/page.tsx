'use client'

import MainHero from '@/components/MainHero'
import ValueProp from '@/components/ValueProp'
import VideoExamples from '@/components/VideoExamples'
import SimplePricing from '@/components/SimplePricing'
import Signup from '@/components/Signup'

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainHero />
      <ValueProp />
      <VideoExamples />
      <SimplePricing />
      <Signup />
    </main>
  )
}



