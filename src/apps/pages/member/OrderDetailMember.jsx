import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import OrderDetailLayout from "../../components/Layouts/OrderDetailLayout"

const OrderDetailMember = () => {
  return(
    <>
    <DashboarMemberLayout
        pageTitle="Kelola Pesanan"
        pageDescription="Anda dapat melihat detail pesanan yang masuk dan mengelola staus pesanan"
      >
        <OrderDetailLayout type="member" title="Detail Pesanan"></OrderDetailLayout>
      </DashboarMemberLayout>
    </>
  )
}

export default OrderDetailMember