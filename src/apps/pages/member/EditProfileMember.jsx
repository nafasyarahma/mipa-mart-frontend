import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import FormEditMember from "../../components/Fragments/Members/FormEditMember";

const EditProfileMember = () => {
  return (
    <>
      <DashboarMemberLayout 
        pageTitle="Profil Member"
        pageDescription="Informasi profil akun Anda"
      >
        <FormEditMember subTitle="Edit Profil"/>
      </DashboarMemberLayout>
    </>
  )
}

export default EditProfileMember