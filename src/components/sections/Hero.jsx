import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Menu, ArrowRight, Bot, Users, TrendingUp, Newspaper, BadgeCheck, Star } from 'lucide-react'
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

export default function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-100 to-white">
      {/* Floating subtle circles */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />

      {/* Trust bar */}
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

        {/* Right visual placeholder */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 rounded-xl border bg-white p-4 shadow-xl">
            <div className="h-6 w-full rounded bg-gray-100" />
            <div className="mt-4 grid gap-3">
              <div className="h-4 w-3/4 rounded bg-red-100" />
              <div className="h-4 w-2/3 rounded bg-red-100" />
              <div className="h-4 w-1/2 rounded bg-red-100" />
            </div>
            <div className="mt-6 h-px w-full bg-gray-200" />
            <div className="mt-6 grid gap-3">
              <div className="h-4 w-3/4 rounded bg-green-100" />
              <div className="h-4 w-2/3 rounded bg-green-100" />
              <div className="h-4 w-1/2 rounded bg-green-100" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
