import { Container, Box, keyframes, VStack, Button } from '@chakra-ui/react'
import { Link as RRLink, useNavigate, useParams } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'

import { CharacterCard } from '@/entities/characters'

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

export function Character() {
  const { characterId } = useParams()
  const navigate = useNavigate()

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
      <Container maxW="900px">
        <VStack spacing={10}>
          <Button
            onClick={() => navigate(-1)}
            as={RRLink}
            width="100%"
            textAlign="center"
            size="lg"
            fontSize={[16, 32]}
            background="transparent"
            fontFamily="Jedi"
            borderStyle="solid"
            borderWidth="5px"
            sx={{
              'border-image-source':
                'linear-gradient(280deg,  #b7629a 0%, #e73c7e  51%, #23a6d5  70%, #31a3d3  100%)',
              'border-image-slice': '1',
            }}
            _hover={{
              background: 'none',
            }}
          >
            <ArrowBackIcon marginRight="20px" />
            BACK
          </Button>
          <Box maxWidth="500px" width="100%">
            <CharacterCard id={characterId} />
          </Box>
        </VStack>
      </Container>
    </>
  )
}
