import CheckoutItems from "../Commerce/CheckoutItems";
import { useState, useEffect } from "react";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import { useParams } from "react-router-dom";

const OrderSummary = () => {
  const { cartId } = useParams();
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await CustomerSourceAPI.getCartById(cartId);
        setCart(response.cart);
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartData();
  }, [cartId]);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <p className="text-xl font-medium">Ringkasan Pesanan</p>
      <p className="text-gray-400 mb-6">
        Check your items. And select a suitable shipping method.
      </p>
      <CheckoutItems cart={cart} />
    </div>
  );
};

export default OrderSummary;
