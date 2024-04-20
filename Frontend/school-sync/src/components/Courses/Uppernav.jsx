import { useState } from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import {
  HiMiniQuestionMarkCircle,
  HiOutlineAcademicCap,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import bell from "../../assets/images/bell.png";
import down from "../../assets/images/down.png";
import mail from "../../assets/images/mail.png";
import round from "../../assets/images/round.png";

const Uppernav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full flex flex-col items-start justify-start max-w-[62.938rem] text-left text-[2.125rem] text-black font-istok-web">
      <h1 className="pb-4 m-0 w-[20.688rem] h-[2.375rem] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-[1.25rem] mq1050:text-[1.688rem]">
        Courses
      </h1>
      <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full mt-[-0.125rem] text-[0.875rem] mq1050:flex-wrap">
        <div className="w-[29.188rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.188rem] box-border max-w-full">
          <input
            type="text"
            className="border-none bg-transparent self-stretch h-[2.625rem] font-istok-web font-bold text-[0.75rem] text-gray-100 outline-none"
            placeholder="Search"
            style={{
              height: "36px",
              backgroundColor: "#fffafa",
              paddingLeft: "20px",
              borderRadius: "10px",
              fontSize: "12px",
              color: "rgba(0, 0, 0, 0.36)",
            }}
          />
        </div>
        <div className="pt-[-8] w-[25.25rem] flex flex-row items-center justify-start gap-[0rem_5.438rem] max-w-full mq450:flex-wrap mq450:gap-[0rem_5.438rem]">
          <div className="flex flex-row items-center justify-start py-[1.25rem] px-[0rem] gap-[0rem_1.25rem]">
            <img
              className="h-[1.5rem] w-[1.188rem] relative cursor-pointer"
              loading="eager"
              alt=""
              src={bell}
            />
            <img
              className="h-[1.063rem] w-[1.5rem] relative cursor-pointer"
              loading="eager"
              alt=""
              src={mail}
            />
          </div>
          <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_1rem] min-w-[10.313rem] pt-[-4]">
            <Link to="/profile">
              <img
                className="h-[4.313rem] w-[4.5rem] relative rounded-81xl object-cover"
                loading="eager"
                alt=""
                src={round}
              />
            </Link>
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start relative">
                  <b className="h-[1.5rem] flex-1 relative inline-block">
                    Alma Morse
                  </b>
                  <div className="relative inline-block">
                    <button
                      onClick={toggleDropdown}
                      className=" cursor-pointer"
                    >
                      <img
                        className="h-[1.063rem] w-[0.938rem] object-cover"
                        loading="eager"
                        alt=""
                        src={down}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute right-0 z-10 mt-6 w-52 bg-white rounded-md shadow-lg">
                        <div className="py-1 no-underline">
                          <a
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline"
                          >
                            <FaUserCircle className="inline-block mr-2" />
                            Profile
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline"
                          >
                            <HiMiniQuestionMarkCircle className="inline-block mr-2" />
                            Help
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline"
                          >
                            <HiOutlineAcademicCap className="inline-block mr-2" />
                            My Courses
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline"
                          >
                            <FaSignOutAlt className="inline-block mr-2" />
                            Logout
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.063rem] mt-[-0.312rem] text-[0.75rem] text-darkslategray-100">
                  <div className="h-[1.5rem] relative inline-block">
                    Student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uppernav;
