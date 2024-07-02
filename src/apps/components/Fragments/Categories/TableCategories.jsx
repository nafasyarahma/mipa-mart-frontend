import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "../../Elements/basic/IconButton";
import Button from "../../Elements/basic/Button";
import CategorySourceAPI from "../../../api/resources/sourceCategory";
import ToastNotification from "../../assets/helpers/ToastNotification";

const TableCategories = ({ subTitle }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CategorySourceAPI.getAllCategories();
        setCategories(response.categories);
      } catch (error) {
        ToastNotification.toastError(error.response.data.message);
      }
    };
    fetchCategories();
  }, []);

  const handleDelete = async(id) => {
    try {
      const response = await CategorySourceAPI.deleteCategoryById(id);
      const currectData = categories.filter((category) => category.id !== id);
      setCategories(currectData);
      ToastNotification.toastSuccess(response);
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  }

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
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Kategori
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
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <tr
                key={category.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 ">{category.name}</td>
                <td className="px-6 py-4">{category.description || "-"}</td>
                <td className="flex items-center px-6 py-4 gap-2">
                  <Link to={`/admin/category/${category.id}/edit`}>
                    <IconButton
                      color="yellow"
                      icon="fa-solid fa-pen-to-square"
                    />
                  </Link>
                  <IconButton color="red" icon="fa-solid fa-trash" onClick={() => handleDelete(category.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-4 text-center text-black">
                Belum ada kategori yang ditambahkan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableCategories;
