import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Elements/basic/Button";
import { useState } from "react";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import ToastNotification from "../../assets/helpers/ToastNotification";
import { useNavigate } from "react-router-dom";

const SectionDetailProduct = ({ product }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const formattedDescription = product.description.replace(/\n/g, "<br />");

  const fotmattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(product.price)
    .replace(/,00/g, "");

  const handleWhatsAppClick = () => {
    const whatsasppNumber = product.seller.no_wa.replace(/^0/, "62");
    window.open(`https://wa.me/${whatsasppNumber}`, "_blank");
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const data = { productId: product.id, quantity };
    
    try {
      const response = await CustomerSourceAPI.addToCart(data);
      ToastNotification.toastSuccess(response);
      navigate("/customer/cart")
    } catch (error) {
      console.error("Failed to add to cart", error);
      ToastNotification.toastError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="border-b pb-4">
        <p className="text-very-dark mb-4 font-bold text-2xl lg:text-3xl">
          {product.name}
        </p>
        <p className="text-gray-600 font-bold text-xl">{fotmattedPrice}</p>
      </div>
      <div className="py-4 text-sm text-gray-600 border-b">
        <p className="font-bold">Deskripsi</p>
        <p
          className="my-2"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        ></p>
      </div>

      <div className="py-4 border-b text-sm text-gray-600">
        <p className="font-bold mb-2">Penjual</p>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-user" />
          <span className="ml-3">{product.seller.name}</span>
        </div>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          <span className="ml-3">{product.seller.address}</span>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mt-8">
        <form className="flex flex-col md:flex-row items-center w-full gap-4">
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

          <Button
            type="button"
            onClick={handleWhatsAppClick}
            className="w-full md:w-auto"
            label="Hubungi Penjual"
          />
          <Button
            type="submit"
            onClick={handleAddToCart}
            className="w-full md:w-auto"
            label="Tambah ke keranjang"
          />
        </form>
      </div>
    </>
  );
};

export default SectionDetailProduct;
