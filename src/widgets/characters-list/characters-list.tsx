import { Box, SimpleGrid } from '@chakra-ui/react'

import {
  useAllCharactersQuery,
  CharacterCardPreview,
  CharacterCardPreviewSkeleton,
} from '@/entities/characters'
import type { Character } from '@/entities/characters'
import { Pagination } from '@/shared/ui'

import { ICharactersListProps } from './characters-list.types'

const PER_PAGE = 10

export function CharactersList({
  pageNumber = 1,
  onPageChange,
}: ICharactersListProps) {
  const { data, isFetching } = useAllCharactersQuery(pageNumber)

  return (
    <Box>
      <SimpleGrid minChildWidth="200px" spacing="40px">
        {isFetching ? (
          <CharacterCardPreviewSkeleton count={PER_PAGE} />
        ) : (
          data?.results.map((character: Character) => (
            <CharacterCardPreview key={character.id} character={character} />
          ))
        )}
      </SimpleGrid>
      <Box margin="50px 0 0 0">
        <Pagination
          onPageChange={onPageChange}
          currentPage={pageNumber}
          totalCount={data?.count}
          perPage={PER_PAGE}
        />
      </Box>
    </Box>
  )
}
