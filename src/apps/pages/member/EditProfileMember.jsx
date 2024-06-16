import DashboarMemberLayout from "../../components/Layouts/DashboardMemberLayout"
import FormEditMember from "../../components/Fragments/Members/FormEditMember";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MemberSourceAPI from "../../api/resources/sourceMember";
import ToastNotification from "../../components/assets/helpers/ToastNotification";

const EditProfileMember = () => {
  const navigate = useNavigate();

  const [memberData, setMemberData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    whatsappNumber: "",
    address: "",
    bio: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MemberSourceAPI.getMemberProfile();

        setMemberData({
          ...response.member,
          whatsappNumber: response.member.no_wa,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
      const response = await MemberSourceAPI.putMemberProfile(data);
      ToastNotification.toastSuccess(response);
      navigate("/member/dashboard");
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

  console.log(memberData)

  return (
    <>
      <DashboarMemberLayout 
        pageTitle="Profil Member"
        pageDescription="Informasi profil akun Anda"
      >
        <FormEditMember 
          subTitle="Edit Profil"
          memberData={memberData}
          handleChange={handleChange}
          handleSumbit={handleSumbit}
        />
      </DashboarMemberLayout>
    </>
  )
}

export default EditProfileMember