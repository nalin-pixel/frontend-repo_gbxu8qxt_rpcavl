import React from 'react'
import { cn } from '../../lib/utils/cn'

export function TrustBadge({ icon: Icon, text, variant = 'pill', className }) {
  const base = 'inline-flex items-center gap-2 border bg-white shadow-sm text-sm text-gray-700'
  const styles = variant === 'pill' ? 'rounded-full px-4 py-2' : 'rounded-md px-3 py-2'
  return (
    <div className={cn(base, styles, className)}>
      {Icon ? <Icon aria-hidden className="h-4 w-4 text-brand-orange" /> : null}
      <span>{text}</span>
    </div>
  )
}

export default TrustBadge
