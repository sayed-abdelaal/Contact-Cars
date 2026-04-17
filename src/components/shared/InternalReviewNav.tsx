import { NavLink } from 'react-router-dom'

const reviewRoutes = [
  { label: 'Home', to: '/' },
  { label: 'Design System', to: '/design-system' },
  { label: 'Experiments', to: '/experiments' },
  { label: 'Car Instalment V1', to: '/car-instalment/v1' },
  { label: 'Car Instalment V2', to: '/car-instalment/v2' },
  { label: 'Car Instalment V3', to: '/car-instalment/v3' },
]

export function InternalReviewNav() {
  return (
    <section className="mb-32 rounded-2xl border border-dashed border-border-strong bg-surface-overlay p-16 shadow-subtle backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-caption font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Review Only
          </p>
          <p className="mt-8 max-w-container-content-md text-body-sm text-text-secondary">
            Lightweight internal navigation for moving between placeholder
            routes during prototype reviews and iteration planning.
          </p>
        </div>

        <nav aria-label="Internal review routes" className="flex flex-wrap gap-8">
          {reviewRoutes.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [
                  'rounded-full px-12 py-8 text-label transition duration-[var(--motion-duration-fast)] ease-standard',
                  isActive
                    ? 'bg-brand-secondary text-text-inverse shadow-card'
                    : 'bg-surface-muted text-text-secondary hover:bg-surface-primary hover:text-text-primary hover:shadow-subtle',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  )
}
