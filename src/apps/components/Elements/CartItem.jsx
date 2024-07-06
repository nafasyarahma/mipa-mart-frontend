import { useState } from "react";
import IconButton from "../Elements/basic/IconButton";
import ModalChangeQuantity from "../Fragments/Commerce/ModalChangeQuantity";

const CartItem = ({ item, handleDelete, format }) => {
  const totalPrice = item.product.price * item.quantity;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="justify-between border rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={item.product.images}
        alt="product-image"
        className="rounded-lg w-40 h-20 object-cover"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {item.product.name}
            </h2>
            <p className="mt-1 text-sm text-gray-600">{format(item.product.price)}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-semibold text-gray-600 mr-2">
              Jumlah: {item.quantity}
            </p>
            <IconButton
              icon="fa-solid fa-pen"
              iconColor="purple"
              onClick={handleModalOpen}
            ></IconButton>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className=" border-gray-100">
            <p className="text-sm text-gray-600 text-right">Total</p>
            <p className="mt-2 font-bold text-gray-900 text-right">
              {format(totalPrice)}
            </p>
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
      <ModalChangeQuantity
        modalId="modalChangeQuantity"
        item={item}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default CartItem;
