import { combineReducers } from '@reduxjs/toolkit'
import { themeSlice } from '@/entities/theme'

export const rootReducer = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
})
