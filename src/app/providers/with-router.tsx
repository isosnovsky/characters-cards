import { RouterProvider } from 'react-router-dom'

import { router } from '@/pages'

export const withRouter = () => () => {
  return <RouterProvider router={router} />
}
