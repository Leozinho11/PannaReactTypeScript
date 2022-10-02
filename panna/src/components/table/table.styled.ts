import styled, { css } from 'styled-components'

interface ITableStyledProps {
  flex?: number
  justifyContent?: string
  hasAction?: boolean
}

export const LineTableStyled = styled.tr`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1d1d1;
  padding-bottom: 10px;
  margin-bottom: 10px;
`

export const TableStyled = styled.table`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
  `}
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`

export const HeaderTableStyled = styled.th<ITableStyledProps>`
  ${({ flex, justifyContent }) => css`
    display: flex;
    flex: ${flex ?? 1};
    justify-content: ${justifyContent ?? 'flex-start'};
    margin-right: 10px;
  `}
`

export const ContentTableStyled = styled.td<ITableStyledProps>`
  ${({ flex, justifyContent, hasAction }) => css`
    flex: ${flex ?? 1};
    justify-content: ${justifyContent ?? 'flex-start'};
    cursor: ${hasAction ? 'pointer' : 'flex-start'};
    margin-right: 10px;
  `}
  overflow: hidden;
  display: flex;
`

export const TextStyled = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ContainerLoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TableHeadStyled = styled.thead``
export const TableBodyStyled = styled.tbody`z`
