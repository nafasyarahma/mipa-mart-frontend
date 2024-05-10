import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import FormAddProduct from "../../components/Fragments/Products/FormAddProduct";

const AddProduct = () => {
  return (
    <>
      <SidebarNavMember />
      <DashboardLayout pageTitle="Kelola Produk">
        <FormAddProduct subTitle="Tambah Produk"/>
      </DashboardLayout>
    </>
  )
}

export default AddProduct