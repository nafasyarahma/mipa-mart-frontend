import CartItem from "../../Elements/CartItem";
import SubTotal from "./SubTotal";
import formatingPrices from "../../../utils/fotmattingPrices";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import { useState } from "react";
import ToastNotification from "../../assets/helpers/ToastNotification";

const Cart = ({ cart, removeCart }) => {
  const [cartItems, setCartItems] = useState(cart.cartItems);

  const handleDelete = async (cartItemId) => {
    try {
      const response = await CustomerSourceAPI.deleteCartItem(cartItemId);
      const updatedCartItems = cartItems.filter((item) => item.id !== cartItemId);
      setCartItems(updatedCartItems);

      if (updatedCartItems.length === 0) {
        removeCart(cart.id); 
      }

      ToastNotification.toastSuccess(response);
    } catch (error) {
      console.error("Failed to add to cart", error);
      ToastNotification.toastError(error.response.data.message);
    }
  };

  return (
    <div className="p-6 border rounded-md mb-8">
      <p className="mb-3 font-semibold">{cart.member.name}</p>
      <div className="flex justify-between gap-6">
        <div className="rounded-lg w-full flex flex-col gap-3">
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                format={formatingPrices}
              />
            ))}
        </div>
        <SubTotal cart={cart}></SubTotal>
      </div>

      {/* <!-- Sub total --> */}
    </div>
  );
};

export default Cart;
