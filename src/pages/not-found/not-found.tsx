import { Link as RRLink, useNavigate } from "react-router-dom";
import { Container, Box, Heading, Center, VStack, Link } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <Box
        backgroundImage="url(/bg.jpeg)"
        backgroundPosition="100% 0"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="100vh"
        left="0"
        position="absolute"
        right="0"
        top="0"
        zIndex="-1"
      />
      <Container maxW="900px">
        <Center height="100vh">
          <VStack spacing="44px">
            <Heading
              fontFamily="Jedi"
              fontSize={[60, 100, 150]}
              color="#ff7575"
            >
              That is a wrong way
            </Heading>
            <Link
              onClick={() => navigate(-1)}
              as={RRLink}
              padding="10px"
              width="100%"
              textAlign="center"
              fontSize={[40, 70, 120]}
              fontFamily="Jedi"
              background="radial-gradient( circle 369px at -2.9% 12.9%,  #C9FFBF 0%, #FFAFBD  51%, #C9FFBF  100%)"
              borderRadius="55px"
            >
              <ArrowBackIcon marginRight="20px" />
              BACK
            </Link>
          </VStack>
        </Center>
      </Container>
    </>
  )
}
