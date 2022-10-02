export interface PageInfo {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

export interface IListPage<T> {
  list: Array<T>
  pageInfo: PageInfo
}
