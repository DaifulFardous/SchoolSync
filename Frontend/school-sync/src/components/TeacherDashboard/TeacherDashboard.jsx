import React from "react";
import Sidenav from "../SideNav/Sidenav";
import RunningCourses from "./slices/RunningCourses";
import Assignments from "./slices/Assignments";
import Header from "../common/Header";

const TeacherDashboard = () => {
  const AssignmentsData = [
    {
      subject: "Organic chemistry",
      chapter: 1,
      page: 14,
      deadline: "10:00 AM",
      status: "Pending",
    },
    {
      subject: "State of matter",
      chapter: 2,
      page: 19,
      deadline: "11:00 AM",
      status: "Completed",
    },
    {
      subject: "Organic chemistry",
      chapter: 3,
      page: 14,
      deadline: "1:00 AM",
      status: "Pending",
    },
    {
      subject: "State of matter",
      chapter: 4,
      page: 19,
      deadline: "5:00 AM",
      status: "Completed",
    },
    {
      subject: "Organic chemistry",
      chapter: 1,
      page: 14,
      deadline: "10:00 AM",
      status: "Pending",
    },
    {
      subject: "State of matter",
      chapter: 2,
      page: 19,
      deadline: "11:00 AM",
      status: "Completed",
    },
    {
      subject: "Organic chemistry",
      chapter: 3,
      page: 14,
      deadline: "1:00 AM",
      status: "Pending",
    },
    {
      subject: "State of matter",
      chapter: 4,
      page: 19,
      deadline: "5:00 AM",
      status: "Completed",
    },
  ];
  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <Header pageName={"Teacher Dashboard"} />
        <div className="flex flex-col gap-10">
          <RunningCourses />
          <Assignments assignments={AssignmentsData} />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
