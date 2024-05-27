import React from "react";
import Profile from "./Profile";

const Header = ({pageName}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-5 my-5">
      <h1 className="text-2xl sm:text-4xl font-bold">{pageName}</h1>
      <Profile />
    </div>
  );
};

export default Header;
