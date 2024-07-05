import { useNavigate } from "react-router-dom";
import Button from "./basic/Button";
import formatingPrices from "../../utils/fotmattingPrices";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}/detail`);
  };


  return (
    <div
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-54 lg:w-64 hover:scale-105 transition-transform duration-300"
    >
      <div className="relative w-full h-48">
        <img
          className="w-full h-full object-cover"
          src={product.images}
          alt="Product Image"
        />
         { product.status === "ready" ? (
            <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              {product.status}
            </div>
        ) : (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            {product.status}
          </div>
        ) }
        
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {truncateDescription(product.description, 80)}
        </p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-bold text-lg">{formatingPrices(product.price)}</span>
          <Button label="Lihat Deatil" onClick={handleCardClick} />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
