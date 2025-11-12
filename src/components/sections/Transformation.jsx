import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, TrendingUp, BadgeCheck, Shield } from 'lucide-react'
import Container from '../ui/Container'
import StatCard from '../ui/StatCard'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Transformation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Container paddingY="large">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fadeUp}
          className="text-4xl font-bold text-gray-900 md:text-5xl"
        >
          From Googled and Ghosted to Googled and Closed
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fadeUp}
          className="mt-3 text-gray-600"
        >
          See what happens when you take control of your online narrative
        </motion.p>
      </div>

      <div className="mt-12 rounded-xl border bg-white p-4 shadow-md">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src="/images/mock-before.png" alt="Before search results" />}
          itemTwo={<ReactCompareSliderImage src="/images/mock-after.png" alt="After search results" />}
          position={50}
          style={{ width: '100%', height: 420 }}
        />

        <div className="pointer-events-none -mt-10 flex justify-center gap-3">
          <StatCard icon={Trophy} number="94%" label="Achieve Page One" />
          <StatCard icon={TrendingUp} number="3.4X" label="Revenue Increase" />
          <StatCard icon={BadgeCheck} number="100%" label="Knowledge Panel Success" />
          <StatCard icon={Shield} number="4,217" label="Negatives Suppressed" />
        </div>
      </div>

      {/* Video testimonial placeholder */}
      <div className="mx-auto mt-12 max-w-3xl text-center">
        <div className="relative overflow-hidden rounded-xl border bg-white shadow">
          <img src="/images/testimonial.jpg" alt="Marcus T., Tech CEO" className="h-64 w-full object-cover" loading="lazy" />
          <button aria-label="Play video" className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/90 text-gray-900 shadow-xl transition hover:scale-105">▶</button>
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
