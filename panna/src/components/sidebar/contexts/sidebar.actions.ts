import { ISidebarContext } from './sidebar.types'

export const initialState: ISidebarContext = {
  currentSelectedMenu: 'inicio',
  textIsVisible: false,
  updateLayout: false,
  menus: [],
  updateMenus: () => undefined,
  handleVisibleText: () => undefined,
  handleSelectedMenu: () => undefined
}
