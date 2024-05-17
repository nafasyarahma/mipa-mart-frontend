import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/Dashboard/SidebarNavAdmin";
import FormEditCustomer from "../../components/Fragments/Customers/FormEditCustomer";

const EditCustomer = () => {
  return (
    <>
      <SidebarNavAdmin />
      <DashboardLayout pageTitle="Kelola Customer">
        <FormEditCustomer subTitle="Edit Customer"/>
      </DashboardLayout>
    </>
  )
}

export default EditCustomer