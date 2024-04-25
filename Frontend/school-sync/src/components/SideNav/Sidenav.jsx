import React, { useState } from 'react';
import logo from "../../assets/images/Group.png";
import { HiOutlineViewGrid, HiTrendingUp, HiOutlinePencilAlt, HiOutlineNewspaper, HiQuestionMarkCircle, HiOutlineCog, HiLogout } from 'react-icons/hi';
import { HiCalendarDays, HiDocumentText, HiMiniUsers, HiComputerDesktop } from "react-icons/hi2";
import { LuShieldQuestion } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";

export default function Sidenav() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`h-screen pb-2 sm:pb-2 overflow-hidden border-r shadow-sm ${isExpanded ? 'w-[50vw] sm:w-[19vw]' : 'w-[20vw] sm:w-[5vw]'}`}>
  <nav className='h-full flex flex-col bg-white'>
    <div className='p-3 pb-2 flex justify-between sm: pr-3'>
      <div className='flex items-center sm:w-[4vw]'>
      <img src={logo} className={`w-[20vw] sm:w-[6vw] ${isExpanded ? 'block' : 'hidden'}`} alt="" />
        <span className={`text-red no-underline text-[5vw] sm:text-[1.5rem] w-[5vw] text-sm pl-[3vw] sm:pl-[1vw] font-bold ${isExpanded ? 'block' : 'hidden'}`}>
          S<span className="text-[#263238]">chool <br />Sync</span>
        </span>
      </div>
      <button onClick={toggleSidebar} className="focus:outline-none bg-white cursor-pointer text-black">
        <HiMenu className="w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] pt-3" />
      </button>
    </div>
    <div className={`flex flex-col flex-grow p-4 ${isExpanded ? 'w-[70vw] sm:w-[17vw]' : 'w-[10vw] sm:w-[3vw]'} border-r shadow-sm`}>
      <div className="mb-[10vh] sm:mb-[4vh] pt-3">
        <a href="/home" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiOutlineViewGrid className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>Dashboard</span>
        </a>
        <a href="/home" className={`flex items-center pb-8 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiTrendingUp className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1 w-[3vw]`}>Progress Tracking</span>
        </a>
        <a href="/home" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiOutlinePencilAlt className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>Exams</span>
        </a>
        <a href="/home" className={`flex items-center pb-8 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiCalendarDays className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1 w-[3vw]`}>Academic Calender</span>
        </a>
        <a href="/Courses" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiOutlineNewspaper className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>Courses</span>
        </a>
        <a href="/home" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiQuestionMarkCircle className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>Suggestions</span>
        </a>
        <a href="/home" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiDocumentText className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>Assignments</span>
        </a>
        <a href="/home" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiMiniUsers className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>Attendance</span>
        </a>
        <a href="/home" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiComputerDesktop className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>AI Chatbot</span>
        </a>
        <a href="/home" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <LuShieldQuestion className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>Help</span>
        </a>
        <a href="/home" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiOutlineCog className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>Settings</span>
        </a>
        <a href="/home" className={`flex items-center pb-6 py-[2vh] sm:py-[1vh] px-[2vw] sm:px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
          <HiLogout className={`mr-[2vw] sm:mr-[0.5vw] w-[5vw] sm:w-[1.5vw] h-[5vw] sm:h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
          <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[10vw] sm:left-[3vw] sm:text-sm px-2 py-1`}>Logout</span>
        </a>
        
      </div>
    </div>
  </nav>
</aside>
  );
}