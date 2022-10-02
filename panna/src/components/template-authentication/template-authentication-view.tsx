import UploadIcon from 'assets/icons/upload.icon'
import React from 'react'
import {
  ContentStyled,
  LoginContainerStyled,
  LogoContainerStyled
} from './template-authentication-styled'

type TemplateAuthenticationProps = {
  children: React.ReactNode
}

const TemplateAuthenticationView: React.FC<TemplateAuthenticationProps> = ({
  children
}) => {
  return (
    <LoginContainerStyled>
      <LogoContainerStyled>
        <UploadIcon />
      </LogoContainerStyled>
      <ContentStyled>{children}</ContentStyled>
    </LoginContainerStyled>
  )
}

export default TemplateAuthenticationView
