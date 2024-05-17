import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import FormEditMember from "../../components/Fragments/Members/FormEditMember";

const EditMember = () => {
  return (
    <>
      <DashboardAdminLayout pageTitle="Kelola Member">
        <FormEditMember subTitle="Edit Member"/>
      </DashboardAdminLayout>
    </>
  )
}

export default EditMember