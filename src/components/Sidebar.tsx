import { Link, NavLink } from "react-router-dom";
import {
  Home,
  Users,
  BarChart2,
  Settings,
  CreditCard,
  ShieldUser,
  UserStar,
  CircleDollarSign,
} from "lucide-react";


type SidebarProps = {
  isCollapsed: boolean;
};

const topMenuItems = [
  { path: "/", label: "Bosh sahifa", icon: <Home size={20} /> },
  { path: "/users", label: "Foydalanuvchilar", icon: <Users size={20} /> },
  { path: "/employees", label: "Xodimlar", icon: <UserStar size={20} /> },
  {
    path: "/analytics",
    label: "Statistika va Analitika",
    icon: <BarChart2 size={20} />,
  },
  { path: "/payments", label: "To'lovlar", icon: <CreditCard size={20} /> },
  { path: "/prices", label: "Narxlar", icon: <CircleDollarSign size={20} /> },
  { path: "/admins", label: "Adminlar", icon: <ShieldUser size={20} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  return (
    <div
      className={`h-screen border-r border-gray-200/60 bg-white flex flex-col transition-[width] duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center justify-center h-14 px-4 text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors"
      >
        {!isCollapsed && "Klinka"}
      </Link>

      <ul className="flex-1 px-2 py-2 space-y-1">
        {topMenuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-base transition-colors duration-150
                ${
                  isActive
                    ? "bg-gray-300 text-gray-900"
                    : "text-gray-800 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <span className="text-gray-700">{item.icon}</span>
              {!isCollapsed && (
                <span className="whitespace-nowrap overflow-hidden">
                  {item.label}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200/60 px-2 py-2">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-base transition-colors duration-150
            ${
              isActive
                ? "bg-gray-100 text-gray-900 font-semibold"
                : "text-gray-800 hover:bg-gray-50 hover:text-gray-900"
            }`
          }
        >
          <span className="text-gray-700">
            <Settings size={20} />
          </span>
          {!isCollapsed && <span>Sozlamalar</span>}
        </NavLink>
      </div>

      <div className="p-3 text-sm text-gray-500 border-t border-gray-200/60 text-center">
        {!isCollapsed && `Klinka ${new Date().getFullYear()}`}
      </div>
    </div>
  );
};

export default Sidebar;
