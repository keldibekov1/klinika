import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

import ProtectedRoute from "./ProtectedRoute"

const Home = lazy(() => import("@/pages/Home"))
const Login = lazy(() => import("@/pages/Login"))
const DashboardLayout = lazy(() => import("@/layout/DashboardLayout"))
const Users = lazy(() => import("@/pages/users/Users"))
const Settings = lazy(() => import("@/pages/Settings"))
const Analytics = lazy(() => import("@/pages/Analytics"))
const Payments = lazy(() => import("@/pages/Payments"))
const Admins = lazy(() => import("@/pages/Admins"))
const Employee = lazy(() => import("@/pages/Employee"))
const Price = lazy(() => import("@/pages/Price"))
const Notification = lazy(() => import("@/pages/Notification"))

const routes = [
  { path: "/", element: <Home />, index: true },
  { path: "/users", element: <Users /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/payments", element: <Payments /> },
  { path: "/admins", element: <Admins /> },
  { path: "/employees", element: <Employee /> },
  { path: "/prices", element: <Price /> },
  { path: "/notifications", element: <Notification /> },
  { path: "/settings", element: <Settings /> },
]

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-600"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {routes.map((route) =>
            route.index ? (
              <Route key="index" index element={route.element} />
            ) : (
              <Route key={route.path} path={route.path} element={route.element} />
            )
          )}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
