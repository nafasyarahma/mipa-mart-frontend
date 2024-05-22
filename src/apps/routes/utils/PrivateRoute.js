import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ redirectPath, role, children }) => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    return <Navigate to={redirectPath} />
  }

  const decodedToken = jwtDecode(accessToken);
  const roleLogged = decodedToken.role;

  if (roleLogged !== role) {
    return <Navigate to={redirectPath} />
  }

  return children
}

export default PrivateRoute