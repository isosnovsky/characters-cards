import { createBrowserRouter } from 'react-router-dom'

import { Character } from '@/pages/character'
import { Main } from '@/pages/main'
import { NotFound } from '@/pages/not-found'

export const router = createBrowserRouter([
  {
    path: `/${import.meta.env.BASE_URL}`,
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: `/${import.meta.env.BASE_URL}/character/:characterId`,
    errorElement: <NotFound />,
    element: <Character />,
  },
])
