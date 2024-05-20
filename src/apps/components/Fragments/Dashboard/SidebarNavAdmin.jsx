import { useState } from "react";
import SidebarMenu from "../../Elements/SidebarMenu";
import NavDashboard from "./NavDashboard";

const SidebarNavAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
            <SidebarMenu
              link="/login"
              icon="fa-solid fa-right-from-bracket"
              label="Logout"
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarNavAdmin;
