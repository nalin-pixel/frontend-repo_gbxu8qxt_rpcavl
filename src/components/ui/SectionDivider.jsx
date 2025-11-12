import React from 'react'
import { cn } from '../../lib/utils/cn'

export default function SectionDivider({ className }) {
  return (
    <div className={cn('relative h-12 w-full overflow-hidden', className)} aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-black/5 to-transparent blur-2xl" />
    </div>
  )
}
