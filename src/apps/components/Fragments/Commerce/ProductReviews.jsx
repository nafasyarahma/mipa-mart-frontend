import { useEffect, useState } from "react";
import CardReview from "../../Elements/basic/CardReview";
import ProductSourceAPI from "../../../api/resources/sourceProduct";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async (productId) => {
      try {
        const response = await ProductSourceAPI.getProductReview(productId);
        setReviews(response.reviews);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchReviews(productId);
  }, [productId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Ulasan Produk</h1>
      <div className="flex flex-col gap-4">
      {!reviews || reviews.length > 0 ? (
        reviews.map((review) => (
          <CardReview
            key={review.id}
            review={review}
          />
        ))
      ) : (
        <p className="text-gray-500 text-center">Belum ada ulasan untuk produk ini.</p>
      )}
      </div>
    </div>
  );
};

export default ProductReviews;
