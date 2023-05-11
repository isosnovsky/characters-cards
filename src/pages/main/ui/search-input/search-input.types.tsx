import { InputProps } from '@chakra-ui/react'

export type ISearchInputProps = Omit<InputProps, 'onChange'> & {
  onChange: (value: string) => void
}
