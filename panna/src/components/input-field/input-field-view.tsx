import React from 'react'
import {
  IconStyled,
  InputStyled,
  InputWrapperStyled,
  LabelStyled,
  MessageErrorStyled,
  WrapperStyled
} from './input-field.styled'

export type InputFieldProps = {
  id: string
  name: string
  value: string
  type: 'text' | 'password' | 'email' | 'number' | 'file'
  label?: string
  placeholder?: string
  initialValue?: string
  reactNode?: React.ReactNode
  reactNodePosition?: 'left' | 'right'
  disabled?: boolean
  hasError?: boolean
  errorMessage?: string
  passwordVisible?: boolean
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
  changePasswordVisible?: () => void
}

const InputFieldView: React.FC<InputFieldProps> = ({
  id,
  name,
  value,
  type = 'text',
  label = '',
  placeholder = '',
  reactNode,
  reactNodePosition = 'left',
  disabled = false,
  hasError = false,
  errorMessage = 'Invalid value',
  passwordVisible = false,
  className = '',
  onChange,
  onBlur,
  changePasswordVisible
}) => {
  return (
    <WrapperStyled className={className}>
      {label && (
        <LabelStyled htmlFor={id} hasError={hasError}>
          {label}
        </LabelStyled>
      )}
      <InputWrapperStyled
        iconPosition={reactNodePosition}
        disabled={disabled}
        hasError={hasError}
      >
        {!!reactNode && (
          <IconStyled onClick={changePasswordVisible}>{reactNode}</IconStyled>
        )}
        <InputStyled
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          type={passwordVisible ? 'text' : type}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        />
      </InputWrapperStyled>
      {hasError && <MessageErrorStyled>{errorMessage}</MessageErrorStyled>}
    </WrapperStyled>
  )
}

export default InputFieldView
