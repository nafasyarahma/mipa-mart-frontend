import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/Dashboard/SidebarNavMember";
import FormAddPaymentMethod from "../../components/Fragments/PaymentMethods/FormAddPaymentMethod"

const AddPaymentMethod = () => {
  return (
    <>
      <SidebarNavMember />
      <DashboardLayout pageTitle="Kelola Metode Pembayaran">
        <FormAddPaymentMethod subTitle="Tambah Metode Pembayaran"></FormAddPaymentMethod>
      </DashboardLayout>
    </>
  )
}

export default AddPaymentMethod