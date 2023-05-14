import { transformUrlToId } from './transform-url-to-id'

describe('entities', () => {
  describe('characters', () => {
    describe('lib', () => {
      describe('transform url to id', () => {
        it('should extract id with last slash', () => {
          const id = transformUrlToId(`https://swapi.dev/api/people/${123123}/`)

          expect(id).toBe('123123')
        })
        it('should extract id without last slash', () => {
          const id = transformUrlToId(`https://swapi.dev/api/people/${123123}`)

          expect(id).toBe('123123')
        })
        it('should return null if url does not provide', () => {
          const id = transformUrlToId('')

          expect(id).toBeNull()
        })
      })
    })
  })
})
