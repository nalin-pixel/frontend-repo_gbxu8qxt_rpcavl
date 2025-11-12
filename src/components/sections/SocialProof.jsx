import React from 'react'
import Container from '../ui/Container'

const logos = [
  { src: '/images/press-forbes.svg', alt: 'Forbes' },
  { src: '/images/press-yahoo.svg', alt: 'Yahoo Finance' },
  { src: '/images/press-marketwatch.svg', alt: 'MarketWatch' },
  { src: '/images/press-benzinga.svg', alt: 'Benzinga' },
  { src: '/images/press-techcrunch.svg', alt: 'TechCrunch' },
]

export default function SocialProof() {
  // Duplicate for seamless loop
  const items = [...logos, ...logos]
  return (
    <Container paddingY="small" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <p className="text-center text-sm font-semibold tracking-wide text-gray-600">As featured in</p>
        <div className="relative mt-6">
          {/* Gradient masks for nicer edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" aria-hidden />

          <div className="overflow-hidden">
            <ul
              className="flex items-center gap-10 pr-10 will-change-transform [animation:scroll-x_30s_linear_infinite] motion-reduce:animate-none"
              aria-label="Featured press logos carousel"
              role="list"
            >
              {items.map((logo, i) => (
                <li key={`${logo.alt}-${i}`} className="shrink-0 opacity-80 transition-opacity hover:opacity-100">
                  <img src={logo.src} alt={logo.alt} className="h-8 w-auto md:h-9" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
