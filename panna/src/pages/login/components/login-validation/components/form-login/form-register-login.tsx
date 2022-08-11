import React from 'react'
import { RegisterLoginSchema } from '../schemas-validation/schemas-validation'
import FormRegisterLoginView from './form-register-login-view'

const initialValues = {
  email: '',
  password: ''
}

const FormRegisterLogin: React.FC = () => {
  return (
    <FormRegisterLoginView
      initialValues={initialValues}
      validationSchema={RegisterLoginSchema}
    />
  )
}

export default FormRegisterLogin
