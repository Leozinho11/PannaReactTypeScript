import styled, { css } from 'styled-components'

export const LoginContainerStyled = styled.div`
  display: flex;
  height: 100vh;
`

export const LogoContainerStyled = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 0 0 49%;
    justify-content: center;
    align-items: center;
    max-width: 49%;
    background-color: ${theme.colors.darkGray};
  `}
`
export const LogoBranco = styled.svg``

export const ContentStyled = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 51%;
    flex: 0 0 51%;
    background-color: ${theme.colors.lightGray};
  `}
`
