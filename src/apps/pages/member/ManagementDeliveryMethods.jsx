import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout";
import TableDeliveryMethods from "../../components/Fragments/DeliveryMethods/TableDeliveryMethods";

const ManagementDeliveryMethod = () => {
  return (
    <>
      <DashboarMemberLayout
        pageTitle="Kelola Metode Pengiriman"
        pageDescription="Anda dapat mengelola informasi terkait cara pengiriman atau pengambilan barang kepada konsumen. 
          Misalnya diantar (delivery), COD, atau ambil di tempat. Berikan informasi tambahan dengan melengkapi bagian deskripsi untuk mempermudah customer Anda."
      >
        <TableDeliveryMethods subTitle="Data Metode Pengiriman" />
      </DashboarMemberLayout>
    </>
  );
};

export default ManagementDeliveryMethod;
