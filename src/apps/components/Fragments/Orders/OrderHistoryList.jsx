import { useEffect, useState } from "react";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import OrderHistoryItem from "../../Elements/OrderHistoryItem";

const OrderHistoryList = () => {
  const [historyOrders, setHistoryOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await CustomerSourceAPI.getHistoryOrder();
        setHistoryOrders(response.historyOrders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="mt-6 flow-root sm:mt-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {historyOrders.length > 0 ? (
          historyOrders.map((order) => <OrderHistoryItem key={order.id} order={order} />)
        ) : (
          <div>Belum ada riwayat pesanan</div>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryList;
