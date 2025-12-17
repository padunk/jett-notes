import React from "react"
import { AppSidebar } from "./app-sidebar"
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"

type Props = {
  children: React.ReactNode
}

function Dashboard({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div>
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  )
}

export default Dashboard
