import styled, { css } from 'styled-components'
import { ButtonProps } from './button'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'bgColor'>

const wrapperModifier = {
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 15px;
      margin-right: 5px;
    }
  `
}

export const WrapperStyled = styled.button<WrapperProps>`
  ${({ theme, bgColor = 'blue', hasIcon }) => css`
    width: fit-content;
    background-color: ${!!bgColor && theme.colors[bgColor]};
    border-radius: 15px;
    background-color: transparent;
    border: solid ${theme.colors.green};
    color: ${theme.colors.green};
    text-align: center;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    padding: 15px;
    width: 200px;
    cursor: pointer;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

    ${hasIcon && wrapperModifier.withIcon()}

    :hover {
      box-shadow: 0 0 40px 40px #0abdba inset;
      color: white;
      font-family: 'Montserrat', sans-serif;
    }
    :active {
      box-shadow: ${theme.border.shadow};
    }
  `}
`
