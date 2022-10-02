import React from 'react'
import { WrapperStyled } from './button.styled'

type ButtonProps = {
  callback: () => void
  title: string
  icon?: React.ReactNode
  bgColor?: 'blue' | 'white' | 'aqua' | 'green'
}

const ButtonView: React.FC<ButtonProps> = ({
  title,
  callback,
  bgColor,
  icon
}) => (
  <WrapperStyled
    onClick={callback}
    bgColor={bgColor}
    hasIcon={!!icon}
    type="button"
  >
    {!!icon && icon}
    {title}
  </WrapperStyled>
)

export default ButtonView
