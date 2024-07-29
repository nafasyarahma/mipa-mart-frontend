import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlideImage from "../../components/Elements/SlideImage";
import CommerceLayout from "../../components/Layouts/CommerceLayout";
import SectionDetailProduct from "../../components/Fragments/Commerce/SectionDetailProduct";
import ProductSourceAPI from "../../api/resources/sourceProduct";
import ProductReviews from "../../components/Fragments/Commerce/ProductReviews";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const response = await ProductSourceAPI.getProductById(id);
        setProduct(response.product);
      } catch (error) {
        console.error("Failed to fetch product:", error); 
      } finally {
        setLoading(false);
      }
    };

    fetchProduct(id);
  }, [id]);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return (
      <CommerceLayout>
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading...</p>
        </div>
      </CommerceLayout>
    );
  }

  return (
    <CommerceLayout>
      <div className="flex items-start flex-col md:flex-row mx-auto mb-10">
        <div className=" w-full md:w-1/2 p-6 relative">
          <SlideImage
            previousImage={previousImage}
            currentIndex={currentIndex}
            nextImage={nextImage}
            images={product.images}
          />
        </div>

        <div className=" w-full md:w-1/2 p-6">
          <SectionDetailProduct product={product} />
        </div>
      </div>

      <ProductReviews productId={id}></ProductReviews>
      
    </CommerceLayout>
  );
};

export default DetailProduct;
