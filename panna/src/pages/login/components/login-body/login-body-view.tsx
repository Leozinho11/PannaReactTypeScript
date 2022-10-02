import Loading from 'components/loading/loading'
import ContentStyled from 'components/template-authentication/template-authentication'
import React from 'react'
import FormRegisterLogin from '../login-validation/components/form-login/form-register-login'
import {
  HelloStyled,
  LoadingStyled,
  LoginContainerStyled,
  TextContainerStyled,
  UserInformationStyled
} from './login-body.styled'

interface LoginViewProps {
  handleLogin: (email: string, password: string) => void
  loginIsLoading: boolean
}

const LoginView: React.FC<LoginViewProps> = ({
  handleLogin,
  loginIsLoading
}) => {
  return (
    <ContentStyled>
      <LoginContainerStyled>
        <TextContainerStyled>
          <HelloStyled>Olá,</HelloStyled>
          <UserInformationStyled>
            Informe seu <strong>usuário</strong> e <strong>senha</strong>.
          </UserInformationStyled>
        </TextContainerStyled>
        <FormRegisterLogin handleLogin={handleLogin} />
      </LoginContainerStyled>

      {loginIsLoading && (
        <LoadingStyled>
          <Loading />
        </LoadingStyled>
      )}
    </ContentStyled>
  )
}

export default LoginView
