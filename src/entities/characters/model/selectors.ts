import { createSelector } from '@reduxjs/toolkit'

import { charactersApi } from '../api'

const selectCharacterResult = (id: number) =>
  charactersApi.endpoints.detailCharacter.select(id)

export const selectCharacterSelector = (id: number) =>
  createSelector(selectCharacterResult(id), (character) => character)
