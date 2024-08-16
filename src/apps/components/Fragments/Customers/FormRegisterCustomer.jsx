import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../Elements/InputForm";
import Button from "../../Elements/basic/Button";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import ToastNotification from "../../assets/helpers/ToastNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: name === 'username' ? value.toLowerCase() : value,
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
          <div className="relative sm:col-span-3">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Masukkan password"
                value={customerData.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md mt-2 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600"
              >
                <FontAwesomeIcon
                  icon={isPasswordVisible ? faEyeSlash : faEye}
                />
              </button>
            </div>
          </div>

          <InputForm
            id="whatsappNumber"
            name="whatsappNumber"
            value={customerData.whatsappNumber}
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
