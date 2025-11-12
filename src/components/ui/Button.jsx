import React from 'react'
import { cn } from '../../lib/utils/cn'

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variants = {
  primary:
    'bg-brand-orange text-white rounded-lg shadow-md hover:shadow-xl hover:brightness-110 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-orange',
  secondary:
    'bg-white text-brand-orange border border-brand-orange rounded-lg shadow-sm hover:bg-orange-50 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-orange',
  ghost:
    'bg-transparent text-brand-orange hover:bg-orange-50 rounded-lg transition-colors',
}

export function Button({ as: El = 'a', href, onClick, size = 'md', variant = 'primary', children, className, ariaLabel, icon: Icon, iconRight: IconRight, ...props }) {
  const content = (
    <span className="inline-flex items-center gap-2">
      {Icon ? <Icon aria-hidden className="h-5 w-5" /> : null}
      <span>{children}</span>
      {IconRight ? <IconRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-0.5" /> : null}
    </span>
  )

  const classes = cn('group select-none', variants[variant], sizes[size], className)

  if (El === 'button') {
    return (
      <button onClick={onClick} className={classes} aria-label={ariaLabel} {...props}>
        {content}
      </button>
    )
  }

  return (
    <a href={href} onClick={onClick} className={classes} aria-label={ariaLabel} {...props}>
      {content}
    </a>
  )
}

export default Button
