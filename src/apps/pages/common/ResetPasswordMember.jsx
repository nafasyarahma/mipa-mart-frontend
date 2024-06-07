import { useNavigate, useParams } from "react-router-dom";
import ResetPasswordLayout from "../../components/Layouts/ResetPasswordLayout";
import { useState } from "react";
import MemberSourceAPI from "../../api/resources/sourceMember";
import ToastNotification from "../../components/assets/helpers/ToastNotification";

const ResetPasswordMember = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [passwordData, setPasswordData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { 
        password: passwordData.password, 
        confirmPassword: passwordData.confirmPassword 
      };
      
      const response = await MemberSourceAPI.resetPassword(token, data);
      ToastNotification.toastSuccess(response);
      navigate("/login");
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <ResetPasswordLayout
      onSubmit={handleSubmit}
      passwordData={passwordData}
      onChange={handleChange}
    />
  );
};

export default ResetPasswordMember;
