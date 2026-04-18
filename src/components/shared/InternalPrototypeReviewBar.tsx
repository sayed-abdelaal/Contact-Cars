import { NavLink } from 'react-router-dom'

import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/cn'

const reviewGroups = [
  {
    label: 'Pages',
    routes: [
      { label: 'Homepage', to: '/home' },
      { label: 'Design System', to: '/design-system' },
      { label: 'Experiments', to: '/experiments' },
    ],
  },
  {
    label: 'Feature Versions',
    routes: [
      { label: 'V1', to: '/car-instalment/v1' },
      { label: 'V2', to: '/car-instalment/v2' },
      { label: 'V3', to: '/car-instalment/v3' },
    ],
  },
]

export function InternalPrototypeReviewBar() {
  return (
    <aside className="rounded-xl border border-dashed border-border-strong bg-surface-primary p-16 shadow-subtle">
      <div className="grid gap-16 xl:grid-cols-[1.1fr_1.8fr] xl:items-start">
        <div className="grid gap-8">
          <div className="flex flex-wrap items-center gap-8">
            <Badge tone="warning">Review Only</Badge>
            <Badge>Separate from product navigation</Badge>
          </div>
          <p className="text-body-sm text-text-secondary">
            Use this bar to move quickly between the design-system reference,
            homepage, experiments, and versioned Car Instalment concepts during
            prototype review. It is intentionally separate from the
            production-facing navigation.
          </p>
        </div>

        <div className="grid gap-12">
          {reviewGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-8 rounded-lg border border-border-default bg-surface-muted/80 p-12"
            >
              <p className="text-caption font-semibold uppercase tracking-[0.2em] text-text-muted">
                {group.label}
              </p>
              <nav
                aria-label={`${group.label} review routes`}
                className="flex flex-wrap gap-8"
              >
                {group.routes.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'rounded-lg px-12 py-8 text-label transition duration-[var(--token-motion-duration-fast)] ease-standard',
                        isActive
                          ? 'bg-brand-secondary text-text-inverse shadow-card'
                          : 'bg-surface-primary text-text-secondary hover:border-brand-primary hover:bg-brand-primary hover:text-text-inverse hover:shadow-subtle'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
