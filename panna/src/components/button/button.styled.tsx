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
    padding: 10px 20px;
    border: none;
    ${bgColor === 'white' && `border: solid 1px ${theme.colors.forBorder}`};
    border-radius: ${theme.border.radius};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${bgColor === 'white'
      ? theme.font.normal
      : theme.font.semiBold};
    color: ${bgColor === 'white' ? theme.colors.black : theme.colors.white};
    cursor: pointer;

    ${hasIcon && wrapperModifier.withIcon()}

    :hover {
      opacity: 0.98;
    }
    :active {
      box-shadow: ${theme.border.shadow};
    }
  `}
`
