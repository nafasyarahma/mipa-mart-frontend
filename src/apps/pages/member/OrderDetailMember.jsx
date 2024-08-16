import { useParams } from "react-router-dom";
import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout";
import OrderDetailLayout from "../../components/Layouts/OrderDetailLayout";
import { useEffect, useState } from "react";
import MemberSourceAPI from "../../api/resources/sourceMember";

const OrderDetailMember = () => {
  const { id } = useParams();
  const [order, setOrder] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async (id) => {
      try {
        const response = await MemberSourceAPI.getMemberOrderById(id);
        setOrder(response.order);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder(id);
  }, [id]);

  return (
    <>
      <DashboarMemberLayout>
        {isLoading ? (
          <p>loading</p>
        ) : (
          <OrderDetailLayout
            type="member"
            title="Detail Pesanan"
            order={order}
          />
        )}
      </DashboarMemberLayout>
    </>
  );
};

export default OrderDetailMember;
