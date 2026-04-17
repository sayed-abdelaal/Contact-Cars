import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  align?: 'start' | 'center'
  className?: string
}

export function SectionHeader({
  actions,
  align = 'start',
  className,
  description,
  eyebrow,
  title,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-16 md:flex-row md:items-end md:justify-between',
        align === 'center' && 'items-center text-center md:items-end md:text-left',
        className
      )}
    >
      <div className="max-w-container-content-md">
        {eyebrow && (
          <p className="text-caption font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-12 font-display text-h2 font-bold tracking-tight text-text-primary md:text-h1">
          {title}
        </h2>
        {description && (
          <p className="mt-16 text-body-lg text-text-secondary">{description}</p>
        )}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  )
}
