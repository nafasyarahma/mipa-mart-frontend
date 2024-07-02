import OrderDetailLayout from "../../components/Layouts/OrderDetailLayout";
import CommerceLayout from "../../components/Layouts/CommerceLayout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomerSourceAPI from "../../api/resources/sourceCustomer";

const OrderDetailCustomer = () => {
  const { id } = useParams();
  const [order, setOrder] = useState("");
  const [isLoading, setIsLoading] = useState("true");

  useEffect(() => {
    const fetchOrder = async (id) => {
      try {
        const response = await CustomerSourceAPI.getOrderById(id);
        setOrder(response.order);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder(id);
  }, [id]);

  return (
    <CommerceLayout>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <OrderDetailLayout
          title="Detail Pesanan"
          type="customer"
          order={order}
        ></OrderDetailLayout>
      )}
    </CommerceLayout>
  );
};

export default OrderDetailCustomer;
