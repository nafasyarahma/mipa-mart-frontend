import CommerceLayout from "../../components/Layouts/CommerceLayout";
import FormEditCustomer from "../../components/Fragments/Customers/FormEditCustomer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomerSourceAPI from "../../api/resources/sourceCustomer";
import ToastNotification from "../../components/assets/helpers/ToastNotification";

const EditProfileCustomer = () => {
  const navigate = useNavigate();

  const [customerData, setCustomerData] = useState({
    email: "",
    password: "",
    name: "",
    whatsappNumber: "",
    address: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomerSourceAPI.getCustomerProfile();

        setCustomerData({
          ...response.customer,
          whatsappNumber: response.customer.no_wa,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();

    const data = {
      email: customerData.email,
      password: customerData.password,
      name: customerData.name,
      whatsappNumber: customerData.whatsappNumber,
      address: customerData.address,
    };

    try {
      const response = await CustomerSourceAPI.putCustomerProfile(data);
      ToastNotification.toastSuccess(response);
      navigate("/");
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <CommerceLayout>
      <FormEditCustomer
        customerData={customerData}
        handleChange={handleChange}
        handleSumbit={handleSumbit}
      />
    </CommerceLayout>
  );
};

export default EditProfileCustomer;
