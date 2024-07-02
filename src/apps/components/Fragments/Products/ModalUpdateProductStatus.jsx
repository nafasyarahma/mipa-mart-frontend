import RadioOption from "../../Elements/basic/RadioOption";
import Button from "../../Elements/basic/Button";
import { useEffect, useState } from "react";
import ProductSourceAPI from "../../../api/resources/sourceProduct";
import ToastNotification from "../../assets/helpers/ToastNotification";

const ModalUpdateProductStatus = ({ isOpen, onClose, productId }) => {
  const [productStatus, setProductStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductSourceAPI.getProductById(productId);
        setProductStatus(response.product.status);
      } catch (error) {
        console.error(error);
      }
    };

    if (isOpen && productId) {
      fetchData();
    }
  }, [productId, isOpen]);

  const handleStatusChange = (e) => {
    setProductStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { status: productStatus};
  
      const response = await ProductSourceAPI.putProductStatusById(
        productId,
        data
      );
      ToastNotification.toastSuccess(response);
      onClose();
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <div
      id="updateProductStatus"
      tabIndex="-1"
      aria-hidden="true"
      className={`modal ${
        isOpen ? "modal-open" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center  w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto ">
        {/* Modal Content */}
        <div className="modal-content relative p-4 bg-white rounded-lg shadow sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
            <h3 className="text-lg font-semibold text-gray-900">
              Update Status
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
          <form onSubmit={handleSubmit}>
            <div className="flex items-center py-4">
              <p className="block text-sm font-semibold text-gray-900 mr-16">
                Status
              </p>
              <RadioOption
                name="status"
                id="ready"
                value="ready"
                label="Ready"
                checked={productStatus === "ready"}
                onChange={handleStatusChange}
              />
              <RadioOption
                name="status"
                id="preorder"
                value="preorder"
                label="Pre-Order"
                checked={productStatus === "preorder"}
                onChange={handleStatusChange}
              />
              <RadioOption
                name="status"
                id="soldout"
                value="soldout"
                label="Soldout"
                checked={productStatus === "soldout"}
                onChange={handleStatusChange}
              />
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

export default ModalUpdateProductStatus;
