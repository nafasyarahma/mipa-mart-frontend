import { Link } from "react-router-dom";
import Button from "./basic/Button";
import formatingDates from "../../utils/formattingDates";
import formatingPrices from "../../utils/fotmattingPrices";

const OrderItem = ({ order, handleComplete, handleCancel }) => {
  return (
    <div className="flex flex-wrap items-start gap-y-4 gap-x-4 py-6">
      <dl className="w-full sm:w-1/3 lg:w-1/4 ">
        <dt className="text-base font-medium text-gray-500">ID Pesanan:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900">
          <a href="#" className="hover:underline">
            # {order.id}
          </a>
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500">Total Harga:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900">
          {formatingPrices(order.total_price)}
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500">Status Order:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900 capitalize">
          {order.order_status}
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500">Status Bayar:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900 capitalize">
          {order.payment_status}
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500">Tanggal Pesan:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900">
          {formatingDates(order.created_at)}
        </dd>
      </dl>

      <div className="w-full  lg:w-60 lg:items-center flex flex-row justify-end gap-2">
        <Link to={`/customer/order/${order.id}/detail`}>
          <Button label="Lihat Detail"></Button>
        </Link>

        {order.order_status === "pending" && (
          <Button label="Batalkan" onClick={handleCancel}></Button>
        )}

        {order.order_status === "processed" && (
          <Button label="Selesai" onClick={handleComplete}></Button>
        )}
      </div>
    </div>
  );
};

export default OrderItem;
