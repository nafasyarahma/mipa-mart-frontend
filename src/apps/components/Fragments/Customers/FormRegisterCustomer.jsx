import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../Elements/InputForm";
import Button from "../../Elements/basic/Button";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import ToastNotification from "../../assets/helpers/ToastNotification";

const FormRegisterCustomer = () => {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    whatsappNumber: '',
    address:'',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CustomerSourceAPI.postCustomer(customerData);
      ToastNotification.toastSuccess(response);
      navigate("/login")
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          <InputForm
            id="name"
            name="name"
            type="text"
            placeholder="Nama lengkap"
            value={customerData.name}
            onChange={handleChange}
            className="sm:col-span-3"
            required
          >
            Nama
          </InputForm>
          <InputForm
            id="email"
            name="email"
            type="email"
            placeholder="Email aktif"
            value={customerData.email}
            onChange={handleChange}
            className="sm:col-span-3"
            required
          >
            Email
          </InputForm>
          <InputForm
            id="username"
            name="username"
            type="text"
            placeholder="userexample"
            value={customerData.username}
            onChange={handleChange}
            className="sm:col-span-3"
            required
          >
            Username
          </InputForm>
          <InputForm
            id="password"
            name="password"
            type="password"
            placeholder="****"
            value={customerData.password}
            onChange={handleChange}
            className="sm:col-span-3"
            required
          >
            Password
          </InputForm>
          <InputForm
            id="whatsappNumber"
            name="whatsappNumber"
            value={customerData.whastappNumber}
            onChange={handleChange}
            type="text"
            placeholder="Nomor WhatsApp yang dapat dihubungi"
            className="sm:col-span-6"
            required
          >
            Nomor WhatsApp
          </InputForm>
          <InputForm
            id="address"
            name="address"
            type="text"
            placeholder="Alamat atau tempat tinggal saat ini"
            value={customerData.address}
            onChange={handleChange}
            className="sm:col-span-6"
            required
          >
            Alamat
          </InputForm>
        </div>
        <Button label="Daftar" type="submit" className="w-full mt-6"></Button>
      </form>
    </div>
  );
};

export default FormRegisterCustomer;
