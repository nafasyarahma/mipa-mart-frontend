import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import FormEditDeliveryMethod from "../../components/Fragments/DeliveryMethods/FormEditDeliveryMethod";

const EditDeliveryMethod = () => {
  return (
    <>
      <DashboarMemberLayout pageTitle="Kelola Metode Pengiriman">
        <FormEditDeliveryMethod subTitle="Edit Metode Pengiriman"/>
      </DashboarMemberLayout>
    </>
  )
}

export default EditDeliveryMethod