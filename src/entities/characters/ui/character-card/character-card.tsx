import { Heading, Highlight, Stack, Text, HStack } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

import { EditableInput } from '@/shared/ui'
import { useDebounceCallback } from '@/shared/hooks'

import type { Character } from '../../model'
import { useDetailCharacterQuery, charactersApi } from '../../api'

import { ICharacterCardProps } from './character-card.types'

export function CharacterCard({ id = null }: ICharacterCardProps) {
  const { data, isLoading } = useDetailCharacterQuery(id)
  const dispatch = useDispatch()

  const handleChangeAttribute = (
    attributeKey: keyof Character,
    attributeValue: string
  ) => {
    dispatch(
      charactersApi.util.updateQueryData(
        'detailCharacter',
        id,
        (draftPosts: Character) => {
          draftPosts[attributeKey] = attributeValue
        }
      )
    )
    dispatch(charactersApi.util.invalidateTags(['People']))
  }

  const debouncedChangedAttribute = useDebounceCallback(
    handleChangeAttribute,
    300,
    [handleChangeAttribute]
  )

  if (isLoading) {
    return 'loading'
  }

  const { name, height, mass, skin_color, eye_color, hair_color, birth_year } =
    data as Record<keyof Character, string>

  return (
    <Stack fontFamily="Jedi" fontSize="30px">
      <Heading fontFamily="Jedi" fontSize="100px" marginBottom={20}>
        {name}
      </Heading>
      <HStack>
        <Text>
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
        </Text>
        <EditableInput
          defaultValue={birth_year}
          onChange={(attributeValue) =>
            debouncedChangedAttribute('birth_year', attributeValue)
          }
        />
      </HStack>
      <HStack>
        <Text>
          <Highlight
            query="height"
            styles={{
              color: 'white',
              textShadow: 'none',
              bg: '#2a35f2',
            }}
          >
            height:
          </Highlight>{' '}
        </Text>
        <EditableInput
          defaultValue={height}
          onChange={(attributeValue) =>
            debouncedChangedAttribute('height', attributeValue)
          }
        />
      </HStack>
      <HStack>
        <Text>
          <Highlight
            query="mass"
            styles={{
              color: 'white',
              textShadow: 'none',
              bg: '#2a35f2',
            }}
          >
            mass:
          </Highlight>{' '}
        </Text>
        <EditableInput
          defaultValue={mass}
          onChange={(attributeValue) =>
            debouncedChangedAttribute('mass', attributeValue)
          }
        />
      </HStack>
      <HStack>
        <Text>
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
        </Text>
        <EditableInput
          defaultValue={skin_color}
          onChange={(attributeValue) =>
            debouncedChangedAttribute('skin_color', attributeValue)
          }
        />
      </HStack>
      <HStack>
        <Text>
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
        </Text>
        <EditableInput
          defaultValue={eye_color}
          onChange={(attributeValue) =>
            debouncedChangedAttribute('eye_color', attributeValue)
          }
        />
      </HStack>
      <HStack>
        <Text>
          <Highlight
            query="Hair color"
            styles={{
              color: 'white',
              textShadow: 'none',
              bg: '#2a35f2',
            }}
          >
            Hair color:
          </Highlight>{' '}
        </Text>
        <EditableInput
          defaultValue={hair_color}
          onChange={(attributeValue) =>
            debouncedChangedAttribute('hair_color', attributeValue)
          }
        />
      </HStack>
    </Stack>
  )
}
