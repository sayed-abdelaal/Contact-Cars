import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'danger'
  | 'outline'
  | 'ghost'

type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  selected?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-32 px-12 text-label',
  md: 'min-h-40 px-16 text-label',
  lg: 'min-h-48 px-20 text-body-md',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-text-inverse hover:bg-brand-primary-hover active:bg-brand-primary-active',
  secondary:
    'bg-brand-secondary text-text-inverse hover:bg-text-primary active:bg-surface-emphasis',
  accent:
    'bg-brand-accent text-text-inverse hover:brightness-95 active:brightness-90',
  success:
    'bg-feedback-success text-text-inverse hover:brightness-95 active:brightness-90',
  danger:
    'bg-feedback-error text-text-inverse hover:brightness-95 active:brightness-90',
  outline:
    'border border-border-strong bg-surface-primary text-text-primary hover:border-brand-primary hover:bg-surface-muted active:border-brand-primary-active',
  ghost:
    'bg-transparent text-text-secondary hover:bg-surface-muted hover:text-text-primary active:bg-surface-primary',
}

export function Button({
  children,
  className,
  disabled,
  leadingIcon,
  loading = false,
  selected = false,
  size = 'md',
  trailingIcon,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      data-selected={selected || undefined}
      disabled={isDisabled}
      className={cn(
        'inline-flex items-center justify-center gap-8 rounded-full font-semibold shadow-subtle transition duration-[var(--token-motion-duration-fast)] ease-standard focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--token-color-brand-primary)_18%,white)] active:translate-y-px disabled:pointer-events-none disabled:opacity-50',
        sizeClasses[size],
        variantClasses[variant],
        selected && 'ring-2 ring-brand-primary ring-offset-2 ring-offset-surface-page',
        className
      )}
      {...props}
    >
      {loading ? (
        <span className="size-16 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leadingIcon
      )}
      <span>{children}</span>
      {!loading && trailingIcon}
    </button>
  )
}
