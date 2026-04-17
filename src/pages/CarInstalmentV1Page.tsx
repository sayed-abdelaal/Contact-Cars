import { SectionHeading } from '@/components/ui/SectionHeading'
import { CarInstalmentV1View } from '@/features/car-instalment/v1/CarInstalmentV1View'

export function CarInstalmentV1Page() {
  return (
    <div className="section-stack">
      <SectionHeading
        eyebrow="Car Instalment"
        title="V1 route placeholder"
        description="This page isolates the first design direction so it can be reviewed independently from later iterations."
      />
      <CarInstalmentV1View />
    </div>
  )
}
