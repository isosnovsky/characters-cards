import { Container, Box, keyframes } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

import { CharactersList } from '@/widgets/characters-list/characters-list'

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
}
  50% {
    background-position: 100% 50%;
}
  100% {
    background-position: 0% 50%;
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
        <CharactersList
          pageNumber={Number(pageNumber)}
          onPageChange={handlePageChange}
        />
      </Container>
    </>
  )
}
