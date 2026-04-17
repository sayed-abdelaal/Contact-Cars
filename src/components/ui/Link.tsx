import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { cn } from '@/lib/cn'

type LinkTone = 'primary' | 'secondary' | 'muted'

export type LinkProps = {
  children: ReactNode
  href?: string
  to?: string
  tone?: LinkTone
  disabled?: boolean
  external?: boolean
  className?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>

const toneClasses: Record<LinkTone, string> = {
  primary: 'text-brand-primary hover:text-brand-primary-hover',
  secondary: 'text-text-primary hover:text-brand-primary',
  muted: 'text-text-secondary hover:text-text-primary',
}

const sharedClasses =
  'inline-flex items-center gap-8 text-label underline decoration-border-strong underline-offset-4 transition duration-[var(--token-motion-duration-fast)] ease-standard focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--token-color-brand-primary)_18%,white)]'

export function Link({
  children,
  className,
  disabled = false,
  external = false,
  href,
  rel,
  target,
  to,
  tone = 'primary',
  ...props
}: LinkProps) {
  if (disabled) {
    return (
      <span className={cn(sharedClasses, 'pointer-events-none opacity-50', toneClasses[tone], className)}>
        {children}
      </span>
    )
  }

  if (to) {
    return (
      <RouterLink to={to} className={cn(sharedClasses, toneClasses[tone], className)}>
        {children}
      </RouterLink>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : target}
      rel={external ? 'noreferrer noopener' : rel}
      className={cn(sharedClasses, toneClasses[tone], className)}
      {...props}
    >
      {children}
    </a>
  )
}
