import { Box, Heading, SimpleGrid, Highlight } from '@chakra-ui/react'
import { useState } from 'react'

import { useAllCharactersQuery, CharacterCard } from '@/entities/characters'
import { Pagination } from '@/shared/ui'

export function CharactersList() {
  const [page, setPage] = useState<number>(1)
  const { data, isLoading } = useAllCharactersQuery(page)

  if (isLoading) {
    return <div>isloading</div>
  }

  return (
    <Box>
      <Heading
        as="h1"
        fontFamily="Jedi"
        fontSize={[110, 150, 260]}
        textAlign="center"
        p="100px 0"
        color="#5ec1f3"
        lineHeight="1"
        height="100vh"
        position="relative"
        textShadow="20px 20px 0px #fff"
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
        {data?.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
      <Box margin="50px 0">
        <Pagination
          onPageChange={setPage}
          currentPage={page}
          totalCount={data?.count}
          perPage={10}
        />
      </Box>
    </Box>
  )
}
