import OrderDetailPayment from "../Fragments/Orders/OrderDetailPayment";
import OrderDetailDelivery from "../Fragments/Orders/OrderDetailDelivery";
import OrderDetailNote from "../Fragments/Orders/OrderDetailNote";
import SellerInfo from "../Fragments/Orders/SellerInfo";
import CustomerInfo from "../Fragments/Orders/CustomerInfo";
import OrderProducts from "../Fragments/Orders/OrderProducts";
import formatingDates from "../../utils/formattingDates";

const OrderDetailLayout = ({ type, title, order }) => {
  
  return (
    <>
      <h1 className="mb-4 text-gray-700 text-2xl text-center lg:text-start font-bold">
        {title}
      </h1>
      <div className="flex flex-row justify-between">
      <div>
        <p className="text-gray-600 font-semobild mb-2">ID: #{order.id}</p>
        <p className="text-gray-600">Tanggal Pemesanan: {formatingDates(order.created_at)}</p>
      </div>
      <div>
        <p className="text-gray-600 font-semobild mb-2 text-right">
          Status Pesanan{" "}
          <span className="bg-purple-500 text-white text-sm rounded-lg px-2 py-1">
            {order.order_status}
          </span>
        </p>
        <p className="text-gray-600 font-semobild mb-2 text-right">
          Status Pembayaran{"  "}
          <span className="bg-purple-500 text-white text-sm rounded-lg px-2 py-1">
            {order.payment_status}
          </span>
        </p>
      </div>
      </div>
      

      <div className="mt-8 max-w-6xl justify-center md:flex md:space-x-6 xl:px-0 mx-auto">
        <div className="flex flex-col md:w-2/3 gap-6">
          <OrderProducts order={order} />

          <div className="flex gap-4">
            <OrderDetailPayment order={order} />
            <OrderDetailDelivery order={order} />
          </div>
        </div>

        {/* <!-- Sub total --> */}
        <div className="flex flex-col gap-6 w-1/3">
          <OrderDetailNote order={order}></OrderDetailNote>
          {type === "member" && <CustomerInfo order={order} />}
          {type === "customer" && <SellerInfo order={order} />}
        </div>
      </div>
    </>
  );
};

export default OrderDetailLayout;
