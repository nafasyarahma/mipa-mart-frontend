import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/Dashboard/SidebarNavMember";
import TableDeliveryMethods from "../../components/Fragments/DeliveryMethods/TableDeliveryMethods";

const ManagementDeliveryMethod = () => {
  return (
    <>
      <SidebarNavMember />
        <DashboardLayout 
          pageTitle="Kelola Metode Pengiriman"
          pageDescription="Anda dapat mengelola informasi terkait cara pengiriman atau pengambilan barang kepada konsumen. 
          Misalnya diantar (delivery), COD, atau ambil di tempat. Berikan informasi tambahan dengan melengkapi bagian deskripsi untuk mempermudah customer Anda."
        >
          <TableDeliveryMethods subTitle="Data Metode Pengiriman"/>
        </DashboardLayout>
    </>
  );
}

export default ManagementDeliveryMethod