import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import FormEditDeliveryMethod from "../../components/Fragments/DeliveryMethods/FormEditDeliveryMethod";

const EditDeliveryMethod = () => {
  return (
    <>
      <SidebarNavMember />
      <DashboardLayout pageTitle="Kelola Metode Pengiriman">
        <FormEditDeliveryMethod subTitle="Edit Metode Pengiriman"/>
      </DashboardLayout>
    </>
  )
}

export default EditDeliveryMethod