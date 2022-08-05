import React from 'react'
import { WrapperStyled, TextStyled, NavigateToStyled } from './item.styled'
import { SidebarContext } from 'components/sidebar/contexts/sidebar.context'

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
