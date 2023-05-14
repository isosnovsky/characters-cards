import { RouterProvider } from 'react-router-dom'
import React from 'react'

import { router } from '@/pages'

export const withRouter = () => () => {
  return <RouterProvider router={router} />
}
