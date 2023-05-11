import { Container } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

import { CharactersList } from '@/widgets/characters-list'
import { Background } from '@/shared/ui'

import { SearchInput, Header } from './ui'

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
      <Background />
      <Container maxW="900px" paddingBottom={10}>
        <Header />
        <SearchInput onChange={handleSearchQueryChange} />
        <CharactersList onPageChange={handlePageChange} />
      </Container>
    </>
  )
}
