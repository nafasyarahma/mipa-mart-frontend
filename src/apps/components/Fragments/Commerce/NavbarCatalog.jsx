import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

import { Link } from "react-router-dom";
import useDropdown from "../../../../hooks/useDropdown";
import DropdownMenuCustomer from "../Customers/DropdownMenuCustomer";

const NavbarCatalog = () => {
  const { dropdownVisible, toggleDropdown } = useDropdown();

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
        <div className="hidden xl:flex items-center space-x-5">
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
      </div>
      {/* Responsive navbar */}
      <Link className="xl:hidden flex mr-6 items-center" to="/customer/cart">
        <FontAwesomeIcon icon="fa-solid fa-shopping-cart" size="xl" />
      </Link>
      <button
        className="navbar-burger self-center mr-12 lg:hidden"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" size="lg" />
      </button>
    </nav>
  );
};

export default NavbarCatalog;
