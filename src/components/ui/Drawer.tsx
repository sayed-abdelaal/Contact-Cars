import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Button } from '@/components/ui/Button'

export type DrawerProps = {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
}

export function Drawer({
  children,
  description,
  footer,
  onClose,
  open,
  title,
}: DrawerProps) {
  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, open])

  if (!open || typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-[color-mix(in_srgb,var(--token-color-brand-secondary)_42%,transparent)]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="ml-auto flex h-full w-full max-w-container-content-sm flex-col border-l border-border-emphasis bg-surface-primary p-24 shadow-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-16">
          <div className="grid gap-8">
            <h3 className="font-display text-h3 font-semibold text-text-primary">
              {title}
            </h3>
            {description && (
              <p className="text-body-md text-text-secondary">{description}</p>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>

        <div className="mt-20 flex-1 overflow-y-auto">{children}</div>

        {footer && <div className="mt-20">{footer}</div>}
      </div>
    </div>,
    document.body
  )
}
