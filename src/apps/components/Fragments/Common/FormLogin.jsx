import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import AuthSourceAPI from "../../../api/resources/sourceAuth.js";
import ToastNotification from "../../assets/helpers/ToastNotification.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

const FormLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <InputForm
          id="password"
          name="password"
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        >
          Password
        </InputForm>
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
