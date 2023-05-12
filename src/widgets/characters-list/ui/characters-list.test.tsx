import { screen } from '@testing-library/react'

import { renderWithProviders } from '@/test-utils'

import { CharactersList } from './characters-list'

describe('Characters-list', () => {
  it('renders headline', () => {
    renderWithProviders(<CharactersList onPageChange={console.log} />)

    screen.debug()
  })
})
