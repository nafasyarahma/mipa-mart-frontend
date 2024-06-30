const CheckoutItem = ({item}) => {
  console.log(item)
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row p-2">
      <img
        className="h-16 w-24 rounded-md border object-cover object-center"
        src={item.product.images}
        alt=""
      />
      <div className="flex w-full flex-col justify-between px-4">
        <p className="text-gray-600">{item.product.name}</p>
        <div className="flex justify-between">
          <p className="font-semibold">Rp{item.product.price}</p>
          <p className="text-gray-500">x{item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
