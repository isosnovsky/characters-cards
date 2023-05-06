import { Global, css } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppWithProviders } from '@/app'

const root = document.getElementById('root') as HTMLElement
const globalStyles = css`
  @font-face {
    font-family: 'Jedi';
    font-style: normal;
    src: url('/fonts/Starjedi.ttf'), url('/fonts/Starjhol.ttf');
  }
`

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <AppWithProviders />
  </React.StrictMode>
)
