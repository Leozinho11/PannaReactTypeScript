import styled, { css } from 'styled-components'

type WrapperStyledProps = {
  selected: boolean
  showText: boolean
}
export const WrapperStyled = styled.li<WrapperStyledProps>`
  ${({ theme, selected }) => css`
    display: inline-block;
    height: ${theme.sidebar.menu.height};
    padding: 15px 20px;
    color: ${selected ? theme.colors.aqua : theme.colors.white};
    font-weight: ${selected ? theme.font.bold : theme.font.semiBold};
    background-color: ${selected
      ? theme.colors.lightGray
      : theme.colors.transparent};
    cursor: pointer;
  `}
`

type TitleStyledProps = {
  showText: boolean
}
export const TitleStyled = styled.span<TitleStyledProps>`
  ${({ theme, showText }) => css`
    display: ${showText ? 'block' : 'block'};

    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
  `}
`
