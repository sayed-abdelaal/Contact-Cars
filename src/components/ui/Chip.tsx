import type { ButtonHTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

type ChipTone = 'neutral' | 'brand' | 'accent' | 'success'

export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean
  tone?: ChipTone
}

const toneClasses: Record<ChipTone, string> = {
  neutral:
    'bg-surface-muted text-text-secondary hover:bg-surface-primary hover:text-text-primary',
  brand:
    'bg-finance-payment-surface text-finance-payment hover:brightness-95',
  accent:
    'bg-finance-down-payment-surface text-finance-down-payment hover:brightness-95',
  success:
    'bg-finance-savings-surface text-finance-savings hover:brightness-95',
}

export function Chip({
  children,
  className,
  selected = false,
  tone = 'neutral',
  type = 'button',
  ...props
}: ChipProps) {
  return (
    <button
      type={type}
      data-selected={selected || undefined}
      className={cn(
        'inline-flex min-h-32 items-center rounded-full px-12 text-label transition duration-[var(--token-motion-duration-fast)] ease-standard focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--token-color-brand-primary)_18%,white)] disabled:pointer-events-none disabled:opacity-50',
        toneClasses[tone],
        selected && 'ring-2 ring-brand-primary ring-offset-2 ring-offset-surface-page',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
