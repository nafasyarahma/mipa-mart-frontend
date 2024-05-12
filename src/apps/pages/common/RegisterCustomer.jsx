import AuthLayout from "../../components/Layouts/AuthLayouts";
import FormRegisterCustomer from "../../components/Fragments/Customers/FormRegisterCustomer";

const RegisterCustomerPage = () => {
  return(
    <AuthLayout title="Register" type="register">
      <FormRegisterCustomer/>
    </AuthLayout>
  )
}

export default RegisterCustomerPage