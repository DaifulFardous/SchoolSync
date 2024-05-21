import React from "react";
import logo from "../../assets/images/logo.png";
const Logo = () => {
  return (
    <div className="flex gap-5 items-center justify-center">
      <img src={logo} alt="" />
      <div className="w-min text-wrap text-2xl font-bold">
        <span className="text-red-500">S</span>chool Sync
      </div>
    </div>
  );
};

export default Logo;
