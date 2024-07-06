import { Link } from "react-router-dom";

const DropdownMenuCustomer = ({handleLogout}) => {
  
  return (
    <div className="absolute right-10 mt-40 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
      <Link
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        to="/customer/profile/edit"
      >
        Edit Profil
      </Link>
      <button
        onClick={handleLogout}
        className="block px-4 py-2 text-red-700 hover:font-bold"
      >
        Logout
      </button>
    </div>
  );
};

export default DropdownMenuCustomer;
