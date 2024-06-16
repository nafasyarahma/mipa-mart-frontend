import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";

const AdminDashboard = () => {
  return (
    <>
      <DashboardAdminLayout>
        <div>
          <h1 className="font-bold text-2xl text-gray-700 mb-6">
            Selamat Datang di Dashboard Admin!
          </h1>
          <p className="text-gray-500 mb-10">
            Dashboard ini merupakan pusat kontrol untuk mengelola dan memantau
            jalannya operasional sistem. Sebagai Admin Anda berperan penting
            dalam melakukan verifikasi keberanan identitas mahasiswa yang
            mendaftar sebagai member.
          </p>
        </div>
      </DashboardAdminLayout>
    </>
  );
};

export default AdminDashboard;
