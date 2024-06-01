import { useState } from "react";
import SidebarMenu from "../../Elements/SidebarMenu";
import NavDashboard from "./NavDashboard";
import AuthSourceAPI from "../../../api/resources/sourceAuth";
import ToastNotification from "../../assets/helpers/ToastNotification";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const SidebarNavAdmin = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
    <>
      <NavDashboard
        pageTitle="Dashboard Admin"
        sidebar="sidebar-admin"
        toggleSidebar={toggleSidebar}
        isAdmin
      />

      <aside
        id="sidebar-admin"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform 
        ${
          isSidebarOpen ? "" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <SidebarMenu
              link="/admin/dashboard"
              icon="fa-solid fa-table-columns"
              label="Dashboard"
            />
            <SidebarMenu
              link="/admin/categories"
              icon="fa-solid fa-layer-group"
              label="Kategori"
            />
            <SidebarMenu
              link="/admin/members"
              icon="fa-solid fa-address-card"
              label="Member"
            />
            <SidebarMenu
              link="/admin/customers"
              icon="fa-solid fa-user-tag"
              label="Customer"
            />
            <button
              onClick={handleLogout}
              className="flex items-center p-2 text-red-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                size="lg"
                style={{ color: "#ff3d3d" }}
              />
              <span className="ml-3">Logout</span>
            </button>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarNavAdmin;
