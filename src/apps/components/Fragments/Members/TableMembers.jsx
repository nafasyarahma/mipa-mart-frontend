import { Link } from "react-router-dom";
import IconButton from "../../Elements/IconButton";


const TableMembers = ({subTitle}) => {
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-black font-bold text-lg">{subTitle}</h2>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Username</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Email Terverifikasi</th>
            <th scope="col" className="px-6 py-3">Nama</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">NPM</th>
            <th scope="col" className="px-6 py-3">Jurusan</th>
            <th scope="col" className="px-6 py-3">Bukti KTM</th>
            <th scope="col" className="px-6 py-3">No WhatsApp</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">aputeee</td>
            <td className="px-6 py-4">anisaputri@gmail.com</td>
            <td className="px-6 py-4">Ya</td>
            <td className="px-6 py-4">Anisa Putri</td>
            <td className="px-6 py-4 flex justify-between items-center gap-3">
              <span className="flex-grow">Pending</span>
              <IconButton color="green" icon="fa-solid fa-pen" />
            </td>
            <td className="px-6 py-4">2081927190</td>
            <td className="px-6 py-4">Biologi</td>
            <td className="px-6 py-4n underline text-sky-400">Lihat</td>
            <td className="px-6 py-4n">0812345678</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="sky" icon="fa-solid fa-circle-info" />
              <Link to="/admin/member/edit">
                <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              </Link>
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">iamfitri</td>
            <td className="px-6 py-4">fitrinur@gmail.com</td>
            <td className="px-6 py-4">Ya</td>
            <td className="px-6 py-4">Fitri Nur Hasanah</td>
            <td className="px-6 py-4 flex justify-between items-center gap-3">
              <span className="flex-grow">Accepted</span>
              <IconButton color="green" icon="fa-solid fa-pen" />
            </td>
            <td className="px-6 py-4">2018927190</td>
            <td className="px-6 py-4">Matematika</td>
            <td className="px-6 py-4n underline text-sky-400">Lihat</td>
            <td className="px-6 py-4n">08123497469</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="sky" icon="fa-solid fa-circle-info" />
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">bangjago</td>
            <td className="px-6 py-4">riskiram@gmail.com</td>
            <td className="px-6 py-4">Tidak</td>
            <td className="px-6 py-4">Riski Ramadhan</td>
            <td className="px-6 py-4 flex justify-between items-center gap-3">
              <span className="flex-grow">Rejected</span>
              <IconButton color="green" icon="fa-solid fa-pen" />
            </td>
            <td className="px-6 py-4">2070987190</td>
            <td className="px-6 py-4">Ilmu Komputer</td>
            <td className="px-6 py-4n underline text-sky-400">Lihat</td>
            <td className="px-6 py-4n">0837t219012</td>
            <td className="flex items-center px-6 py-4">
              <IconButton color="sky" icon="fa-solid fa-circle-info" />
              <IconButton color="yellow" icon="fa-solid fa-pen-to-square" />
              <IconButton color="red" icon="fa-solid fa-trash" />
            </td>
          </tr>

          
        </tbody>
      </table>
    </>
  );
};

export default TableMembers;
