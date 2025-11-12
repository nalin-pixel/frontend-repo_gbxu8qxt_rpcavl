import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion'
import { Phone, Menu, ArrowRight, Bot, Users, TrendingUp, Newspaper, BadgeCheck, Star, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import TrustBadge from '../ui/TrustBadge'

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, delay } },
})

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

// Simple interactive tilt without external deps
function useParallax(ref) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      x.set(px)
      y.set(py)
    }
    const leave = () => {
      x.set(0)
      y.set(0)
    }
    el.addEventListener('mousemove', handle)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', handle)
      el.removeEventListener('mouseleave', leave)
    }
  }, [ref, x, y])

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])
  const translateX = useTransform(x, [-0.5, 0.5], [-10, 10])
  const translateY = useTransform(y, [-0.5, 0.5], [-10, 10])

  return { rotateX, rotateY, translateX, translateY }
}

export default function Hero() {
  const containerRef = useRef(null)
  const { rotateX, rotateY, translateX, translateY } = useParallax(containerRef)
  const prefersReducedMotion = useReducedMotion()

  const handleError = (e) => {
    e.currentTarget.src = '/images/placeholder.svg'
  }

  return (
    <header className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-100 to-white">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />

      {/* Nav */}
      <div className="fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <span className="sr-only">ProtectMyBrand</span>
            <div className="h-8 w-8 rounded-md bg-brand-orange" aria-hidden />
            <span className="text-lg font-semibold text-gray-900">ProtectMyBrand</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-gray-700 hover:text-gray-900">Services</a>
            <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#cases" className="text-sm text-gray-700 hover:text-gray-900">Case Studies</a>
            <a href="#about" className="text-sm text-gray-700 hover:text-gray-900">About</a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+18005551234" className="inline-flex items-center gap-2 text-sm text-gray-800" aria-label="Call now">
              <Phone className="h-4 w-4 text-brand-orange" aria-hidden />
              <span>(800) 555-1234</span>
            </a>
            <Button href="#assessment" size="md">Free Assessment</Button>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <a href="tel:+18005551234" aria-label="Call now">
              <Phone className="h-5 w-5 text-brand-orange" />
            </a>
            <button aria-label="Open menu">
              <Menu className="h-6 w-6 text-gray-900" />
            </button>
          </div>
        </nav>
      </div>

      {/* Content */}
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-6 pb-24 pt-32 md:grid-cols-2 md:gap-16 md:px-8 md:pb-32 md:pt-40">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <motion.h1
            variants={fadeLeft(0.5)}
            initial="hidden"
            animate="show"
            className="max-w-[700px] text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-800 md:text-6xl"
          >
            Your Next $500K Deal Is Being Decided on Google Right Now — And You're Losing
          </motion.h1>
          <motion.p
            variants={fadeLeft(0.7)}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-xl text-gray-700"
          >
            The AI-powered reputation system that turns search results into sales results. Used by 500+ elite entrepreneurs to erase negativity, dominate page one, and build unstoppable authority in 90 days.
          </motion.p>
          <motion.div
            variants={fadeUp(0.9)}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col items-start gap-4"
          >
            <Button href="#assessment" size="lg" iconRight={ArrowRight}>
              Get Your Free Brand Domination Blueprint →
            </Button>
            <a href="#pricing" className="text-base text-gray-800 underline underline-offset-4 hover:text-gray-900">See Pricing & Packages</a>
          </motion.div>

          {/* Trust badges */}
          <div className="mt-10 flex w-full items-center gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <TrustBadge icon={Bot} text="AI-Powered" />
            <TrustBadge icon={Users} text="500+ Elite Clients" />
            <TrustBadge icon={TrendingUp} text="3-5X ROI in 90 Days" />
            <TrustBadge icon={Newspaper} text="Yahoo Finance Featured" />
            <TrustBadge icon={BadgeCheck} text="Knowledge Panel Certified" />
            <TrustBadge icon={Star} text="4.9 ★★★★★" />
          </div>
        </div>

        {/* Right: Enlarged animated, interactive visual resembling a 3D dashboard */}
        <div className="relative hidden md:block">
          {/* Glow ring */}
          <div className="pointer-events-none absolute -inset-8 rounded-[28px] bg-gradient-to-b from-brand-orange/20 to-transparent blur-2xl" aria-hidden />

          <motion.div
            ref={containerRef}
            style={!prefersReducedMotion ? { perspective: 1200 } : undefined}
            className="relative h-[520px] rounded-2xl border bg-white/80 p-3 md:p-5 lg:h-[640px] shadow-2xl backdrop-blur"
            aria-label="Interactive client reputation dashboard"
          >
            {/* Base: 3D dashboard mock image with reputation scores */}
            <motion.div
              style={!prefersReducedMotion ? { rotateX, rotateY } : undefined}
              className="relative h-full w-full overflow-hidden rounded-xl border bg-white shadow-md"
            >
              <img
                src="/images/dashboard-3d.svg"
                alt="3D client dashboard showing reputation scores and growth"
                className="h-full w-full object-cover"
                onError={handleError}
              />
            </motion.div>

            {/* Larger floating cards with real mock assets */}
            <motion.div
              className="absolute -right-6 -top-8 w-56 overflow-hidden rounded-xl border bg-white shadow-xl"
              style={!prefersReducedMotion ? { x: translateX, y: translateY } : undefined}
              animate={prefersReducedMotion ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="/images/knowledge-panel.svg" alt="Knowledge panel" className="h-40 w-full object-cover" onError={handleError} />
              <div className="p-3 text-sm font-semibold text-gray-800">Knowledge Panel</div>
            </motion.div>

            <motion.div
              className="absolute -left-6 bottom-10 w-60 overflow-hidden rounded-xl border bg-white shadow-xl"
              animate={prefersReducedMotion ? {} : { y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <img src="/images/article-positive.svg" alt="Positive press feature" className="h-40 w-full object-cover" onError={handleError} />
              <div className="p-3 text-sm font-semibold text-gray-800">Press Feature</div>
            </motion.div>

            <motion.div
              className="absolute right-12 bottom-[-22px] w-48 overflow-hidden rounded-xl border bg-white shadow-xl"
              animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              <img src="/images/article-negative.svg" alt="Suppressed negative result" className="h-32 w-full object-cover opacity-90" onError={handleError} />
              <div className="p-2 text-xs font-medium text-gray-700">Suppressed</div>
            </motion.div>

            {/* Sparkles accent */}
            <motion.div
              className="absolute -right-3 top-1/2 -translate-y-1/2 text-brand-orange"
              animate={prefersReducedMotion ? {} : { opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
