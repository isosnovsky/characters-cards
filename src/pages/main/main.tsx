import { Container, Box, keyframes } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

import { CharactersList } from '@/widgets/characters-list'

import { SearchInput, Header } from './ui'

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

  const handlePageChange = (page: number) => {
    searchParams.set('page', String(page))
    setSearchParams(searchParams)
  }

  const handleSearchQueryChange = (searchQueryParams: string) => {
    setSearchParams((params) => {
      searchParams.delete('page')

      if (!searchQueryParams) {
        searchParams.delete('search')

        return params
      }

      searchParams.set('search', searchQueryParams)

      return params
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
        <Header />
        <SearchInput onChange={handleSearchQueryChange} />
        <CharactersList onPageChange={handlePageChange} />
      </Container>
    </>
  )
}
