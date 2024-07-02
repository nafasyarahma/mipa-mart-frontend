const OrderProduct = ({product, format}) => {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row p-2">
      <img
        className="h-16 w-24 rounded-md border object-cover object-center"
        src={product.image}
        alt=""
      />
      <div className="flex w-full flex-col justify-between px-4">
        <p className="text-gray-600">{product.name}</p>
        <div className="flex justify-between">
          <p className="font-semibold">{format(product.price)}</p>
          <p className="text-gray-500">x{product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
