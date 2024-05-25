import { useEffect, useState } from "react";
import IconButton from "../../Elements/basic/IconButton";
import Button from "../../Elements/basic/Button";
import { Link } from "react-router-dom";
import PaymentMethodSourceAPI from "../../../api/resources/sourcePaymentMethod";
import ToastNotification from "../../assets/helpers/ToastNotification";

const TablePaymentMethods = ({ subTitle }) => {
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const data = await PaymentMethodSourceAPI.getMemberPaymentMethods();
        setPaymentMethods(data.paymentMethods);
      } catch (error) {
        console.error(error)
        ToastNotification.toastError(error.response.data.message);
      }
    };
    fetchPaymentMethods();
  }, []);

  const handleDelete = async(id) => {
    try {
      const response = await PaymentMethodSourceAPI.deletePaymentMethodById(id);
      const currectData = paymentMethods.filter((method) => method.id !== id)
      setPaymentMethods(currectData);
      ToastNotification.toastSuccess(response)
    } catch (error) {
      console.error(error)
      ToastNotification.toastError(error.response.data.message)
    }
  }

  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-black font-bold text-lg">{subTitle}</h2>
        <Link to="/member/payment-method/add">
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
              Provider/Bank
            </th>
            <th scope="col" className="px-6 py-3">
              Nomor Akun/Rekening
            </th>
            <th scope="col" className="px-6 py-3">
              Atas Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        
        <tbody>
          {paymentMethods.length > 0 ? (
            paymentMethods.map((method, index) => (
              <tr
                key={method.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{method.provider}</td>
                <td className="px-6 py-4">{method.no_account}</td>
                <td className="px-6 py-4">{method.name}</td>
                <td className="flex items-center px-6 py-4">
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
                Belum ada metode pembayaran yang ditambahkan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TablePaymentMethods;
