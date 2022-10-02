import React from 'react'
import {
  ContainerToastStyled,
  TitleStyled,
  DescriptionStyled
} from './toast.styled'

interface ToastViewProps {
  title: string
  message: string
}

const ToastView: React.FC<ToastViewProps> = ({ title, message }) => {
  return (
    <ContainerToastStyled>
      <TitleStyled>{title}</TitleStyled>
      <DescriptionStyled>{message}</DescriptionStyled>
    </ContainerToastStyled>
  )
}

export default ToastView
