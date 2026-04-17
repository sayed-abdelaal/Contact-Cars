import { createBrowserRouter } from 'react-router-dom'

import { AppShell } from '@/components/layout/AppShell'
import { CarInstalmentV1Page } from '@/pages/CarInstalmentV1Page'
import { CarInstalmentV2Page } from '@/pages/CarInstalmentV2Page'
import { CarInstalmentV3Page } from '@/pages/CarInstalmentV3Page'
import { DesignSystemPage } from '@/pages/DesignSystemPage'
import { ExperimentsPage } from '@/pages/ExperimentsPage'
import { HomePage } from '@/pages/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'design-system',
        element: <DesignSystemPage />,
      },
      {
        path: 'experiments',
        element: <ExperimentsPage />,
      },
      {
        path: 'car-instalment/v1',
        element: <CarInstalmentV1Page />,
      },
      {
        path: 'car-instalment/v2',
        element: <CarInstalmentV2Page />,
      },
      {
        path: 'car-instalment/v3',
        element: <CarInstalmentV3Page />,
      },
    ],
  },
])
