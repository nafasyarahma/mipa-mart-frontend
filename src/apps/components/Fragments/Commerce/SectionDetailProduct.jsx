import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Elements/basic/Button";
import { useEffect, useState } from "react";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import ToastNotification from "../../assets/helpers/ToastNotification";
import { useNavigate } from "react-router-dom";
import checkAuth from "../../../utils/checkAuth";

const SectionDetailProduct = ({ product }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Panggil checkAuth pada saat komponen di-mount
    const roleLogged = checkAuth();

    if (roleLogged === "customer") {
      setIsAuthenticated(true);
    }
  }, []);

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

    // Cek apakah pengguna sudah login
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

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

          <button type="button" onClick={handleWhatsAppClick} className="w-full md:w-auto flex justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp mr-2" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            <span>Hubungi Penjual</span>
          </button>

          {/* <Button
            type="button"
            onClick={handleWhatsAppClick}
            className="w-full md:w-auto"
            label="Hubungi Penjual"
          /> */}
          <Button
            type="submit"
            onClick={handleAddToCart}
            className="w-full md:w-auto "
            label="Tambah ke keranjang"
          />
        </form>
      </div>
    </>
  );
};

export default SectionDetailProduct;
