import { createBrowserRouter } from 'react-router-dom'

import { Character } from '@/pages/character'
import { Main } from '@/pages/main'
import { NotFound } from '@/pages/not-found'

export const router = createBrowserRouter([
  {
    path: '/characters-cards/',
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: '/character/:characterId',
    errorElement: <NotFound />,
    element: <Character />,
  },
])
