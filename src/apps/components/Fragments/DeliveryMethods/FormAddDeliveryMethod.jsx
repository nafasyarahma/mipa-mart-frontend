import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import DeliveryMethodSourceAPI from "../../../api/resources/sourceDeliveryMethod.js";
import ToastNotification from "../../assets/helpers/ToastNotification.js";

const FormAddDeliveryMethod = ({ subTitle }) => {
  const navigate = useNavigate();

  const [method, setMethod] = useState("");
  const [description, setDescription] = useState("");

  const handleSumbit = async(e) => {
    e.preventDefault();
    const data = { method, description };

    try {
      const response = await DeliveryMethodSourceAPI.postDeliveryMethod(data);
      ToastNotification.toastSuccess(response);
      navigate("/member/delivery-methods");
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  }

  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      <form onSubmit={handleSumbit} className="space-y-6 mt-4">
        <InputForm
          id="method"
          name="method"
          type="text"
          placeholder="Metode pengiriman/pengambilan barang"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          required
        >
          Metode
        </InputForm>
        <InputForm
          id="description"
          name="description"
          type="text"
          placeholder="Informasi/catatan tambahan untuk customer"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
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

export default FormAddDeliveryMethod;
