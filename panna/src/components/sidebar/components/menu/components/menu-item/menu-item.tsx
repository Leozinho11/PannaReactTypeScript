import { SidebarContext } from 'components/sidebar/contexts/sidebar.context'
import React, { useCallback } from 'react'
import ItemView from './menu-item-view'

type MenuItemProps = {
  title: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title }) => {
  const {
    textIsVisible,
    currentSelectedMenu,
    handleSelectedMenu,
    handleVisibleText
  } = React.useContext(SidebarContext)

  const handleClick = useCallback(() => {
    localStorage.setItem('selectedMenu', title)
    handleSelectedMenu(title)
    handleVisibleText(true)
  }, [handleSelectedMenu, handleVisibleText, title])

  return (
    <ItemView
      title={title}
      selected={currentSelectedMenu === title}
      showText={textIsVisible}
      handleClick={handleClick}
    />
  )
}

export default MenuItem
