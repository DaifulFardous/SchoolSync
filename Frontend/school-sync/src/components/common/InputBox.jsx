import React from "react";
import { FaSearch } from "react-icons/fa";
const InputBox = () => {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        className="border-gray-400 h-[42px] rounded-xl text-black sm:w-[60%] pl-16 w-[250px]"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none text-gray-500">
        <FaSearch />
      </div>
    </div>
  );
};

export default InputBox;
