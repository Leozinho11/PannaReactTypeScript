import { SidebarContext } from 'components/sidebar/contexts/sidebar.context'
import React from 'react'
import MenuItem from './components/menu-item/menu-item'
import { MenuStyled, WrapperStyled } from './menu.styled'

const MenuView: React.FC = () => {
  const { textIsVisible, menus } = React.useContext(SidebarContext)

  const mountMenus = React.useMemo(() => {
    return menus.map((menu) => {
      return <MenuItem key={menu.title} title={menu.title} />
    })
  }, [menus])

  return (
    <WrapperStyled menuVisible={textIsVisible}>
      <MenuStyled>{mountMenus}</MenuStyled>
    </WrapperStyled>
  )
}

export default MenuView
