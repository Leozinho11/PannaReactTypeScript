import ContentStyled from 'components/template-authentication/template-authentication'
import React from 'react'
import FormRegisterLogin from '../login-validation/components/form-login/form-register-login'
import {
  HelloStyled,
  LoginContainerStyled,
  TextContainerStyled,
  UserInformationStyled
} from './login-body.styled'

const LoginView: React.FC = () => {
  return (
    <ContentStyled>
      <LoginContainerStyled>
        <TextContainerStyled>
          <HelloStyled>Olá,</HelloStyled>
          <UserInformationStyled>
            Informe seu <strong>usuário</strong> e <strong>senha</strong>.
          </UserInformationStyled>
        </TextContainerStyled>
        <FormRegisterLogin />
      </LoginContainerStyled>
    </ContentStyled>
  )
}

export default LoginView
