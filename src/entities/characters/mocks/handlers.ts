import { rest } from 'msw'

import { config } from '@/shared/lib'

import { mockPeople, queryPeople } from './people.mock'
import { queryCharacterById } from './characters.mock'

export const people = mockPeople()

export const handlers = [
  rest.get(`${config.API_ENDPOINT}/people`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(queryPeople(people, req.url.searchParams))
    )
  }),
  rest.get(`${config.API_ENDPOINT}/people/:characterId`, (req, res, ctx) => {
    const { characterId } = req.params as { characterId: string }

    return res(
      ctx.status(200),
      ctx.json(queryCharacterById(people, characterId))
    )
  }),
]
