import { ListItem, Button } from '@chakra-ui/react'

import { PaginationItemProps } from './pagination.types'

export function PaginationItem({
  isCurrent = false,
  page,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <ListItem marginInlineStart={4} _first={{ marginInlineStart: 0 }}>
        <Button
          size="lg"
          fontSize="lg"
          aria-label={`Go to page ${page}`}
          aria-current="true"
          width="4"
          bg="radial-gradient( circle 369px at -2.9% 12.9%,  #C9FFBF 0%, #FFAFBD  51%, #C9FFBF  100%)"
          color="white"
          disabled
          _hover={{
            bg: 'radial-gradient( circle 369px at -2.9% 12.9%,  #C9FFBF 0%, #FFAFBD  51%, #C9FFBF  100%)',
            cursor: 'default',
            color: 'white',
          }}
        >
          {page}
        </Button>
      </ListItem>
    )
  }

  return (
    <ListItem marginInlineStart={4} _first={{ marginInlineStart: 0 }}>
      <Button
        size="lg"
        fontSize="lg"
        aria-label={`Go to page ${page}`}
        width="4"
        bg="gray.100"
        transition="none"
        _hover={{
          bg: 'radial-gradient( circle 369px at -2.9% 12.9%,  #C9FFBF 0%, #FFAFBD  51%, #C9FFBF  100%)',
          color: 'white',
        }}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Button>
    </ListItem>
  )
}
