import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import TableDeliveryMethods from "../../components/Fragments/TableDeliveryMethods";

const DeliveryMethodManagement = () => {
  return (
    <>
      <SidebarNavMember />
        <DashboardLayout pageTitle="Data Metode Pengiriman">
          <TableDeliveryMethods></TableDeliveryMethods>
        </DashboardLayout>
    </>
  );
}

export default DeliveryMethodManagement