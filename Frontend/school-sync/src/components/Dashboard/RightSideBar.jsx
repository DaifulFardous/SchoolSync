import React from "react";
import Profile from "./Profile";
import Schedule from "./Schedule";
import UpcomingEvents from "./UpcomingEvents";
import Timeline from "./Timeline";

const RightSideBar = ({ schedules, upComing }) => {
  return (
    <div className="bg-[#FFFAFA] flex-1 flex flex-col gap-10 p-10">
      <Profile />
      <Timeline />
      <Schedule schedules={schedules} />
      <UpcomingEvents upComing={upComing} />
    </div>
  );
};

export default RightSideBar;
