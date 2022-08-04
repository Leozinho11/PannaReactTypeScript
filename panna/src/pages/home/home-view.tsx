import Button from 'components/button/button'
import React from 'react'
import { ContainerStyled, TitleStyed } from './home.styled'

const HomePageView: React.FC = () => {
  return (
    <ContainerStyled>
      <TitleStyed>Arquitetura Panna Company</TitleStyed>
      <Button
        title="Olá teste"
        callback={() => alert('teste')}
        bgColor="green"
      />
    </ContainerStyled>
  )
}

export default HomePageView
