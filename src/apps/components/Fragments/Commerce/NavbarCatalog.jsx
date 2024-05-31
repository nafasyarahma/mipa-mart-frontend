import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

import { Link } from "react-router-dom";
import useDropdown from "../../../../hooks/useDropdown";
import DropdownMenuCustomer from "../Customers/DropdownMenuCustomer";
import Button from "../../Elements/basic/Button";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const NavbarCatalog = () => {
  const { dropdownVisible, toggleDropdown } = useDropdown();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  return (
    <nav className="fixed top-0 z-50 flex justify-between items-center w-full bg-white text-gray-700 border border-b-gray-500">
      <div className="px-5 xl:px-12 py-6 flex justify-between w-full items-center">
        <Link className="text-2xl font-bold font-heading" to="/">
          MIPA MART
        </Link>
        {/* Nav Links */}
        <ul className="hidden md:flex  px-4 font-semibold font-heading space-x-12">
          <li>
            <Link className="hover:text-purple-500" to="/">
              Katalog
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-500" to="/category">
              Kategori
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-500" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        {/* Header Icons */}
        {isAuthenticated ? (
          <div className="xl:flex items-center space-x-5">
            <Link
              className="flex items-center hover:text-purple-500"
              to="/customer/cart"
            >
              <FontAwesomeIcon icon="fa-solid fa-shopping-cart" size="xl" />
            </Link>
            {/* Customer Menu */}
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-purple-500"
            >
              <FontAwesomeIcon icon="fa-solid fa-user-circle" size="xl" />
            </button>
            {dropdownVisible && <DropdownMenuCustomer />}
          </div>
        ) : (
          <div className="xl:flex items-center space-x-3">
            <Link className="" to="/register/choose-role">
              <Button type="button" className="" label="Register"></Button>
            </Link>
            <Link className="" to="/login">
              <Button type="button" className="" label="Login"></Button>
            </Link>
          </div>
        )}
      </div>

      {/* Responsive navbar
      <div className="xl:hidden flex items-center space-x-5">
        {isAuthenticated ? (
          <Link className="mr-6" to="/customer/cart">
            <FontAwesomeIcon icon="fa-solid fa-shopping-cart" size="xl" />
          </Link>
        ) : (
          <>
            <Link className="mr-6" to="/register">
              <Button type="button" className="" label="Register"></Button>
            </Link>
            <Link className="mr-6" to="/login">
              <Button type="button" className="" label="Login"></Button>
            </Link>
          </>
        )}
      </div>
      <button
        className="navbar-burger self-center mr-12 lg:hidden"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" size="lg" />
      </button> */}
    </nav>
  );
};

export default NavbarCatalog;
