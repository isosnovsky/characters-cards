import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from './baseQuery'

export const query = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['People', 'Character'],
  endpoints: () => ({}),
})
