import { useState } from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import NavDashboard from "../../components/Fragments/NavDashboard";
import SidebarAdmin from "../../components/Fragments/SidebarAdmin";

const MemberDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardLayout>
      <NavDashboard pageTitle="Dashboard Admin" sidebar="sidebar-admin" toggleSidebar={toggleSidebar}/>
      <SidebarAdmin isSidebarOpen={isSidebarOpen}/>
    </DashboardLayout>
  );
};

export default MemberDashboard;
