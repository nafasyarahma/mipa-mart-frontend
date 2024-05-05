import IconButton from "../Elements/IconButton";

const TablePaymentMethods = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Provider/Bank</th>
            <th scope="col" className="px-6 py-3">Nomor Akun/Rekening</th>
            <th scope="col" className="px-6 py-3">Atas Nama</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4 ">DANA</td>
            <td className="px-6 py-4">081314151617</td>
            <td className="px-6 py-4">AYU TING TING</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4 ">BRI</td>
            <td className="px-6 py-4">1819273617291731</td>
            <td className="px-6 py-4">AYU ROSINTA</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4 ">GOPAY</td>
            <td className="px-6 py-4">081314151617</td>
            <td className="px-6 py-4">AYU ROSINTA</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablePaymentMethods;
