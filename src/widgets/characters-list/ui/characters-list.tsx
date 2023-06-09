import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

import {
  useAllCharactersQuery,
  CharacterCardPreview,
  CharacterCardPreviewSkeleton,
} from '@/entities/characters'
import type { Character } from '@/entities/characters'
import { Pagination } from '@/shared/ui'

import { ICharactersListProps } from './characters-list.types'

const PER_PAGE = 10

/**
 * Render a paginated list of characters depending on search params.
 * @param onPageChange - handle page change.
 */

export function CharactersList({ onPageChange }: ICharactersListProps) {
  const [searchParams] = useSearchParams()
  const { data, isFetching } = useAllCharactersQuery(
    Object.fromEntries(searchParams)
  )

  return (
    <Box>
      <SimpleGrid
        position="relative"
        spacing="40px"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {!isFetching && data.count === 0 && (
          <Text
            textAlign="center"
            fontSize={40}
            fontFamily="Jediout"
            color="black"
            position="absolute"
            top={0}
            left="50%"
            transform="translate(-50%, -100%)"
          >
            Nothing found
          </Text>
        )}
        {isFetching ? (
          <CharacterCardPreviewSkeleton count={PER_PAGE} />
        ) : (
          data?.results?.map((character: Character) => (
            <CharacterCardPreview key={character.id} character={character} />
          ))
        )}
      </SimpleGrid>
      <Box margin="50px 0 0 0">
        <Pagination
          onPageChange={onPageChange}
          currentPage={Number(searchParams.get('page') || 1)}
          totalCount={data?.count}
          perPage={PER_PAGE}
        />
      </Box>
    </Box>
  )
}
