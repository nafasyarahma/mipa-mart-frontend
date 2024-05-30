import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import CategorySourceAPI from "../../../api/resources/sourceCategory.js";
import ToastNotification from "../../assets/helpers/ToastNotification.js";

const FormAddCategory = ({ subTitle }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSumbit = async(e) => {
    e.preventDefault();
    const data = { name, description };

    try {
      const response = await CategorySourceAPI.postCategory(data);
      ToastNotification.toastSuccess(response);
      navigate("/admin/categories");
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  }

  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      <form onSubmit={handleSumbit} className="space-y-6 mt-4">
        <InputForm
          id="name"
          name="name"
          type="text"
          placeholder="Contoh: Makanan, Minuman, Aksesoris, dsb."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        >
          Nama Kategori
        </InputForm>
        <InputForm
          id="description"
          name="description"
          type="text"
          placeholder="Deskripsi kategori"
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

export default FormAddCategory;
