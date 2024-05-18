import OrderItems from "./OrderItems";

const OrderSummary = () => {
  return (
    <div>
      <p className="text-xl font-medium">Ringkasan Pesanan</p>
      <p className="text-gray-400 mb-6">
        Check your items. And select a suitable shipping method.
      </p>
      <OrderItems></OrderItems>
    </div>
  );
};

export default OrderSummary;
