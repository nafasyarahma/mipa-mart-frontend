import OrderItems from "../Fragments/Commerce/OrderItems";
import OrderDetailPayment from "../Fragments/Commerce/OrderDetailPayment";
import OrderDetailDelivery from "../Fragments/Commerce/OrderDetailDelivery";
import OrderDetailNote from "../Fragments/Commerce/OrderDetailNote";
import SellerInfo from "../Fragments/Commerce/SellerInfo";
import CustomerInfo from "../Fragments/Commerce/CustomerInfo";

const OrderDetailLayout = ({ type, title }) => {
  return (
    <>
      <h1 className="mb-4 text-gray-700 text-2xl text-center lg:text-start font-bold">
        {title}
      </h1>
      <h1 className="text-gray-600 font-semobild mb-2">
        ID: #7103171038{" "}
        <span className="bg-purple-500 text-white text-sm rounded-lg px-2 py-1">
          Pending
        </span>
      </h1>
      <p className="text-gray-600">Tanggal Pemesanan: 20:30 5-5-2024</p>
      <div className="mt-8 max-w-5xl justify-center md:flex md:space-x-6 xl:px-0">
        <div className="flex flex-col md:w-2/3 gap-6">
          <OrderItems></OrderItems>

          <div className="flex gap-4">
            <OrderDetailPayment></OrderDetailPayment>
            <OrderDetailDelivery></OrderDetailDelivery>
          </div>
        </div>

        {/* <!-- Sub total --> */}
        <div className="flex flex-col gap-6 w-1/3">
          <OrderDetailNote></OrderDetailNote>
          {type === "member" && <CustomerInfo></CustomerInfo>}
          {type === "customer" && <SellerInfo></SellerInfo>}
        </div>
      </div>
    </>
  );
};

export default OrderDetailLayout;
