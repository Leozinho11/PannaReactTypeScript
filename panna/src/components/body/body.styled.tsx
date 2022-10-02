import styled, { css } from 'styled-components'

export const WrapperStyled = styled.div`
  width: 100%;
`

export const SidebarStyled = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const ContentStyled = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.darkGray};
    height: 100%;
    z-index: -2;
  `}
`
