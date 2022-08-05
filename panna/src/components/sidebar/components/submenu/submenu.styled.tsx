import styled, { css } from 'styled-components'

export const WrapperStyled = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
  `}
`

export const TitleStyled = styled.h1``

export const MenuStyled = styled.ul`
  ${() => css`
    list-style: none;
    width: 185px;
  `}
`
