import { query } from '@/shared/api'

import type { People, Character } from '../model'
import { transformCharacter, transformPeople } from '../lib'

import type { PeopleResponse, CharacterResponse } from '.'

export const charactersApi = query.injectEndpoints({
  endpoints: (build) => ({
    allCharacters: build.query<People, number>({
      providesTags: ['People'],
      query: (page = 1) => ({
        url: `/people/?page=${page}`,
      }),
      transformResponse(characters: PeopleResponse) {
        return transformPeople(characters)
      },
    }),
    foundCharacters: build.mutation<People, string>({
      query: (attribute) => ({
        url: `people/?search=${attribute}`,
      }),
      transformResponse(characters: PeopleResponse) {
        return transformPeople(characters)
      },
    }),
    detailCharacter: build.query<Character, string>({
      providesTags: ['Character'],
      query: (characterId) => ({
        url: `/people/${characterId}`,
      }),
      transformResponse(character: CharacterResponse) {
        return transformCharacter(character)
      },
    }),
  }),
})

export const {
  useAllCharactersQuery,
  useDetailCharacterQuery,
  useFoundCharactersMutation,
} = charactersApi
