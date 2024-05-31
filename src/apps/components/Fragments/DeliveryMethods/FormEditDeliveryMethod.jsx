import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import DeliveryMethodSourceAPI from "../../../api/resources/sourceDeliveryMethod.js";
import ToastNotification from "../../assets/helpers/ToastNotification.js";

const FormEditDeliveryMethod = ({ subTitle }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  //const [ deliveryMethod, setDeliveryMethod ] = useState('');
  const [ description, setDescription ] = useState("");

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await DeliveryMethodSourceAPI.getDeliveryMethodById(id);
        // setMethod(response.deliveryMethod.method)
        setDescription(response.deliveryMethod.description)
      } catch (error) {
        console.error(error)
      }
    };
    
    fetchData(id);
  }, [id]);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const data = { description }
   
    try {
      const response = await DeliveryMethodSourceAPI.putDeliveryMethodById(id, data);
      ToastNotification.toastSuccess(response);
      navigate("/member/delivery-methods")
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setDeliveryMethod((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // }

  return (
    <>
      <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      <form onSubmit={handleSumbit} className="space-y-6 mt-4">
        <InputForm
          id="description"
          name="description"
          type="text"
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

export default FormEditDeliveryMethod;
