import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  HiLogout,
  HiMenu,
  HiOutlineNewspaper,
  HiOutlinePencilAlt,
  HiOutlineViewGrid,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import { HiComputerDesktop, HiDocumentText } from "react-icons/hi2";
import Logo from "../common/Logo";

const navItems = [
  { href: "/home", icon: <HiOutlineViewGrid />, label: "Dashboard" },
  { href: "/home", icon: <HiOutlinePencilAlt />, label: "Exams" },
  { href: "/courses", icon: <HiOutlineNewspaper />, label: "Courses" },
  { href: "/home", icon: <HiQuestionMarkCircle />, label: "Suggestions" },
  { href: "/home", icon: <HiDocumentText />, label: "Assignments" },
  { href: "/chatbot", icon: <HiComputerDesktop />, label: "AI Chatbot" },
];

export default function Sidenav() {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigateTo = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogout = () => {
    axios
      .get("http://127.0.0.1:8000/api/logout")
      .then((result) => {
        console.log(result);
        localStorage.removeItem("token");
        navigateTo("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <aside
      className={`bg-white py-5 px-5 sm:px-10 flex justify-center h-screen shadow-xl ${
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
              <span className="text-2xl">{item.icon}</span>
              <span
                className={`text-[#4638a0] ${
                  isExpanded ? "hidden sm:block" : "hidden"
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
          <button
            onClick={handleLogout}
            className="flex gap-5 text-sm py-2 sm:px-5 items-center sm:justify-start hover:bg-gray-200 text-[#6956E5]"
          >
            <span className="text-2xl">
              <HiLogout />
            </span>
            <span
              className={`text-[#4638a0] ${
                isExpanded ? "hidden sm:block" : "hidden"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
}
