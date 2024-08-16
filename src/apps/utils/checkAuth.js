import { jwtDecode } from "jwt-decode";

const checkAuth = () => {
  const accessToken = localStorage.getItem("accessToken");
  let roleLogged = null;

  if (accessToken) {
    try {
      const decodedToken = jwtDecode(accessToken);
      roleLogged = decodedToken.role;
    } catch (error) {
      console.error("Error decoding token", error);
    }
  }

  return roleLogged
};

export default checkAuth;