import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout";
import CardsDashboardMember from "../../components/Fragments/Dashboard/CardsDashboardMember";

const MemberDashboard = () => {
  return (
    <>
      <DashboarMemberLayout
        pageTitle="Selamat Datang Nafasya Rahma!"
        pageDescription="Berikut adalah rekap data yang tercatat pada sistem"
      >
        <CardsDashboardMember />
      </DashboarMemberLayout>
    </>
  );
};

export default MemberDashboard;
