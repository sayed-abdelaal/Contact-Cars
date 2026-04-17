import { useId, type InputHTMLAttributes, type ReactNode } from 'react'

import { cn } from '@/lib/cn'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string
  hint?: string
  error?: string
  success?: string
  leading?: ReactNode
  trailing?: ReactNode
}

export function Input({
  className,
  error,
  hint,
  id,
  label,
  leading,
  success,
  trailing,
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = `${inputId}-message`
  const statusTone = error
    ? 'border-feedback-error focus-within:border-feedback-error focus-within:ring-[color-mix(in_srgb,var(--token-color-feedback-error)_18%,white)]'
    : success
      ? 'border-feedback-success focus-within:border-feedback-success focus-within:ring-[color-mix(in_srgb,var(--token-color-feedback-success)_18%,white)]'
      : 'border-border-default focus-within:border-brand-primary focus-within:ring-[color-mix(in_srgb,var(--token-color-brand-primary)_18%,white)]'

  return (
    <label className="grid gap-8">
      {label && <span className="text-label text-text-primary">{label}</span>}
      <span
        className={cn(
          'flex min-h-48 items-center gap-12 rounded-xl border bg-surface-primary px-16 shadow-subtle transition duration-[var(--token-motion-duration-fast)] ease-standard focus-within:ring-4',
          statusTone,
          props.disabled && 'cursor-not-allowed bg-surface-muted opacity-70'
        )}
      >
        {leading && (
          <span className="shrink-0 text-body-sm text-text-muted">{leading}</span>
        )}
        <input
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error || success || hint ? messageId : undefined}
          className={cn(
            'w-full border-none bg-transparent text-body-md text-text-primary outline-none placeholder:text-text-muted',
            className
          )}
          {...props}
        />
        {trailing && (
          <span className="shrink-0 text-body-sm text-text-muted">{trailing}</span>
        )}
      </span>
      {(error || success || hint) && (
        <span
          id={messageId}
          className={cn(
            'text-body-sm',
            error
              ? 'text-feedback-error'
              : success
                ? 'text-feedback-success'
                : 'text-text-muted'
          )}
        >
          {error ?? success ?? hint}
        </span>
      )}
    </label>
  )
}
