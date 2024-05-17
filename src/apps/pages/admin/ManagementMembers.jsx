import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/Dashboard/SidebarNavAdmin";
import TableMembers from "../../components/Fragments/Members/TableMembers";

const ManagementMembers = () => {
  return (
    <>
    <SidebarNavAdmin />
    <DashboardLayout 
      pageTitle="Kelola Member" 
      pageDescription="Admin dapat mengelola member termasuk memverifikasi pendaftaran akun untuk memastikan identitas
      yang diberikan benar dan valid.">
      <TableMembers subTitle="Data Member"/>
    </DashboardLayout>
  </>
  )
}

export default ManagementMembers