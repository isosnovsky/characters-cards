import { vi } from 'vitest'
import { screen, fireEvent, waitFor } from '@testing-library/react'

import { renderWithProviders } from '@/test-utils'

import { SearchInput } from '.'

vi.mock('react-router-dom', async (importOriginal) => {
  const router = await importOriginal()

  return {
    ...(router as object),
  }
})

describe('main page', () => {
  describe('ui', () => {
    describe('search input', () => {
      it('should set value from url', () => {
        const nameToFind = 'some wierd name'
        const route = `/?search=${nameToFind}`

        renderWithProviders(<SearchInput onChange={vi.fn} />, {
          route,
        })

        const input = screen.getByLabelText('search input')

        expect(input).toHaveValue(nameToFind)
      })
      it('should callback function to be called on user interactions', async () => {
        const onChangeCallback = vi.fn()

        renderWithProviders(<SearchInput onChange={onChangeCallback} />)

        const input: HTMLInputElement = screen.getByLabelText('search input')

        fireEvent.change(input, { target: { value: 'another name' } })

        expect(input.value).toBe('another name')
        await waitFor(() => {
          expect(onChangeCallback).toHaveBeenCalledWith('another name')
        })
      })
    })
  })
})
