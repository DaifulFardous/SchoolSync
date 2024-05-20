import React from "react";

const Tabs = ({ onClick }) => {
  return (
    <div className="flex gap-10 text-xl font-semibold pb-10">
      <div onClick={() => onClick("All Courses")} className="cursor-pointer">
        All Courses
      </div>
      <div
        onClick={() => onClick("Ongoing Courses")}
        className="cursor-pointer"
      >
        Ongoing Courses
      </div>
      <div
        onClick={() => onClick("Completed Courses")}
        className="cursor-pointer"
      >
        Completed Courses
      </div>
    </div>
  );
};

export default Tabs;
