import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "../../Elements/basic/IconButton";
import MemberSourceAPI from "../../../api/resources/sourceMember";
import ToastNotification from "../../assets/helpers/ToastNotification";
import ModalMemberVerifStatus from "./ModalMemberVerifStatus";

const TableMembers = ({ subTitle }) => {
  const [members, setMembers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await MemberSourceAPI.getAllMembers();
        setMembers(response.members);
      } catch (error) {
        ToastNotification.toastError(error.response.data.message);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await MemberSourceAPI.deleteMemberById(id);
      const currectData = members.filter((member) => member.id !== id);
      setMembers(currectData);
      ToastNotification.toastSuccess(response);
    } catch (error) {
      console.error(error);
      ToastNotification.toastError(error.response.data.message);
    }
  };
  
  const handleModalOpen = (memberId) => {
    setSelectedMemberId(memberId);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedMemberId(null)
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
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              NPM
            </th>
            <th scope="col" className="px-6 py-3">
              Jurusan
            </th>
            <th scope="col" className="px-6 py-3">
              Bukti KTM
            </th>
            <th scope="col" className="px-6 py-3">
              No WhatsApp
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>
          {members.length > 0 ? (
            members.map((member, index) => (
              <tr
                key={member.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{member.username}</td>
                <td className="px-6 py-4">{member.email}</td>
                <td className="px-6 py-4">
                  {member.email_verified ? "Ya" : "Tidak"}
                </td>
                <td className="px-6 py-4">{member.name}</td>
                <td className="px-6 py-4 flex justify-between items-center gap-3">
                  <span className="flex-grow capitalize">
                    {member.verif_status}
                  </span>
                  <IconButton
                    color="green"
                    icon="fa-solid fa-pen"
                    onClick={() => handleModalOpen(member.id)}
                    dataModalTarget="updateMemberVerifStatus"
                    dataModalToggle="updateMemberVerifStatus"
                  />
                </td>
                <td className="px-6 py-4">{member.npm}</td>
                <td className="px-6 py-4 capitalize">{member.major}</td>
                <td className="px-6 py-4">
                  <Link to={member.ktm_image}>
                    <span className="underline text-sky-400">Lihat</span>
                  </Link>
                </td>
                <td className="px-6 py-4n">{member.no_wa}</td>
                <td className="flex items-center px-6 py-4">
                  <IconButton color="sky" icon="fa-solid fa-circle-info" />
                  <Link to={`/admin/member/${member.id}/edit`}>
                    <IconButton
                      color="yellow"
                      icon="fa-solid fa-pen-to-square"
                    />
                  </Link>
                  <IconButton
                    onClick={() => handleDelete(member.id)}
                    color="red"
                    icon="fa-solid fa-trash"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" className="px-6 py-4 text-center text-black">
                Belum ada member terdaftar
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ModalMemberVerifStatus
        modalId="updateMemberVerifStatus"
        memberId={selectedMemberId}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export default TableMembers;
