import React, { useState } from "react";
import logo from "../../assets/images/Group.png";
import {
  HiOutlineViewGrid,
  HiTrendingUp,
  HiOutlinePencilAlt,
  HiOutlineNewspaper,
  HiQuestionMarkCircle,
  HiOutlineCog,
  HiLogout,
} from "react-icons/hi";
import {
  HiCalendarDays,
  HiDocumentText,
  HiMiniUsers,
  HiComputerDesktop,
} from "react-icons/hi2";
import { LuShieldQuestion } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import Logo from "../common/Logo";

const navItems = [
  { href: "/home", icon: <HiOutlineViewGrid />, label: "Dashboard" },
  { href: "/home", icon: <HiTrendingUp />, label: "Progress Tracking" },
  { href: "/home", icon: <HiOutlinePencilAlt />, label: "Exams" },
  { href: "/home", icon: <HiCalendarDays />, label: "Academic Calender" },
  { href: "/home", icon: <HiOutlineNewspaper />, label: "Courses" },
  { href: "/home", icon: <HiQuestionMarkCircle />, label: "Suggestions" },
  { href: "/home", icon: <HiDocumentText />, label: "Assignments" },
  { href: "/home", icon: <HiMiniUsers />, label: "Attendance" },
  { href: "/home", icon: <HiComputerDesktop />, label: "AI Chatbot" },
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
      className={`w-[20%] bg-white py-5 px-10 flex h-screen ${
        isExpanded ? "" : "w-1"
      }`}
    >
      <nav className="flex flex-col flex-1">
        <div className="flex sm:justify-between justify-center">
          <div className={`${isExpanded ? "hidden sm:block" : "hidden"}`}>
            <Logo />
          </div>
          <button
            onClick={toggleSidebar}
            className={`text-2xl ${isExpanded ? "" : "w-min"}`}
          >
            <HiMenu />
          </button>
        </div>
        <div
          className={`flex flex-col h-[70%] justify-around ${
            isExpanded ? "" : "hidden"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="flex gap-5 text-2xl py-2 sm:px-5 items-center justify-center sm:justify-start hover:bg-gray-200 text-[#6956E5]"
            >
              {item.icon}
              <span className="hidden sm:block">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}
