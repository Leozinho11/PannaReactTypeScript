import React, { useCallback, useEffect } from 'react'
import { mockMenus } from '../mocks/menus'
import { initialState } from './sidebar.actions'
import { IMenus } from './sidebar.types'

export const SidebarContext = React.createContext(initialState)

type SidebarContextProps = {
  children: React.ReactNode
}

const SidebarProvider = ({ children }: SidebarContextProps) => {
  const [textIsVisible, setTextIsVisible] = React.useState(false)
  const [selectedMenu, setSelectedMenu] = React.useState('')
  const [updateLayout, setUpdateLayout] = React.useState(false)
  const [menus, setMenus] = React.useState<IMenus[]>([])

  const hideText = useCallback(
    (hide: boolean) => {
      setTextIsVisible(hide)
    },
    [setTextIsVisible]
  )

  const handleSelectedMenu = useCallback(
    (menu: string) => {
      setSelectedMenu(menu)
    },
    [setSelectedMenu]
  )

  useEffect(() => {
    setUpdateLayout(textIsVisible)
  }, [textIsVisible])

  useEffect(() => {
    setMenus(mockMenus)
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        textIsVisible: textIsVisible,
        currentSelectedMenu: selectedMenu,
        updateLayout: updateLayout,
        menus: menus,
        updateMenus: setMenus,
        handleVisibleText: (hide: boolean) => hideText(hide),
        handleSelectedMenu: (menuName: string) => handleSelectedMenu(menuName)
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
