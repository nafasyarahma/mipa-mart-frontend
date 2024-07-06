import OrderList from "../../components/Fragments/Orders/OrderList";
import CommerceLayout from "../../components/Layouts/CommerceLayout";

const OrderListCustomer = () => {
  return (
    <CommerceLayout>
      <section className="bg-white antialiased">
        <div className="mx-auto max-w-screen-xl 2xl:px-0">
          <div className="mx-auto w-full">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Pesanan Saya
              </h2>
            </div>
            <OrderList/>
          </div>
        </div>
      </section>
    </CommerceLayout>
  );
};

export default OrderListCustomer;
