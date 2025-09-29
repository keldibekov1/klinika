import type { ReactNode } from "react"
// import { Navigate } from "react-router-dom"

type ProtectedRouteProps = {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
//   const isAuthenticated = localStorage.getItem("token") 

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />
//   }

  return children
}

export default ProtectedRoute