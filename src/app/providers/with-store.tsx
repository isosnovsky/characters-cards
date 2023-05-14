import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// eslint-disable-next-line boundaries/element-types
import { store, persistedStore } from '@/app/store'

export const withStore = (component: (props) => React.ReactNode) => (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {component(props)}
      </PersistGate>
    </Provider>
  )
}
