import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import FormEditProduct from "../../components/Fragments/Products/FormEditProduct";

const EditProduct = () => {
  return (
    <>
      <DashboarMemberLayout pageTitle="Kelola Produk">
        <FormEditProduct subTitle="Edit Produk"/>
      </DashboarMemberLayout>
    </>
  )
}

export default EditProduct