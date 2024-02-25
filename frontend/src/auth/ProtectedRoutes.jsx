import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes({ user }) {
  // pass user role when scale up
  // for example: if the user === "Dispatch" => can edit/archive tickets
  return (
    user ? <Outlet /> : <Navigate to='/auth/login' />
  )
}

export default ProtectedRoutes
