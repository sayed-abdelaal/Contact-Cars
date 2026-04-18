import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/layout/Footer'
import { PageContainer } from '@/components/layout/PageContainer'
import { TopNavigation } from '@/components/layout/TopNavigation'

export function AppShell() {
  return (
    <div className="min-h-screen text-text-primary">
      <div className="flex min-h-screen flex-col">
        <TopNavigation />

        <main className="flex-1 pb-24 pt-10 md:pb-32 md:pt-12">
          <PageContainer width="xl">
            <Outlet />
          </PageContainer>
        </main>

        <Footer />
      </div>
    </div>
  )
}
