import { Heading, Highlight } from '@chakra-ui/react'

export function Header() {
  return (
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
  )
}
