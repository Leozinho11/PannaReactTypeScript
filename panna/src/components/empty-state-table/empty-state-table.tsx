import React from 'react'
import EmptyStateTableView from './empty-state-table-view'

type EmptyStateTableProps = {
  text: string
  isLoading: boolean
}
const EmptyStateTable: React.FC<EmptyStateTableProps> = ({
  text,
  isLoading
}) => {
  return <EmptyStateTableView isLoading={isLoading} text={text} />
}

export default EmptyStateTable
