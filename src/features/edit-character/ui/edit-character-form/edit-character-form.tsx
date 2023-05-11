import {
  Heading,
  Highlight,
  Stack,
  Fade,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'

import { EditableInput } from '@/shared/ui'
import { useDebounceCallback } from '@/shared/hooks'
import type { Character } from '@/entities/characters'

import { type CharacterFields, schema } from '../../lib'

import type { IEditCharacterFormProps } from './edit-character-form.types'

export function EditCharacterForm({
  character,
  onChangeAttribute,
}: IEditCharacterFormProps) {
  const handleChangeAttribute = (characterAttributes: Character) => {
    onChangeAttribute(characterAttributes)
  }

  const { name, height, mass, skinColor, eyeColor, hairColor, birthYear } =
    character
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<CharacterFields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      height,
      mass,
      skinColor,
      eyeColor,
      hairColor,
      birthYear,
    },
  })

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    trigger()
  }, [trigger])

  const submit = handleSubmit(handleChangeAttribute)
  const debouncedSubmit = useDebounceCallback(submit, 500, [submit])

  return (
    <Fade in>
      <Stack fontFamily="Jedi">
        <Heading fontFamily="Jedi" fontSize="100px" marginBottom={20}>
          {name}
        </Heading>
        <form onChange={debouncedSubmit}>
          <FormControl isInvalid={Boolean(errors.birthYear)}>
            <Grid
              gridTemplateColumns="1fr 2 fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel htmlFor="birthYear" fontSize="30px">
                  <Highlight
                    query="Birth year"
                    styles={{
                      color: 'white',
                      textShadow: 'none',
                      bg: '#2a35f2',
                    }}
                  >
                    Birth year:
                  </Highlight>{' '}
                </FormLabel>
              </GridItem>
              <GridItem gridArea="value">
                <EditableInput
                  id="birthYear"
                  placeholder="birthYear"
                  fontSize="30px"
                  isInvalid={Boolean(errors.birthYear)}
                  {...register('birthYear')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="white" margin="0px 0 20px">
                  {errors.birthYear && errors.birthYear.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.height)}>
            <Grid
              gridTemplateColumns="1fr 2 fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel htmlFor="height" fontSize="30px">
                  <Highlight
                    query="Height"
                    styles={{
                      color: 'white',
                      textShadow: 'none',
                      bg: '#2a35f2',
                    }}
                  >
                    Height:
                  </Highlight>{' '}
                </FormLabel>
              </GridItem>
              <GridItem gridArea="value">
                <EditableInput
                  id="height"
                  placeholder="height"
                  fontSize="30px"
                  isInvalid={Boolean(errors.height)}
                  {...register('height')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="white" margin="0px 0 20px">
                  {errors.height && errors.height.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.mass)}>
            <Grid
              gridTemplateColumns="1fr 2 fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel htmlFor="mass" fontSize="30px">
                  <Highlight
                    query="Mass"
                    styles={{
                      color: 'white',
                      textShadow: 'none',
                      bg: '#2a35f2',
                    }}
                  >
                    Mass:
                  </Highlight>{' '}
                </FormLabel>
              </GridItem>
              <GridItem gridArea="value">
                <EditableInput
                  id="mass"
                  placeholder="mass"
                  fontSize="30px"
                  isInvalid={Boolean(errors.mass)}
                  {...register('mass')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="white" margin="0px 0 20px">
                  {errors.mass && errors.mass.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.skinColor)}>
            <Grid
              gridTemplateColumns="1fr 2 fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel htmlFor="skinColor" fontSize="30px">
                  <Highlight
                    query="Skin color"
                    styles={{
                      color: 'white',
                      textShadow: 'none',
                      bg: '#2a35f2',
                    }}
                  >
                    Skin color:
                  </Highlight>{' '}
                </FormLabel>
              </GridItem>
              <GridItem gridArea="value">
                <EditableInput
                  id="skinColor"
                  placeholder="skinColor"
                  fontSize="30px"
                  isInvalid={Boolean(errors.skinColor)}
                  {...register('skinColor')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="white" margin="0px 0 20px">
                  {errors.skinColor && errors.skinColor.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.eyeColor)}>
            <Grid
              gridTemplateColumns="1fr 2 fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel htmlFor="eyeColor" fontSize="30px">
                  <Highlight
                    query="Eye color"
                    styles={{
                      color: 'white',
                      textShadow: 'none',
                      bg: '#2a35f2',
                    }}
                  >
                    Eye color:
                  </Highlight>{' '}
                </FormLabel>
              </GridItem>
              <GridItem gridArea="value">
                <EditableInput
                  id="eyeColor"
                  placeholder="eyeColor"
                  fontSize="30px"
                  isInvalid={Boolean(errors.eyeColor)}
                  {...register('eyeColor')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="white" margin="0px 0 20px">
                  {errors.eyeColor && errors.eyeColor.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.hairColor)}>
            <Grid
              gridTemplateColumns="1fr 2 fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel htmlFor="hairColor" fontSize="30px">
                  <Highlight
                    query="Heir color"
                    styles={{
                      color: 'white',
                      textShadow: 'none',
                      bg: '#2a35f2',
                    }}
                  >
                    Heir color:
                  </Highlight>{' '}
                </FormLabel>
              </GridItem>
              <GridItem gridArea="value">
                <EditableInput
                  id="hairColor"
                  placeholder="hairColor"
                  fontSize="30px"
                  isInvalid={Boolean(errors.hairColor)}
                  {...register('hairColor')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="white" margin="0px 0 20px">
                  {errors.hairColor && errors.hairColor.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
        </form>
      </Stack>
    </Fade>
  )
}
