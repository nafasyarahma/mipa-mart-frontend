const OrderDetailDelivery = ({order}) => {
  const orderDelivery = order?.delivery_method || '';

  return (
    <div className="rounded-lg border p-6 space-y-3 w-1/2">
      <h2 className="mb-4 font-bold">Metode Pengiriman</h2>
      <div className="">
        <span className="mt-2 font-semibold">{orderDelivery.method}</span>
        <p className="text-slate-500 text-sm">
          {orderDelivery.description}
        </p>
      </div>
    </div>
  );
};

export default OrderDetailDelivery;
