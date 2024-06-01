import IconButton from "../Elements/basic/IconButton";

const CartItem = ({item, handleDelete}) => {
  const totalPrice = item.product.price * item.quantity;

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {item.product.name}
            </h2>
            <p className="mt-1 text-sm text-gray-600">Rp{item.product.price}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-semibold text-gray-600 mr-2">
              Jumlah: {item.quantity}
            </p>
            <IconButton icon="fa-solid fa-pen" iconColor="purple"></IconButton>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className=" border-gray-100">
            <p className="text-sm text-gray-600 text-right">Total</p>
            <p className="mt-2 font-bold text-gray-900 text-right">Rp{totalPrice}</p>
          </div>
          <div className="flex justify-end">
            <IconButton
              icon="fa-solid fa-trash"
              iconColor="red"
              size="lg"
              onClick={() => handleDelete(item.id)}
            ></IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
