import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import CardsDashboardAdmin from "../../components/Fragments/Dashboard/CardsDashboardAdmin";

const AdminDashboard = () => {
  return (
    <>
      <DashboardAdminLayout pageTitle="Selamat Datang Admin!" pageDescription="Berikut adalah rekap data yang tercatat pada sistem">
        <CardsDashboardAdmin/>
      </DashboardAdminLayout>
    </>
  );
}

export default AdminDashboard