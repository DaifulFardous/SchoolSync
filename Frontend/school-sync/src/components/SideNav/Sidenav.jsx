import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  HiLogout,
  HiMenu,
  HiOutlineNewspaper,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Logo from "../common/Logo";

export default function Sidenav() {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigateTo = useNavigate();
  const token = localStorage.getItem("token");
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    checkAbility();
  }, []);

  const checkAbility = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/ability",
        {
          token: token,
        }
      );

      const ability = response.data.abilities;
      console.log(ability);

      // Set the appropriate navItems based on user's ability
      if (ability.includes("user")) {
        setNavItems(navItemsForUser);
      } else if (ability.includes("instructor")) {
        setNavItems(navItemForInstructor);
      } else if (ability.includes("admin")) {
        setNavItems(navItemForAdmin);
      }
    } catch (error) {
      console.log("Failed to check ability", error);
    }
  };

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

const navItemsForUser = [
  { href: "/home", icon: <HiOutlineViewGrid />, label: "Dashboard" },
  { href: "/studentCourses", icon: <HiOutlineNewspaper />, label: "Courses" },
  { href: "/chatbot", icon: <HiComputerDesktop />, label: "AI Chatbot" },
];
const navItemForInstructor = [
  { href: "/teacher", icon: <HiOutlineViewGrid />, label: "Dashboard" },
  { href: "/chatbot", icon: <HiComputerDesktop />, label: "AI Chatbot" },
];
const navItemForAdmin = [
  { href: "/admin", icon: <HiOutlineViewGrid />, label: "Dashboard" },
  { href: "/courses", icon: <HiOutlineNewspaper />, label: "Courses" },
  { href: "/chatbot", icon: <HiComputerDesktop />, label: "AI Chatbot" },
];
