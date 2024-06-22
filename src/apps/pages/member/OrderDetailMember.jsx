import { useParams } from "react-router-dom";
import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout";
import OrderDetailLayout from "../../components/Layouts/OrderDetailLayout";
import { useEffect, useState } from "react";
import MemberSourceAPI from "../../api/resources/sourceMember";

const OrderDetailMember = () => {
  const { id } = useParams();
  const [order, setOrder] = useState("");

  useEffect(() => {
    const fetchOrder = async (id) => {
      try {
        const response = await MemberSourceAPI.getMemberOrderById(id);
        setOrder(response.order);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrder(id);
  }, [id]);

  return (
    <>
      <DashboarMemberLayout>
        <OrderDetailLayout
          type="member"
          title="Detail Pesanan"
          order={order}
        />
      </DashboarMemberLayout>
    </>
  );
};

export default OrderDetailMember;
