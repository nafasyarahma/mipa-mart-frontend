import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import CategorySourceAPI from "../../../api/resources/sourceCategory.js";
import ToastNotification from "../../assets/helpers/ToastNotification.js";

const FormEditCategory = ({ subTitle }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [ description, setDescription ] = useState("");

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await CategorySourceAPI.getCategoryById(id);
        setDescription(response.category.description)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { description }

    try {
      const response = await CategorySourceAPI.putCategoryById(id, data);
      ToastNotification.toastSuccess(response);
      navigate("/admin/categories")
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  }

  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <InputForm
          id="description"
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
          Deskripsi
        </InputForm>
        <div className="flex justify-end">
          <Button type="submit" className="mt-10 w-32" label="Simpan"></Button>
        </div>
      </form>
    </>
  );
};

export default FormEditCategory;
