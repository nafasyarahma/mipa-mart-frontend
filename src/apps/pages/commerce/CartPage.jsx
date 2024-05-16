import CommerceLayout from "../../components/Layouts/CommerceLayout";
import CartItem from "../../components/Elements/CartItem";
import SubTotal from "../../components/Fragments/Commerce/SubTotal";

CartItem;
const CartPage = () => {
  return (
    <CommerceLayout>
      <h1 className="py-3 text-gray-700 text-2xl text-center lg:text-start font-bold">
        Keranjang Saya
      </h1>
      <div className=" mt-8 max-w-5xl justify-center md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <CartItem></CartItem>
        </div>
        {/* <!-- Sub total --> */}
        <SubTotal></SubTotal>
      </div>
    </CommerceLayout>
  );
};

export default CartPage;
