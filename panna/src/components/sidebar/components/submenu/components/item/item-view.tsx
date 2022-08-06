import { SidebarContext } from 'components/sidebar/contexts/sidebar.context'
import React from 'react'
import { NavigateToStyled, TextStyled, WrapperStyled } from './item.styled'

type ItemProps = {
  name: string
  path: string
}

const ItemView: React.FC<ItemProps> = ({ name, path }) => {
  const { handleVisibleText } = React.useContext(SidebarContext)
  return (
    <WrapperStyled onClick={() => handleVisibleText(false)}>
      <NavigateToStyled to={path} aria-label={`link-to-${path}`}>
        <TextStyled>{name}</TextStyled>
      </NavigateToStyled>
    </WrapperStyled>
  )
}

export default ItemView
