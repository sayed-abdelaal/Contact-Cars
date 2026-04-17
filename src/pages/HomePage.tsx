import { PlaceholderPanel } from '@/components/shared/PlaceholderPanel'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function HomePage() {
  return (
    <div className="section-stack">
      <SectionHeading
        eyebrow="Home"
        title="Prototype hub for the Car Instalment workstream."
        description="This placeholder home route acts as the entry point for reviewing the current structure, moving between routes, and deciding where each new prototype idea should live."
      />

      <PlaceholderPanel
        title="How to use this prototype map"
        description="Keep stable foundations in shared layers, use the experiments route for loose exploration, and promote stronger concepts into versioned feature routes when they deserve isolated review."
        bullets={[
          'Shared infrastructure first',
          'Version routes for major concepts',
          'Internal-only navigation for review',
        ]}
      />
    </div>
  )
}
