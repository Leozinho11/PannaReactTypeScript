import Button from 'components/button/button'
import InputField from 'components/input-field/input-field'
import React from 'react'
import {
  ForgatPassawordContainerStyled,
  FormikStyled,
  FormStyled,
  SectionStyled,
  WrapperSectionLoginStyled
} from './form-register-login.styled'

interface IUser {
  email: string
  password: string
}
type FormRegisterLoginProps = {
  initialValues: IUser
  validationSchema: object
}

const FormRegisterLoginView: React.FC<FormRegisterLoginProps> = ({
  initialValues,
  validationSchema
}) => {
  return (
    <FormikStyled
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <FormStyled>
          <SectionStyled name="Informações de Login">
            <WrapperSectionLoginStyled>
              <InputField
                id="email"
                name="email"
                placeholder="E-mail"
                type="email"
                onChange={handleChange}
                value={values.email}
                hasError={!!errors.email && !!touched.email}
                errorMessage={String(errors.email)}
              />

              <InputField
                id="password"
                name="password"
                placeholder="Senha"
                type="password"
                onChange={handleChange}
                value={values.password}
                hasError={!!errors.password && !!touched.password}
                errorMessage={String(errors.password)}
              />
            </WrapperSectionLoginStyled>
          </SectionStyled>
          <ForgatPassawordContainerStyled>
            <Button bgColor="aqua" title="Entrar" callback={handleSubmit} />
          </ForgatPassawordContainerStyled>
        </FormStyled>
      )}
    </FormikStyled>
  )
}

export default FormRegisterLoginView
