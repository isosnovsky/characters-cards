import { createBrowserRouter, createHashRouter } from 'react-router-dom'

import { Character } from '@/pages/character'
import { Main } from '@/pages/main'
import { NotFound } from '@/pages/not-found'

const createRouter = import.meta.env.PROD
  ? createHashRouter
  : createBrowserRouter

export const router = createRouter([
  {
    path: `/${import.meta.env.BASE_URL}`,
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: `/${import.meta.env.BASE_URL}character/:characterId`,
    errorElement: <NotFound />,
    element: <Character />,
  },
])
