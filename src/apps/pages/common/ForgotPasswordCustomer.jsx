import { useNavigate } from "react-router-dom";
import ForgotPasswordLayout from "../../components/Layouts/ForgotPasswordLayout";
import { useState } from "react";
import CustomerSourceAPI from "../../api/resources/sourceCustomer";
import ToastNotification from "../../components/assets/helpers/ToastNotification";

const ForgotPasswordCustomer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { email };
      const response = await CustomerSourceAPI.sendEmailForgotPassword(data);
      ToastNotification.toastSuccess(response);
      navigate("/check-your-email")
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <ForgotPasswordLayout
      type="customer"
      onSubmit={handleSubmit}
      email={email}
      onChange={handleChange}
    />
  );
};

export default ForgotPasswordCustomer;
