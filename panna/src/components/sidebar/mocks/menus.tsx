/* eslint-disable react/react-in-jsx-scope */

interface Submenu {
  name: string
  path: string
}

interface Menus {
  title: string
  icon?: JSX.Element
  submenus: Submenu[]
}

export const mockMenus: Menus[] = [
  {
    title: 'Home',
    submenus: [
      {
        name: 'Home',
        path: '/home'
      }
    ]
  },
  {
    title: 'Tabela',
    submenus: [
      {
        name: 'Libertadores',
        path: '/libertadores'
      },
      {
        name: 'Brasileirão',
        path: '/brasileirao'
      },
      {
        name: 'Champions League',
        path: '/champions-league'
      },
      {
        name: 'Europa League',
        path: '/europa-league'
      }
    ]
  },
  {
    title: 'contato',
    submenus: [
      {
        name: 'contatos',
        path: '/contatos'
      }
    ]
  },
  {
    title: 'Login',
    submenus: [
      {
        name: 'login',
        path: '/login'
      }
    ]
  }
]
