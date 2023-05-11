import { combineReducers } from '@reduxjs/toolkit'

import { query } from '@/shared/api'

export const rootReducer = combineReducers({
  [query.reducerPath]: query.reducer,
})
