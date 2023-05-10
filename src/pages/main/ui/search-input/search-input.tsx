import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  InputProps,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export function SearchInput(props: InputProps) {
  return (
    <InputGroup maxWidth="300px" m="0 auto 50px">
      <Input
        placeholder="find character"
        _placeholder={{
          color: '#b2b2b2',
        }}
        color="white"
        {...props}
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
  )
}
