import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type PageContainerWidth = 'md' | 'lg' | 'xl' | '2xl'

const widthClasses: Record<PageContainerWidth, string> = {
  md: 'max-w-container-content-md',
  lg: 'max-w-container-content-lg',
  xl: 'max-w-container-content-xl',
  '2xl': 'max-w-container-content-2xl',
}

export type PageContainerProps = {
  children: ReactNode
  width?: PageContainerWidth
  className?: string
}

export function PageContainer({
  children,
  width = 'xl',
  className,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-16 md:px-24',
        widthClasses[width],
        className
      )}
    >
      {children}
    </div>
  )
}
