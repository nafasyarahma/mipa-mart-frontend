import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavAdmin from "../../components/Fragments/Dashboard/SidebarNavAdmin";
import CardsDashboardAdmin from "../../components/Fragments/Dashboard/CardsDashboardAdmin";

const AdminDashboard = () => {
  return (
    <>
      <SidebarNavAdmin />
      <DashboardLayout pageTitle="Selamat Datang Admin!" pageDescription="Berikut adalah rekap data yang tercatat pada sistem">
        <CardsDashboardAdmin/>
      </DashboardLayout>
    </>
  );
}

export default AdminDashboard