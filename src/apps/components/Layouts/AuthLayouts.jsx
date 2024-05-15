import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-10">
        {children}

        <p className="mt-10 text-center text-sm text-gray-500">
          {type === "login" ? "Belum punya akun? " : "Sudah punya akun? "}

          {type === "login" && (
            <Link
              to="/choose-role"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          )}

          {type === "register" && (
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
