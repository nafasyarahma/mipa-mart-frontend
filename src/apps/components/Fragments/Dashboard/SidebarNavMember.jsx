import { useState } from "react";
import SidebarMenu from "../../Elements/SidebarMenu";
import NavDashboard from "./NavDashboard";

const SidebarNavMember = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
    <NavDashboard pageTitle="Dashboard Member" sidebar="sidebar-member" toggleSidebar={toggleSidebar} link="/member/profil/edit"/>
    <aside
      id="sidebar-member"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform 
      ${ isSidebarOpen ? "" : "-translate-x-full" } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <SidebarMenu link="/member/dashboard" icon="fa-solid fa-table-columns" label="Dashboard"/>
          <SidebarMenu link="/member/orders" icon="fa-solid fa-cart-arrow-down" label="Pesanan"/>
          <SidebarMenu link="/member/products" icon="fa-solid fa-box-open" label="Produk"/>
          <SidebarMenu link="/member/payment-methods" icon="fa-money-check-dollar" label="Metode Pembayaran"/>
          <SidebarMenu link="/member/delivery-methods" icon="fa-solid fa-truck-fast" label="Metode Pengiriman"/>
          <SidebarMenu link="/login" icon="fa-solid fa-right-from-bracket" label="Logout"/>
        </ul>
      </div>
    </aside>
    </>
  );
};

export default SidebarNavMember;
