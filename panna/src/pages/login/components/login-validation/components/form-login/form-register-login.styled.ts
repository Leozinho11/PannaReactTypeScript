import { Formik } from 'formik'
import styled from 'styled-components'

export const FormikStyled = styled(Formik)``

export const FormStyled = styled.form``

type SectionStyledProps = { name: string }
export const SectionStyled = styled.section<SectionStyledProps>``

export const WrapperSectionLoginStyled = styled.div`
  & > div {
    margin-bottom: 15px;
  }a
`

export const ForgatPassawordContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
