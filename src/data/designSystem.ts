export const colorTokenGroups = [
  {
    title: 'Brand Colors',
    description: 'Core brand and action colors used for primary emphasis.',
    tokens: [
      { name: 'brand-primary', cssVar: '--token-color-brand-primary', value: '#0057FF' },
      { name: 'brand-primary-hover', cssVar: '--token-color-brand-primary-hover', value: '#0047D1' },
      { name: 'brand-primary-active', cssVar: '--token-color-brand-primary-active', value: '#0037A3' },
      { name: 'brand-secondary', cssVar: '--token-color-brand-secondary', value: '#111827' },
      { name: 'brand-accent', cssVar: '--token-color-brand-accent', value: '#F97316' },
    ],
  },
  {
    title: 'Text Colors',
    description: 'Readable, hierarchy-aware text tones for trustworthy finance UI.',
    tokens: [
      { name: 'text-primary', cssVar: '--token-color-text-primary', value: '#0F172A' },
      { name: 'text-secondary', cssVar: '--token-color-text-secondary', value: '#475569' },
      { name: 'text-muted', cssVar: '--token-color-text-muted', value: '#64748B' },
      { name: 'text-inverse', cssVar: '--token-color-text-inverse', value: '#F8FAFC' },
    ],
  },
  {
    title: 'Surfaces',
    description: 'Page and container foundations for cards, shells, and overlays.',
    tokens: [
      { name: 'surface-page', cssVar: '--token-color-surface-page', value: '#F8FAFC' },
      { name: 'surface-primary', cssVar: '--token-color-surface-primary', value: '#FFFFFF' },
      { name: 'surface-muted', cssVar: '--token-color-surface-muted', value: '#F1F5F9' },
      { name: 'surface-emphasis', cssVar: '--token-color-surface-emphasis', value: '#0F172A' },
      { name: 'surface-overlay', cssVar: '--token-color-surface-overlay', value: 'rgba(255,255,255,0.82)' },
    ],
  },
  {
    title: 'Borders',
    description: 'Border hierarchy for subtle separation and stronger focus moments.',
    tokens: [
      { name: 'border-default', cssVar: '--token-color-border-default', value: '#E2E8F0' },
      { name: 'border-strong', cssVar: '--token-color-border-strong', value: '#CBD5E1' },
      { name: 'border-emphasis', cssVar: '--token-color-border-emphasis', value: 'rgba(15,23,42,0.14)' },
    ],
  },
  {
    title: 'Feedback States',
    description: 'System-level status colors for validation, guidance, and alerts.',
    tokens: [
      { name: 'feedback-success', cssVar: '--token-color-feedback-success', value: '#16A34A' },
      { name: 'feedback-warning', cssVar: '--token-color-feedback-warning', value: '#D97706' },
      { name: 'feedback-error', cssVar: '--token-color-feedback-error', value: '#DC2626' },
      { name: 'feedback-info', cssVar: '--token-color-feedback-info', value: '#2563EB' },
    ],
  },
  {
    title: 'Finance Highlight Colors',
    description: 'Semantic finance accents for payment, down payment, savings, and caution.',
    tokens: [
      { name: 'finance-payment', cssVar: '--token-color-finance-payment', value: '#0057FF' },
      { name: 'finance-payment-surface', cssVar: '--token-color-finance-payment-surface', value: '#E8F0FF' },
      { name: 'finance-down-payment', cssVar: '--token-color-finance-down-payment', value: '#F97316' },
      { name: 'finance-down-payment-surface', cssVar: '--token-color-finance-down-payment-surface', value: '#FFF1E8' },
      { name: 'finance-savings', cssVar: '--token-color-finance-savings', value: '#16A34A' },
      { name: 'finance-savings-surface', cssVar: '--token-color-finance-savings-surface', value: '#EAF8EF' },
      { name: 'finance-risk', cssVar: '--token-color-finance-risk', value: '#D97706' },
      { name: 'finance-risk-surface', cssVar: '--token-color-finance-risk-surface', value: '#FFF4E5' },
    ],
  },
] as const

