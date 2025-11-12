import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, DollarSign, Sword, Timer } from 'lucide-react'
import Container from '../ui/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ProblemAgitation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const cards = [
    {
      icon: Search,
      title: '217 People Googled You This Month',
      body: 'Before investing. Before hiring. Before saying yes. What did they find?',
    },
    {
      icon: DollarSign,
      title: 'One Negative Result = $127K Lost Revenue',
      body: "MIT research: 68% of deals die before the first call because of what Google showed them.",
    },
    {
      icon: Sword,
      title: 'Your Competitors Own Page One',
      body: "While you're invisible or tarnished, they're capturing YOUR clients with branded authority content.",
    },
    {
      icon: Timer,
      title: 'Every Week You Wait = 45 Lost Opportunities',
      body: "That's $5,400,000 in potential revenue slipping through your fingers annually.",
    },
  ]

  return (
    <Container backgroundColor="gray" paddingY="large">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fadeUp}
          className="text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Google Is Writing Your Story Right Now — And It's Not the One You Want
        </motion.h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => {
          const Icon = card.icon
          return (
            <motion.article
              key={card.title}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              variants={fadeUp}
              transition={{ delay: 0.1 * i }}
              className="rounded-xl border bg-white p-8 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-center">
                {Icon ? <Icon aria-hidden className="h-16 w-16 text-brand-orange" /> : null}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.body}</p>
            </motion.article>
          )
        })}
      </div>

      <div className="mt-10 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fadeUp}
          className="text-2xl font-bold text-brand-orange md:text-3xl"
        >
          Opportunities Lost Today: <span id="opportunities-counter">11</span>
        </motion.div>
      </div>

      {/* Counter animation */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(){
          const el = document.getElementById('opportunities-counter');
          if(!el) return;
          let n = 11;
          setInterval(()=>{ n += 1; el.textContent = String(n); }, 3000);
        })();
      `,
        }}
      />
    </Container>
  )
}
