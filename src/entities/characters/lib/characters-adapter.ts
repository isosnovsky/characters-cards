import { toCamelCase } from '@/shared/lib'

import type { ICharacterResponse } from '../api'
import type { Character } from '../model'

import { transformUrlToId } from './transform-url-to-id'

export function transformCharacter(response: ICharacterResponse): Character {
  const transformed = {
    id: transformUrlToId(response.url),
  }

  Object.entries(response).forEach(([key, value]) => {
    transformed[toCamelCase(key)] = value
  })

  return transformed as Character
}
