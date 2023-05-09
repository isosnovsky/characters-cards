import { query } from '@/shared/api'

import type { People, Character } from '../model'

export const charactersApi = query.injectEndpoints({
  endpoints: (build) => ({
    allCharacters: build.query<People, number>({
      providesTags: ['People'],
      query: (page = 1) => ({
        url: `/people/?page=${page}`,
      }),
      transformResponse(characters: People) {
        return {
          ...characters,
          results: characters.results.map((character) => ({
            id: character.url.split('/').at(-2),
            ...character,
          })),
        }
      },
    }),
    foundCharacters: build.mutation<People, string>({
      query: (attribute) => ({
        url: `people/?search=${attribute}`,
      }),
      transformResponse(characters: People) {
        return {
          ...characters,
          results: characters.results.map((character) => ({
            id: character.url.split('/').at(-2),
            ...character,
          })),
        }
      }
    }),
    detailCharacter: build.query<Character, number>({
      providesTags: ['Character'],
      query: (characterId) => ({
        url: `/people/${characterId}`,
      }),
      transformResponse(character: Character) {
        return {
          ...character,
          id: character.url.split('/').at(-2),
        }
      },
    }),
  }),
})

export const { useAllCharactersQuery, useDetailCharacterQuery, useFoundCharactersMutation } = charactersApi
