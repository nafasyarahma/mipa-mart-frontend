import { useState, useEffect } from "react";
import CardProduct from "../../Elements/CardProduct";
import ProductSourceAPI from "../../../api/resources/sourceProduct";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductSourceAPI.getAllProducts();
        setProducts(response.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-10 grid sm:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
