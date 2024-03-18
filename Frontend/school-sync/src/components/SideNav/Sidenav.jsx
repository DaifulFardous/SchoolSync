import React, { Children } from 'react';
import logo from "../../assets/images/Group.png";
import { HiOutlineViewGrid,HiTrendingUp,HiOutlinePencilAlt,HiOutlineNewspaper,HiQuestionMarkCircle,HiOutlineCog,HiLogout } from 'react-icons/hi';
import { HiCalendarDays,HiDocumentText,HiMiniUsers,HiComputerDesktop } from "react-icons/hi2";
import { LuShieldQuestion } from "react-icons/lu";

export default function Sidenav() {
  return (
    <aside className='h-screen overflow-hidden border-r shadow-sm'>
      <nav className='h-full flex flex-col bg-white w-[20vw]'>
        <div className='p-3 pb-2 flex'>
          <img src={logo} className='w-24' alt="" />
          <span className="text-red no-underline text-3xl pl-4 font-bold">
                  S<span className="text-[#263238]">chool <br />Sync</span>
                </span>
        </div>
        <div className="flex flex-col flex-grow p-4 w-[17vw] border-r shadow-sm">
        <div className="mb-4">
        <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium">
            <HiOutlineViewGrid className="mr-2 w-7 h-7" /> Dashboard
          </a> 
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiTrendingUp className="mr-2 w-7 h-7" /> Progress Tracking
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiOutlinePencilAlt className="mr-2 w-7 h-7" /> Exams
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiCalendarDays className="mr-2 w-7 h-7" /> Academic Calender
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiOutlineNewspaper className="mr-2 w-7 h-7" /> Courses
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiQuestionMarkCircle className="mr-2 w-7 h-7" /> Suggestions
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiDocumentText className="mr-2 w-7 h-7" /> Assignments
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiMiniUsers className="mr-2 w-7 h-7" /> Attendance
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiComputerDesktop className="mr-2 w-7 h-7" /> AI Chatbot
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <LuShieldQuestion className="mr-2 w-7 h-7" /> Help
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiOutlineCog className="mr-2 w-7 h-7" /> Settings
          </a>
          <a href="#" className="flex items-center py-2 px-2 rounded-lg text-blue-800  bg-gradient-to-b from white to white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-2">
            <HiLogout className="mr-2 w-7 h-7" /> Logout
          </a>
        </div>
      </div>
      </nav>
    </aside>
  );
}