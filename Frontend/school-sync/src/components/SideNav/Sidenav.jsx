import React, { useState } from "react";
import {
  HiLogout,
  HiMenu,
  HiOutlineCog,
  HiOutlineNewspaper,
  HiOutlinePencilAlt,
  HiOutlineViewGrid,
  HiQuestionMarkCircle,
  HiTrendingUp,
} from "react-icons/hi";
import {
  HiCalendarDays,
  HiComputerDesktop,
  HiDocumentText,
  HiMiniUsers,
} from "react-icons/hi2";
import { LuShieldQuestion } from "react-icons/lu";
import Logo from "../common/Logo";

const navItems = [
  { href: "/home", icon: <HiOutlineViewGrid />, label: "Dashboard" },
  { href: "/home", icon: <HiTrendingUp />, label: "Progress Tracking" },
  { href: "/home", icon: <HiOutlinePencilAlt />, label: "Exams" },
  { href: "/home", icon: <HiCalendarDays />, label: "Academic Calender" },
  { href: "/courses", icon: <HiOutlineNewspaper />, label: "Courses" },
  { href: "/home", icon: <HiQuestionMarkCircle />, label: "Suggestions" },
  { href: "/home", icon: <HiDocumentText />, label: "Assignments" },
  { href: "/home", icon: <HiMiniUsers />, label: "Attendance" },
  { href: "/chatbot", icon: <HiComputerDesktop />, label: "AI Chatbot" },
  { href: "/home", icon: <LuShieldQuestion />, label: "Help" },
  { href: "/home", icon: <HiOutlineCog />, label: "Settings" },
  { href: "/home", icon: <HiLogout />, label: "Logout" },
];

export default function Sidenav() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`bg-white  py-5 px-5 sm:px-10 flex justify-center h-screen shadow-xl ${
        isExpanded ? " w-1 sm:w-[16%]" : "w-1"
      }`}
    >
      <nav className="flex flex-col gap-5 flex-1">
        <div
          className={`flex justify-center ${
            isExpanded ? "sm:justify-between" : "sm:justify-center"
          }`}
        >
          <div className={`${isExpanded ? "hidden sm:block" : "hidden"}`}>
            <Logo />
          </div>
          <button
            onClick={toggleSidebar}
            className={`text-xl ${isExpanded ? "" : ""}`}
          >
            <HiMenu />
          </button>
        </div>
        <div className={`flex flex-col h-[70%] justify-around`}>
          {navItems.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="flex gap-5 text-sm py-2 sm:px-5 items-center sm:justify-start hover:bg-gray-200 text-[#6956E5]"
            >
              <span className="text-2xl">
              {item.icon}
              </span>
              <span className={`text-[#4638a0] ${isExpanded ? "hidden sm:block" : "hidden"}`}>
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}
