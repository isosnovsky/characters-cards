import React, { useEffect, useRef } from 'react'
import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useSearchParams } from 'react-router-dom'

import { useDebounceCallback } from '@/shared/lib/hooks'

import type { ISearchInputProps } from './search-input.types'

export function SearchInput({ onChange, ...props }: ISearchInputProps) {
  const [searchParams] = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)
  const debouncedHandleSearchQueryChange = useDebounceCallback(
    onChange,
    350,
    []
  )

  /* workaround instead of controlled component to prevent reassign search parameters while navigating */
  /* do not trigger onChange call */
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchParams.get('search')
    }
  }, [searchParams])

  return (
    <InputGroup maxWidth="300px" m="0 auto 50px">
      <Input
        placeholder="find character"
        _placeholder={{
          color: '#b2b2b2',
        }}
        color="white"
        ref={inputRef}
        {...props}
        onChange={(event) =>
          debouncedHandleSearchQueryChange(event.target.value.toLowerCase())
        }
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
