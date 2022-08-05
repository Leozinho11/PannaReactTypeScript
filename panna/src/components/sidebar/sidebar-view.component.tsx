import React from 'react'
import { useLocation } from 'react-router-dom'
import Menu from './components/menu/menu.component'
import Submenu from './components/submenu/submenu.component'
import { SidebarContext } from './contexts/sidebar.context'
import { WrapperStyled } from './sidebar.styled'

const SidebarView: React.FC = () => {
  const { pathname } = useLocation()
  const { currentSelectedMenu } = React.useContext(SidebarContext)

  return (
    <WrapperStyled>
      <Menu />
      {pathname !== '/home' || currentSelectedMenu ? <Submenu /> : null}
    </WrapperStyled>
  )
}

export default SidebarView
