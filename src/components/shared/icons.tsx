import { cn } from '@/lib/cn'

type IconProps = {
  className?: string
}

const baseClassName = 'h-16 w-16'

export function SearchIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8.5" cy="8.5" r="5.5" />
      <path d="M12.5 12.5L17 17" />
    </svg>
  )
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="6.5" r="3" />
      <path d="M4 16c1.4-2.6 3.4-3.9 6-3.9s4.6 1.3 6 3.9" />
    </svg>
  )
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="7" />
      <path d="M3.5 10h13" />
      <path d="M10 3c2 2.1 3 4.4 3 7s-1 4.9-3 7c-2-2.1-3-4.4-3-7s1-4.9 3-7Z" />
    </svg>
  )
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 7.5L10 12l4.5-4.5" />
    </svg>
  )
}

export function CarIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12.5V9.7c0-.7.2-1.3.6-1.8l1.6-2c.5-.7 1.4-1.1 2.3-1.1h3.1c.9 0 1.8.4 2.3 1.1l1.6 2c.4.5.6 1.1.6 1.8v2.8" />
      <path d="M3.5 12.5h13" />
      <circle cx="6.5" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ElectricIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.6 2.8L6.8 10h3.4l-1.1 7.2 4.9-7.2H10.6l1-7.2Z" />
    </svg>
  )
}

export function GarageIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5L10 4l7 5.5" />
      <path d="M5 8.8V16h10V8.8" />
      <path d="M7.5 16v-4h5v4" />
    </svg>
  )
}

export function SellCarIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6.5v7" />
      <path d="M6.5 10h7" />
    </svg>
  )
}

export function FinanceIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="5" width="13" height="10" rx="2" />
      <path d="M3.5 8.2h13" />
      <path d="M7 11.3h2.2" />
    </svg>
  )
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 4H5.8c-.5 0-.9.2-1.3.5-.3.3-.5.8-.5 1.3V9l5.8 5.8a1.8 1.8 0 0 0 2.5 0l2.5-2.5a1.8 1.8 0 0 0 0-2.5L9 4Z" />
      <circle cx="6.8" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3.5 4.5 5.7v3.9c0 3.4 2.2 5.7 5.5 6.9 3.3-1.2 5.5-3.5 5.5-6.9V5.7L10 3.5Z" />
    </svg>
  )
}

export function CompareIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4.5h8.5v8.5" />
      <path d="M14.5 4.5 5.5 13.5" />
      <path d="M14 10.5v5H5v-9h5" />
    </svg>
  )
}

export function RefreshIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 1 0 1 4" />
      <path d="M16 4.8V8h-3.2" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12" />
      <path d="M11 6.5 16 10l-5 3.5" />
    </svg>
  )
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 10H4" />
      <path d="M9 6.5 4 10l5 3.5" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3.2a6.6 6.6 0 0 0-5.8 9.7L3 17l4.2-1.1A6.7 6.7 0 1 0 10 3.2Z" />
      <path d="M7.7 7.1c.3-.3.8-.3 1.1 0l.8 1c.2.3.2.7 0 1l-.4.5c.3.8.9 1.4 1.7 1.8l.5-.4c.3-.2.7-.2 1 0l1 .8c.3.3.3.8 0 1.1l-.4.4c-.4.4-1 .5-1.6.3a8.2 8.2 0 0 1-4.8-4.8c-.2-.6-.1-1.2.3-1.6l.4-.4Z" />
    </svg>
  )
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4.5 7.8 3c.5-.4 1.1-.4 1.5 0l1.4 1.4c.5.5.5 1.2.1 1.7l-.9 1.1a13 13 0 0 0 2.9 2.9l1.1-.9c.5-.4 1.2-.4 1.7.1l1.4 1.4c.4.4.4 1 0 1.5L15.5 14c-.6.8-1.7 1.1-2.7.7a14.4 14.4 0 0 1-7.5-7.5c-.4-1-.1-2.1.7-2.7Z" />
    </svg>
  )
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="10" r="1.8" />
      <circle cx="14" cy="6" r="1.8" />
      <circle cx="14" cy="14" r="1.8" />
      <path d="M7.5 9.1 12.5 6.8" />
      <path d="M7.5 10.9 12.5 13.2" />
    </svg>
  )
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 16.2 4.8 11c-1.5-1.5-1.5-3.9 0-5.4s3.9-1.5 5.4 0l.3.3.3-.3c1.5-1.5 3.9-1.5 5.4 0s1.5 3.9 0 5.4L10 16.2Z" />
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn(baseClassName, className)}
    >
      <path d="M7 5.6c0-.8.9-1.3 1.6-.8l6 4c.6.4.6 1.2 0 1.7l-6 4c-.7.5-1.6 0-1.6-.8V5.6Z" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(baseClassName, className)}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4.5" width="14" height="11" rx="2" />
      <path d="m4.5 6 5.5 4 5.5-4" />
    </svg>
  )
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn(baseClassName, className)}
    >
      <path d="m10 2.8 2.2 4.5 5 .7-3.6 3.5.8 4.9-4.4-2.3-4.4 2.3.8-4.9L2.8 8l5-.7L10 2.8Z" />
    </svg>
  )
}
