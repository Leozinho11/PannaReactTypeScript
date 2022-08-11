import styled, { css } from 'styled-components'

export const LoginContainerStyled = styled.div`
  height: 100vh:
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: right;
`

export const LoginImage = styled.div``

export const TextContainerStyled = styled.div`
  margin-bottom: 20px;
`

export const HelloStyled = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: 2px;
  `}
`

export const UserInformationStyled = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 15px;
    font-weight: ${theme.font.normal};
    text-align: left;

    strong {
      font-weight: ${theme.font.medium};
    }
  `}
`

export const FooterContainerStyled = styled.div`
  ${({ theme }) => css`
    margin-top: 100px;
    text-align: center;

    button {
      margin-top: 20px;
      width: 100%;
      background-color: ${theme.colors.transparent};
      border: 1px solid ${theme.colors.blue};
      color: ${theme.colors.blue};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const TraceStyled = styled.hr`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.forBorder};
  `}
  position: relative;
  top: 50px;
  width: 100%;
`

export const FooterTextStyled = styled.h6`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: 15px;
    font-weight: ${theme.font.medium};
  `}
`

export const LoadingStyled = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`
export const ErrorMessageStyled = styled.span`
  text-align: center;
  color: red;
  margin-top: 20px;
`

export const ContainerLogoPortStyled = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    top: 30px;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    align-items: flex-end;
    font-size: 11px;
    color: ${theme.colors.black};

    svg {
      position: relative;
      left: 4%;
      top: -6px;
    }
  `}
`
