import AuthLayout from "../../components/Layouts/AuthLayouts";
import FormRegisterMember from "../../components/Fragments/Members/FormRegisterMember";

const RegisterMemberPage = () => {
  return(
    <AuthLayout title="Register" type="register">
      <FormRegisterMember></FormRegisterMember>
    </AuthLayout>
  )
}

export default RegisterMemberPage