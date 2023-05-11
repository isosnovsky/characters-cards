import type { PeopleResponse } from '../api'
import type { People } from '../model'

import { transformCharacter } from './characters-adapter'

export function transformPeople(response: PeopleResponse): People {
  return {
    ...response,
    results: response.results.map(transformCharacter),
  }
}
