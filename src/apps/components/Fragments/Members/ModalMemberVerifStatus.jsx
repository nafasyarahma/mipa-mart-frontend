import RadioOption from "../../Elements/basic/RadioOption";
import Button from "../../Elements/basic/Button";
import { useEffect, useState } from "react";
import MemberSourceAPI from "../../../api/resources/sourceMember";
import ToastNotification from "../../assets/helpers/ToastNotification";

const ModalMemberVerifStatus = ({ isOpen, onClose, modalId, memberId }) => {
  const [verifStatus, setVerifStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MemberSourceAPI.getMemberById(memberId);
        setVerifStatus(response.member.verif_status);
      } catch (error) {
        console.error(error);
      }
    };

    if (isOpen && memberId) {
      fetchData();
    }
  }, [memberId, isOpen]);

  const handleStatusChange = (e) => {
    setVerifStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { verifStatus: verifStatus };
      const response = await MemberSourceAPI.putMemberStatusById(
        memberId,
        data
      );
      ToastNotification.toastSuccess(response);
      onClose();
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <div
      id={modalId}
      tabIndex="-1"
      aria-hidden="true"
      className={`modal ${
        isOpen ? "modal-open" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center  w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto ">
        {/* Modal Content */}
        <div className="modal-content relative p-4 bg-white rounded-lg shadow sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
            <h3 className="text-lg font-semibold text-gray-900">
              Update Status Member
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-toggle="updateStatusModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body*/}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center py-4">
              <p className="block text-sm font-semibold text-gray-900 mr-16">
                Status
              </p>
              <RadioOption
                id="pending"
                name="verifStatus"
                value="pending"
                label="Pending"
                checked={verifStatus === "pending"}
                onChange={handleStatusChange}
              />
              <RadioOption
                id="approved"
                name="verifStatus"
                value="approved"
                label="Approved"
                checked={verifStatus === "approved"}
                onChange={handleStatusChange}
              />
              <RadioOption
                id="rejected"
                name="verifStatus"
                value="rejected"
                label="Rejected"
                checked={verifStatus === "rejected"}
                onChange={handleStatusChange}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="submit" className="" label="Simpan"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalMemberVerifStatus;
