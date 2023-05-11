import { createSelector } from '@reduxjs/toolkit'

import { charactersApi } from '../api'

const selectDetailCharacterResult = (id: string) =>
  charactersApi.endpoints.detailCharacter.select(id)

export const selectCharacterSelector = (id: string) =>
  createSelector(selectDetailCharacterResult(id), (character) => character)
