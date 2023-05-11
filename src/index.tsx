import { Global, css } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppWithProviders } from '@/app'

const root = document.getElementById('root')
const globalStyles = css`
  @font-face {
    font-family: 'Jedi';
    font-style: normal;
    src: url('/characters-cards/fonts/Starjedi.ttf');
  }
  @font-face {
    font-family: 'Jedihol';
    font-style: normal;
    src: url('/characters-cards/fonts/Starjhol.ttf');
  }
  @font-face {
    font-family: 'Jediout';
    font-style: italic;
    src: url('/characters-cards/fonts/Starjout.ttf');
  }
`

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <AppWithProviders />
  </React.StrictMode>
)
