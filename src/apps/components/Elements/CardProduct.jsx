import Button from "./basic/Button";

const CardProduct = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-54 lg:w-64">
      <div className="relative w-full h-48">
        <img
          className="w-full h-full object-cover"
          src={product.images}
          alt="Product Image"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          {product.status}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">{product.price}</span>
          <Button label="+ Keranjang" />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
