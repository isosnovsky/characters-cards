import { useRef } from 'react'
import {
  Editable,
  EditableInput as EditableInputUI,
  EditablePreview,
  EditableProps,
  HStack,
  IconButton,
  Input,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

export function EditableInput(props: EditableProps) {
  const ref = useRef<HTMLInputElement>()

  return (
    <Editable {...props} width="100%">
      <HStack
        spacing={0}
        height={12}
        justifyContent="space-around"
        width="100%"
      >
        <EditablePreview
          ref={ref}
          width="100%"
          height="53px"
          _hover={{ cursor: 'pointer' }}
        />
        <Input as={EditableInputUI} size="s" transition='none'/>
        <IconButton
          size="sm"
          bg="transparent"
          icon={<EditIcon />}
          onClick={() => ref.current?.focus()}
          _hover={{
            bg: '#39a1d0',
          }}
          _focusVisible={{
            boxShadow: '0 0 0 3px #e69adb',
          }}
          aria-label="Click to edit"
        />
      </HStack>
    </Editable>
  )
}
