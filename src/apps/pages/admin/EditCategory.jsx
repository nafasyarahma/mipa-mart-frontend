import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import FormEditCategory from "../../components/Fragments/Categories/FormEditCategory";

const EditCategory = () => {
  return (
    <>
      <DashboardAdminLayout pageTitle="Kelola Kategori">
        <FormEditCategory subTitle="Edit Kategori"/>
      </DashboardAdminLayout>
    </>
  )
}

export default EditCategory