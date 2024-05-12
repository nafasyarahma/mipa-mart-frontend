import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import FormEditMember from "../../components/Fragments/Members/FormEditMember";

const EditProfileMember = () => {
  return (
    <>
      <SidebarNavMember />
      <DashboardLayout 
        pageTitle="Profil Member"
        pageDescription="Informasi profil akun Anda"
      >
        <FormEditMember subTitle="Edit Profil"/>
      </DashboardLayout>
    </>
  )
}

export default EditProfileMember