import { Outlet } from 'react-router-dom'

import { InternalReviewNav } from '@/components/shared/InternalReviewNav'

export function AppShell() {
  return (
    <div className="min-h-screen text-text-primary">
      <div className="page-shell flex min-h-screen flex-col">
        <header className="sticky top-4 z-10 mb-8 rounded-2xl border border-border-default bg-surface-overlay px-20 py-16 shadow-card backdrop-blur">
          <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-caption font-semibold uppercase tracking-[0.32em] text-brand-accent">
                Contact Cars Prototype
              </p>
              <h1 className="mt-8 font-display text-h3 font-semibold tracking-tight text-text-primary">
                Car Instalment
              </h1>
            </div>

            <div className="max-w-container-content-sm text-body-sm text-text-secondary">
              Internal shell for prototype review. The route navigation below is
              for team evaluation only and is not meant to represent production
              IA.
            </div>
          </div>
        </header>

        <main className="flex-1">
          <InternalReviewNav />
          <Outlet />
        </main>
      </div>
    </div>
  )
}
