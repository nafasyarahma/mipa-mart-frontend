import { useState, useEffect } from "react";
import IconButton from "../../Elements/basic/IconButton";
import Button from "../../Elements/basic/Button";
import { Link } from "react-router-dom";
import ModalUpdateProductStatus from "./ModalUpdateProductStatus";
import ProductSourceAPI from "../../../api/resources/sourceProduct";
import ToastNotification from "../../assets/helpers/ToastNotification";

const TableProducts = ({ subTitle }) => {
  const [produts, setProducts] = useState([]);
  const [isUpdateStatusModalOpen, setUpdateStatusModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductSourceAPI.getMemberProducts();
        setProducts(response.products);
      } catch (error) {
        console.error(error);
        ToastNotification.toastError(error.response.data.message);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async(id) => {
    try {
      const response = await ProductSourceAPI.deleteProductById(id);
      const currectData = produts.filter((product) => product.id !== id);
      setProducts(currectData);
      ToastNotification.toastSuccess(response);
    } catch (error) {
      console.error(error)
      ToastNotification.toastError(error.response.data.message)
    }
  }

  const handleModalOpen = (productId) => {
    setSelectedProductId(productId)
    setUpdateStatusModalOpen(true);
  };

  const handleModalClose = () => {
    setUpdateStatusModalOpen(false);
    setSelectedProductId(null)
  };

  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-black font-bold text-lg">{subTitle}</h2>
        <Link to="/member/product/add">
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
              Nama Produk
            </th>
            <th scope="col" className="px-6 py-3">
              Harga
            </th>
            <th scope="col" className="px-6 py-3">
              Deskripsi
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Kategori
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>
          {produts.length > 0 ? (
            produts.map((product, index) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4 flex justify-between items-center gap-3">
                  <span className="flex-grow">{product.status}</span>
                  <IconButton
                    color="green"
                    icon="fa-solid fa-pen"
                    onClick={() => handleModalOpen(product.id)}
                    dataModalTarget="updateProductStatus"
                    dataModalToggle="updateProductStatus"
                  />
                </td>
                <td className="px-6 py-4">{product.category?.name ?? "-"}</td>
                <td className="flex items-center px-6 py-4">
                  <IconButton color="sky" icon="fa-solid fa-circle-info" />
                  <Link to={`/member/product/${product.id}/edit`}>
                    <IconButton
                      color="yellow"
                      icon="fa-solid fa-pen-to-square"
                    />
                  </Link>
                  <IconButton color="red" icon="fa-solid fa-trash" onClick={() => handleDelete(product.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-6 py-4 text-center text-black">
                Belum ada produk yang ditambahkan
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ModalUpdateProductStatus
        productId={selectedProductId}
        isOpen={isUpdateStatusModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export default TableProducts;
