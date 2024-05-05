import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import TableProducts from "../../components/Fragments/TableProducts";

const ProductsManagement = () => {
  return (
    <>
      <SidebarNavMember />
        <DashboardLayout pageTitle="Data Produk">
          <TableProducts></TableProducts> 
        </DashboardLayout>
    </>
  );


}
export default ProductsManagement