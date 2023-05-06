import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export const withChakra = (component: () => React.ReactNode) => () => {
  return <ChakraProvider>{component()}</ChakraProvider>
}
