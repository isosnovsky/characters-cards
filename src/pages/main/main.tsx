import { Container, Box } from '@chakra-ui/react'

import { CharactersList } from '@/widgets/characters-list/characters-list'

export function Main() {
  return (
    <>
      <Box
        backgroundImage="url(/bg.jpeg)"
        backgroundPosition="100% 0"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="100%"
        left="0"
        position="absolute"
        right="0"
        top="0"
        zIndex="-1"
      />
      <Container maxW="900px">
        <CharactersList />
      </Container>
    </>
  )
}
