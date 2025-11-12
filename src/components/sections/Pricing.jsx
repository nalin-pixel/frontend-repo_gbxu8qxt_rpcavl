import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const tiers = [
  {
    name: 'Starter Reputation',
    price: '$2,500/mo',
    tagline: 'For rising founders who need credibility fast',
    features: [
      'Press: 4 placements/mo (Yahoo Finance, Benzinga, Digital Journal, +1)',
      'Knowledge Panel audit + optimization',
      'Negatives monitoring + alerts',
      'Branded content: 20 articles/mo',
      'Monthly reporting',
    ],
  },
  {
    name: 'Dominance Pro',
    highlight: true,
    price: '$6,500/mo',
    tagline: 'Our most popular plan for aggressive growth',
    features: [
      'Press: 10 placements/mo incl. MarketWatch + GlobeNewswire',
      'Knowledge Panel creation in 30 days',
      'Negative suppression campaign (phase 1)',
      'Branded content: 80 articles + 40 socials/mo',
      'Weekly reporting + strategy calls',
    ],
  },
  {
    name: 'Private Client',
    price: 'Custom',
    tagline: 'For high-stakes brands and public figures',
    features: [
      'Press: 20+ premium placements/mo (Forbes Council, Entrepreneur, etc.)',
      'Guaranteed Knowledge Panel + Wikipedia advisory',
      'Full-stack suppression + legal coordination',
      'YouTube/Reddit domination + phone-farm distribution',
      'Dedicated team, daily reporting',
    ],
  },
]

export default function Pricing() {
  return (
    <Container backgroundColor="gray" paddingY="large" className="scroll-mt-24" id="pricing">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Pricing & Packages</h2>
        <p className="mt-3 text-gray-600">Pick a plan that matches your ambition. Cancel anytime.</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`rounded-xl border bg-white p-8 shadow-md ${t.highlight ? 'ring-2 ring-brand-orange' : ''}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
              {t.highlight ? (
                <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-medium text-brand-orange">Most Popular</span>
              ) : null}
            </div>
            <div className="mt-4 text-3xl font-bold text-gray-900">{t.price}</div>
            <p className="mt-1 text-sm text-gray-600">{t.tagline}</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="#assessment" size="md" className="w-full">Get Started</Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
