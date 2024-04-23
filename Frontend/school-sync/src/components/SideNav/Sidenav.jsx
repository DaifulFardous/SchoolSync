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
    <aside className={`h-screen overflow-hidden border-r shadow-sm ${isExpanded ? 'w-[19vw]' : 'w-[5vw]'}`}>
      <nav className='h-full flex flex-col bg-white'>
        <div className='p-3 pb-2 flex justify-between'>
          <div className='flex items-center'>
            <img src={logo} className={`w-[6vw] ${isExpanded ? 'block' : 'hidden'}`} alt="" />
            <span className={`text-red no-underline text-[1.5rem] pl-[1vw] font-bold ${isExpanded ? 'block' : 'hidden'}`}>
              S<span className="text-[#263238]">chool <br />Sync</span>
            </span>
          </div>
          <button onClick={toggleSidebar} className="focus:outline-none bg-white cursor-pointer">
            <HiMenu className="w-[1.5vw] h-[1.5vw] pt-3" />
          </button>
        </div>
        <div className={`flex flex-col flex-grow p-4 ${isExpanded ? 'w-[17vw]' : 'w-[3vw]'} border-r shadow-sm`}>
          <div className="mb-[4vh] pt-5">
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiOutlineViewGrid className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Dashboard</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiTrendingUp className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Progress Tracking</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiOutlinePencilAlt className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Exams</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiCalendarDays className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Academic Calender</span>
            </a>
            <a href="/Courses" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiOutlineNewspaper className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Courses</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiQuestionMarkCircle className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Suggestions</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiDocumentText className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Assignments</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiMiniUsers className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Attendance</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiComputerDesktop className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>AI Chatbot</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <LuShieldQuestion className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Help</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiOutlineCog className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Settings</span>
            </a>
            <a href="/home" className={`flex items-center pb-4 py-[1.2vh] px-[0.5vw] rounded-lg text-blue-800 bg-gradient-to-b hover:from-blue-500 hover:to-white-300 no-underline font-medium ${isExpanded ? 'justify-start' : 'justify-center'} relative`}>
              <HiLogout className={`mr-[0.5vw] w-[1.5vw] h-[1.5vw] ${isExpanded ? 'block' : 'mx-auto'}`} />
              <span className={`${isExpanded ? 'block' : 'hidden'} absolute left-[3vw]  px-2 py-1`}>Logout</span>
            </a>
            
            
            
          </div>
        </div>
      </nav>
    </aside>
  );
}