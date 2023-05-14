import { Stack, UnorderedList } from '@chakra-ui/react'

import { PaginationItem } from './pagination-item'
import { PaginationProps } from './pagination.types'

export function Pagination({
  currentPage,
  onPageChange,
  totalCount,
  perPage,
}: PaginationProps) {
  const pagesAmount = Math.ceil(totalCount / perPage)

  if (pagesAmount <= 1) {
    return null
  }

  return (
    <Stack
      direction="row"
      mt="8"
      justify="center"
      align="center"
      spacing="6"
      role="navigation"
      as="nav"
      aria-label="Pagination"
    >
      <UnorderedList
        display="flex"
        flexDirection="row"
        margin={0}
        listStyleType="none"
      >
        {Array.from({
          length: pagesAmount,
        }).map((_, index) => (
          <PaginationItem
            // eslint-disable-next-line react/no-array-index-key
            key={pagesAmount + index}
            page={index + 1}
            isCurrent={currentPage === index + 1}
            onPageChange={onPageChange}
          />
        ))}
      </UnorderedList>
    </Stack>
  )
}
