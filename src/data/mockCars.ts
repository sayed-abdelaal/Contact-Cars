export type InstalmentCar = {
  id: string
  brand: string
  model: string
  year: number
  cashPrice: number
  monthlyInstallment: number
  downPayment: number
  termMonths: number
  badge: string
}

export const mockCars: InstalmentCar[] = [
  {
    id: 'nissan-sunny-2024',
    brand: 'Nissan',
    model: 'Sunny',
    year: 2024,
    cashPrice: 860000,
    monthlyInstallment: 15250,
    downPayment: 258000,
    termMonths: 48,
    badge: 'Fast approval',
  },
  {
    id: 'chery-tiggo-7-pro-2025',
    brand: 'Chery',
    model: 'Tiggo 7 Pro',
    year: 2025,
    cashPrice: 1485000,
    monthlyInstallment: 26400,
    downPayment: 445500,
    termMonths: 60,
    badge: 'Family SUV',
  },
  {
    id: 'mg-5-2025',
    brand: 'MG',
    model: '5',
    year: 2025,
    cashPrice: 1210000,
    monthlyInstallment: 21180,
    downPayment: 363000,
    termMonths: 60,
    badge: 'Popular choice',
  },
]
