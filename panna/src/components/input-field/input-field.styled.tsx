import styled, { css } from 'styled-components'

export const WrapperStyled = styled.div``

type InputTextProps = {
  iconPosition: 'left' | 'right'
  disabled: boolean
  hasError: boolean
}

export const InputWrapperStyled = styled.div<InputTextProps>`
  ${({ theme, iconPosition, disabled = false, hasError }) => css`
    display: flex;
    flex-direction: ${iconPosition === 'right' ? 'row-reverse' : 'row'};
    border: 1px solid;
    border-radius: 3px;
    border-color: ${hasError ? theme.colors.error : theme.colors.gray};
    background-color: ${disabled ? theme.colors.gray : theme.colors.darkGray};

    &:focus-within {
      box-shadow: 0 0 0 2px #c4c4c434;
    }

    ${hasError &&
    css`
      svg {
        color: ${theme.colors.error};
      }
    `}
  `}
`

export const InputStyled = styled.input<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.darkGray};
    border: 0;
    outline: none;
    width: 100%;
    padding: 10px;

    box-shadow: 0 0 0 22px
      ${disabled ? theme.colors.veryLightGray : theme.colors.white} inset;
  `}
`

export const LabelStyled = styled.label<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.darkGray};
    color: ${hasError ? theme.colors.error : theme.colors.black};
    cursor: pointer;
  `}
`

export const IconStyled = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.black};

    & svg {
      width: 100%;
    }
  `}
`

export const MessageErrorStyled = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 0.5rem;
    padding-left: 2px;
  `}
`
