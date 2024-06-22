import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MemberSourceAPI from "../../../api/resources/sourceMember";

const TableHistoryOrders = ({ subTitle }) => {
  const [historyOrders, setHistoryOrders] = useState([]);
  // const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    const fetchHistoryOrders = async () => {
      try {
        const response = await MemberSourceAPI.getMemberHistoryOrders();
        setHistoryOrders(response.historyOrders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistoryOrders();
  }, []);

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
              Tanggal Pemesanan
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal Selesai
            </th>
            <th scope="col" className="px-6 py-3">
              Total Pesanan
            </th>
            <th scope="col" className="px-6 py-3">
              Status Pesanan
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {historyOrders.length > 0 ? (
            historyOrders.map((order, index) => (
            <tr
              key={order.id} 
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">#{order.id}</td>
            <td className="px-6 py-4 ">{order.created_at}</td>
            <td className="px-6 py-4 ">{order.updated_at}</td>
            <td className="px-6 py-4 ">Rp{order.total_price}</td>
            <td className="px-6 py-4 ">{order.order_status}</td>
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
    </>
  );
};

export default TableHistoryOrders;
