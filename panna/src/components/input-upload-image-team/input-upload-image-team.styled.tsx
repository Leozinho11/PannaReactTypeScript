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
  margin-left: 15px;
`

export const TitleFormatedStyled = styled.p``

export const CompanyImageStyled = styled.img<InputUploadImageProps>`
  ${({ dataUrlImage }) => css`
    height: ${dataUrlImage < '50px' ? '100%' : '50px'};
    width: ${dataUrlImage < '50px' ? '100%' : '50px'};
    border-radius: 5px;
  `}
`

export const ContainerDescriptionStyled = styled.div`
  display: flex;
  width: 280px;
  flex-direction: row;
  justify-content: center;
  background-color: #262626;
  padding: 10px;
  border-radius: 5px;
`
