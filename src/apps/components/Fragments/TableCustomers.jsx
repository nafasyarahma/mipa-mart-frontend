import IconButton from "../Elements/IconButton";

const TableCustomers = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Username</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Email Terverifikasi</th>
            <th scope="col" className="px-6 py-3">Nama</th>
            <th scope="col" className="px-6 py-3">Nomor WA</th>
            <th scope="col" className="px-6 py-3">Alamat</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">vanysep</td>
            <td className="px-6 py-4">vanysepti@gmail.com</td>
            <td className="px-6 py-4">Ya</td>
            <td className="px-6 py-4">Vany Septiana</td>
            <td className="px-6 py-4n">0812345678</td>
            <td className="px-6 py-4n">Jl. Bumi Manti 1, Kampung Baru.</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">safiraaa</td>
            <td className="px-6 py-4">safirarahma@gmail.com</td>
            <td className="px-6 py-4">Ya</td>
            <td className="px-6 py-4">Safira Rahma</td>
            <td className="px-6 py-4n">081029384746</td>
            <td className="px-6 py-4n">Jl. Abdul Muis X, Gedong Meneng</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">nurset</td>
            <td className="px-6 py-4">nursetiawati@gmail.com</td>
            <td className="px-6 py-4">Ya</td>
            <td className="px-6 py-4">Nur Setiawati</td>
            <td className="px-6 py-4n">08674562729</td>
            <td className="px-6 py-4n">Jl. Cengkeh, Rajabasa.</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>          
        </tbody>
      </table>
    </div>
  );
};

export default TableCustomers;
