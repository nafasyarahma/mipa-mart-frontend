import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import TableMembers from "../../components/Fragments/Members/TableMembers";

const ManagementMembers = () => {
  return (
    <>
      <DashboardAdminLayout
        pageTitle="Kelola Member"
        pageDescription="Admin dapat mengelola member termasuk memverifikasi pendaftaran akun untuk memastikan identitas
      yang diberikan benar dan valid."
      >
        <TableMembers subTitle="Data Member" />
      </DashboardAdminLayout>
    </>
  );
};

export default ManagementMembers;
