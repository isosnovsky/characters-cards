import { Global, css } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppWithProviders } from '@/app'

const root = document.getElementById('root')
const globalStyles = css`
  @font-face {
    font-family: 'Jedi';
    font-style: normal;
    src: url('${import.meta.env.BASE_URL}fonts/Starjedi.ttf');
  }
  @font-face {
    font-family: 'Jedihol';
    font-style: normal;
    src: url('${import.meta.env.BASE_URL}fonts/Starjhol.ttf');
  }
  @font-face {
    font-family: 'Jediout';
    font-style: italic;
    src: url('${import.meta.env.BASE_URL}fonts/Starjout.ttf');
  }
`

if (import.meta.env.DEV && import.meta.env.VITE_MODE === 'debug') {
  const { worker } = await import('./app/mock')

  // eslint-disable-next-line no-void
  void worker.start()
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <AppWithProviders />
  </React.StrictMode>
)
