import InputForm from "../../components/Elements/InputForm";
import Button from "../../components/Elements/Button";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm content-center">
      <div className="text-center">
        <h2 className="mb-2 text-xl font-bold leading-9 tracking-tight text-gray-900">
          Reset Password
        </h2>
        <p className="text-sm text-gray-400">
          Atur ulang kata sandi Anda
        </p>
      </div>

      <form className="space-y-6 mt-10" action="#" method="POST">
        <InputForm
          id="password"
          type="password"
          placeholder="Password baru"
          required
        >
          Password Baru
        </InputForm>
        <InputForm
          id="confirm_password"
          type="password"
          placeholder="Ulangi password baru"
          required
        >
          Ulangi Password Baru
        </InputForm>
        <Button type="submit" className="w-full" label="Simpan"></Button>
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
  )
}

export default ResetPasswordPage