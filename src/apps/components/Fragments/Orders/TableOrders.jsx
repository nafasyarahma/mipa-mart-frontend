import { Link } from "react-router-dom";
import IconButton from "../../Elements/basic/IconButton";

const TableOrders = ({ subTitle }) => {
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
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal Pemasanan
            </th>
            <th scope="col" className="px-6 py-3">
              Payment
            </th>
            <th scope="col" className="px-6 py-3">
              Delivery
            </th>
            <th scope="col" className="px-6 py-3">
              Total Pesanan
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">#customer-251673101</td>
            <td className="px-6 py-4 ">1, Mar 2024</td>
            <td className="px-6 py-4 ">DANA</td>
            <td className="px-6 py-4 ">COD Sekitar Unila</td>
            <td className="px-6 py-4 ">Rp50.000</td>
            <td className="px-6 py-4 items-center gap-3">
              <span className="flex items-center gap-2">
                Pending
                <IconButton color="green" icon="fa-solid fa-pen" />
              </span>
            </td>
            <td className="flex items-center px-6 py-4">
              <Link to="/member/order/detail">
                <p className="underline hover:text-purple-500">Lihat Detail</p>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableOrders;
