import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "../../Elements/SidebarMenu";
import NavDashboard from "./NavDashboard";
import AuthSourceAPI from "../../../api/resources/sourceAuth";
import MemberSourceAPI from "../../../api/resources/sourceMember";
import ToastNotification from "../../assets/helpers/ToastNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const SidebarNavMember = ({username}) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0);

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

  const fetchMemberOrders = async () => {
    try {
      const response = await MemberSourceAPI.getMemberOrders();
      return response.orders;
    } catch (error) {
      console.error(error);
    }
  }
 
  const countOrderPending = (orders) => {
    const pendingOrders = orders.filter(order => order.order_status === "pending");
    return pendingOrders.length;
  }

  useEffect(() => {
    const getOrdersData = async () => {
      const orders = await fetchMemberOrders();
      const pendingCount = await countOrderPending(orders);
      setPendingOrdersCount(pendingCount);
    }

    getOrdersData();
  }, []);

  return (
    <>
      <NavDashboard
        pageTitle="Dashboard Member"
        sidebar="sidebar-member"
        toggleSidebar={toggleSidebar}
        link="/member/profil/edit"
        username={username}
      />
      <aside
        id="sidebar-member"
        className={`fixed top-0 left-0 z-40 w-64 min-h-full pt-20 transition-transform 
      ${
        isSidebarOpen ? "" : "-translate-x-full"
      } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto px-3 pb-4 bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <SidebarMenu
              link="/member/dashboard"
              icon="fa-solid fa-table-columns"
              label="Dashboard"
            />
            <SidebarMenu
              link="/member/products"
              icon="fa-solid fa-box-open"
              label="Produk"
            />
            <SidebarMenu
              link="/member/payment-methods"
              icon="fa-money-check-dollar"
              label="Metode Pembayaran"
            />
            <SidebarMenu
              link="/member/delivery-methods"
              icon="fa-solid fa-truck-fast"
              label="Metode Pengiriman"
            />
            <SidebarMenu
              link="/member/orders"
              icon="fa-solid fa-cart-arrow-down"
              label="Pesanan"
              badgeCount={pendingOrdersCount}
            />
            <SidebarMenu
              link="/member/orders/history"
              icon="fa-solid fa-clock-rotate-left"
              label="Riwayat Pesanan"
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

export default SidebarNavMember;
