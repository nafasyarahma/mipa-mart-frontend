import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ redirectPath, role, children }) => {
  const accessToken = localStorage.getItem('accessToken');
  let roleLogged = null;

  if (accessToken) {
    try {
      const decodedToken = jwtDecode(accessToken);
      roleLogged = decodedToken.role;
    } catch (error) {
      console.error('Error decoding token', error);
      return <Navigate to={redirectPath} />;
    }
  }

  if (!accessToken || roleLogged !== role) {
    return <Navigate to={redirectPath} />;
  }

  return children
}

export default PrivateRoute