import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export const withChakra =
  (component: (props) => React.ReactNode) => (props) => {
    return <ChakraProvider>{component(props)}</ChakraProvider>
}
