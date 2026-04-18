export type QuickService = {
  id: string
  label: string
  accent?: 'blue' | 'orange' | 'green'
}

export type RecommendedCar = {
  id: string
  title: string
  year: string
  price: string
  payment: string
  dealer: string
  location: string
  image: string
  tag?: string
}

export type Showroom = {
  name: string
}

export type BlogPost = {
  title: string
  date: string
  image: string
}

export const heroImage =
  'https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Small/Banner/7cb662d7-f871-43a0-9243-39b255636891.jpeg'

export const categoryTabs = [
  { id: 'all', label: 'All' },
  { id: 'new', label: 'New cars' },
  { id: 'used', label: 'Used cars' },
] as const

export const topDealServices: QuickService[] = [
  { id: 'new-cars', label: 'New cars', accent: 'blue' },
  { id: 'used-cars', label: 'Used cars', accent: 'orange' },
  { id: 'electric-cars', label: 'Electric cars', accent: 'green' },
]

export const secondaryServices: QuickService[] = [
  { id: 'otlobha', label: 'Otlobha', accent: 'orange' },
  { id: 'financing', label: 'Financing' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'comparison', label: 'Comparison' },
]

export const recommendedCars: RecommendedCar[] = [
  {
    id: 'range-rover',
    title: 'Range Rover Velar',
    year: '2020',
    price: '3,650,000 EGP',
    payment: '',
    dealer: 'Motor one Luxury',
    location: 'Unspecified trim',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=85',
    tag: '',
  },
  {
    id: 'changan-plus',
    title: 'Changan Eado Plus',
    year: '2025',
    price: '1,250,000 EGP',
    payment: '+ 18,989 EGP / Month',
    dealer: 'United Arab',
    location: 'Premium',
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85',
    tag: 'Premium',
  },
  {
    id: 'kaiyi-x3',
    title: 'Kaiyi X3 Pro',
    year: '2026',
    price: '1,060,000 EGP',
    payment: '+ 16,026 EGP / Month',
    dealer: 'Majestic',
    location: 'Unspecified trim',
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=85',
    tag: 'Premium',
  },
]

export const importerBrands = ['Toyota Egypt']

export const showrooms: Showroom[] = [
  { name: 'Allam Auto' },
  { name: 'El Kerdsi Cars' },
  { name: 'Euromotors' },
  { name: 'Gear Up' },
  { name: 'El Togary Auto' },
  { name: 'Sharkawy' },
  { name: 'Motor One' },
  { name: 'Vita Auto' },
]

export const blogPosts: BlogPost[] = [
  {
    title:
      'All-new launches and market moves that matter for car buyers this month',
    date: 'Tuesday, April 14, 2026',
    image:
      'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title:
      'How to compare new and used cars before committing to your next purchase',
    date: 'Sunday, April 12, 2026',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Watch: electric models reshaping the Egyptian automotive market',
    date: 'Monday, December 1, 2025',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85',
  },
]
