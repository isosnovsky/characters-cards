import { createSelector } from '@reduxjs/toolkit'

import { charactersApi } from '../api'

const selectDetailCharacterResult = (id: number) =>
  charactersApi.endpoints.detailCharacter.select(id)
const selectFoundCharacterResult = () =>
  charactersApi.endpoints.foundCharacters.select()

export const selectCharacterSelector = (id: number) =>
  createSelector(selectDetailCharacterResult(id), (character) => character)

export const selectFoundSelector = createSelector(
  selectFoundCharacterResult(),
  (list) => list
)
