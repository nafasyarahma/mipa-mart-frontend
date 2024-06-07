import { Link } from "react-router-dom";

const CheckEmailCallOut = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
      <div className="max-w-xl px-5 text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">
          Periksa Email Anda!
        </h2>
        <p className="mb-2 text-lg text-zinc-500">
          Kami telah mengirimkan link reset password ke alamat email Anda.
        </p>
        <Link
          to="/login"
          className="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700"
        >
          Kembali ke halaman login →
        </Link>
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

export default CheckEmailCallOut;
