'use client'

import MainHero from '@/components/MainHero'
import ValueProp from '@/components/ValueProp'
import SimplePricing from '@/components/SimplePricing'
import Signup from '@/components/Signup'

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainHero />
      <ValueProp />
      <SimplePricing />
      <Signup />
    </main>
  )
}



