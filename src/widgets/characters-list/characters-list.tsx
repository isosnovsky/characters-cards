import { Box, SimpleGrid } from '@chakra-ui/react'
import { useMemo } from 'react'

import {
  useAllCharactersQuery,
  CharacterCardPreview,
  CharacterCardPreviewSkeleton,
  useFoundCharactersMutation,
} from '@/entities/characters'
import type { Character } from '@/entities/characters'
import { Pagination } from '@/shared/ui'

import { ICharactersListProps } from './characters-list.types'

const PER_PAGE = 10

export function CharactersList({
  pageNumber = 1,
  onPageChange,
  attr,
}: ICharactersListProps) {
  const { data, isFetching } = useAllCharactersQuery(pageNumber)
  const [, result] = useFoundCharactersMutation({
    fixedCacheKey: 'shared-found-characters',
  })
  const characters = useMemo(() => {
    return {
      count: !attr ? data?.count : result?.data?.count,
      results: !attr ? data?.results : result?.data?.results,
    }
  }, [data, result, attr])

  return (
    <Box>
      <SimpleGrid
        spacing="40px"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {isFetching || result.isLoading ? (
          <CharacterCardPreviewSkeleton count={PER_PAGE} />
        ) : (
          characters?.results?.map((character: Character) => (
            <CharacterCardPreview key={character.id} character={character} />
          ))
        )}
      </SimpleGrid>
      <Box margin="50px 0 0 0">
        <Pagination
          onPageChange={onPageChange}
          currentPage={pageNumber}
          totalCount={characters?.count}
          perPage={PER_PAGE}
        />
      </Box>
    </Box>
  )
}
