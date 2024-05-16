const OrderItem = () => {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row p-2">
      <img
        className="h-16 w-24 rounded-md border object-cover object-center"
        src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="flex w-full flex-col justify-between px-4">
        <p className="text-gray-600">Sepatu Adidos</p>
        <div className="flex justify-between">
          <p className="font-semibold">$138.99</p>
          <p className="text-gray-500">x1</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
