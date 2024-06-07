const OrderDetailPayment = ({order}) => {
  const orderPayment = order?.payment_method || '';
  
  return (
    <div className="rounded-lg border p-6 space-y-3 w-1/2">
      <h2 className="mb-4 font-bold">Metode Pembayaran</h2>
      <div className="">
        <span className="mt-2 font-semibold">{orderPayment.provider}</span>
        <p className="text-slate-500 text-sm font-semibold">
          {orderPayment.no_account} a.n. {orderPayment.name}
        </p>
        <p className="text-slate-500 text-sm mt-2">
          Bukti Pembayaran:{" "}
          <span className="text-purple-500 underline">screenshoot.jpg</span>
        </p>
      </div>
    </div>
  );
};

export default OrderDetailPayment;
