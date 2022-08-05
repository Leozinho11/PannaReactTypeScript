interface ISubmenu {
  name: string
  path: string
}

export interface IMenus {
  title: string
  submenus: ISubmenu[]
}

export interface ISidebarContext {
  currentSelectedMenu: string
  textIsVisible: boolean
  updateLayout: boolean
  menus: IMenus[]
  updateMenus: (menus: IMenus[]) => void
  handleVisibleText: (hide: boolean) => void
  handleSelectedMenu: (menuName: string) => void
}
