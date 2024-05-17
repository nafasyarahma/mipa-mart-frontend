import { Link } from "react-router-dom";
import IconButton from "../../Elements/basic/IconButton";
import Button from "../../Elements/basic/Button";

const TableCategories = ({subTitle}) => {
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-black font-bold text-lg">{subTitle}</h2>
          <Link to="/admin/category/add">
            <Button type="button" label="Tambah"></Button>
          </Link>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Nama Kategori</th>
            <th scope="col" className="px-6 py-3">Deskripsi</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4 ">Makanan</td>
            <td className="px-6 py-4">Aneka makanan kering atau basah halal</td>
            <td className="flex items-center px-6 py-4">
              <Link to="/admin/category/edit">
                <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              </Link>
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4 ">Minuman</td>
            <td className="px-6 py-4">Minuman menyegarkan</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4 ">Jasa</td>
            <td className="px-6 py-4">Berbagai jasa seperti desain, coding, dll</td>
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

export default TableCategories;
