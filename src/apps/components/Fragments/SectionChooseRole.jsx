import { Link } from "react-router-dom";
const SectionChooseRole = ({ memberLink, customerLink }) => {
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="font-bold text-2xl text-gray-700 mb-4">Pilih Role</h1>
        <p className="text-gray-500 text-sm">
          Anda ingin mendaftar sebagai apa?
        </p>
      </div>
      <div>
        <Link to={memberLink}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-4 me-2 w-full overflow-hidden text-base font-semibold text-purple-700 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white w-full rounded-md group-hover:bg-opacity-0">
              Member
            </span>
          </button>
        </Link>
        <Link to={customerLink}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 w-full overflow-hidden text-base font-semibold text-purple-700 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white w-full rounded-md group-hover:bg-opacity-0">
              Customer
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default SectionChooseRole;
