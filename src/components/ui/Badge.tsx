import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type BadgeTone =
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'accent'

export type BadgeProps = {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

const badgeClasses: Record<BadgeTone, string> = {
  neutral: 'bg-surface-muted text-text-secondary',
  info: 'bg-finance-payment-surface text-feedback-info',
  success: 'bg-finance-savings-surface text-feedback-success',
  warning: 'bg-finance-risk-surface text-feedback-warning',
  error: 'bg-[color-mix(in_srgb,var(--token-color-feedback-error)_12%,white)] text-feedback-error',
  accent:
    'bg-finance-down-payment-surface text-finance-down-payment',
}

export function Badge({
  children,
  className,
  tone = 'neutral',
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex min-h-24 items-center rounded-full px-10 text-caption font-medium',
        badgeClasses[tone],
        className
      )}
    >
      {children}
    </span>
  )
}
