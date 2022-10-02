import React from 'react'
import TableView from './table-view'
import { IContentTable } from './table.types'

interface ITableProps {
  header: IContentTable
  content: Array<IContentTable>
  clickRowAction?: (id: string) => void
  isLoading: boolean
}

const Table: React.FC<ITableProps> = ({
  header,
  content,
  clickRowAction = () => null,
  isLoading
}: ITableProps) => {
  return (
    <TableView
      header={header}
      content={content}
      clickRowAction={clickRowAction}
      isLoading={isLoading}
    />
  )
}

export default Table
