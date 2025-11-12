import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Zap, Crown, Check } from 'lucide-react'
import Container from '../ui/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Feature = ({ Icon, title, subtitle, body, bullets }) => (
  <article className="rounded-xl border bg-white p-10 shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl">
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-orange/10">
        <Icon className="h-10 w-10 text-brand-orange" aria-hidden />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <div className="mt-1 text-brand-orange">{subtitle}</div>
      <p className="mt-4 text-gray-600">{body}</p>
      <ul className="mt-6 space-y-2 text-left">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-gray-700">
            <Check className="mt-1 h-5 w-5 text-green-500" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
)

export default function UniqueValue() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Container backgroundColor="gray" paddingY="large">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <motion.h2 initial="hidden" animate={isInView ? 'show' : 'hidden'} variants={fadeUp} className="text-4xl font-bold text-gray-900 md:text-5xl">
          Why Elite Entrepreneurs Choose Us Over Everyone Else
        </motion.h2>
        <motion.p initial="hidden" animate={isInView ? 'show' : 'hidden'} variants={fadeUp} className="mt-3 text-gray-600">
          The only reputation system built by entrepreneurs, for entrepreneurs
        </motion.p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Feature
          Icon={Cpu}
          title="AI-Powered Domination"
          subtitle="The Only Fully-Automated Reputation System"
          body="While others manually post content, our AI engine floods Google, Reddit, YouTube, and social media with 200+ branded posts monthly — all optimized to outrank and outlast competitors."
          bullets={[
            'Mass Posting Engine across 47 platforms',
            'Real-time SERP monitoring & alerts',
            'Automated Knowledge Panel optimization',
            'Phone-farm authentication for maximum reach',
          ]}
        />
        <Feature
          Icon={Zap}
          title="Speed That Matters"
          subtitle="From Damaged to Dominant in 72 Hours"
          body="Most firms take months to see results. Our proprietary press network gets you published on Yahoo Finance, Benzinga, and MarketWatch within 72 hours."
          bullets={[
            '72-hour press placement guarantee',
            '48-hour negative content suppression initiated',
            '30-day Knowledge Panel creation',
            'Real-time ranking dashboards',
          ]}
        />
        <Feature
          Icon={Crown}
          title="Elite-Only Expertise"
          subtitle="Built for High-Stakes Brands"
          body="From $50M CEOs to celebrity entrepreneurs — we handle reputations where failure isn't an option. Our founder built this system for himself before offering it to clients."
          bullets={[
            'Average client: $5M+ annual revenue',
            'NDAs & white-glove discretion standard',
            'Former underground SEO labs → mainstream dominance',
            'White-label solutions for talent agencies',
          ]}
        />
      </div>
    </Container>
  )
}
