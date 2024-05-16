import OrderSummary from "../../components/Fragments/Commerce/OrderSummary";
import OrderDelivery from "../../components/Fragments/Commerce/OrderDelivery";
import OrderPayment from "../../components/Fragments/Commerce/OrderPayment";
import Button from "../../components/Elements/Button";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 py-8">
      <div className="px-6 pt-8">
        <OrderSummary></OrderSummary>
        <OrderDelivery></OrderDelivery>
      </div>

      <div className="mt-10 bg-gray-50 px-4 py-8 lg:mt-0">
        <OrderPayment></OrderPayment>
        <div className="mt-8">
          <Button label="Pesan" className="w-full mb-4"/>
          <Link to="/customer/cart">
            <Button label="Batal" className="w-full"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
