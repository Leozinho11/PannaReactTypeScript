import styled, { css } from 'styled-components'

export const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
`
export const SidebarStyled = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    margin-right: 20px;
  `}
`

export const ContentStyled = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  `}
`
