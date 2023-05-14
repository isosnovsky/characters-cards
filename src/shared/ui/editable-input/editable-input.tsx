import React, { useRef, forwardRef } from 'react'
import { HStack, IconButton, Input, InputProps } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import { useForwardRef } from '../../lib/hooks'
import type { WithForwardRef } from '../../types'

function EditableInputComponent({
  forwardedRef,
  ...props
}: WithForwardRef<InputProps, HTMLInputElement>) {
  const [inputRef, reForwardRef] = useForwardRef(forwardedRef, null)
  const ref = useRef<HTMLDivElement>()

  return (
    <HStack
      spacing={0}
      height={12}
      justifyContent="space-around"
      width="100%"
      ref={ref}
    >
      <Input
        size="lg"
        fontSize="25"
        transition="none"
        variant="outline"
        border="none"
        ref={reForwardRef}
        {...props}
      />
      <IconButton
        size="sm"
        bg="transparent"
        icon={<EditIcon />}
        onClick={() => inputRef?.current.focus()}
        _hover={{
          bg: '#39a1d0',
        }}
        _focusVisible={{
          boxShadow: '0 0 0 3px #e69adb',
        }}
        aria-label="Click to edit"
        tabIndex={-1}
      />
    </HStack>
  )
}

const EditableInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <EditableInputComponent forwardedRef={ref} {...props} />
))

export { EditableInput }
