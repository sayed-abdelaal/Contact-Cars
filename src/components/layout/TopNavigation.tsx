import { Link } from 'react-router-dom'

import {
  AddCircleIcon,
  CarMenuIcon,
  CircleArrowDownIcon,
  GarageBadgeIcon,
  GlobalIcon,
  ProfileIcon,
  SearchNormalIcon,
} from '@/components/shared/figma-home-icons'

const navItems = [
  { label: 'New Cars', to: '/home' },
  { label: 'Used Cars', to: '/home' },
  { label: 'Electric Cars', to: '/home' },
  { label: 'Services', to: '/home' },
  { label: 'Showrooms', to: '/home' },
  { label: 'Blog', to: '/home' },
]

const logoAsset = 'https://www.contactcars.com/_next/static/media/logo.58992d77.svg'

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-30 bg-surface-primary">
      <div className="mx-auto flex h-[64px] w-full max-w-[1060px] items-center justify-between gap-20 px-12 md:px-0">
        <div className="flex min-w-0 flex-1 items-center gap-20">
          <Link to="/home" className="shrink-0">
            <img
              src={logoAsset}
              alt="Contact Cars"
              className="h-[40px] w-[112px] object-contain"
            />
          </Link>

          <div className="hidden min-w-0 flex-1 md:block">
            <div className="flex h-[40px] items-center justify-between rounded-[5px] border border-border-default bg-surface-primary px-12">
              <span className="text-[14px] leading-[22px] text-[#a1aecb]">
                Search for a car
              </span>
              <SearchNormalIcon />
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-24 md:flex">
          <div className="flex items-center gap-[5px]">
            <ProfileIcon />
            <span className="text-[14px] leading-[22px] text-text-primary">
              My account
            </span>
          </div>

          <div className="flex items-center gap-[6px]">
            <GlobalIcon />
            <span className="text-[14px] leading-[20px] tracking-[0.25px] text-text-primary">
              العربية
            </span>
          </div>

          <div className="flex h-[40px] items-center gap-12 rounded-full border border-[#e0e9ff] bg-[#f2f5fd] pl-12 pr-12">
            <div className="flex items-center gap-[6px]">
              <CarMenuIcon />
              <span className="text-[12px] font-bold leading-[20px] text-brand-primary">
                Cars
              </span>
            </div>
            <CircleArrowDownIcon />
          </div>
        </div>
      </div>

      <div className="hidden h-px w-full bg-border-default" />

      <div className="mx-auto flex min-h-[56px] w-full max-w-[1060px] flex-col gap-12 px-12 py-8 md:flex-row md:items-center md:justify-between md:px-0">
        <nav
          aria-label="Primary marketplace navigation"
          className="flex flex-wrap items-center gap-16"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="rounded-[4px] px-8 py-4 text-[14px] font-medium leading-[22px] text-[#09132f] no-underline transition-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-8 self-end md:self-auto">
          <div className="flex h-[40px] items-center gap-[6px] rounded-[24px] border border-[#ededed] bg-[#f8f8f8] pl-4 pr-16">
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-surface-primary">
              <GarageBadgeIcon />
            </div>
            <div className="flex items-center gap-[6px]">
              <span className="text-[11px] font-semibold leading-[18px] text-[#15171c]">
                My Garage
              </span>
              <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-brand-primary bg-[#f2f5fd] px-[3px] text-[11px] font-semibold leading-[18px] text-brand-primary">
                3
              </span>
            </div>
          </div>

          <button className="inline-flex h-[40px] items-center gap-[7px] rounded-full border border-white bg-brand-accent pl-4 pr-16 text-text-inverse shadow-subtle">
            <AddCircleIcon />
            <span className="text-[16px] font-bold leading-[24px]">
              Sell a Car
            </span>
          </button>
        </div>
      </div>

      <div className="hidden h-px w-full bg-border-default" />
    </header>
  )
}
