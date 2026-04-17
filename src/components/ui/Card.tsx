import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

type CardTone = 'default' | 'muted' | 'finance'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode
  description?: ReactNode
  footer?: ReactNode
  selected?: boolean
  interactive?: boolean
  tone?: CardTone
}

const toneClasses: Record<CardTone, string> = {
  default: 'bg-surface-primary',
  muted: 'bg-surface-muted',
  finance:
    'bg-[linear-gradient(180deg,color-mix(in_srgb,var(--token-color-finance-payment-surface)_68%,white)_0%,var(--token-color-surface-primary)_100%)]',
}

export function Card({
  children,
  className,
  description,
  footer,
  interactive = false,
  selected = false,
  title,
  tone = 'default',
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'panel p-20 transition duration-[var(--token-motion-duration-moderate)] ease-standard',
        toneClasses[tone],
        interactive && 'hover:-translate-y-1 hover:shadow-hover',
        selected && 'border-brand-primary ring-2 ring-[color-mix(in_srgb,var(--token-color-brand-primary)_18%,white)] ring-offset-2 ring-offset-surface-page',
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="mb-16 grid gap-8">
          {title && (
            <h3 className="font-display text-h4 font-semibold text-text-primary">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-body-sm text-text-secondary">{description}</p>
          )}
        </div>
      )}

      {children}

      {footer && <div className="mt-20">{footer}</div>}
    </div>
  )
}
