import { Box, type BoxProps } from '@chakra-ui/react'

import { gradient } from './background.styles'

export function Background(props: BoxProps) {
  return (
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
      {...props}
    />
  )
}
