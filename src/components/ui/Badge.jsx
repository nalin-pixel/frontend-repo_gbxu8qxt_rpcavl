import React from 'react'
import { cn } from '../../lib/utils/cn'

export function Badge({ children, variant = 'pill', className }) {
  const styles = variant === 'pill'
    ? 'rounded-full px-3 py-1'
    : 'rounded-md px-2.5 py-1.5'
  return (
    <span className={cn('inline-flex items-center gap-2 border bg-white shadow-sm text-sm text-gray-700', styles, className)}>
      {children}
    </span>
  )
}

export default Badge
