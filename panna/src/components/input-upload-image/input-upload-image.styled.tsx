import styled, { css } from 'styled-components'

type InputUploadImageProps = {
  hasError: boolean
  dataUrlImage: string
}
export const ContainerStyled = styled.div<InputUploadImageProps>`
  ${({ theme, hasError }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: solid 1px
      ${hasError ? theme.colors.error : theme.colors.transparent};
    padding: 0px;
    border-radius: 4px;

    cursor: pointer;
  `}
`

export const TitleStyled = styled.p`
  margin-top: 20px;
  font-size: 16px;
  width: 100%;
  font-weight: 700;
  color: #fff;
`

export const TitleFormatedStyled = styled.p``

export const CompanyImageStyled = styled.img<InputUploadImageProps>`
  ${({ dataUrlImage }) => css`
    height: ${dataUrlImage < '200px' ? '100%' : '200px'};
    width: ${dataUrlImage < '300px' ? '100%' : '300px'};
    border-radius: 5px;
  `}
`
