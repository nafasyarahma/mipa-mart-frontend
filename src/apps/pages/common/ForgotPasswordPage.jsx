import InputForm from "../../components/Elements/InputForm";
import Button from "../../components/Elements/basic/Button";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm content-center">
        <div className="text-center">
          <h2 className="mb-2 text-xl font-bold leading-9 tracking-tight text-gray-900">
            Lupa Password?
          </h2>
          <p className="text-sm text-gray-400">
            Masukkan email terdaftar dan link reset password akan dikirimkan.
          </p>
        </div>

        <form className="space-y-6 mt-10" action="#" method="POST">
          <InputForm
            id="email"
            type="email"
            placeholder="Email terdaftar"
            required
          >
            Email
          </InputForm>
          <Button type="submit" className="w-full" label="Kirim"></Button>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Butuh Bantuan?
          <Link
            to="emailadmin@gmail.com"
            className="font-semibold leading-6 text-indigo-600 hover:underline"
          >
            {" "}
            Hubungi Admin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
