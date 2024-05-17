// import { useState } from "react";
import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import TableProducts from "../../components/Fragments/Products/TableProducts";

const ManagementProducts = () => {

  return (
    <>
      <DashboarMemberLayout 
        pageTitle="Kelola Produk"
        pageDescription="Anda dapat menambahkan produk baru, mengedit informasi produk yang sudah ada, dan menghapus produk yang tidak diperlukan. 
        Pastikan untuk memperbarui status produk secara teratur dan memastikan bahwa semua informasi produk terkini dan akurat."
      >
        <TableProducts subTitle="Data Produk"/> 
      </DashboarMemberLayout>
    </>
  );


}
export default ManagementProducts