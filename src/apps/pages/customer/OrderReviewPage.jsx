import { useParams } from "react-router-dom";
import CustomerSourceAPI from "../../api/resources/sourceCustomer";
//import ToastNotification from '../../utils/ToastNotification';
import { useEffect, useState } from "react";
import CommerceLayout from "../../components/Layouts/CommerceLayout";
import FormReview from "../../components/Fragments/Orders/FormReview";
import ProductSourceAPI from "../../api/resources/sourceProduct";
import ToastNotification from "../../components/assets/helpers/ToastNotification";

const OrderReview = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [reviewedProducts, setReviewedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async (orderId) => {
      try {
        const response = await CustomerSourceAPI.getOrderById(orderId);
        setOrder(response.order);
        setReviewedProducts(response.order.reviews.map(review => review.product_id)); 
      } catch (error) {
        console.error("Failed to fetch order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder(orderId);
  }, [orderId]);

  const handleReviewSubmit = async (productId, comment) => {
    
    const data = {orderId, comment};

    try {
      const response = await ProductSourceAPI.addProductReview(productId, data);
      setReviewedProducts((prev) => [...prev, productId]);
      ToastNotification.toastSuccess(response);
    } catch (error) {
      console.error('Failed to submit review:', error);
      ToastNotification.toastError(error.response.data.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <CommerceLayout>
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Tambahkan Ulasan
      </h2>
      
      {order.products
      .filter(product => !reviewedProducts.includes(product.product_id))
      .map((product) => (
        <FormReview
          key={product.product_id}
          product={product}
          onSubmit={handleReviewSubmit}
        />
      ))}
    </div>
    </CommerceLayout>
  );
};

export default OrderReview;
