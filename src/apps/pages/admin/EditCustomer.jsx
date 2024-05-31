import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import FormEditCustomer from "../../components/Fragments/Customers/FormEditCustomer";
import { useNavigate, useParams } from "react-router-dom";
import CustomerSourceAPI from "../../api/resources/sourceCustomer";
import { useState, useEffect } from "react";
import ToastNotification from "../../components/assets/helpers/ToastNotification";

const EditCustomer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [customerData, setCustomerData] = useState({
    email: "",
    password: "",
    name: "",
    whatsappNumber: "",
    address: "",
  });

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await CustomerSourceAPI.getCustomerById(id);

        setCustomerData({
          ...response.customer,
          whatsappNumber: response.customer.no_wa,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(id);
  }, [id]);

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
      const response = await CustomerSourceAPI.putCustomerById(id, data);
      ToastNotification.toastSuccess(response);
      navigate("/admin/customers");
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
    <>
      <DashboardAdminLayout pageTitle="Kelola Customer">
        <FormEditCustomer
          subTitle="Edit Customer"
          customerData={customerData}
          handleSumbit={handleSumbit}
          handleChange={handleChange}
        />
      </DashboardAdminLayout>
    </>
  );
};

export default EditCustomer;
