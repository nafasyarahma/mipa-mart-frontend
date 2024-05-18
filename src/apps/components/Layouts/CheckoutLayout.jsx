import OrderSummary from "../Fragments/Commerce/OrderSummary";
import OrderDeliveries from "../Fragments/Commerce/OrderDeliveries";
import OrderPayments from "../Fragments/Commerce/OrderPayments";
import Button from "../Elements/basic/Button";
import { Link } from "react-router-dom";

const CheckoutLayout = () => {
  return (
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20">
      <div className="px-6">
        <OrderSummary />
        <OrderDeliveries />
      </div>

      <div className="mt-10 bg-gray-50 px-4 py-8 lg:mt-0">
        <OrderPayments></OrderPayments>
        <div className="mt-8">
          <Link to="/customer/order">
            <Button label="Pesan" className="w-full mb-4" />
          </Link>
          <Link to="/customer/cart">
            <Button label="Batal" className="w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
