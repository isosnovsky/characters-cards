import { vi } from 'vitest'
import { screen, fireEvent, waitFor } from '@testing-library/react'

import { renderWithProviders } from '@/test-utils'

import { Main } from '.'

vi.mock('react-router-dom', async (importOriginal) => {
  const router = await importOriginal()

  return {
    ...(router as object),
  }
})

describe('main page', () => {
  it('should set input value to url search params', async () => {
    const setSearchParams = vi.fn()

    vi.spyOn(URLSearchParams.prototype, 'set').mockImplementation(
      setSearchParams
    )
    renderWithProviders(<Main />)

    const input: HTMLInputElement = screen.getByLabelText('search input')

    fireEvent.change(input, { target: { value: 'another name' } })

    await waitFor(() => {
      expect(setSearchParams).toHaveBeenCalledWith('search', 'another name')
    })
  })
  it('should set input value to url search params', async () => {
    const setSearchParams = vi.fn()

    vi.spyOn(URLSearchParams.prototype, 'set').mockImplementation(
      setSearchParams
    )
    renderWithProviders(<Main />)

    const input: HTMLInputElement = screen.getByLabelText('search input')

    fireEvent.change(input, { target: { value: 'another name' } })

    await waitFor(() => {
      expect(setSearchParams).toHaveBeenCalledWith('search', 'another name')
    })
  })
})
