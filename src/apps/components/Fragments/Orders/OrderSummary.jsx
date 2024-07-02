import CheckoutItems from "../Commerce/CheckoutItems";
import { useState, useEffect } from "react";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import formatingPrices from "../../../utils/fotmattingPrices";

const OrderSummary = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await CustomerSourceAPI.getCart();
        setCart(response.carts.cartItems);
        setTotalPrice(response.carts.totalPrice);
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  return (
    <div>
      <p className="text-xl font-medium">Ringkasan Pesanan</p>
      <p className="text-gray-400 mb-6">
        Check your items. And select a suitable shipping method.
      </p>
      <CheckoutItems
        cart={cart}
        totalPrice={totalPrice}
        formatingPrices={formatingPrices}
      />
    </div>
  );
};

export default OrderSummary;
