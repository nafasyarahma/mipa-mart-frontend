import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Elements/Button";

const SectionDetailProduct = () => {
  return (
    <>
      <h4 className="font-bold text-orange mb-2 uppercase text-xs tracking-widest">
        Nama Penjual
      </h4>
      <h1 className="text-very-dark mb-4 font-bold text-3xl lg:text-4xl">
        Tomora Coffee
      </h1>
      <p className="text-dark-grayish mb-6 text-base sm:text-lg">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex justify-between mb-6 sm:flex-row items-center ">
        <div className="flex items-center gap-4">
          <h3 className="text-very-dark font-bold text-3xl inline-block flex justify-between">
            Rp25.000
          </h3>
        </div>
        <form className="">
          <div className="relative flex items-center">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="counter-input"
              className="flex-shrink-0 text-white bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100"
            >
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className="flex-shrink-0 text-gray-900 border-0 bg-transparent  font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
              placeholder=""
              value="12"
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="counter-input"
              className="flex-shrink-0 text-white bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100"
            >
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col items-center gap-5 my-16 sm:flex-row lg:mb-0">
        <Button type="submit" className="w-full" label="Tambah ke keranjang"/>
        <Button type="submit" className="w-full" label="Hubungi Penjual"/>
      </div>
    </>
  );
};

export default SectionDetailProduct;
