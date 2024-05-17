import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import FormAddPaymentMethod from "../../components/Fragments/PaymentMethods/FormAddPaymentMethod"

const AddPaymentMethod = () => {
  return (
    <>
      <DashboarMemberLayout pageTitle="Kelola Metode Pembayaran">
        <FormAddPaymentMethod subTitle="Tambah Metode Pembayaran"></FormAddPaymentMethod>
      </DashboarMemberLayout>
    </>
  )
}

export default AddPaymentMethod