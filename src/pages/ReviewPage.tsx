import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { InternalPrototypeReviewBar } from '@/components/shared/InternalPrototypeReviewBar'

export function ReviewPage() {
  return (
    <div className="min-h-screen bg-surface-page py-24">
      <PageContainer width="xl" className="grid gap-20">
        <div className="grid gap-8">
          <h1 className="text-h3 font-semibold text-text-primary">
            Prototype Review Hub
          </h1>
          <p className="max-w-[760px] text-body-sm text-text-secondary">
            Use this internal-only page as the entry point for navigating
            between the production homepage, design system references, and
            feature iteration flows.
          </p>
        </div>

        <Section tone="muted">
          <InternalPrototypeReviewBar />
        </Section>
      </PageContainer>
    </div>
  )
}
