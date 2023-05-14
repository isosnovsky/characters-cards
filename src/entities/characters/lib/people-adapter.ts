import type { IPeopleResponse } from '../api'
import type { People } from '../model'

import { transformCharacter } from './characters-adapter'

export function transformPeople(response: IPeopleResponse): People {
  return {
    ...response,
    results: response.results.map(transformCharacter),
  }
}
