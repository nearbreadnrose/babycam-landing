'use client'

import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Safety from '@/components/Safety'
import Solution from '@/components/Solution'
import Example from '@/components/Example'
import Pricing from '@/components/Pricing'
import Signup from '@/components/Signup'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Safety />
      <Solution />
      <Example />
      <Pricing />
      <Signup />
      <FAQ />
    </main>
  )
}



