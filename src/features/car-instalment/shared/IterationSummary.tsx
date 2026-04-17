import { mockCars } from '@/data/mockCars'

type IterationSummaryProps = {
  version: 'V1' | 'V2' | 'V3'
  focus: string
  description: string
}

export function IterationSummary({
  version,
  focus,
  description,
}: IterationSummaryProps) {
  return (
    <section className="panel p-24 md:p-32">
      <div className="flex flex-col gap-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-caption font-semibold uppercase tracking-[0.28em] text-brand-accent">
            {version} Placeholder
          </p>
          <h3 className="mt-12 font-display text-h2 font-bold tracking-tight text-text-primary">
            {focus}
          </h3>
          <p className="mt-16 text-body-md text-text-secondary">
            {description}
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-3">
          <div className="rounded-xl bg-finance-payment-surface px-16 py-12">
            <p className="text-body-sm text-text-muted">Mock cars</p>
            <p className="mt-8 text-h3 font-semibold text-finance-payment">
              {mockCars.length}
            </p>
          </div>
          <div className="rounded-xl bg-finance-down-payment-surface px-16 py-12">
            <p className="text-body-sm text-text-muted">Mode</p>
            <p className="mt-8 text-h3 font-semibold text-finance-down-payment">
              Review
            </p>
          </div>
          <div className="rounded-xl bg-finance-savings-surface px-16 py-12">
            <p className="text-body-sm text-text-muted">Data source</p>
            <p className="mt-8 text-h3 font-semibold text-finance-savings">
              Mocks
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
