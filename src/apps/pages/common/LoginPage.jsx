import FormLogin from "../../components/Fragments/Common/FormLogin";
import AuthLayout from "../../components/Layouts/AuthLayouts";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (role) => {
    if (role === 'admin') {
      navigate('/admin/dashboard')
    } else if (role === 'member') {
      navigate('/member/dashboard') 
    } else if (role === 'customer') {
      navigate('/')
    }
  }

  return (
    <AuthLayout title="Login" type="login">
      <FormLogin onLoginSuccess={handleLoginSuccess}></FormLogin>
    </AuthLayout>
  );
};

export default LoginPage;
