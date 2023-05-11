import { number, object, string } from 'yup'

interface CharacterFields {
  height: string
  mass: string
  birthYear: string
  eyeColor: string
  hairColor: string
  skinColor: string
}

const schema = object<CharacterFields>()
  .shape({
    height: number().typeError('Height must be a number'),
    mass: number().typeError('Mass must be a number'),
    birthYear: string().max(10),
    eyeColor: string()
      .matches(/^[a-zA-Z]*$/, 'Must be plain oneword value')
      .min(3)
      .max(10),
    hairColor: string()
      .matches(/^[a-zA-Z]*$/, 'Must be plain oneword value')
      .min(3)
      .max(10),
    skinColor: string()
      .matches(/^[a-zA-Z]*$/, 'Must be plain oneword value')
      .min(3)
      .max(10),
  })
  .required()

export { schema, type CharacterFields }
