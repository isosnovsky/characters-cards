import { query } from '@/shared/api'

import { type Character } from '../model/types'

export const categoryApi = query.injectEndpoints({
  endpoints: (build) => ({
    allCharacters: build.query<unknown, void>({
      query: (page) => ({
        url: `/people/?page=${page}`,
      }),
      transformResponse(characters) {
        return {
          ...characters,
          results: characters.results.map((character) => ({
            id: character.url.split('/').at(-2),
            ...character,
          })),
        }
      },
    }),
    detailCharacter: build.query<Character, number>({
      query: (characterId) => ({
        url: `/people/${characterId}`,
      }),
    }),
  }),
})

export const { useAllCharactersQuery, useDetailCharacterQuery } = categoryApi
