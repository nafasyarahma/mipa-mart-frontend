import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/SidebarNavAdmin";
import TableCategories from "../../components/Fragments/TableCategories";

const CategoriesManagement = () => {
  return (
    <>
    <SidebarNavAdmin />
    <DashboardLayout pageTitle="Data Kategori">
      <TableCategories/>
    </DashboardLayout>
  </>
  )
}

export default CategoriesManagement