import React from 'react'
import SidebarProvider from './contexts/sidebar.context'
import SidebarView from './sidebar-view.component'

const Sidebar: React.FC = () => {
  return (
    <SidebarProvider>
      <SidebarView />
    </SidebarProvider>
  )
}

export default Sidebar
