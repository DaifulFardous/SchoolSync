import React from "react";

import { FaBell, FaEnvelope } from "react-icons/fa";
import InputBox from "./InputBox";
const Search = () => {
  return (
    <div className="flex gap-5 justify-between items-center sm:w-[70%] w-min">
      <InputBox />
      <div className="hidden sm:flex gap-5 text-gray-600 text-2xl">
        <FaBell />
        <FaEnvelope />
      </div>
    </div>
  );
};

export default Search;
