import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/Dashboard/SidebarNavAdmin";
import FormEditCategory from "../../components/Fragments/Categories/FormEditCategory";

const EditCategory = () => {
  return (
    <>
      <SidebarNavAdmin />
      <DashboardLayout pageTitle="Kelola Kategori">
        <FormEditCategory subTitle="Tambah Kategori"/>
      </DashboardLayout>
    </>
  )
}

export default EditCategory