import React from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '../ui/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Testimonials() {
  const [ref, setRef] = React.useState(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const handleError = (e) => { e.currentTarget.src = '/images/placeholder.svg' }

  return (
    <Container paddingY="large" className="bg-white">
      <div ref={setRef} className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        {/* Primary testimonial card */}
        <motion.article
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border bg-white shadow-xl"
        >
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="relative">
              <img
                src="/images/testimonial.jpg"
                alt="Client portrait"
                className="h-full w-full object-cover"
                loading="lazy"
                onError={handleError}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" aria-hidden />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">Client Story</p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">“We closed a $2.1M deal within 30 days after our press surge hit page one.”</h3>
              <p className="mt-3 text-gray-700">ProtectMyBrand rebuilt our search presence, placed us on Yahoo Finance and MarketWatch, and turned a skeptical prospect into a signed partner after googling us mid‑call.</p>
              <div className="mt-6 text-sm text-gray-600">— Alisha R., Founder @ NorthPeak Capital</div>
            </div>
          </div>
        </motion.article>

        {/* Secondary proof: article mock cards */}
        <div className="grid grid-cols-1 gap-6">
          <motion.div initial="hidden" animate={isInView ? 'show' : 'hidden'} variants={fadeUp} className="overflow-hidden rounded-xl border bg-white shadow-lg">
            <img src="/images/article-positive.svg" alt="Positive press mock" className="h-40 w-full object-cover" loading="lazy" onError={handleError} />
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-800">Featured on Yahoo Finance</div>
              <p className="mt-1 text-sm text-gray-600">Representative placement used in discovery calls and due diligence.</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" animate={isInView ? 'show' : 'hidden'} variants={fadeUp} className="overflow-hidden rounded-xl border bg-white shadow-lg">
            <img src="/images/article-negative.svg" alt="Suppressed result mock" className="h-40 w-full object-cover" loading="lazy" onError={handleError} />
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-800">Suppressed competitor smear</div>
              <p className="mt-1 text-sm text-gray-600">Visibility reduced across branded queries within 6 weeks.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
