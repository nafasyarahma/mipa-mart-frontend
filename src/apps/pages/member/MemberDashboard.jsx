import { useState } from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import NavDashboard from "../../components/Fragments/NavDashboard";
import SidebarMember from "../../components/Fragments/SidebarMember";

const MemberDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardLayout>
      <NavDashboard pageTitle="Dashboard Member" sidebar="sidebar-member" toggleSidebar={toggleSidebar}/>
      <SidebarMember isSidebarOpen={isSidebarOpen}/>
    </DashboardLayout>
  );
};

export default MemberDashboard;
