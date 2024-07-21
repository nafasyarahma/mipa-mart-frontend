import { useState } from "react";
import Button from "../../Elements/basic/Button";
import TextArea from "../../Elements/basic/TextArea";

const FormReview = ({ product, onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product.product_id, comment);
  };

  return (
    <form className="mb-10" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-2">{}</h3>
      <div className="mb-4">
       
        <TextArea
          id="comment"
          name="comment"
          label={product.name}
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
