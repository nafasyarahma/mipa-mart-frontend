import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/SidebarNavAdmin";
import FormEditMember from "../../components/Fragments/Members/FormEditMember";

const EditMember = () => {
  return (
    <>
      <SidebarNavAdmin />
      <DashboardLayout pageTitle="Kelola Member">
        <FormEditMember subTitle="Edit Member"/>
      </DashboardLayout>
    </>
  )
}

export default EditMember