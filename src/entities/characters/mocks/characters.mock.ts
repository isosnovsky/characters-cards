/* eslint-disable camelcase */

import { faker } from '@faker-js/faker'

import type { ICharacterResponse, IPeopleResponse } from '../api'
import { transformCharacter } from '../lib'

import { filterItemsFromMap } from './lib'

export function mockCharacter(): ICharacterResponse {
  const id = faker.datatype.uuid()
  const url = `https://swapi.dev/api/people/${id}/`
  const name = faker.name.fullName()
  const height = faker.random.numeric()
  const mass = faker.random.numeric()
  const hair_color = faker.color.human()
  const skin_color = faker.color.human()
  const eye_color = faker.color.human()
  const birth_year = faker.date
    .birthdate({ mode: 'year' })
    .getFullYear()
    .toString()
  const gender = faker.name.gender()
  const homeworld = faker.address.country()
  const created = faker.date.recent().toDateString()
  const edited = faker.date.recent().toDateString()

  return {
    url,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    created,
    edited,
    films: [],
    species: [],
    starships: [],
    vehicles: [],
  }
}

export function queryCharacterById(
  people: Map<string, IPeopleResponse>,
  id: string
): ICharacterResponse {
  return filterItemsFromMap(
    people,
    (value) => transformCharacter(value).id === id
  )[0]
}
