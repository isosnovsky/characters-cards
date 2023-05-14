import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom'
import 'whatwg-fetch'

import { store } from '@/app/store'
import { charactersApi, handlers } from '@/entities/characters'

expect.extend(matchers)

const server = setupServer(...handlers)

afterEach(() => {
  cleanup()
})

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: unknown) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
  server.listen()
})

afterEach(() => {
  cleanup()
  server.resetHandlers()
  store.dispatch(charactersApi.util.resetApiState())
})

afterAll(() => server.close())
