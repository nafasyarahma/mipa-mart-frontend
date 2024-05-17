import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import FormEditCustomer from "../../components/Fragments/Customers/FormEditCustomer";

const EditCustomer = () => {
  return (
    <>
      <DashboardAdminLayout pageTitle="Kelola Customer">
        <FormEditCustomer subTitle="Edit Customer"/>
      </DashboardAdminLayout>
    </>
  )
}

export default EditCustomer