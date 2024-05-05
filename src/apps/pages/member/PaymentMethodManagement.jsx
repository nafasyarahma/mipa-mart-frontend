import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import TablePaymentMethods from "../../components/Fragments/TablePaymentMethods";

const PaymentMethodManagement = () => {
  return (
    <>
      <SidebarNavMember />
        <DashboardLayout pageTitle="Data Metode Pembayaran">
          <TablePaymentMethods/>
        </DashboardLayout>
    </>
  );
}

export default PaymentMethodManagement