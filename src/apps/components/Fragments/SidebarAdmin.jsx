import SidebarMenu from "../Elements/SidebarMenu";

const SidebarAdmin = ({ isSidebarOpen }) => {
  return (
    <aside
      id="sidebar-admin"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform 
      ${ isSidebarOpen ? "" : "-translate-x-full" } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <SidebarMenu icon="fa-solid fa-table-columns" label="Dashboard"/>
          <SidebarMenu icon="fa-solid fa-layer-group" label="Kategori"/>
          <SidebarMenu icon="fa-solid fa-address-card" label="Member"/>
          <SidebarMenu icon="fa-solid fa-user-tag" label="Customer"/>
          <SidebarMenu icon="fa-solid fa-right-from-bracket" label="Logout"/>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarAdmin
