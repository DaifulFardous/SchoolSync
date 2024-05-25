import React, { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AuthContext } from "../../authContext/authContext";

const Profile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { imageUrl } = useContext(AuthContext);
  if (imageUrl) {
    console.log("Hello", imageUrl);
  }

  return (
    <div className="sm:flex hidden gap-5 items-center">
      <div className="flex items-center gap-5">
        <img src={imageUrl} alt="Profile" className="rounded-full h-16 w-16" />
        <div>
          <div className="font-bold">dummy name</div>
          <div className="text-sm text-gray-500">dummy profession</div>
        </div>
      </div>
      <div className="expanded">
        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          className="bg-transparent text-xl text-black"
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Profile;
