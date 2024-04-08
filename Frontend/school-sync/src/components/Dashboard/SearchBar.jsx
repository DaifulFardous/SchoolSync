import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="font-bold text-[34px] text-black my-5">Dashboard</div>
      <div className="flex-1 flex justify-between items-center">
        <div className="relative flex-1">
          <input
            type="text"
            className="border-0 rounded-[10px] w-[50%] text-gray-600 px-10 py-2"
            value={inputValue}
            onChange={handleChange}
          />

          <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pointer-events-none gap-2">
            <HiSearch className="text-gray-400 text-[24px]" />
            {!inputValue && <p className="text-[14px]">Search</p>}
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FaRegBell className="text-[24px]" />
          <MdMailOutline className="text-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
