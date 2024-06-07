import { Link } from "react-router-dom"
import FormEmail from "../Fragments/Common/FormEmail"

const ForgotPasswordLayout = ({type, email, onSubmit, onChange}) => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm content-center">
      <div className="text-center">
        <h2 className="mb-2 text-xl font-bold leading-9 tracking-tight text-gray-900">
          Lupa Password?
        </h2>
        <p className="text-sm text-gray-400">
          Masukkan email {type} terdaftar dan link reset password akan dikirimkan.
        </p>
      </div>

      <FormEmail email={email} onSubmit={onSubmit} onChange={onChange} />
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

export default ForgotPasswordLayout