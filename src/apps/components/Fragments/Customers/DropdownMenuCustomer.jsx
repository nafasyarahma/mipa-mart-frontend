import { Link } from "react-router-dom";
const DropdownMenuCustomer = () => {
  return (
    <div className="absolute right-10 mt-52 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
      <Link
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        to="/customer/profile/edit"
      >
        Edit Profil
      </Link>
      <Link
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        to="/customer/order"
      >
        Daftar Pesanan
      </Link>
      <Link
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        to="/login"
      >
        Logout
      </Link>
    </div>
  );
};

export default DropdownMenuCustomer;
