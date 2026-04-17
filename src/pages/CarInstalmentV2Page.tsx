import { SectionHeading } from '@/components/ui/SectionHeading'
import { CarInstalmentV2View } from '@/features/car-instalment/v2/CarInstalmentV2View'

export function CarInstalmentV2Page() {
  return (
    <div className="section-stack">
      <SectionHeading
        eyebrow="Car Instalment"
        title="V2 route placeholder"
        description="This page keeps the second design direction separate, making it easier to compare structure and user flow against V1 and V3."
      />
      <CarInstalmentV2View />
    </div>
  )
}
