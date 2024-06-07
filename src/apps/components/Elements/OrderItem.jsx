import { format } from "date-fns";
import { Link } from "react-router-dom";
import Button from "./basic/Button";

const OrderItem = ({ order }) => {
  const formattedDate = format(new Date(order.created_at), "dd-MM-yyyy");

  return (
    <div className="flex flex-wrap items-center gap-y-4 gap-x-4 py-6">
      <dl className="w-full sm:w-1/3 lg:w-1/4 ">
        <dt className="text-base font-medium text-gray-500">Order ID:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900">
          <a href="#" className="hover:underline">
            # {order.id}
          </a>
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500">Date:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900">
          {formattedDate}
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500">Price:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900">
          Rp{order.total_price}
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-gray-500">Status:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900">
          {order.status}
        </dd>
      </dl>

      <div className="w-full grid lg:w-40 lg:items-center">
        <Link to={`/customer/order/${order.id}/detail`}>
          <Button label="Lihat Detail"></Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderItem;
