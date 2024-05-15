import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SlideImage = ({ previousImage, currentIndex, nextImage, images }) => {
  return (
    <picture className="relative flex items-center bg-orange sm:bg-transparent">
      <button
        className="bg-white w-10 h-10 flex items-center justify-center pr-1 rounded-full absolute left-6 z-10"
        onClick={previousImage}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="lg" color="#1D2026" />
      </button>
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={images[currentIndex]}
          alt="coffee"
          className="object-cover w-[400px] h-[400px] block rounded-xl m-auto pointer-events-none transition duration-300 lg:pointer-events-auto lg:cursor-pointer lg:hover:shadow-xl"
          id="hero"
        />
      </div>
      <button
        className="bg-white w-10 h-10 flex items-center justify-center pl-1 rounded-full absolute right-6 z-10"
        onClick={nextImage}
      >
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="#1D2026" />
      </button>
    </picture>
  );
};

export default SlideImage;
