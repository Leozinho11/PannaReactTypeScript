import { SidebarContext } from 'components/sidebar/contexts/sidebar.context'
import React, { useCallback, useEffect, useState } from 'react'
import SubMenuItem from './components/item/item'
import { MenuStyled, TitleStyled, WrapperStyled } from './submenu.styled'

const SubmenuView: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState('')

  const { handleVisibleText, menus } = React.useContext(SidebarContext)

  const mountMenus = useCallback(() => {
    return menus.map(({ submenus, title }) => {
      return submenus.map(({ name, path }) => {
        if (selectedMenu === title) {
          return <SubMenuItem key={name} name={name} path={path} />
        }
      })
    })
  }, [menus, selectedMenu])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setSelectedMenu(localStorage.getItem('selectedMenu') || ''))

  return (
    <WrapperStyled>
      <TitleStyled onClick={() => handleVisibleText(false)}></TitleStyled>
      <MenuStyled>{mountMenus()} </MenuStyled>
    </WrapperStyled>
  )
}

export default SubmenuView
