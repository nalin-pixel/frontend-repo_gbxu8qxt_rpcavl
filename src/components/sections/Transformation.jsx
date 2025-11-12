import React, { useRef, useState, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, TrendingUp, BadgeCheck, Shield } from 'lucide-react'
import Container from '../ui/Container'
import StatCard from '../ui/StatCard'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Transformation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [position, setPosition] = useState(52)

  const onInput = (e) => setPosition(Number(e.target.value))

  const handleError = (e) => {
    e.currentTarget.src = '/images/placeholder.svg'
  }

  // Compute dynamic scales so the currently revealed side subtly scales up while the other scales down
  const { beforeScale, afterScale } = useMemo(() => {
    const pct = Math.min(100, Math.max(0, position)) / 100
    const before = 0.9 + 0.15 * pct // 0.9 -> 1.05 as the before side grows
    const after = 0.9 + 0.15 * (1 - pct) // 1.05 -> 0.9 as the before side grows
    return { beforeScale: before, afterScale: after }
  }, [position])

  return (
    <Container paddingY="large">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fadeUp}
          className="md:text-5xl text-4xl font-bold text-gray-900"
        >
          From Googled and Ghosted to Googled and Closed
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fadeUp}
          className="prose-lead mt-3"
        >
          See what happens when you take control of your online narrative
        </motion.p>
      </div>

      {/* Interactive before/after with native scaling feedback */}
      <div className="mt-12 rounded-xl border bg-white p-4 shadow-card">
        {/* Slider header labels for clarity */}
        <div className="mb-3 flex items-center justify-between px-1 text-sm font-semibold uppercase tracking-wide text-gray-700">
          <span>Before</span>
          <span>After</span>
        </div>

        {/* Accessible before/after slider */}
        <div className="relative w-full overflow-hidden rounded-lg bg-gray-50" style={{ height: 480 }}>
          {/* AFTER on the right (base layer) */}
          <div
            className="absolute inset-0"
            style={{ transform: `scale(${afterScale})`, transition: 'transform 300ms ease', willChange: 'transform' }}
            aria-hidden
          >
            <img
              src="/images/article-positive.svg"
              alt="After: optimized search results with positive coverage"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              onError={handleError}
            />
            {/* subtle inner shadow for depth */}
            <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/5" />
          </div>

          {/* BEFORE revealed on the left */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
            aria-hidden
          >
            <div
              className="absolute inset-0"
              style={{ transform: `scale(${beforeScale})`, transition: 'transform 300ms ease', willChange: 'transform' }}
            >
              <img
                src="/images/article-negative.svg"
                alt="Before: search results with negatives and missing authority signals"
                className="h-full w-full object-cover"
                loading="lazy"
                onError={handleError}
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/5" />
            </div>
          </div>

          {/* Enhanced, visible handle with glow and knob */}
          <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `calc(${position}% - 1.5px)` }} aria-hidden>
            {/* vertical divider with glow */}
            <div className="relative h-full w-[3px]">
              <div className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 -mx-2 bg-gradient-to-b from-white/0 via-white/70 to-white/0 blur-sm" />
              <div className="absolute inset-0 -mx-4 bg-brand-orange/10 blur
              "/>
            </div>
            {/* knob */}
            <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-brand-orange shadow-[0_10px_30px_rgba(255,107,53,0.5)] ring-2 ring-white" />
          </div>

          {/* Range control - centered */}
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={onInput}
            aria-label="Compare before and after search results"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={position}
            className="absolute bottom-3 left-1/2 z-20 h-2 w-2/3 -translate-x-1/2 cursor-pointer appearance-none rounded-full bg-white/80 backdrop-blur transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/60"
          />
        </div>

        {/* Separate the KPI strip lower to avoid crowding the slider */}
        <div className="mt-8 flex justify-center gap-3">
          <StatCard icon={Trophy} number="94%" label="Achieve Page One" />
          <StatCard icon={TrendingUp} number="3.4X" label="Revenue Increase" />
          <StatCard icon={BadgeCheck} number="100%" label="Knowledge Panel Success" />
          <StatCard icon={Shield} number="4,217" label="Negatives Suppressed" />
        </div>
      </div>

      {/* Knowledge panel mock placed with a real image, spaced further down for clarity */}
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <div className="relative overflow-hidden rounded-xl border bg-white shadow-card">
          <img
            src="/images/knowledge-panel.svg"
            alt="Google Knowledge Panel mockup"
            className="h-72 w-full object-cover"
            loading="lazy"
            onError={handleError}
          />
        </div>
        <figure className="mt-6">
          <blockquote className="text-lg italic text-gray-800">
            "I was invisible on Google. Six months later, I'm closing $2M deals because they found my Yahoo Finance feature first."
          </blockquote>
          <figcaption className="mt-2 text-sm font-semibold text-gray-700">— Marcus T., Tech CEO</figcaption>
        </figure>
      </div>
    </Container>
  )
}
