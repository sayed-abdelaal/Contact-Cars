import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Button } from '@/components/ui/Button'

export type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
}

export function Modal({
  children,
  description,
  footer,
  onClose,
  open,
  title,
}: ModalProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--token-color-brand-secondary)_55%,transparent)] p-16"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="w-full max-w-container-content-sm rounded-2xl border border-border-emphasis bg-surface-primary p-24 shadow-modal"
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
          <Button variant="ghost" size="sm" aria-label="Close modal" onClick={onClose}>
            Close
          </Button>
        </div>

        <div className="mt-20">{children}</div>

        {footer && <div className="mt-20 flex justify-end">{footer}</div>}
      </div>
    </div>,
    document.body
  )
}
