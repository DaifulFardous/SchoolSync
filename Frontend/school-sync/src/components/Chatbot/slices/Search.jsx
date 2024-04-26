import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell, FaEnvelope } from "react-icons/fa";
const Search = () => {
  return (
    <div className="search flex justify-between items-center w-[60%] relative">
      <input
        type="text"
        className="border-gray-400 rounded-xl text-black w-[50%] pl-8"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-gray-500">
        <FaSearch />
      </div>
      <div className="notifications flex gap-5 text-gray-500 text-2xl">
        <FaBell />
        <FaEnvelope />
      </div>
    </div>
  );
};

export default Search;
