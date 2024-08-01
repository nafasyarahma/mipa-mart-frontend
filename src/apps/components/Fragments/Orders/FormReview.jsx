import { useState } from "react";
import Button from "../../Elements/basic/Button";
import TextArea from "../../Elements/basic/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FormReview = ({ product, onSubmit }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product.product_id, rating, comment);
  };

  const handleClick = (newRating) => {
    handleRatingChange(newRating);
  };

  return (
    <form className="mb-10" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-2">{}</h3>
      <div className="mb-4">
        <p className="font-semibold mb-2">{product.name}</p>
        <div className="star-rating mb-4">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleClick(ratingValue)}
                  className="hidden"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="lg"
                  style={{
                    color: ratingValue <= rating ? "#ffc107" : "#e4e5e9",
                  }}
                />
              </label>
            );
          })}
        </div>
        <TextArea
          id="comment"
          name="comment"
          placeholder="Tulis ulasan tentang produk ini"
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <div className="">
        <Button type="submit" label="Simpan"></Button>
      </div>
    </form>
  );
};

export default FormReview;
