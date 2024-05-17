import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/Dashboard/SidebarNavAdmin";
import TableCustomers from "../../components/Fragments/Customers/TableCustomers";


const ManagementCustomers = () => {
  return (
    <>
    <SidebarNavAdmin/>
    <DashboardLayout 
      pageTitle="Kelola Customer"
      pageDescription="Admin dapat mengelola customer yang telah melakukan registrasi"
      >
      <TableCustomers subTitle="Data Customer"/>
    </DashboardLayout>
  </>
  )
}

export default ManagementCustomers