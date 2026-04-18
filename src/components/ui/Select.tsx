import { useId, type ReactNode, type SelectHTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
  label?: string
  hint?: string
  error?: string
  success?: string
  leading?: ReactNode
  options: SelectOption[]
  placeholder?: string
}

export function Select({
  className,
  error,
  hint,
  id,
  label,
  leading,
  options,
  placeholder,
  success,
  ...props
}: SelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId
  const messageId = `${selectId}-message`
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
          'flex min-h-48 items-center gap-12 rounded-lg border bg-surface-primary px-16 shadow-subtle transition duration-[var(--token-motion-duration-fast)] ease-standard focus-within:ring-4',
          statusTone,
          props.disabled && 'cursor-not-allowed bg-surface-muted opacity-70'
        )}
      >
        {leading && (
          <span className="shrink-0 text-body-sm text-text-muted">{leading}</span>
        )}
        <select
          id={selectId}
          aria-invalid={Boolean(error)}
          aria-describedby={error || success || hint ? messageId : undefined}
          className={cn(
            'w-full appearance-none border-none bg-transparent pr-20 text-body-md text-text-primary outline-none',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className="text-body-sm text-text-muted">▾</span>
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
