import React from 'react'
import { RegisterLoginSchema } from '../schemas-validation/schemas-validation'
import FormRegisterLoginView from './form-register-login-view'

const initialValues = {
  email: '',
  password: ''
}

interface LoginProps {
  handleLogin: (email: string, password: string) => void
}

const FormRegisterLogin: React.FC<LoginProps> = ({ handleLogin }) => {
  return (
    <FormRegisterLoginView
      initialValues={initialValues}
      validationSchema={RegisterLoginSchema}
      handleRegister={handleLogin}
    />
  )
}

export default FormRegisterLogin
