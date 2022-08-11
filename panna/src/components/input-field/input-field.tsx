import React from 'react'
import InputFieldView from './input-field-view'

type InputFieldProps = {
  id: string
  name: string
  value?: string
  type: 'text' | 'password' | 'email' | 'number' | 'file'
  label?: string
  labelFor?: string
  placeholder?: string
  reactNode?: React.ReactNode
  reactNodePosition?: 'left' | 'right'
  disabled?: boolean
  hasError?: boolean
  errorMessage?: string
  passwordVisible?: boolean
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  changePasswordVisible?: () => void
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  value = '',
  type,
  label,
  placeholder,
  reactNode,
  reactNodePosition,
  disabled,
  hasError,
  errorMessage,
  passwordVisible,
  className,
  onChange = () => null,
  onBlur = () => null,
  changePasswordVisible
}) => {
  return (
    <InputFieldView
      id={id}
      name={name}
      type={type}
      label={label}
      value={value}
      placeholder={placeholder}
      reactNode={reactNode}
      reactNodePosition={reactNodePosition}
      disabled={disabled}
      hasError={hasError}
      errorMessage={errorMessage}
      passwordVisible={passwordVisible}
      onBlur={onBlur}
      onChange={onChange}
      changePasswordVisible={changePasswordVisible}
      className={className}
    />
  )
}

export default InputField
