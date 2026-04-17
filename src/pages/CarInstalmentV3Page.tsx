import { SectionHeading } from '@/components/ui/SectionHeading'
import { CarInstalmentV3View } from '@/features/car-instalment/v3/CarInstalmentV3View'

export function CarInstalmentV3Page() {
  return (
    <div className="section-stack">
      <SectionHeading
        eyebrow="Car Instalment"
        title="V3 route placeholder"
        description="This page reserves space for the third direction, especially concepts that add richer detail, reassurance, and dealer handoff moments."
      />
      <CarInstalmentV3View />
    </div>
  )
}
