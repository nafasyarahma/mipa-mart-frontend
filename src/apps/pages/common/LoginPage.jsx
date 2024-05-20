import FormLogin from "../../components/Fragments/Common/FormLogin";
import AuthLayout from "../../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};

export default LoginPage;
