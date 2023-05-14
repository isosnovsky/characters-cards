import { configureStore, type PreloadedState } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from '@/app/store/rootReducer'
import { query } from '@/shared/api'

import type { RootState } from '.'

const persistConfig = {
  key: 'root',
  storage,
}

export function createStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistReducer(
      persistConfig,
      rootReducer
    ) as unknown as typeof rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(query.middleware),
  })
}

export const store = createStore()
export const persistedStore = persistStore(store)
