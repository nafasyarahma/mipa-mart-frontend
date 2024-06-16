import { useEffect, useState } from "react";
import SidebarNavMember from "../Fragments/Dashboard/SidebarNavMember";
import MemberSourceAPI from "../../api/resources/sourceMember";

const DashboarMemberLayout = (props) => {
  const { children, pageTitle, pageDescription } = props;

  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MemberSourceAPI.getMemberProfile();

        setUsername(response.member.username);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SidebarNavMember username={username}/>
      <div className="p-2 sm:ml-64">
        <div className="p-6 mt-14">
          <h1 className="text-black font-bold text-2xl mb-4">{pageTitle}</h1>
          <p className="text-sm text-gray-400 mb-4">{pageDescription}</p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboarMemberLayout;
