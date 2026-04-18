import { useState } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/cn'

const LIVE_LOGO_URL =
  'https://www.contactcars.com/_next/static/media/logo.58992d77.svg'

export type ContactCarsLogoProps = {
  className?: string
  showCaption?: boolean
}

export function ContactCarsLogo({
  className,
  showCaption = false,
}: ContactCarsLogoProps) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <Link to="/" className={cn('inline-flex items-center gap-12', className)}>
      <div className="flex h-[20px] items-center">
        {imageFailed ? (
          <div className="flex h-[20px] items-center rounded-md border border-border-default bg-surface-primary px-8 text-caption font-semibold text-brand-primary">
            ContactCars
          </div>
        ) : (
          <img
            src={LIVE_LOGO_URL}
            alt="Contact Cars"
            className="h-[16px] w-auto object-contain md:h-[17px]"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      {showCaption && (
        <span className="hidden text-caption text-text-muted xl:inline">
          Replace with a local brand asset when one is approved for the prototype
          repo.
        </span>
      )}
    </Link>
  )
}
