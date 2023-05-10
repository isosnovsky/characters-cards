import { Container, Box, keyframes } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { CharactersList } from '@/widgets/characters-list'
import { useDebounceCallback } from '@/shared/hooks'

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
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get('search')
  )

  const handlePageChange = (page: number) => {
    searchParams.set('page', String(page))
    setSearchParams(searchParams)
  }

  const handleSearchQueryChange = (searchQueryParams: string) => {
    setSearchParams((params) => {
      searchParams.set('page', searchParams.get('page') || '1')

      if (!searchQueryParams) {
        searchParams.delete('search')

        return params
      }

      searchParams.set('search', searchQueryParams)

      return params
    })
  }

  const debouncedHandleSearchQueryCallback = useDebounceCallback(
    handleSearchQueryChange,
    350,
    [handleSearchQueryChange, searchQuery]
  )

  useEffect(() => {
    debouncedHandleSearchQueryCallback(searchQuery)
  }, [searchQuery]) // missed debouncedHandleSearchQueryCallback on purpose

  const triggerSearchQueryChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(value)
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
        <SearchInput value={searchQuery} onChange={triggerSearchQueryChange} />
        <CharactersList onPageChange={handlePageChange} />
      </Container>
    </>
  )
}
