import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import TablePaymentMethods from "../../components/Fragments/PaymentMethods/TablePaymentMethods";

const ManagementPaymentMethods = () => {
  return (
    <>
      <DashboarMemberLayout
        pageTitle="Kelola Metode Pembayaran"
        pageDescription="Anda dapat menambahkan berbagai metode yang disediakan untuk proses pembayaran. 
        Dapat berupa transfer melalui berbagai bank dan e-Wallet ataupun langsung secara cash."
      >
        <TablePaymentMethods subTitle="Data Metode Pembayaran" />
      </DashboarMemberLayout>
    </>
  );
};

export default ManagementPaymentMethods;
