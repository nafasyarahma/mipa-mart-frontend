import IconButton from "../../Elements/basic/IconButton";
import Button from "../../Elements/basic/Button";
import { Link } from "react-router-dom";

const TableDeliveryMethods = ({ subTitle }) => {
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-black font-bold text-lg">{subTitle}</h2>
        <Link to="/member/delivery-method/add">
          <Button type="button" label="Tambah"></Button>
        </Link>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Metode Pengiriman / Pengambilan Barang
            </th>
            <th scope="col" className="px-6 py-3">
              Deskripsi
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4 ">COD</td>
            <td className="px-6 py-4 ">
              COD area Unila dan Kampung Baru. Lokasi di beringin cinta atau
              tulis di note saat order
            </td>
            <td className="flex items-center px-6 py-4">
              <Link to="/member/delivery-method/edit">
                <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              </Link>
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4 ">Delivery</td>
            <td className="px-6 py-4 ">
              Delivery wilayah Unila dan Kampung Baru khusus weekend. Tuliskan
              alamat di note order
            </td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4 ">Pick Up</td>
            <td className="px-6 py-4 ">
              Ambil sendiri di Kos Asmara Cinta, Kampung Baru
            </td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableDeliveryMethods;
