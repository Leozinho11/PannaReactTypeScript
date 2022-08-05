import React from 'react'
import SidebarView from './sidebar-view.component'
import SidebarProvider from './contexts/sidebar.context'

const Sidebar: React.FC = () => {
  return (
    <SidebarProvider>
      <SidebarView />
    </SidebarProvider>
  )
}

export default Sidebar
