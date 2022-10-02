import EmptyStateTable from 'components/empty-state-table/empty-state-table'
import Loading from 'components/loading/loading'
import React, { useMemo } from 'react'
import {
  ContainerLoadingStyled,
  ContentTableStyled,
  HeaderTableStyled,
  LineTableStyled,
  TableBodyStyled,
  TableHeadStyled,
  TableStyled,
  TextStyled
} from './table.styled'
import { IContentTable } from './table.types'

interface ITableViewProps {
  header: IContentTable
  content: Array<IContentTable>
  clickRowAction: (id: string) => void
  isLoading: boolean
}

const TableView: React.FC<ITableViewProps> = ({
  header,
  content,
  clickRowAction,
  isLoading
}: ITableViewProps) => {
  const renderHeaderTable = useMemo(() => {
    return (
      <LineTableStyled>
        {header.map(({ value, flex, justifyContent }, index) => {
          return (
            <HeaderTableStyled
              key={index}
              flex={flex}
              justifyContent={justifyContent}
            >
              {value}
            </HeaderTableStyled>
          )
        })}
      </LineTableStyled>
    )
  }, [header])

  const renderContentTable = useMemo(() => {
    return content.map((contentLine, index) => {
      return (
        <LineTableStyled key={index}>
          {contentLine.map(({ value, flex, justifyContent }, indexLine) => {
            return (
              <ContentTableStyled
                key={indexLine}
                flex={flex}
                justifyContent={justifyContent}
                hasAction={!!clickRowAction}
                onClick={() =>
                  !React.isValidElement(value) &&
                  clickRowAction(String(contentLine[1].value))
                }
              >
                {React.isValidElement(value) ? (
                  value
                ) : (
                  <TextStyled>{value?.toString().toUpperCase()}</TextStyled>
                )}
              </ContentTableStyled>
            )
          })}
        </LineTableStyled>
      )
    })
  }, [clickRowAction, content])

  const renderTableBody = useMemo(() => {
    if (isLoading) {
      return (
        <ContainerLoadingStyled>
          <Loading />
        </ContainerLoadingStyled>
      )
    }
    return renderContentTable
  }, [isLoading, renderContentTable])

  return content.length ? (
    <TableStyled>
      <TableHeadStyled>{renderHeaderTable}</TableHeadStyled>
      <TableBodyStyled>{renderTableBody}</TableBodyStyled>
    </TableStyled>
  ) : (
    <EmptyStateTable isLoading={isLoading} text="Lista Vazia" />
  )
}

export default TableView
