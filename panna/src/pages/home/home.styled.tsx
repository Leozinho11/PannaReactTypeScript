import styled, { css } from 'styled-components'

export const ContainerStyled = styled.div``

export const TitleStyed = styled.div`
  font-size: 15px;
`

export const ContainerNoticiesStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
`

export const ContainerImages = styled.div``

export const ContainerImage = styled.div`
  position: absolute;
  top: 20%;
  right: 5px;
  z-index: -1;
  opacity: 0.1;
`

export const ContainerVideoStyled = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.transparent};
  `}
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
`

export const TraceStyled = styled.hr`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.veryLightGray};
  `}

  opacity: 0.2;
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
`

export const ContainerFavoriteTeamsStyled = styled.div`
  display: flex;
  flex-direction: row;
`

export const TitleTeamsStyled = styled.p`
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-left: 15px;
`

export const TitleInicialNoticieStyled = styled.p`
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 15px;
`

export const ContainerTeamsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
`

export const ContainerMatchDayStyled = styled.div``
