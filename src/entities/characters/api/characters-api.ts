import { query } from '@/shared/api'

import type { People, Character } from '../model'
import { transformCharacter, transformPeople } from '../lib'

import type { PeopleResponse, CharacterResponse } from '.'

export const charactersApi = query.injectEndpoints({
  endpoints: (build) => ({
    allCharacters: build.query<People, Record<string, string>>({
      providesTags: ['People'],
      query: (params) => {
        return {
          url: `/people`,
          params,
        }
      },
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
} = charactersApi
