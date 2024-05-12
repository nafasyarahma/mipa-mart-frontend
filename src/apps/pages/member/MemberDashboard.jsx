import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import CardsDashboardMember from "../../components/Fragments/CardsDashboardMember";

const MemberDashboard = () => {
  return (
    <>
      <SidebarNavMember />
        <DashboardLayout 
          pageTitle="Selamat Datang Nafasya Rahma!"
          pageDescription="Berikut adalah rekap data yang tercatat pada sistem"
          >
          <CardsDashboardMember/>
        </DashboardLayout>
    </>
  );
}

export default MemberDashboard