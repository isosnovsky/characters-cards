import type { IState } from './dataTypes'
import { store } from './store'

export type AppStore = ReturnType<typeof store>

/**
 * App typed `dispatch`.
 */
export type AppDispatch = typeof store.dispatch
/**
 * Thunk API with global state.
 */
export interface IThunkApiConfig {
  dispatch: AppDispatch
  state: IState
}

export interface IAbortableAsyncThunk {
  abort(reason?: string): void
}
