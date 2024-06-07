import { useState } from "react";
import ForgotPasswordLayout from "../../components/Layouts/ForgotPasswordLayout";
import MemberSourceAPI from "../../api/resources/sourceMember";
import ToastNotification from "../../components/assets/helpers/ToastNotification";
import { useNavigate } from "react-router-dom";

const ForgotPasswordMember = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { email };
      const response = await MemberSourceAPI.sendEmailForgotPassword(data);
      ToastNotification.toastSuccess(response);
      navigate("/check-your-email")
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <ForgotPasswordLayout
      type="member"
      onSubmit={handleSubmit}
      email={email}
      onChange={handleChange}
    />
  );
};

export default ForgotPasswordMember;
