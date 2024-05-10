import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import TablePaymentMethods from "../../components/Fragments/PaymentMethods/TablePaymentMethods";

const ManagementPaymentMethods = () => {
  return (
    <>
      <SidebarNavMember />
      <DashboardLayout
        pageTitle="Kelola Metode Pembayaran"
        pageDescription="Anda dapat menambahkan berbagai metode yang disediakan untuk proses pembayaran. 
        Dapat berupa transfer melalui berbagai bank dan e-Wallet ataupun langsung secara cash."
      >
        <TablePaymentMethods subTitle="Data Metode Pembayaran" />
      </DashboardLayout>
    </>
  );
};

export default ManagementPaymentMethods;
