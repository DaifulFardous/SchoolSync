import React from 'react';
import { HiSearch } from "react-icons/hi";
import round from "../../assets/images/round.png";
import bell from "../../assets/images/bell.png";
import down from "../../assets/images/down.png";
import mail from "../../assets/images/mail.png";

const Uppernav = () => {
  return (
    <div className="w-[62.938rem] flex flex-col items-start justify-start max-w-full text-left text-[2.125rem] text-black font-istok-web">
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
              height: '36px',
              backgroundColor: '#fffafa',
              paddingLeft: '20px',
              borderRadius: '10px',
              fontSize: '12px',
              color: 'rgba(0, 0, 0, 0.36)',
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
            <img
              className="h-[4.313rem] w-[4.5rem] relative rounded-81xl object-cover"
              loading="eager"
              alt=""
              src={round}
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start relative">
                  <b className="h-[1.5rem] flex-1 relative inline-block">
                    Alma Morse
                  </b>
                  <img
                    className="h-[1.063rem] w-[0.938rem] absolute my-0 mx-[!important] top-[0rem] right-[0.938rem] object-cover"
                    loading="eager"
                    alt=""
                    src={down}
                  />
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
