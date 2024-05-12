import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/SidebarNavAdmin";
import TableCategories from "../../components/Fragments/Categories/TableCategories";

const ManagementCategories = () => {
  return (
    <>
    <SidebarNavAdmin />
    <DashboardLayout 
      pageTitle="Kelola Kategori"
      pageDescription="Admin dapat mengelola berbagai kategori untuk mengelompokkan produk"
    >
      <TableCategories subTitle="Data Kategori"/>
    </DashboardLayout>
  </>
  )
}

export default ManagementCategories