import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export type SectionProps = {
  children: ReactNode
  className?: string
  tone?: 'default' | 'muted' | 'elevated'
}

const toneClasses = {
  default: '',
  muted: 'rounded-xl border border-border-default bg-surface-muted/70 p-20 md:p-24',
  elevated:
    'rounded-xl border border-border-default bg-surface-primary p-20 shadow-card md:p-24',
}

export function Section({
  children,
  className,
  tone = 'default',
}: SectionProps) {
  return (
    <section className={cn('grid gap-20', toneClasses[tone], className)}>
      {children}
    </section>
  )
}
