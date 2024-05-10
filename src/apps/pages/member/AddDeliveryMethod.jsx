import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import FormAddDeliveryMethod from "../../components/Fragments/DeliveryMethods/FormAddDeliveryMethod";

const AddDeliveryMethod = () => {
  return (
    <>
      <SidebarNavMember />
      <DashboardLayout pageTitle="Kelola Metode Pengiriman">
        <FormAddDeliveryMethod subTitle="Tambah Metode Pengiriman"/>
      </DashboardLayout>
    </>
  )
}

export default AddDeliveryMethod