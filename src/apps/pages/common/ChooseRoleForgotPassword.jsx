import SectionChooseRole from "../../components/Fragments/Common/SectionChooseRole";

const ChooseRoleForgotPassword = () => {
  return (
    <div className="w-1/2 min-h-screen bg-white mx-auto content-center ">
      <SectionChooseRole
        subTitle="Anda berperan sebagai?"
        memberLink="/member/forgot-password"
        customerLink="/customer/forgot-password"
      />
    </div>
  );
};

export default ChooseRoleForgotPassword;
