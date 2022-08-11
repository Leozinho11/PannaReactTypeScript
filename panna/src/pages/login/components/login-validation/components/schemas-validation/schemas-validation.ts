import * as Yup from 'yup'

export const RegisterLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um E-mail Válido')
    .required('Campo Obrigatório'),
  password: Yup.string().required('Senha Obrigatória')
})
