import AuthSourceAPI from "../../../api/resources/sourceAuth";
import { Link } from "react-router-dom";
import ToastNotification from "../../assets/helpers/ToastNotification";
import { useNavigate } from "react-router-dom";

const DropdownMenuCustomer = () => {
  const navigate = useNavigate();

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
