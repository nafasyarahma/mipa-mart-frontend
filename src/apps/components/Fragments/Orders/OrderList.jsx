import { useEffect, useState } from "react";
import OrderItem from "../../Elements/OrderItem";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";

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

  return (
    <div className="mt-6 flow-root sm:mt-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {orders.length > 0 ? (
          orders.map((order) => <OrderItem key={order.id} order={order} />)
        ) : (
          <div>Tidak ada order</div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
