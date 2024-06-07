import { Link } from "react-router-dom";
import IconButton from "../../Elements/basic/IconButton";
import { useEffect, useState } from "react";
import MemberSourceAPI from "../../../api/resources/sourceMember";
import ModalOrderStatus from "./ModalOrderStatus";

const TableOrders = ({ subTitle }) => {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await MemberSourceAPI.getMemberOrders();
        setOrders(response.orders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const handleModalOpen = (orderId) => {
    setSelectedOrderId(orderId);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedOrderId(null)
  };

  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal Pemasanan
            </th>
            <th scope="col" className="px-6 py-3">
              Payment
            </th>
            <th scope="col" className="px-6 py-3">
              Delivery
            </th>
            <th scope="col" className="px-6 py-3">
              Total Pesanan
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
            <tr
              key={order.id} 
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">#{order.id}</td>
            <td className="px-6 py-4 ">{order.created_at}</td>
            <td className="px-6 py-4 ">{order.payment_method.provider}</td>
            <td className="px-6 py-4 ">{order.delivery_method.method}</td>
            <td className="px-6 py-4 ">Rp{order.total_price}</td>
            <td className="px-6 py-4 items-center gap-3">
              <span className="flex items-center gap-2">
                {order.status}
                <IconButton 
                  color="green" 
                  icon="fa-solid fa-pen" 
                  onClick={() => handleModalOpen(order.id)}
                  dataModalTarget="updateOrderStatus"
                  dataModalToggle="updateOrderStatus"
                />
              </span>
            </td>
            <td className="flex items-center px-6 py-4">
              <Link to={`/member/order/${order.id}/detail`}>
                <p className="underline hover:text-purple-500">Lihat Detail</p>
              </Link>
            </td>
          </tr>
            ))
          ) :(
            <tr>
              <td colSpan="8" className="px-6 py-4 text-center text-black">
                Belum ada pesanan
              </td>
            </tr>
            )}
          
        </tbody>
      </table>
      <ModalOrderStatus
      orderId={selectedOrderId}
      isOpen={isModalOpen}
      onClose={handleModalClose}
      />
    </>
  );
};

export default TableOrders;
