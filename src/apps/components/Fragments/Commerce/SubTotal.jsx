import { Link } from "react-router-dom";
import formatingPrices from "../../../utils/fotmattingPrices";

const SubTotal = ({cart}) => {
  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/2">
      {/* <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Ringkasan Belanja</p>
      </div>
      <hr className="my-4" /> */}
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{formatingPrices(cart.total_price)}</p>
        </div>
      </div>
      <Link to={`/customer/checkout/${cart.id}`}>
        <button className="mt-5 w-full rounded-md bg-purple-500 py-1.5 font-medium text-blue-50 hover:bg-purple-600">
          Check out
        </button>
      </Link>
    </div>
  );
};

export default SubTotal;
