import { vi } from 'vitest'
import { screen } from '@testing-library/react'

import { renderWithProviders } from '@/test-utils'
import { queryPeople, people } from '@/entities/characters'

import { CharactersList } from '.'

vi.mock('react-router-dom', async (importOriginal) => {
  const router = await importOriginal()

  return {
    ...(router as object),
  }
})

describe('Characters list', () => {
  describe('first page', () => {
    const page = '1'
    const route = `/?page=${page}`
    const searchParams = new URLSearchParams({ page })

    it('should render first page', async () => {
      renderWithProviders(<CharactersList onPageChange={console.log} />, {
        route,
      })

      const firstPagePeople = await screen.findAllByRole('link')
      const mockedFirstPagePeople = queryPeople(people, searchParams)

      expect(firstPagePeople.length).toEqual(
        mockedFirstPagePeople.results.length
      )
    })
    it('should render navigation with first current button', async () => {
      renderWithProviders(<CharactersList onPageChange={console.log} />, {
        route,
      })

      const navigation = await screen.findByRole('button', { current: true })

      expect(navigation).toHaveTextContent('1')
    })
  })
  describe('second page', () => {
    const page = '2'
    const route = `/?page=${page}`
    const searchParams = new URLSearchParams({ page })

    it('should render second page', async () => {
      renderWithProviders(<CharactersList onPageChange={console.log} />, {
        route,
      })

      const firstPagePeople = await screen.findAllByRole('link')
      const mockedFirstPagePeople = queryPeople(people, searchParams)

      expect(firstPagePeople.length).toEqual(
        mockedFirstPagePeople.results.length
      )
    })
    it('should render navigation with second current button', async () => {
      renderWithProviders(<CharactersList onPageChange={console.log} />, {
        route,
      })

      const navigation = await screen.findByRole('button', { current: true })

      expect(navigation).toHaveTextContent('2')
    })
  })
})
