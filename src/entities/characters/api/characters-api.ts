import { query } from '@/shared/api'

import { type Character, People } from '../model/types'

export const charactersApi = query.injectEndpoints({
  endpoints: (build) => ({
    allCharacters: build.query<People, number>({
      providesTags: ['People'],
      query: (page = 1) => ({
        url: `/people/?page=${page}`,
      }),
      transformResponse(characters: People, d, a) {
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
      providesTags: ['Character'],
      query: (characterId) => ({
        url: `/people/${characterId}`,
      }),
    }),
  }),
})

export const { useAllCharactersQuery, useDetailCharacterQuery } = charactersApi
