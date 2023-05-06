import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Character } from '@/pages/character'
import { Main } from '@/pages/main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/character/:characterId',
        element: <Character />,
      },
    ],
  },
])
