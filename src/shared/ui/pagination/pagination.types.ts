export interface PaginationProps {
  onPageChange: (page: number) => void
  currentPage?: number
  totalCount: number
  perPage: number
}

export interface PaginationItemProps {
  isCurrent?: boolean
  page: number
  onPageChange: (page: number) => void
}
