import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import AuthSourceAPI from "../../../api/resources/sourceAuth.js";
import ToastNotification from "../../assets/helpers/ToastNotification.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { username, password };
      const response = await AuthSourceAPI.login(data);
      const { accessToken, refreshToken } = response;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      const decodedToken = jwtDecode(accessToken);
      const role = decodedToken.role;
      onLoginSuccess(role);

      ToastNotification.toastSuccess("Berhasil Login!");
    } catch (error) {
      // console.log(error.response.data.message)
      ToastNotification.toastError(error.response.data.message);
    }
  };

  return (
    <div className="sm:max-w-sm sm:mx-auto sm:w-full">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputForm
          id="username"
          name="username"
          type="text"
          placeholder="Masukkan username"
          value={username}
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
          required
        >
          Username
        </InputForm>

        <div className="relative">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full rounded-md mt-2 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600"
            >
              <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        
        <div className="text-sm text-right">
          <Link
            to="/forgot-password/choose-role"
            className="font-semibold text-sm text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full" label="Login"></Button>
      </form>
    </div>
  );
};

export default FormLogin;
