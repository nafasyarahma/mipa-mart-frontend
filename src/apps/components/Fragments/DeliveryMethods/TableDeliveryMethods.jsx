import { useEffect, useState } from "react";
import IconButton from "../../Elements/basic/IconButton";
import Button from "../../Elements/basic/Button";
import { Link } from "react-router-dom";
import DeliveryMethodSourceAPI from "../../../api/resources/sourceDeliveryMethod";
import ToastNotification from "../../assets/helpers/ToastNotification";

const TableDeliveryMethods = ({ subTitle }) => {
  const [deliveryMethods, setdeliveryMethods] = useState([]);

  useEffect(() => {
    const fetchDeliveryMethods = async () => {
      try {
        const response = await DeliveryMethodSourceAPI.getMemberDeliveryMethods();
        setdeliveryMethods(response.deliveryMethods);
      } catch (error) {
        console.error(error);
        ToastNotification.toastError(error.response.data.message);
      }
    };
    fetchDeliveryMethods();
  }, []);

  const handleDelete = async(id) => {
    try {
      const response = await DeliveryMethodSourceAPI.deleteDeliveryMethodById(id);
      const currectData = deliveryMethods.filter((method) => method.id !== id);
      setdeliveryMethods(currectData);
      ToastNotification.toastSuccess(response);
    } catch (error) {
      console.error(error)
      ToastNotification.toastError(error.response.data.message)
    }
  }

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
          {deliveryMethods.length > 0 ? (
            deliveryMethods.map((method, index) => (
              <tr
                key={method.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 ">{method.method}</td>
                <td className="px-6 py-4 ">{method.description}</td>
                <td className="flex items-center px-6 py-4 gap-2">
                  <Link to={`/member/delivery-method/${method.id}/edit`}>
                    <IconButton
                      color="yellow"
                      icon="fa-solid fa-pen-to-square"
                    />
                  </Link>
                  <IconButton 
                    color="red" 
                    icon="fa-solid fa-trash"
                    onClick={() => handleDelete(method.id)} 
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-4 text-center text-black">
                Belum ada metode pengiriman yang ditambahkan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableDeliveryMethods;
