import React from 'react';
import logo from "../../assets/images/Group.png";
import { HiOutlineViewGrid, HiTrendingUp, HiOutlinePencilAlt, HiOutlineNewspaper, HiQuestionMarkCircle, HiOutlineCog, HiLogout } from 'react-icons/hi';
import { HiCalendarDays, HiDocumentText, HiMiniUsers, HiComputerDesktop } from "react-icons/hi2";
import { LuShieldQuestion } from "react-icons/lu";

export default function Sidenav() {
  return (
    <aside className='h-screen overflow-hidden border-r shadow-sm'>
      <nav className='h-full flex flex-col bg-white w-[20vw]'>
        <div className='p-3 pb-2 flex'>
          <img src={logo} className='w-[6vw]' alt="" />
          <span className="text-red no-underline text-[1.5rem] pl-[1vw] font-bold">
            S<span className="text-[#263238]">chool <br />Sync</span>
          </span>
        </div>
        <div className="flex flex-col flex-grow p-4 w-[17vw] border-r shadow-sm">
          <div className="mb-[4vh]">
            <a href="/home" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium">
              <HiOutlineViewGrid className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Dashboard
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiTrendingUp className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Progress Tracking
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiOutlinePencilAlt className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Exams
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiCalendarDays className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Academic Calender
            </a>
            <a href="/courses" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiOutlineNewspaper className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Courses
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiQuestionMarkCircle className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Suggestions
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiDocumentText className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Assignments
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiMiniUsers className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Attendance
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiComputerDesktop className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> AI Chatbot
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <LuShieldQuestion className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Help
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiOutlineCog className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Settings
            </a>
            <a href="#" className="flex items-center py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b from-white to-white hover:from-blue-500 hover:to-white-300 no-underline font-medium mt-[1.2vh]">
              <HiLogout className="mr-[0.5vw] w-[1.5vw] h-[1.5vw]" /> Logout
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
}