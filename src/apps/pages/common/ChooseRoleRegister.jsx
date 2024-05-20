import SectionChooseRole from "../../components/Fragments/Common/SectionChooseRole";
import TextInfoRole from "../../components/Fragments/Common/TextInfoRole";

const ChooseRoleRegister = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col md:flex-row items-center justify-center">
      <div className="min-h-screen md:block md:w-1/2 content-center bg-gradient-to-br from-purple-600 to-blue-500 py-10 px-10">
        <TextInfoRole />
      </div>
      <div className="min-h-screen md:block md:w-1/2 content-center bg-white py-10 px-10">
        <SectionChooseRole
          subTitle="Anda ingin mendaftar sebagai?"
          memberLink="/member/register"
          customerLink="/customer/register"
        />
      </div>
    </div>
  );
};

export default ChooseRoleRegister;
