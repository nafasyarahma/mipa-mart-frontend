import { useEffect, useState } from "react";
import SidebarMenu from "../../Elements/SidebarMenu";
import NavDashboard from "./NavDashboard";
import AuthSourceAPI from "../../../api/resources/sourceAuth";
import ToastNotification from "../../assets/helpers/ToastNotification";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import MemberSourceAPI from "../../../api/resources/sourceMember";

const SidebarNavAdmin = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pendingMembersCount, setPendingMembersCount] = useState(0);

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

  const fetchMembers = async () => {
    try {
      const response = await MemberSourceAPI.getAllMembers();
      return response.members;
    } catch (error) {
      console.error(error);
    }
  }

  const countMemberPending = (members) => {
    const pendingMembers = members.filter(member => member.verif_status === "pending");
    return pendingMembers.length;
  }

  useEffect(() => {
    const getMemberData = async () => {
      const members = await fetchMembers();
      const pendingCount = await countMemberPending(members);
      setPendingMembersCount(pendingCount);
    }

    getMemberData();
  }, []);

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
        className={`fixed top-0 left-0 z-40 w-64 min-h-full pt-20 transition-transform 
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
              badgeCount={pendingMembersCount}
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
