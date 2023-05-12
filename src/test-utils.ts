import { render, RenderOptions } from '@testing-library/react'
import React from 'react'

import { withProviders } from '@/app/providers'

export function renderWithProviders(
  ui: React.ReactElement,
  renderOptions?: RenderOptions
) {
  const AppWithProvider = withProviders()

  return render(ui, { wrapper: AppWithProvider, ...renderOptions })
}
