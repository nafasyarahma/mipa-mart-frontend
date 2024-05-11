import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import FormEditProduct from "../../components/Fragments/Products/FormEditProduct";

const EditProduct = () => {
  return (
    <>
      <SidebarNavMember />
      <DashboardLayout pageTitle="Kelola Produk">
        <FormEditProduct subTitle="Edit Produk"/>
      </DashboardLayout>
    </>
  )
}

export default EditProduct