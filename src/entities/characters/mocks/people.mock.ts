import { faker } from '@faker-js/faker'

import type { IPeopleResponse } from '../api'

import { createPageItemsMap, filterItemsFromMap } from './lib'
import { mockCharacter } from './characters.mock'

const OFFSET_LIMIT = 10
const NOT_FOUND_ITEMS = {
  count: 0,
  next: null,
  previous: null,
  results: [],
}

export function mockPeople() {
  const count = faker.datatype.number({ min: 40, max: 100 })

  return createPageItemsMap(count, OFFSET_LIMIT, (totalAmount, perPage) => {
    return Array.from({ length: perPage }).map(mockCharacter)
  })
}

export function queryPeople(
  people: Map<string, IPeopleResponse>,
  searchParams: URLSearchParams
): IPeopleResponse {
  const searchQuery = searchParams.get('search')
  const pageQuery = searchParams.get('page') || '1'

  if (!searchQuery) {
    return people.get(pageQuery) || NOT_FOUND_ITEMS
  }

  const foundCharactersBySearchQuery = filterItemsFromMap(people, (value) =>
    value.name.toLowerCase().includes(searchQuery)
  )
  const foundItemsMap = createPageItemsMap(
    foundCharactersBySearchQuery.length,
    OFFSET_LIMIT,
    (totalAmount, perPage) => {
      return foundCharactersBySearchQuery.splice(0, perPage)
    }
  )

  return foundItemsMap.get(pageQuery) || NOT_FOUND_ITEMS
}
