const OrderDetailPayment = () => {
  return (
    <div className="rounded-lg border p-6 space-y-3 w-1/2">
      <h2 className="mb-4 font-bold">Metode Pembayaran</h2>
      <div className="">
        <span className="mt-2 font-semibold">DANA</span>
        <p className="text-slate-500 text-sm font-semibold">
          081971283104 a.n. NABILA PUTRI
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
