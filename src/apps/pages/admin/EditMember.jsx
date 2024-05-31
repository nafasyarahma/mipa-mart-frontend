import DashboardAdminLayout from "../../components/Layouts/DashboardAdminLayout";
import FormEditMember from "../../components/Fragments/Members/FormEditMember";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MemberSourceAPI from "../../api/resources/sourceMember";
import ToastNotification from "../../components/assets/helpers/ToastNotification";

const EditMember = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [memberData, setMemberData] = useState({
    email: "",
    password: "",
    name: "",
    whatsappNumber: "",
    address: "",
    bio: "",
  });

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await MemberSourceAPI.getMemberById(id);

        setMemberData({
          ...response.member,
          whatsappNumber: response.member.no_wa,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(id);
  }, [id]);

  const handleSumbit = async (e) => {
    e.preventDefault();

    const data = {
      email: memberData.email,
      password: memberData.password,
      name: memberData.name,
      whatsappNumber: memberData.whatsappNumber,
      address: memberData.address,
      bio: memberData.bio
    };

    try {
      const response = await MemberSourceAPI.putMemberById(id, data);
      ToastNotification.toastSuccess(response);
      navigate("/admin/members");
    } catch (error) {
      ToastNotification.toastError(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <DashboardAdminLayout pageTitle="Kelola Member">
        <FormEditMember 
          subTitle="Edit Member"
          memberData={memberData}
          handleChange={handleChange}
          handleSumbit={handleSumbit}
        />
      </DashboardAdminLayout>
    </>
  )
}

export default EditMember