import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import FormAddProduct from "../../components/Fragments/Products/FormAddProduct";

const AddProduct = () => {
  return (
    <>
      <DashboarMemberLayout pageTitle="Kelola Produk">
        <FormAddProduct subTitle="Tambah Produk"/>
      </DashboarMemberLayout>
    </>
  )
}

export default AddProduct