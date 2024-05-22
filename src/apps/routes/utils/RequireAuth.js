import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = ({ redirectPath }) => {
  const isAuthenticated = localStorage.getItem('accessToken');

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />
  }

  return (<Outlet />)
}

export default RequireAuth