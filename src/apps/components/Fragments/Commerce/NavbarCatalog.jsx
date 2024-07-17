import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import DropdownMenuCustomer from "../Customers/DropdownMenuCustomer";
import Button from "../../Elements/basic/Button";
import AuthSourceAPI from "../../../api/resources/sourceAuth";
import ToastNotification from "../../assets/helpers/ToastNotification";

const NavbarCatalog = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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

    if (roleLogged === "customer") {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    // Panggil checkAuth pada saat komponen di-mount
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await AuthSourceAPI.logout();
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");

      ToastNotification.toastSuccess(response);
      navigate("/login");
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white text-gray-700 border-b border-gray-500">
      <div className="flex justify-between items-center px-5 xl:px-12 py-6">
        <Link
          className="text-2xl font-bold font-heading hover:text-purple-500"
          to="/"
        >
          MIPA MART
        </Link>

        {/* Responsive navbar */}
        <div className="flex items-center xl:hidden">
          {isAuthenticated ? (
            <Link className="mr-6" to="/customer/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="xl" />
            </Link>
          ) : (
            <>
              <Link className="mr-6" to="/register/choose-role">
                <Button type="button" label="Register" />
              </Link>
              <Link className="mr-6" to="/login">
                <Button type="button" label="Login" />
              </Link>
            </>
          )}
          <button
            className="navbar-burger self-center lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>

        {/* Desktop navbar */}
        <div className="hidden xl:flex items-center space-x-5">
          {isAuthenticated ? (
            <>
              {/* Nav Links */}
              <ul className="flex space-x-12 font-semibold font-heading mr-8">
                <li>
                  <Link className="hover:text-purple-500" to="/">
                    Katalog
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-500" to="/customer/orders">
                    Daftar Pesanan
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-purple-500"
                    to="/customer/orders/history"
                  >
                    Riwayat Pesanan
                  </Link>
                </li>
              </ul>
              <Link
                className="flex items-center hover:text-purple-500"
                to="/customer/cart"
              >
                <FontAwesomeIcon icon={faShoppingCart} size="xl" />
              </Link>
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-purple-500"
              >
                <FontAwesomeIcon icon={faUserCircle} size="xl" />
              </button>

              {dropdownVisible && (
                <DropdownMenuCustomer handleLogout={handleLogout} />
              )}
            </>
          ) : (
            <div className="flex space-x-3">
              <Link to="/register/choose-role">
                <Button type="button" label="Register" />
              </Link>
              <Link to="/login">
                <Button type="button" label="Login" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white p-5 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="space-y-6 font-semibold">
            <li>
              <Link
                className="hover:text-purple-500"
                to="/"
                onClick={toggleSidebar}
              >
                Katalog
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-purple-500"
                to="/customer/orders"
                onClick={toggleSidebar}
              >
                Daftar Pesanan
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-purple-500"
                to="/customer/orders/history"
                onClick={toggleSidebar}
              >
                Riwayat Pesanan
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-purple-500"
                to="/customer/cart"
                onClick={toggleSidebar}
              >
                Keranjang
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <button
                    onClick={toggleDropdown}
                    className="hover:text-purple-500"
                  >
                    Profil
                  </button>
                  {dropdownVisible && <DropdownMenuCustomer />}
                </li>
                <li>
                  <button onClick={handleLogout} className="hover:text-purple-500">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register/choose-role" onClick={toggleSidebar}>
                    <Button type="button" label="Register" />
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={toggleSidebar}>
                    <Button type="button" label="Login" />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCatalog;