export const typographyScale = [
  { name: 'display-xl', cssVar: '--token-font-size-display-xl', size: '56px', lineHeight: '64px', weight: '700' },
  { name: 'display-lg', cssVar: '--token-font-size-display-lg', size: '48px', lineHeight: '56px', weight: '700' },
  { name: 'h1', cssVar: '--token-font-size-h1', size: '40px', lineHeight: '48px', weight: '700' },
  { name: 'h2', cssVar: '--token-font-size-h2', size: '32px', lineHeight: '40px', weight: '700' },
  { name: 'h3', cssVar: '--token-font-size-h3', size: '24px', lineHeight: '32px', weight: '600' },
  { name: 'h4', cssVar: '--token-font-size-h4', size: '20px', lineHeight: '28px', weight: '600' },
  { name: 'body-lg', cssVar: '--token-font-size-body-lg', size: '18px', lineHeight: '28px', weight: '400' },
  { name: 'body-md', cssVar: '--token-font-size-body-md', size: '16px', lineHeight: '24px', weight: '400' },
  { name: 'body-sm', cssVar: '--token-font-size-body-sm', size: '14px', lineHeight: '20px', weight: '400' },
  { name: 'caption', cssVar: '--token-font-size-caption', size: '12px', lineHeight: '16px', weight: '500' },
  { name: 'label', cssVar: '--token-font-size-label', size: '14px', lineHeight: '20px', weight: '600' },
] as const

export const spacingScale = [
  { name: '0', cssVar: '--token-space-0', value: '0px' },
  { name: '2', cssVar: '--token-space-2', value: '2px' },
  { name: '4', cssVar: '--token-space-4', value: '4px' },
  { name: '8', cssVar: '--token-space-8', value: '8px' },
  { name: '12', cssVar: '--token-space-12', value: '12px' },
  { name: '16', cssVar: '--token-space-16', value: '16px' },
  { name: '20', cssVar: '--token-space-20', value: '20px' },
  { name: '24', cssVar: '--token-space-24', value: '24px' },
  { name: '32', cssVar: '--token-space-32', value: '32px' },
  { name: '40', cssVar: '--token-space-40', value: '40px' },
  { name: '48', cssVar: '--token-space-48', value: '48px' },
  { name: '56', cssVar: '--token-space-56', value: '56px' },
  { name: '64', cssVar: '--token-space-64', value: '64px' },
  { name: '80', cssVar: '--token-space-80', value: '80px' },
  { name: '96', cssVar: '--token-space-96', value: '96px' },
] as const

export const radiusScale = [
  { name: 'radius-4', cssVar: '--token-radius-4', value: '4px' },
  { name: 'radius-8', cssVar: '--token-radius-8', value: '8px' },
  { name: 'radius-12', cssVar: '--token-radius-12', value: '12px' },
  { name: 'radius-16', cssVar: '--token-radius-16', value: '16px' },
  { name: 'radius-20', cssVar: '--token-radius-20', value: '20px' },
  { name: 'radius-pill', cssVar: '--token-radius-pill', value: '9999px' },
] as const

export const shadowScale = [
  { name: 'shadow-subtle', cssVar: '--token-shadow-subtle', value: '0 1px 2px rgba(15, 23, 42, 0.06)' },
  { name: 'shadow-card', cssVar: '--token-shadow-card', value: '0 16px 40px rgba(15, 23, 42, 0.08)' },
  { name: 'shadow-hover', cssVar: '--token-shadow-hover', value: '0 22px 55px rgba(15, 23, 42, 0.12)' },
  { name: 'shadow-modal', cssVar: '--token-shadow-modal', value: '0 30px 90px rgba(15, 23, 42, 0.18)' },
] as const

export const layoutTokens = {
  containers: [
    { name: 'content-sm', cssVar: '--token-container-content-sm', value: '640px' },
    { name: 'content-md', cssVar: '--token-container-content-md', value: '768px' },
    { name: 'content-lg', cssVar: '--token-container-content-lg', value: '1024px' },
    { name: 'content-xl', cssVar: '--token-container-content-xl', value: '1280px' },
    { name: 'content-2xl', cssVar: '--token-container-content-2xl', value: '1440px' },
  ],
  breakpoints: [
    { name: 'sm', cssVar: '--token-breakpoint-sm', value: '640px' },
    { name: 'md', cssVar: '--token-breakpoint-md', value: '768px' },
    { name: 'lg', cssVar: '--token-breakpoint-lg', value: '1024px' },
    { name: 'xl', cssVar: '--token-breakpoint-xl', value: '1280px' },
    { name: '2xl', cssVar: '--token-breakpoint-2xl', value: '1440px' },
  ],
  motion: [
    { name: 'duration-fast', cssVar: '--token-motion-duration-fast', value: '160ms' },
    { name: 'duration-moderate', cssVar: '--token-motion-duration-moderate', value: '240ms' },
    { name: 'duration-slow', cssVar: '--token-motion-duration-slow', value: '360ms' },
    { name: 'ease-standard', cssVar: '--token-motion-ease-standard', value: 'cubic-bezier(0.2, 0, 0, 1)' },
    { name: 'ease-emphasized', cssVar: '--token-motion-ease-emphasized', value: 'cubic-bezier(0.2, 0.8, 0.2, 1)' },
  ],
} as const
