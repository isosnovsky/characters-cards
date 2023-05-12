import { toCamelCase } from '@/shared/lib'

import type { ICharacterResponse } from '../api'
import type { Character } from '../model'

export function transformCharacter(response: ICharacterResponse): Character {
  const transformed = {
    id: response.url.split('/').at(-2),
  }

  Object.entries(response).forEach(([key, value]) => {
    transformed[toCamelCase(key)] = value
  })

  return transformed as Character
}
