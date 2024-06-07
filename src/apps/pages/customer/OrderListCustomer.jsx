import OrderList from "../../components/Fragments/Orders/OrderList";
import CommerceLayout from "../../components/Layouts/CommerceLayout";

const OrderListCustomer = () => {
  return (
    <CommerceLayout>
      <section className="bg-white py-8 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                My orders
              </h2>

              <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                <div>
                  <label
                    htmlFor="order-type"
                    className="sr-only mb-2 block text-sm font-medium text-gray-900"
                  >
                    Select order type
                  </label>
                  <select
                    id="order-type"
                    className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option selected>All orders</option>
                    <option value="pre-order">Pre-order</option>
                    <option value="transit">In transit</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            <OrderList/>
          </div>
        </div>
      </section>
    </CommerceLayout>
  );
};

export default OrderListCustomer;
