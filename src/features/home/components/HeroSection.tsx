import { Button } from '@/components/ui'
import {
  HeroAllIcon,
  HeroArrowRightIcon,
  HeroDot,
  HeroFieldChevronIcon,
  HeroNewIcon,
  HeroRefreshIcon,
  HeroSearchIcon,
  HeroUsedIcon,
} from '@/components/shared/figma-home-icons'

const heroBannerAsset =
  'https://www.figma.com/api/mcp/asset/e0563977-4fa8-4c27-92c9-fb470575726d'

const filterTabs = [
  { label: 'All', active: true },
  { label: 'New', active: false },
  { label: 'Used', active: false },
] as const

const fields = [
  'Brand',
  'Model',
  'Year from',
  'Year to',
  'Minimum price',
  'Maximum price',
] as const

function FilterTab({
  active,
  label,
}: {
  active: boolean
  label: string
}) {
  const Icon =
    label === 'All' ? HeroAllIcon : label === 'New' ? HeroNewIcon : HeroUsedIcon

  return (
    <button
      className={`inline-flex h-[42px] items-center gap-16 rounded-[6px] border px-8 py-12 ${
        active
          ? 'border-brand-primary bg-surface-primary text-brand-primary'
          : 'border-border-default bg-surface-primary text-[#5f6e91]'
      }`}
    >
      <div className="flex items-center gap-4">
        <Icon />
        <span className="text-[12px] font-semibold leading-[18px]">{label}</span>
      </div>

      <HeroDot active={active} />
    </button>
  )
}

function HeroField({ label }: { label: string }) {
  return (
    <button className="flex h-[40px] items-center justify-between rounded-[6px] border border-[#e5e7eb] bg-[#f9fafb] px-12 shadow-subtle">
      <span className="text-[14px] leading-[20px] text-[#6a7282]">{label}</span>
      <HeroFieldChevronIcon />
    </button>
  )
}

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1060px]">
      <div className="relative">
        <img
          src={heroBannerAsset}
          alt="Contact Cars hero banner"
          className="h-[220px] w-full rounded-[8px] object-cover md:h-[398px]"
        />

        <div className="relative z-10 mx-auto -mt-[36px] w-full max-w-[700px] rounded-[8px] bg-surface-primary p-16 shadow-card md:-mt-[36px]">
          <div className="grid gap-16">
            <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-16 md:flex-row md:items-center">
                <p className="text-[16px] leading-[24px] text-[#5f6e91]">
                  Find{' '}
                  <span className="font-medium text-brand-primary">
                    your perfect car
                  </span>
                </p>

                <div className="flex flex-wrap gap-8">
                  {filterTabs.map((tab) => (
                    <FilterTab
                      key={tab.label}
                      active={tab.active}
                      label={tab.label}
                    />
                  ))}
                </div>
              </div>

              <button className="inline-flex items-center gap-4 self-end text-[14px] leading-[22px] text-[#475576] md:self-auto">
                <HeroRefreshIcon />
                Reset
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {fields.map((field) => (
                <HeroField key={field} label={field} />
              ))}
            </div>

            <div className="flex flex-col gap-12 md:flex-row md:items-center">
              <Button
                size="xl"
                className="flex-1 rounded-[6px] px-16 font-medium shadow-none"
                leadingIcon={<HeroSearchIcon />}
              >
                Show 6,609 cars
              </Button>

              <button className="inline-flex items-center gap-4 self-end rounded-[4px] p-4 text-[16px] font-semibold leading-[24px] text-brand-primary md:self-auto">
                Advanced search
                <HeroArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
