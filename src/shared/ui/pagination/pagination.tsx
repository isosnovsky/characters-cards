import { Stack } from '@chakra-ui/react'

import { PaginationItem } from './pagination-item'
import { PaginationProps } from './pagination.types'

export function Pagination({
  currentPage,
  lastPage,
  previousPages,
  nextPages,
  siblingsCount,
  onPageChange,
  totalCount,
  perPage,
}: PaginationProps) {
  const pagesAmount = Math.ceil(totalCount / perPage)

  return (
    <Stack direction="row" mt="8" justify="center" align="center" spacing="6">
      <Stack direction="row" spacing="4">
        {Array.from({
          length: pagesAmount,
        }).map((_, index) => (
          <PaginationItem
            page={index + 1}
            isCurrent={currentPage === index + 1}
            onPageChange={onPageChange}
          />
        ))}
      </Stack>
    </Stack>
  )
}
