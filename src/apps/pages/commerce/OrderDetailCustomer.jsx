import OrderDetailLayout from "../../components/Layouts/OrderDetailLayout";
import CommerceLayout from "../../components/Layouts/CommerceLayout";

const OrderDetailCustomer = () => {
  return (
    <CommerceLayout>
      <OrderDetailLayout title="Pesanan Saya" type="customer"></OrderDetailLayout>
    </CommerceLayout>
  )
}

export default OrderDetailCustomer