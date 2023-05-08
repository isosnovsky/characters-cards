import { Container, Box, keyframes, Heading, Highlight } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

import { CharactersList } from '@/widgets/characters-list/characters-list'

const gradient = keyframes`
  0% {
    background-position: 0 50%;
}
  50% {
    background-position: 100% 50%;
}
  100% {
    background-position: 0 50%;
}`

export function Main() {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get('pageNumber') ?? 1

  const handlePageChange = (page: number) => {
    setSearchParams({
      pageNumber: String(page),
    })
  }

  return (
    <>
      <Box
        minHeight="100vh"
        height="100%"
        left="0"
        position="absolute"
        right="0"
        top="0"
        zIndex="-1"
        animation={`${gradient} 15s ease infinite`}
        bg="linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
        backgroundSize="400% 400%"
      />
      <Container maxW="900px" paddingBottom={10}>
        <Heading
          as="h1"
          fontFamily="Jedihol"
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
        <CharactersList
          pageNumber={Number(pageNumber)}
          onPageChange={handlePageChange}
        />
      </Container>
    </>
  )
}
