import Button from "../../Elements/basic/Button";
import { useState } from "react";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import ToastNotification from "../../assets/helpers/ToastNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ModalChangeQuantity = ({ isOpen, onClose, item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { quantity };
      await CustomerSourceAPI.changeQuantity(item.id, data);
      onClose();
      document.location.reload();
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
      console.error(error);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      id="modalChangeQuantity"
      tabIndex="-1"
      aria-hidden="true"
      className={`modal ${
        isOpen ? "modal-open" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center  w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative p-4 w-54 max-w-2xl h-full md:h-auto ">
        {/* Modal Content */}
        <div className="modal-content relative p-4 bg-white rounded-lg shadow sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
            <h3 className="text-lg font-semibold text-gray-900">
              Ubah Jumlah Produk
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-toggle="updateStatusModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body*/}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center w-full gap-4"
          >
            <div className="relative flex items-center justify-between mb-4 md:mb-0 md:mr-4">
              <button
                onClick={decrement}
                type="button"
                id="decrement-button"
                data-input-counter-decrement="counter-input"
                className="flex-shrink-0 text-white bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-8 w-8 focus:ring-gray-100"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input
                type="text"
                id="counter-input"
                name="quantity"
                data-input-counter
                className="flex-shrink-0 text-gray-900 border-0 bg-transparent font-normal focus:outline-none focus:ring-0 max-w-[3rem] text-center mx-2"
                placeholder=""
                value={quantity}
                required
                readOnly
              />
              <button
                onClick={increment}
                type="button"
                id="increment-button"
                data-input-counter-increment="counter-input"
                className="flex-shrink-0 text-white bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-8 w-8 focus:ring-gray-100"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="submit" className="" label="Simpan"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalChangeQuantity;
