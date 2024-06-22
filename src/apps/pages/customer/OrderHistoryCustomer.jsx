import OrderHistoryList from "../../components/Fragments/Orders/OrderHistoryList";
import CommerceLayout from "../../components/Layouts/CommerceLayout";

const OrderHistoryCustomer = () => {
  return (
    <CommerceLayout>
      <section className="bg-white py-8 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                Riwayat Pesanan
              </h2>
            </div>
            <OrderHistoryList/>
          </div>
        </div>
      </section>
    </CommerceLayout>
  );
};

export default OrderHistoryCustomer;
