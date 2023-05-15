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
import { useDebounceCallback } from '@/shared/lib'
import type { Character } from '@/entities/characters'

import { type CharacterFields, schema } from '../../lib'

import type { IEditCharacterFormProps } from './edit-character-form.types'

/**
 * Edit Character form.
 * Use submitting on change instead of submit on submit for the sake of design. In the better world I would refuse it
 * @param character - character to edit
 * @param onChangeAttribute - debounced onChange callback to submit changes
 */

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
        <Heading
          fontFamily="Jedi"
          fontSize={['50px', '100px']}
          marginBottom={[15, 20]}
        >
          {name}
        </Heading>
        <form onChange={debouncedSubmit}>
          <FormControl isInvalid={Boolean(errors.birthYear)}>
            <Grid
              gridTemplateColumns="auto 2fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel
                  htmlFor="birthYear"
                  fontSize={['20px', '30px']}
                  marginInlineEnd={0}
                >
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
                  fontSize={['20px', '30px']}
                  isInvalid={Boolean(errors.birthYear)}
                  {...register('birthYear')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="#E53E3E" margin="0px 0 20px">
                  {errors.birthYear && errors.birthYear.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.height)}>
            <Grid
              gridTemplateColumns="auto 2fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel
                  htmlFor="height"
                  fontSize={['20px', '30px']}
                  marginInlineEnd={0}
                >
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
                  fontSize={['20px', '30px']}
                  isInvalid={Boolean(errors.height)}
                  {...register('height')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="#E53E3E" margin="0px 0 20px">
                  {errors.height && errors.height.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.mass)}>
            <Grid
              gridTemplateColumns="auto 2fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel
                  htmlFor="mass"
                  fontSize={['20px', '30px']}
                  marginInlineEnd={0}
                >
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
                  fontSize={['20px', '30px']}
                  isInvalid={Boolean(errors.mass)}
                  {...register('mass')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="#E53E3E" margin="0px 0 20px">
                  {errors.mass && errors.mass.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.skinColor)}>
            <Grid
              gridTemplateColumns="auto 2fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel
                  htmlFor="skinColor"
                  fontSize={['20px', '30px']}
                  marginInlineEnd={0}
                >
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
                  fontSize={['20px', '30px']}
                  isInvalid={Boolean(errors.skinColor)}
                  {...register('skinColor')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="#E53E3E" margin="0px 0 20px">
                  {errors.skinColor && errors.skinColor.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.eyeColor)}>
            <Grid
              gridTemplateColumns="auto 2fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel
                  htmlFor="eyeColor"
                  fontSize={['20px', '30px']}
                  marginInlineEnd={0}
                >
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
                  fontSize={['20px', '30px']}
                  isInvalid={Boolean(errors.eyeColor)}
                  {...register('eyeColor')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="#E53E3E" margin="0px 0 20px">
                  {errors.eyeColor && errors.eyeColor.message}
                </FormErrorMessage>
              </GridItem>
            </Grid>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.hairColor)}>
            <Grid
              gridTemplateColumns="auto 2fr"
              gridTemplateAreas={`'key value' 'error error'`}
            >
              <GridItem gridArea="key">
                <FormLabel
                  htmlFor="hairColor"
                  fontSize={['20px', '30px']}
                  marginInlineEnd={0}
                >
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
                  fontSize={['20px', '30px']}
                  isInvalid={Boolean(errors.hairColor)}
                  {...register('hairColor')}
                />
              </GridItem>
              <GridItem gridArea="error">
                <FormErrorMessage color="#E53E3E" margin="0px 0 20px">
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
