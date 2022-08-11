import Sidebar from 'components/sidebar/sidebar'
import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import { ContentStyled, SidebarStyled, WrapperStyled } from './body.styled'

export type BodyProps = {
  children: React.ReactNode
}

const BodyView: React.FC<BodyProps> = ({ children }) => {
  const location = useLocation()
  if (location.pathname == '/login') {
    return <Fragment>{children}</Fragment>
  }
  return (
    <WrapperStyled>
      <SidebarStyled aria-label="menu lateral" id="sidebar">
        <Sidebar />
      </SidebarStyled>
      <ContentStyled aria-label="conteudo">{children}</ContentStyled>
    </WrapperStyled>
  )
}

export default BodyView
