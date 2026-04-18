const searchNormalAsset =
  'https://www.figma.com/api/mcp/asset/882bbb06-75ec-4a29-99a8-b2509e9d55f1'
const profileAsset =
  'https://www.figma.com/api/mcp/asset/de9ddff0-2f6a-4461-9625-005f8c6ab595'
const globalAsset =
  'https://www.figma.com/api/mcp/asset/55f89d44-ed18-43ec-bd68-a86d6cdfb931'
const carAsset =
  'https://www.figma.com/api/mcp/asset/657de02c-146c-460e-93d6-3aebcc46503c'
const circleArrowDownAsset =
  'https://www.figma.com/api/mcp/asset/337f66b9-c6e2-45b9-b045-e071de6c93d7'
const garageAsset =
  'https://www.figma.com/api/mcp/asset/cbcef20c-4efd-4a97-953e-f3dae788ec77'
const addCircleAsset =
  'https://www.figma.com/api/mcp/asset/91357283-9d03-4e5b-b794-128dc9ef5fe0'
const heroFilterAllAsset =
  'https://www.figma.com/api/mcp/asset/ecbe1352-97de-48a4-a7ca-d12a4f584aa7'
const heroFilterNewAsset =
  'https://www.figma.com/api/mcp/asset/f68f66a8-937c-4d91-8f31-bca01bf1bd3c'
const heroFilterUsedAsset =
  'https://www.figma.com/api/mcp/asset/2190e7f2-85f0-4b89-9107-592087de52ac'
const heroDotActiveAsset =
  'https://www.figma.com/api/mcp/asset/6e86f3a8-bc8d-4ee5-9008-88f572da8fa2'
const heroDotInactiveAsset =
  'https://www.figma.com/api/mcp/asset/1df61830-39d7-4c32-988d-09e334cc1087'
const heroDotCenterAsset =
  'https://www.figma.com/api/mcp/asset/6806d3e9-8ca0-427b-9617-df16a5eb59a8'
const heroRefreshAsset =
  'https://www.figma.com/api/mcp/asset/f127fd66-9e3e-4109-9eae-d64a4ad5f0c0'
const heroFieldChevronAsset =
  'https://www.figma.com/api/mcp/asset/c32e28b9-fbdd-41d9-8ad1-bb1528437a57'
const heroSearchAsset =
  'https://www.figma.com/api/mcp/asset/f1a55648-4ae3-4976-9e1f-4e3e85bef742'
const heroArrowRightAsset =
  'https://www.figma.com/api/mcp/asset/42721dcc-2c2d-4180-8b4f-703c747b55e8'

function BaseImg({
  alt = '',
  className,
  src,
}: {
  alt?: string
  className: string
  src: string
}) {
  return <img src={src} alt={alt} className={className} />
}

export function SearchNormalIcon() {
  return <BaseImg src={searchNormalAsset} className="h-[16px] w-[16px] shrink-0 object-contain" />
}

export function ProfileIcon() {
  return <BaseImg src={profileAsset} className="h-[24px] w-[24px] shrink-0 object-contain" />
}

export function GlobalIcon() {
  return <BaseImg src={globalAsset} className="h-[24px] w-[24px] shrink-0 object-contain" />
}

export function CarMenuIcon() {
  return <BaseImg src={carAsset} className="h-[24px] w-[24px] shrink-0 object-contain" />
}

export function CircleArrowDownIcon() {
  return (
    <span className="relative inline-block h-[20px] w-[20px] shrink-0">
      <BaseImg
        src={circleArrowDownAsset}
        className="absolute inset-[5.21%] h-[89.58%] w-[89.58%] object-contain"
      />
    </span>
  )
}

export function GarageBadgeIcon() {
  return (
    <span className="relative inline-block h-[18px] w-[18px] shrink-0">
      <BaseImg
        src={garageAsset}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </span>
  )
}

export function AddCircleIcon() {
  return (
    <span className="relative inline-block h-[32px] w-[32px] shrink-0">
      <BaseImg
        src={addCircleAsset}
        className="absolute inset-[5.21%] h-[89.58%] w-[89.58%] object-contain"
      />
    </span>
  )
}

export function HeroAllIcon() {
  return <BaseImg src={heroFilterAllAsset} className="h-[16px] w-[16px] shrink-0 object-contain" />
}

export function HeroNewIcon() {
  return <BaseImg src={heroFilterNewAsset} className="h-[16px] w-[16px] shrink-0 object-contain" />
}

export function HeroUsedIcon() {
  return <BaseImg src={heroFilterUsedAsset} className="h-[16px] w-[16px] shrink-0 object-contain" />
}

export function HeroDot({ active }: { active: boolean }) {
  return (
    <span className="relative inline-flex h-[16px] w-[16px] shrink-0 items-center justify-center">
      <BaseImg
        src={active ? heroDotActiveAsset : heroDotInactiveAsset}
        className="absolute inset-0 h-full w-full object-contain"
      />
      {active ? (
        <BaseImg
          src={heroDotCenterAsset}
          className="relative h-[10px] w-[10px] object-contain"
        />
      ) : null}
    </span>
  )
}

export function HeroRefreshIcon() {
  return (
    <span className="inline-flex h-[20px] w-[20px] shrink-0 rotate-180 items-center justify-center">
      <BaseImg
        src={heroRefreshAsset}
        className="h-[20px] w-[20px] object-contain"
      />
    </span>
  )
}

export function HeroFieldChevronIcon() {
  return (
    <span className="relative inline-block h-[16px] w-[16px] shrink-0">
      <span className="absolute inset-[33.33%_16.67%_29.17%_16.67%] flex items-center justify-center">
        <span className="inline-block h-full w-full -rotate-180 -scale-x-100">
          <BaseImg
            src={heroFieldChevronAsset}
            className="h-full w-full object-contain"
          />
        </span>
      </span>
    </span>
  )
}

export function HeroSearchIcon() {
  return <BaseImg src={heroSearchAsset} className="h-[24px] w-[24px] shrink-0 object-contain" />
}

export function HeroArrowRightIcon() {
  return (
    <span className="relative inline-block h-[20px] w-[20px] shrink-0">
      <span className="absolute left-[13.54%] top-[26.04%] flex h-[47.92%] w-[72.92%] items-center justify-center">
        <span className="inline-block h-[152.17%] w-[65.72%] -rotate-90 -scale-x-100">
          <BaseImg
            src={heroArrowRightAsset}
            className="h-full w-full object-contain"
          />
        </span>
      </span>
    </span>
  )
}
