import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import FormAddCategory from "../../components/Fragments/Categories/FormAddCategory";

const AddCategory = () => {
  return (
    <>
      <DashboardAdminLayout pageTitle="Kelola Kategori">
        <FormAddCategory subTitle="Tambah Kategori"/>
      </DashboardAdminLayout>
    </>
  )
}

export default AddCategory