import React, { useRef, useState } from 'react'
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
  const [position, setPosition] = useState(50)

  const onInput = (e) => setPosition(Number(e.target.value))

  const handleError = (e) => {
    e.currentTarget.src = '/images/placeholder.svg'
  }

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

      <div className="mt-12 rounded-xl border bg-white p-4 shadow-card">
        {/* Accessible before/after slider */}
        <div className="relative w-full overflow-hidden rounded-lg" style={{ height: 420 }}>
          {/* AFTER on the right (base layer) */}
          <img
            src="/images/mock-after.png"
            alt="After: optimized search results with positive coverage"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            onError={handleError}
          />

          {/* BEFORE revealed on the left */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
            aria-hidden
          >
            <img
              src="/images/mock-before.png"
              alt="Before: search results with negatives and missing authority signals"
              className="h-full w-full object-cover"
              loading="lazy"
              onError={handleError}
            />
          </div>

          {/* Labels */}
          <div className="pointer-events-none absolute left-3 top-3 select-none rounded-md bg-black/60 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">Before</div>
          <div className="pointer-events-none absolute right-3 top-3 select-none rounded-md bg-emerald-600/90 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">After</div>

          {/* Handle */}
          <div
            className="pointer-events-none absolute inset-y-0"
            style={{ left: `calc(${position}% - 1px)` }}
            aria-hidden
          >
            <div className="h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
          </div>

          {/* Range control */}
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
            className="absolute bottom-3 left-1/2 z-10 h-2 w-2/3 -translate-x-1/2 cursor-pointer appearance-none rounded-full bg-white/70 backdrop-blur transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/60"
          />
        </div>

        <div className="pointer-events-none -mt-10 flex justify-center gap-3">
          <StatCard icon={Trophy} number="94%" label="Achieve Page One" />
          <StatCard icon={TrendingUp} number="3.4X" label="Revenue Increase" />
          <StatCard icon={BadgeCheck} number="100%" label="Knowledge Panel Success" />
          <StatCard icon={Shield} number="4,217" label="Negatives Suppressed" />
        </div>
      </div>

      {/* Video testimonial placeholder */}
      <div className="mx-auto mt-12 max-w-3xl text-center">
        <div className="relative overflow-hidden rounded-xl border bg-white shadow-card">
          <img src="/images/testimonial.jpg" alt="Marcus T., Tech CEO" className="h-64 w-full object-cover" loading="lazy" onError={handleError} />
          <button aria-label="Play video" className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/90 text-gray-900 shadow-xl transition-transform duration-300 ease-out hover:scale-105">▶</button>
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
