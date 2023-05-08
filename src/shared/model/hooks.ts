import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from 'react-redux'

// eslint-disable-next-line boundaries/element-types
import { AppStore, AppDispatch } from '@/app/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector
