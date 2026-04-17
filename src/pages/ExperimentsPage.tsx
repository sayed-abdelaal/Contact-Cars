import { PlaceholderPanel } from '@/components/shared/PlaceholderPanel'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ExperimentsPage() {
  return (
    <div className="section-stack">
      <SectionHeading
        eyebrow="Experiments"
        title="A holding space for prototype spikes and temporary ideas."
        description="Use this route for one-off explorations that are not ready to become a full version yet, such as motion tests, comparison widgets, or alternate navigation concepts."
      />

      <PlaceholderPanel
        title="Suggested experiment types"
        description="Treat this page as a sandbox. If an idea proves valuable, promote it into the shared layer or a dedicated version route."
        bullets={[
          'Calculator interaction spikes',
          'Trust signal modules',
          'Alternate results layouts',
        ]}
      />
    </div>
  )
}
