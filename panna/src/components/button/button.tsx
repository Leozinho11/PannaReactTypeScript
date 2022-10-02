import React from 'react'
import ButtonView from './button-view'

export type ButtonProps = {
  callback: () => void
  title: string
  icon?: React.ReactNode
  bgColor?: 'blue' | 'white' | 'aqua' | 'green'
}

const Button: React.FC<ButtonProps> = ({ title, callback, bgColor, icon }) => {
  return (
    <ButtonView
      callback={callback}
      title={title}
      bgColor={bgColor}
      icon={icon}
    />
  )
}

export default Button
