import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import TableCategories from "../../components/Fragments/Categories/TableCategories";

const ManagementCategories = () => {
  return (
    <>
      <DashboardAdminLayout
        pageTitle="Kelola Kategori"
        pageDescription="Admin dapat mengelola berbagai kategori untuk mengelompokkan produk"
      >
        <TableCategories subTitle="Data Kategori" />
      </DashboardAdminLayout>
    </>
  );
};

export default ManagementCategories;
