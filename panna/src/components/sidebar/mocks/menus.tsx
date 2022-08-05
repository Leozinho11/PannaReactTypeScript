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
        name: 'Não sei',
        path: '/teste'
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
      }
    ]
  },
  {
    title: 'contato',
    submenus: [
      {
        name: 'sla',
        path: '/sla'
      }
    ]
  }
]
