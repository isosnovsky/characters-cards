import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistedStore } from '@/app/store'

export const withStore = (component: () => React.ReactNode) => () =>
  (
    <Provider store={store}>
      {component()}
      <PersistGate loading={null} persistor={persistedStore}>
        {component}
      </PersistGate>
    </Provider>
  )
