import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout";
//import CardsDashboardMember from "../../components/Fragments/Dashboard/CardsDashboardMember";

const MemberDashboard = () => {
  return (
    <>
      <DashboarMemberLayout>
        <div>
          <h1 className="font-bold text-2xl text-gray-700 mb-6">
            Selamat Datang di Dashboard Member!
          </h1>
          <p className="text-gray-500 mb-10">
            Dashboard ini dirancang untuk membantu mengelola data usaha Anda
            dengan mudah dan efisien. Silakan telusuri fitur-fitur yang tersedia
            dan jangan ragu untuk menghubungi tim support kami jika ada
            pertanyaan atau memerlukan bantuan lebih lanjut.
          </p>
          <p className="text-gray-700 text-sm font-bold">Kontak Admin</p>
          <p className="text-gray-500 text-sm">adminmipamart@gmail.com</p>
        </div>
      </DashboarMemberLayout>
    </>
  );
};

export default MemberDashboard;
