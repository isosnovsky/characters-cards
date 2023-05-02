import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from 'react-redux'

import {AppStore, AppDispatch} from "@/app/store";

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector
