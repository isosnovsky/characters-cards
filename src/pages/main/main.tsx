import {
  Container,
  Box,
  keyframes,
  Heading,
  Highlight,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'

import { CharactersList } from '@/widgets/characters-list'
import { useFoundCharactersMutation } from '@/entities/characters'

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
  const [foundCharacters] = useFoundCharactersMutation({
    fixedCacheKey: 'shared-found-characters',
  })
  const pageNumber = searchParams.get('page') ?? 1
  const attr = searchParams.get('q')

  const handlePageChange = (page: number) => {
    searchParams.set('page', String(page))
    setSearchParams(searchParams)
  }

  const handleAttrChange = (attr: string) => {
    if (!attr) {
      searchParams.delete('q')
      setSearchParams(searchParams)

      return
    }

    searchParams.delete('page')
    setSearchParams({
      q: attr,
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
          p="100px 0 0"
          color="#ae699f"
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
              fontFamily: 'Jedi',
              textShadow: 'none',
            }}
          >
            Star wars characters
          </Highlight>
        </Heading>
        <InputGroup maxWidth="300px" m="0 auto 50px">
          <Input
            placeholder="find character"
            _placeholder={{
              color: 'white',
            }}
            onChange={(event) => {
              handleAttrChange(event.target.value)

              if (event.target.value) {
                foundCharacters(event.target.value)
              }
            }}
            color="white"
          />
          <InputRightElement
            children={
              <IconButton
                aria-label="search characters"
                icon={<SearchIcon color="gray.300" />}
                variant="ghost"
              />
            }
          />
        </InputGroup>
        <CharactersList
          attr={attr}
          pageNumber={Number(pageNumber)}
          onPageChange={handlePageChange}
        />
      </Container>
    </>
  )
}
