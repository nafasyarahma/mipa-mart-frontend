import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "../../Elements/basic/IconButton";
import CustomerSourceAPI from "../../../api/resources/sourceCustomer";
import ToastNotification from "../../assets/helpers/ToastNotification";

const TableCustomers = ({ subTitle }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await CustomerSourceAPI.getAllCustomers();
        setCustomers(response.customers);
      } catch (error) {
        ToastNotification.toastError(error.response.data.message);
      }
    };

    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await CustomerSourceAPI.deleteCustomerById(id);
      const currectData = customers.filter((customer) => customer.id !== id);
      setCustomers(currectData);
      ToastNotification.toastSuccess(response);
    } catch (error) {
      console.error(error);
      ToastNotification.toastError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Email Terverifikasi
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Nomor WA
            </th>
            <th scope="col" className="px-6 py-3">
              Alamat
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>
          {customers.length > 0 ? (
            customers.map((customer, index) => (
              <tr
                key={customer.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{customer.username}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">
                  {customer.email_verified ? "Ya" : "Tidak"}
                </td>
                <td className="px-6 py-4">{customer.name}</td>
                <td className="px-6 py-4n">{customer.no_wa}</td>
                <td className="px-6 py-4n">{customer.address}</td>
                <td className="flex items-center px-6 py-4 gap-2">
                  <Link to={`/admin/customer/${customer.id}/edit`}>
                    <IconButton
                      color="yellow"
                      icon="fa-solid fa-pen-to-square"
                    />
                  </Link>
                  <IconButton
                    color="red"
                    icon="fa-solid fa-trash"
                    onClick={() => handleDelete(customer.id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="px-6 py-4 text-center text-black">
                Belum ada customer terdaftar
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableCustomers;
