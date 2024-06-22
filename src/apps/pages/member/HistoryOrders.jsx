import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import TableHistoryOrders from "../../components/Fragments/Orders/TableHistoryOrders"

const HistoryOrders = () => {
  return(
    <>
    <DashboarMemberLayout
        pageTitle="Riwayat Pesanan"
        pageDescription="Data semua pesanan dengan status sudah selesai"
      >
        <TableHistoryOrders subTitle="Data Riwayat Pesanan" />
      </DashboarMemberLayout>
    </>
  )
}

export default HistoryOrders