import { useEffect, useState } from "react";
import OrderItem from "../../Elements/OrderItem";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import ToastNotification from "../../assets/helpers/ToastNotification";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await CustomerSourceAPI.getOrdersCustomer();
        setOrders(response.orders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const handleComplete = async (id) => {
    try {
      const response = await CustomerSourceAPI.completeOrder(id);
      const currectData = orders.filter((order) => order.id !== id);
      setOrders(currectData);
      ToastNotification.toastSuccess(response);
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <div className="mt-6 flow-root sm:mt-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrderItem
              key={order.id}
              order={order}
              handleComplete={() => handleComplete(order.id)}
            />
          ))
        ) : (
          <div>Belum ada pesanan</div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
