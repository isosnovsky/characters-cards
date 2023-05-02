import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";

import {themeSlice} from "@/entities/theme";
import {rootReducer} from "@/app/store/rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [themeSlice.name],
}

function createStore() {
    return configureStore({
        reducer: persistReducer(
            persistConfig,
            rootReducer
        ) as unknown as typeof rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    })
}

export const store = createStore()
export const persistedStore = persistStore(store)
