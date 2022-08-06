import styled, { css } from 'styled-components'

export const WrapperStyled = styled.div<{ menuVisible: boolean }>`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    transition: all 0.2s ease-in-out;
    background-color: ${theme.colors.green};
    width: 100vw;
  `}
`

export const MenuStyled = styled.ul`
  list-style: none;
`
