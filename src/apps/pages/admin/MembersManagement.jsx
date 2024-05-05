import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/SidebarNavAdmin";
import TableMembers from "../../components/Fragments/TableMembers";

const MembersManagement = () => {
  return (
    <>
    <SidebarNavAdmin />
    <DashboardLayout pageTitle="Data Member">
      <TableMembers/>
    </DashboardLayout>
  </>
  )
}

export default MembersManagement