import { Link } from "react-router-dom";

const OrderProduct = ({ product, format }) => {
  console.log(product);
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row p-2">
      <img
        className="h-16 w-24 rounded-md border object-cover object-center"
        src={product.image}
        alt=""
      />
      <div className="flex w-full flex-col justify-between px-4">
        {product.product_id ? (
          <Link
            to={`/product/${product.product_id}/detail`}
            className="text-gray-600 hover:underline hover:text-purple-500"
          >
            {" "}
            {product.name}
          </Link>
        ) : (
          <p className="text-gray-600">{product.name}</p>
        )}

        <div className="flex justify-between">
          <p className="font-semibold">{format(product.price)}</p>
          <p className="text-gray-500">x{product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
