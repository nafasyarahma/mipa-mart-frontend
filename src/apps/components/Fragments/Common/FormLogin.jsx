import InputForm from "../../Elements/InputForm.jsx";
import Button from "../../Elements/basic/Button.jsx";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <div className="sm:max-w-sm sm:mx-auto sm:w-full">
    <form className="space-y-6" action="#" method="POST">
      <InputForm
        name="username"
        type="text"
        placeholder="Masukkan username"
        required
      >Username</InputForm>
      <InputForm
        name="password"
        type="password"
        placeholder="Masukkan password"
        required
      >Password</InputForm>
      <div className="text-sm text-right">
        <Link
          to="/choose-role"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
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
