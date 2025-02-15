import { Link } from "react-router-dom";
import FormResetPassword from "../Fragments/Common/FormResetPassword";

const ResetPasswordLayout = ({ onSubmit, passwordData, onChange }) => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm content-center">
        <div className="text-center">
          <h2 className="mb-2 text-xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Password
          </h2>
          <p className="text-sm text-gray-400">Atur ulang kata sandi Anda</p>
        </div>

        <FormResetPassword
          onSubmit={onSubmit}
          passwordData={passwordData}
          onChange={onChange}
        />

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

export default ResetPasswordLayout;
