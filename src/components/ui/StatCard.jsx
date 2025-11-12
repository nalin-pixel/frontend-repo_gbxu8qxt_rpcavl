import React from 'react'
import { cn } from '../../lib/utils/cn'

export function StatCard({ icon: Icon, number, label, trend }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border bg-white/90 backdrop-blur px-4 py-3 shadow">
      {Icon ? <Icon aria-hidden className="h-6 w-6 text-gray-700" /> : null}
      <div className="text-3xl font-bold text-gray-900">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
      {trend ? (
        <span className={cn('text-xs font-medium', trend === 'up' ? 'text-green-600' : 'text-red-600')}>
          {trend === 'up' ? '▲' : '▼'} {trend === 'up' ? 'Improving' : 'Declining'}
        </span>
      ) : null}
    </div>
  )
}

export default StatCard
