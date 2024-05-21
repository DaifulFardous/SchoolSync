import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Profile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="sm:flex hidden gap-5 items-center">
      <div className="flex items-center gap-5">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="rounded-full h-16 w-16"
        />
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
