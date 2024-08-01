import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import formatingDates from "../../utils/formattingDates";

const ReviewHistory = ({review}) => {
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
    <div className="gap-3 py-6 sm:flex sm:items-start">
      <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
        <div className="space-y-0.5 mb-2">
          <p className="text-base font-semibold text-gray-900">{review.product.name}</p>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {formatingDates(review.createdAt)}
          </p>
        </div>
        <div className="flex items-center gap-0.5">
          {renderStars()}
        </div>
      </div>

      <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0 border rounded h-24 p-2">
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {review.comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewHistory;
