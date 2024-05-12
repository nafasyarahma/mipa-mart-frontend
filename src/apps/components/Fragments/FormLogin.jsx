import InputForm from "../Elements/InputForm.jsx";
import Button from "../Elements/Button.jsx";

const FormLogin = () => {
  return (
    <div className="sm:max-w-sm sm:mx-auto sm:w-full">
    <form className="space-y-6" action="#" method="POST">
      <InputForm
        name="email"
        htmlFor="email"
        type="email"
        placeholder="Masukkan username"
        required
      >Username</InputForm>
      <InputForm
        name="password"
        htmlFor="password"
        type="password"
        placeholder="Masukkan password"
        required
      >Password</InputForm>
      <div className="text-sm text-right">
        <a
          href="#"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </a>
      </div>
      <Button type="submit" className="w-full" label="Login"></Button>
    </form>
    </div>
  );
};

export default FormLogin;
