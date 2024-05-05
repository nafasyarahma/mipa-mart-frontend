import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/SidebarNavAdmin";
import TableCustomers from "../../components/Fragments/TableCustomers";


const CustomersManagement = () => {
  return (
    <>
    <SidebarNavAdmin/>
    <DashboardLayout pageTitle="Data Customer">
      <TableCustomers/>
    </DashboardLayout>
  </>
  )
}

export default CustomersManagement