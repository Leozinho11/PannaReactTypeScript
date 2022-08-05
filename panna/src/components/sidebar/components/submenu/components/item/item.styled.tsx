import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const WrapperStyled = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    height: ${theme.sidebar.menu.height};
    padding: 0 15px;
    cursor: pointer;
    margin: 2px 0;

    a {
      display: flex;
      align-items: center;
      width: 100%;
      text-decoration: none;
      color: white;
      font-family: ${theme.font.family};
      font-weight: ${theme.font.semiBold};
      font-size: ${theme.font.sizes.small};
    }

    &:hover {
      transition-duration: 0.2s;

      span {
        color: ${theme.colors.aqua};
        font-weight: ${theme.font.bold};
      }
    }
  `}
`
export const TextStyled = styled.span``

export const NavigateToStyled = styled(NavLink)`
  ${({ theme }) => css`
    height: 100%;
    color: #000;
    font-weight: normal;
    font-size: ${({ theme }) => theme.font.sizes.small};
    &[aria-current] {
      color: ${theme.colors.aqua};
      font-weight: bold;
    }
  `}
`
