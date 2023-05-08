import { Heading, Highlight, Stack, Text, HStack, Fade } from '@chakra-ui/react'

import { EditableInput } from '@/shared/ui'

import type { Character } from '../../model'

import type { ICharacterCardProps } from './character-card.types'

export function CharacterCard({
  character,
  onChangeAttribute,
}: ICharacterCardProps) {
  const handleChangeAttribute = (
    attributeKey: keyof Character,
    attributeValue: string
  ) => {
    onChangeAttribute(attributeKey, attributeValue)
  }

  const { name, height, mass, skin_color, eye_color, hair_color, birth_year } =
    character as Record<keyof Character, string>

  return (
    <Fade in>
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
              handleChangeAttribute('birth_year', attributeValue)
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
              handleChangeAttribute('height', attributeValue)
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
              handleChangeAttribute('mass', attributeValue)
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
              handleChangeAttribute('skin_color', attributeValue)
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
              handleChangeAttribute('eye_color', attributeValue)
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
              handleChangeAttribute('hair_color', attributeValue)
            }
          />
        </HStack>
      </Stack>
    </Fade>
  )
}
