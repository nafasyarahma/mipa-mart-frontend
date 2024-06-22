import { Link } from "react-router-dom";

const OrderDetailPayment = ({ order }) => {
  const orderPayment = order?.payment_method || "";

  return (
    <div className="rounded-lg border p-6 space-y-3 w-1/2">
      <h2 className="mb-4 font-bold">Metode Pembayaran</h2>
      <div className="">
        <span className="mt-2 font-semibold">{orderPayment.provider}</span>
        <p className="text-slate-500 text-sm">
          {orderPayment.no_account} a.n. {orderPayment.name}
        </p>

        {order.payment_image ? (
          <Link to={order.payment_image}>
            <p className="underline text-purple-500 hover:text-purple-700 text-sm mt-3">
              Lihat Bukti Pembayaran
            </p>
          </Link>
        ) : (
          <p>-</p>
        )}
      </div>
    </div>
  );
};

export default OrderDetailPayment;
