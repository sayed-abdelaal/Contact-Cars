import { PrimitiveShowcase, SectionHeader } from '@/components/ui'

export function DesignSystemPage() {
  return (
    <div className="section-stack">
      <SectionHeader
        eyebrow="Design System"
        title="Shared tokens, primitives, and review-ready component demos."
        description="This route now acts as the internal UI foundation surface for Contact Cars Car Instalment. Use it to validate reusable components before they are composed into versioned feature flows."
      />

      <PrimitiveShowcase />
    </div>
  )
}
