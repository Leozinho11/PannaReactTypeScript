import Loading from 'components/loading/loading'
import React from 'react'
import {
  ContainerLoadingStyled,
  ContainerStyled,
  TextContainerStyled
} from './empty-state-table.styled'

type EmptyStateTableViewProps = {
  text: string
  isLoading: boolean
}
const EmptyStateTableView: React.FC<EmptyStateTableViewProps> = ({
  text,
  isLoading
}) => {
  const renderEmptyStateTable = () => {
    if (isLoading) {
      return (
        <ContainerLoadingStyled>
          <Loading />
        </ContainerLoadingStyled>
      )
    }
    return <TextContainerStyled>{text}</TextContainerStyled>
  }

  return <ContainerStyled>{renderEmptyStateTable()}</ContainerStyled>
}
export default EmptyStateTableView
