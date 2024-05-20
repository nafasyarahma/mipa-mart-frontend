import Button from "./basic/Button";
const CardProduct = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-54 lg:w-64">
      <div className="relative">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Product Image"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">Product Title</h3>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
          ante vel eros fermentum.
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">Rp35.000</span>
          <Button label="+ Keranjang" />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
