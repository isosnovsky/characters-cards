import { Container, Box, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import {
  EditCharacterForm,
  EditCharacterSkeleton,
} from '@/features/edit-character'
import { charactersApi, useDetailCharacterQuery } from '@/entities/characters'
import type { Character } from '@/entities/characters'
import { useAppDispatch } from '@/shared/model'
import { Background } from '@/shared/ui'

import { BackButton } from './ui'

export function Character() {
  const { characterId } = useParams()
  const dispatch = useAppDispatch()
  const { data, isFetching } = useDetailCharacterQuery(characterId)

  const handleChangeAttribute = (character: Character) => {
    dispatch(
      charactersApi.util.updateQueryData(
        'detailCharacter',
        characterId,
        (draftCharacter: Character) => ({
          ...draftCharacter,
          ...character,
        })
      )
    )
    dispatch(charactersApi.util.invalidateTags(['People']))
  }

  return (
    <>
      <Background bg="linear-gradient(-45deg, #ee7752, #3ce7be, #23a6d5, #23d5ab)" />
      <Container maxW="900px">
        <VStack spacing={10}>
          <BackButton />
          <Box maxWidth="500px" width="100%">
            {isFetching ? (
              <EditCharacterSkeleton />
            ) : (
              <EditCharacterForm
                character={data}
                onChangeAttribute={handleChangeAttribute}
              />
            )}
          </Box>
        </VStack>
      </Container>
    </>
  )
}
