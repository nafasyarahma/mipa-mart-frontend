import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import TableOrders from "../../components/Fragments/Orders/TableOrders"

const ManagementOrders = () => {
  return(
    <>
    <DashboarMemberLayout
        pageTitle="Kelola Pesanan"
        pageDescription="Anda dapat melihat detail pesanan yang masuk dan mengelola staus pesanan"
      >
        <TableOrders subTitle="Data Pesanan" />
      </DashboarMemberLayout>
    </>
  )
}

export default ManagementOrders