import React from 'react'
import { cn } from '../../lib/utils/cn'

export function Container({ children, backgroundColor = 'white', paddingY = 'large', className }) {
  const bg = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'
  const py = paddingY === 'large' ? 'py-24 md:py-28' : 'py-16 md:py-20'
  return (
    <section className={cn(bg, py, className)}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">{children}</div>
    </section>
  )
}

export default Container
