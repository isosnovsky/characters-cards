import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom'
import { fetch } from 'cross-fetch'

import { store } from '@/app/store'
import { charactersApi, handlers } from '@/entities/characters'

expect.extend(matchers)
global.fetch = fetch

const server = setupServer(...handlers)

afterEach(() => {
  cleanup()
})

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  cleanup()
  server.resetHandlers()
  store.dispatch(charactersApi.util.resetApiState())
})

afterAll(() => server.close())
