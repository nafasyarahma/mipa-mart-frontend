import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/Dashboard/SidebarNavAdmin";
import FormAddCategory from "../../components/Fragments/Categories/FormAddCategory";

const AddCategory = () => {
  return (
    <>
      <SidebarNavAdmin />
      <DashboardLayout pageTitle="Kelola Kategori">
        <FormAddCategory subTitle="Tambah Kategori"/>
      </DashboardLayout>
    </>
  )
}

export default AddCategory