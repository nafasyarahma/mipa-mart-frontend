import { useState } from "react";
import SlideImage from "../../components/Elements/SlideImage";
import CommerceLayout from "../../components/Layouts/CommerceLayout";
import SectionDetailProduct from "../../components/Fragments/Commerce/SectionDetailProduct";

const images = [
  "https://images.pexels.com/photos/22873741/pexels-photo-22873741/free-photo-of-close-up-of-a-cup-of-coffee.jpeg",
  "https://images.pexels.com/photos/16135377/pexels-photo-16135377/free-photo-of-close-up-of-yellow-flower.jpeg",
];

const DetailProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CommerceLayout>
      <div className="flex items-start flex-col md:flex-row mx-auto">
        <div className="min-h-screen w-full md:w-1/2 p-6">
          <SlideImage
            previousImage={previousImage}
            currentIndex={currentIndex}
            nextImage={nextImage}
            images={images}
          />
        </div>

        <div className="min-h-screen w-full  md:w-1/2 p-6">
          <SectionDetailProduct></SectionDetailProduct>
        </div>
      </div>
    </CommerceLayout>
  );
};

export default DetailProduct;
