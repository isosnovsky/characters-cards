import { mockCharacter } from '../mocks'

import { transformCharacter } from './characters-adapter'

describe('entities', () => {
  describe('characters', () => {
    describe('characters-adapter', () => {
      const character = mockCharacter()

      it('should transform snake case to camel case', () => {
        const transformedCharacter = transformCharacter(character)

        expect(transformedCharacter.birthYear).toBe(character.birth_year)
      })

      it('should has id property', () => {
        const transformedCharacter = transformCharacter(character)

        expect(transformedCharacter.id).toBeDefined()
      })
    })
  })
})
