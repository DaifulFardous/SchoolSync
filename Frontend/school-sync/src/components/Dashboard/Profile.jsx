import React from "react";
import round from "../../assets/images/round.png";
const Profile = () => {
  return (
    <div className="flex items-center gap-5">
      <img src={round} height={60} width={60} className="rounded-[50%]" />
      <div>
        <div className="text-black text-[14px] font-bold">Alma Morse</div>
        <div className="text-[#3E3E3E] text-[12px]">Student</div>
      </div>
    </div>
  );
};

export default Profile;
