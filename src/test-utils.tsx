import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, RenderOptions } from '@testing-library/react'
import { compose } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import { withChakra, withStore } from '@/app/providers'

const withProviders = compose(withChakra, withStore)

export function renderWithProviders(
  ui: React.ReactElement,
  // eslint-disable-next-line default-param-last
  { route = '/' } = {},
  renderOptions?: RenderOptions
) {
  const AppWithProviders = withProviders(({ children }) => (
    <BrowserRouter> {children}</BrowserRouter>
  ))

  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AppWithProviders, ...renderOptions }),
  }
}
