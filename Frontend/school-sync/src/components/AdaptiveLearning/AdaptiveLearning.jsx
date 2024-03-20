import React, { useState } from "react";
import Sidenav from "../SideNav/Sidenav";
import TextBox from "./slices/TextBox";

export default function AdaptiveLearning() {
  return (
    <div className="flex">
      <Sidenav />
      <TextBox />
    </div>
  );
}
