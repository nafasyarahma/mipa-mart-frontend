import { useEffect, useState } from "react";
import CommerceLayout from "../../components/Layouts/CommerceLayout";
import CartItem from "../../components/Elements/CartItem";
import SubTotal from "../../components/Fragments/Commerce/SubTotal";
import CustomerSourceAPI from "../../api/resources/sourceCustomer";
import ToastNotification from "../../components/assets/helpers/ToastNotification";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await CustomerSourceAPI.getCart();
        setCart(response.carts.cartItems);
        setTotalPrice(response.carts.totalPrice);
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await CustomerSourceAPI.deleteCartItem(id);
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      const updatedTotalPrice = updatedCart.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
      setTotalPrice(updatedTotalPrice);
      ToastNotification.toastSuccess(response);
    } catch (error) {
      console.error("Failed to add to cart", error);
      ToastNotification.toastError(error.response.data.message);
    }
  };


  return (
    <CommerceLayout>
      <h1 className="py-3 text-gray-700 text-2xl text-center lg:text-start font-bold">
        Keranjang Saya
      </h1>
      <div className=" mt-8 max-w-5xl justify-center md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <p>Keranjang Anda kosong</p>
          )}
        </div>
        {/* <!-- Sub total --> */}
        <SubTotal totalPrice={totalPrice}></SubTotal>
      </div>
    </CommerceLayout>
  );
};

export default CartPage;
