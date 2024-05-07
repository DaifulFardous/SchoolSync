import React, { useContext } from "react";
import round from "../../assets/images/round.png";
import { AuthContext } from "../../authContext/authContext";
const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center gap-5">
      <img src={round} height={60} width={60} className="rounded-[50%]" />
      <div>
        <div className="text-black text-[14px] font-bold">{user.name}</div>
        <div className="text-[#3E3E3E] text-[12px]">Student</div>
      </div>
    </div>
  );
};

export default Profile;
