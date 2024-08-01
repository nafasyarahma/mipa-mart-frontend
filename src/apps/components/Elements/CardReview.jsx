import formattingDates from "../../utils/formattingDates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CardReview = ({ review }) => {
  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        style={{ color: index < review.rating ? "#ffcd42" : "#e4e5e9" }}
      />
    ))
  }
  
  return (
    <div className="lg:w-full">
      <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
        <div className="items-center gap-5 pb-4">
          <div className="block">
            <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
              {review.customer.username}
            </h5>
            <div  className="flex flex-row items-center justify-between">
              <div>
                {renderStars()}
              </div>
              <div className="text-sm leading-4 text-gray-500">
                {formattingDates(review.createdAt)}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-solid border-gray-200 pt-5">
          <div className="flex items-center gap-2 text-amber-500 transition-all duration-500"></div>
          <p className="text-sm text-gray-600 leading-6 transition-all duration-500  group-hover:text-gray-800 slide_active:text-gray-800">
            {review.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
