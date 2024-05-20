import OrderItem from "../../Elements/OrderItem";
const OrderItems = () => {
  return (
    <div className="rounded-lg border p-4 space-y-3">
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <div className="flex justify-between font-bold px-2 pt-4 border-t">
        <p>Total Bayar</p>
        <p>Rp50.000</p>
      </div>
    </div>
  );
};

export default OrderItems;
