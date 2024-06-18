import CardProduct from "../../Elements/CardProduct";

const ProductCards = ({products}) => {
  return (
    <div className="mt-10 grid sm:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
