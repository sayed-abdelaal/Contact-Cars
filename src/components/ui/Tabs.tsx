import { useMemo, useState, type ReactNode } from 'react'

import { cn } from '@/lib/cn'

export type TabItem = {
  value: string
  label: string
  content: ReactNode
  disabled?: boolean
  badge?: string
}

export type TabsProps = {
  items: TabItem[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export function Tabs({
  defaultValue,
  items,
  onValueChange,
  value,
}: TabsProps) {
  const firstEnabled = useMemo(
    () => items.find((item) => !item.disabled)?.value ?? items[0]?.value ?? '',
    [items]
  )
  const [internalValue, setInternalValue] = useState(defaultValue ?? firstEnabled)
  const activeValue = value ?? internalValue
  const activeTab = items.find((item) => item.value === activeValue) ?? items[0]

  const setValue = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue)
    }
    onValueChange?.(nextValue)
  }

  return (
    <div className="grid gap-16">
      <div
        role="tablist"
        aria-label="Tabs"
        className="inline-flex w-full flex-wrap gap-8 rounded-2xl bg-surface-muted p-8"
      >
        {items.map((item) => {
          const isSelected = item.value === activeValue

          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${item.value}-panel`}
              disabled={item.disabled}
              onClick={() => setValue(item.value)}
              className={cn(
                'inline-flex min-h-40 items-center gap-8 rounded-full px-16 text-label transition duration-[var(--token-motion-duration-fast)] ease-standard focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--token-color-brand-primary)_18%,white)]',
                isSelected
                  ? 'bg-surface-primary text-text-primary shadow-subtle'
                  : 'text-text-secondary hover:bg-surface-primary/70 hover:text-text-primary',
                item.disabled && 'pointer-events-none opacity-50'
              )}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-surface-muted px-8 py-4 text-caption text-text-muted">
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {activeTab && (
        <div
          id={`${activeTab.value}-panel`}
          role="tabpanel"
          className="rounded-2xl border border-border-default bg-surface-primary p-20 shadow-subtle"
        >
          {activeTab.content}
        </div>
      )}
    </div>
  )
}
