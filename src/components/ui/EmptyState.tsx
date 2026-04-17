import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export type EmptyStateProps = {
  title: string
  description: string
  icon?: ReactNode
  action?: ReactNode
  secondaryAction?: ReactNode
  className?: string
}

export function EmptyState({
  action,
  className,
  description,
  icon,
  secondaryAction,
  title,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'grid justify-items-start gap-16 rounded-2xl border border-dashed border-border-strong bg-surface-muted p-24',
        className
      )}
    >
      {icon && (
        <div className="flex size-48 items-center justify-center rounded-full bg-surface-primary text-h4 text-brand-primary shadow-subtle">
          {icon}
        </div>
      )}
      <div className="grid gap-8">
        <h3 className="font-display text-h4 font-semibold text-text-primary">
          {title}
        </h3>
        <p className="max-w-container-content-sm text-body-md text-text-secondary">
          {description}
        </p>
      </div>
      {(action || secondaryAction) && (
        <div className="flex flex-wrap gap-12">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  )
}
