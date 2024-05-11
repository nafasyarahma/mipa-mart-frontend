// import { useState } from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import SidebarNavMember from "../../components/Fragments/SidebarNavMember";
import TableProducts from "../../components/Fragments/Products/TableProducts";

const ManagementProducts = () => {

  return (
    <>
      <SidebarNavMember />
      <DashboardLayout 
        pageTitle="Kelola Produk"
        pageDescription="Anda dapat menambahkan produk baru, mengedit informasi produk yang sudah ada, dan menghapus produk yang tidak diperlukan. 
        Pastikan untuk memperbarui status produk secara teratur dan memastikan bahwa semua informasi produk terkini dan akurat."
      >
        <TableProducts subTitle="Data Produk"/> 
      </DashboardLayout>
    </>
  );


}
export default ManagementProducts