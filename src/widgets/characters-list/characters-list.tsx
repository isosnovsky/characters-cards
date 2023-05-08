import { Box, Heading, SimpleGrid, Highlight } from '@chakra-ui/react'

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
  // const newData = useMemo(() => {
  //   data?.result.map((character: Character) => {
  //     charactersApi.endpoints.detailCharacter.select(character.id)
  //   })
  // }, [data, charactersApi])

  return (
    <Box>
      <Heading
        as="h1"
        fontFamily="Jedi"
        fontSize={[110, 150, 260]}
        textAlign="center"
        p="100px 0"
        color="#ae699f"
        lineHeight="1"
        height="100vh"
        position="relative"
        textShadow="20px 20px 0px #3ea0cf"
      >
        <Highlight
          query="characters"
          styles={{
            position: 'absolute',
            bottom: '70px',
            left: '50%',
            transform: 'translate(-50%, 0)',
            px: '1',
            py: '1',
            bg: '#2a35f2',
            fontSize: '44px',
            color: 'white',
            textShadow: 'none',
          }}
        >
          Star wars characters
        </Highlight>
      </Heading>
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
