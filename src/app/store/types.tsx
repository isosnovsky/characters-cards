import { createStore } from './store'
import { rootReducer } from './rootReducer'

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>

/**
 * App typed `dispatch`.
 */
export type AppDispatch = AppStore['dispatch']