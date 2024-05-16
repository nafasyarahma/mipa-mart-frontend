import OrderItem from "../../Elements/OrderItem";

const OrderSummary = () => {
  return (
    <div>
      <p className="text-xl font-medium">Ringkasan Pesanan</p>
      <p className="text-gray-400">
        Check your items. And select a suitable shipping method.
      </p>
      <div className="mt-6 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <div className="flex justify-between font-bold px-2 pt-4 border-t">
          <p>Total Bayar</p>
          <p>Rp50.000</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary
