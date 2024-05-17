import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import TableCustomers from "../../components/Fragments/Customers/TableCustomers";

const ManagementCustomers = () => {
  return (
    <>
      <DashboardAdminLayout
        pageTitle="Kelola Customer"
        pageDescription="Admin dapat mengelola customer yang telah melakukan registrasi"
      >
        <TableCustomers subTitle="Data Customer" />
      </DashboardAdminLayout>
    </>
  );
};

export default ManagementCustomers;
