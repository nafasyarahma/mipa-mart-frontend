import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout";
import FormAddDeliveryMethod from "../../components/Fragments/DeliveryMethods/FormAddDeliveryMethod";

const AddDeliveryMethod = () => {
  return (
    <>
      <DashboarMemberLayout pageTitle="Kelola Metode Pengiriman">
        <FormAddDeliveryMethod subTitle="Tambah Metode Pengiriman"/>
      </DashboarMemberLayout>
    </>
  )
}

export default AddDeliveryMethod