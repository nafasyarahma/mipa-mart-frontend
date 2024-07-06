import { useEffect, useState } from "react";
import CommerceLayout from "../../components/Layouts/CommerceLayout";
import CustomerSourceAPI from "../../api/resources/sourceCustomer";
import Cart from "../../components/Fragments/Commerce/Carts";

const CartPage = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await CustomerSourceAPI.getCart();
        setCarts(response.carts);
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

  const removeCart = (cartId) => {
    setCarts(carts.filter((cart) => cart.id !== cartId));
  };

  return (
    <CommerceLayout>
      <h1 className="py-3 text-gray-700 text-2xl text-center lg:text-start font-bold">
        Keranjang Saya
      </h1>
      <div className="mt-8 w-full justify-center xl:px-0">
        {carts.length > 0 ? (
          carts.map((cart) => (
            <Cart key={cart.id} cart={cart} removeCart={removeCart} ></Cart>
          ))
        ) : (
          <p>Keranjang Anda kosong</p>
        )}
      </div>
    </CommerceLayout>
  );
};

export default CartPage;
