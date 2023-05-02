import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppWithProviders } from '@/app';

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <AppWithProviders />
    </React.StrictMode>
)
