import { useState } from "react"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} />

      <div className="flex-1 flex flex-col">
        <Navbar 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed} 
        />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
