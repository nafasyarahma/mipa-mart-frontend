import OrderList from "../../components/Fragments/Commerce/OrderList";
import CommerceLayout from "../../components/Layouts/CommerceLayout";

const OrderPageCustomer = () => {
  return (
    <CommerceLayout>
      <div className="lg:flex justify-between items-center mb-6">
        <h1 className="py-3 text-gray-700 text-2xl text-center lg:text-start font-bold">
          Semua Pesanan
        </h1>
      </div>
      <OrderList></OrderList>
    </CommerceLayout>
  );
};

export default OrderPageCustomer;
