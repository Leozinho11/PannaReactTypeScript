import React from 'react'
import { TitleStyled, WrapperStyled } from './menu-item.styled'

type ItemProps = {
  title: string
  selected: boolean
  showText: boolean
  handleClick: (name: string) => void
}

const ItemView: React.FC<ItemProps> = (params) => {
  return (
    <WrapperStyled
      selected={params.selected}
      showText={params.showText}
      onClick={() => params.handleClick(params.title)}
    >
      <TitleStyled showText={params.showText}>{params.title}</TitleStyled>
    </WrapperStyled>
  )
}

export default ItemView
