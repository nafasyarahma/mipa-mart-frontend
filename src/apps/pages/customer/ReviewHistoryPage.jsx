import { useEffect, useState } from "react";
import ReviewHistory from "../../components/Elements/ReviewHistory";
import CommerceLayout from "../../components/Layouts/CommerceLayout";
import { useParams } from "react-router-dom";
import CustomerSourceAPI from "../../api/resources/sourceCustomer";

const ReviewHistoryPage = () => {
  const { orderId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async (orderId) => {
      try {
        const response = await CustomerSourceAPI.getOrderReviewsHistory(
          orderId
        );
        setReviews(response.reviews);
      } catch (error) {
        console.error("Failed to fetch order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews(orderId);
  }, [orderId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <CommerceLayout>
      <div>
        <h2 className="text-2xl font-semibold mb-6">Ulasan saya</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewHistory key={review.id} review={review}></ReviewHistory>
          ))
        ) : (
          <p>Belum ada ulasan</p>
        )}
      </div>
    </CommerceLayout>
  );
};

export default ReviewHistoryPage;
