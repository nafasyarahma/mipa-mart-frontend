import { useState } from "react";
import IconButton from "../../Elements/IconButton";
import Button from "../../Elements/Button";
import { Link } from "react-router-dom";
import ModalUpdateStatus from "./ModalUpdateStatus";

const TableProducts = ({subTitle}) => {
  const [isUpdateStatusModalOpen, setUpdateStatusModalOpen] = useState(false);

  const handleUpdateStatusModalOpen = () => {
    setUpdateStatusModalOpen(true);
  };

  const handleUpdateStatusModalClose = () => {
    setUpdateStatusModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-black font-bold text-lg">{subTitle}</h2>
          <Link to="/member/product/edit">
            <Button type="button" label="Tambah"></Button>
          </Link>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Nama Produk</th>
            <th scope="col" className="px-6 py-3">Harga</th>
            <th scope="col" className="px-6 py-3">Deskripsi</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Kategori</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Nasi Bakar</td>
            <td className="px-6 py-4">Rp 5000</td>
            <td className="px-6 py-4">Aneka nasi bakar berbagai rasa</td>
            <td className="px-6 py-4 flex justify-between items-center gap-3">
              <span className="flex-grow">Ready</span>
              <IconButton color="green" icon="fa-solid fa-pen" onClick={handleUpdateStatusModalOpen} dataModalTarget="updateStatusModal" dataModalToggle="updateStatusModal" />
            </td>
            <td className="px-6 py-4">Makanan</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="sky" icon="fa-solid fa-circle-info" />
              <Link to="/member/product/edit">
                <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              </Link>
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">Buket Snack</td>
            <td className="px-6 py-4">Rp 25.000</td>
            <td className="px-6 py-4">Buket murah untuk acara seminar dll</td>
            <td className="px-6 py-4 flex justify-between items-center gap-3">
              <span className="flex-grow">Pre-Order</span>
              <IconButton color="green" icon="fa-solid fa-pen" />
            </td>
            <td className="px-6 py-4">Hadiah</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="sky" icon="fa-solid fa-circle-info" />
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4 ">Papan Akrilik</td>
            <td className="px-6 py-4">Rp 50.000</td>
            <td className="px-6 py-4">Dari bahan akrilik yang mewah, include stand</td>
            <td className="px-6 py-4 flex justify-between items-center gap-3">
              <span className="flex-grow">Ready</span>
              <IconButton color="green" icon="fa-solid fa-pen" />
            </td>
            <td className="px-6 py-4">-</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="sky" icon="fa-solid fa-circle-info" />
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>
        </tbody>
      </table>
          <ModalUpdateStatus id="updateStatusModal" isOpen={isUpdateStatusModalOpen} onClose={handleUpdateStatusModalClose} />
    </>
  );
};

export default TableProducts;
