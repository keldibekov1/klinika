import { Bell, Menu } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

interface NavbarProps {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate()

  const [unreadCount, setUnreadCount] = useState(3) // qopol misol, API dan olamiz keyin

  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200/60 px-6 py-2.5 shadow-sm">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 rounded-md hover:bg-gray-100 transition"
      >
        <Menu size={22} className="text-gray-700" />
      </button>

      <div className="flex items-center gap-5">
        <button
          onClick={() => {
            navigate("/notifications")
            setUnreadCount(0) 
          }}
          className="relative p-1.5 rounded-full hover:bg-gray-100 transition"
        >
          <Bell size={20} className="text-gray-600" />
          
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full ring-2 ring-white">
              {unreadCount}
            </span>
          )}
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/012/210/707/small_2x/worker-employee-businessman-avatar-profile-icon-vector.jpg"
            alt="avatar"
            className="w-9 h-9 rounded-full border border-gray-200"
          />
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-medium text-gray-700">Admin aka</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
