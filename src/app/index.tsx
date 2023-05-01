import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ReduxProvider store={{}}>
            <RouterProvider router={appRouter} />
        </ReduxProvider>
    </React.StrictMode>
)