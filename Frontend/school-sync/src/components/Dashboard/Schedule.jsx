import React from "react";

const Schedule = ({ schedules }) => {
  return (
    <div className="text-black flex flex-col gap-5">
      <div className="text-[20px] font-bold">Schedule</div>
      {schedules.map((schedule, index) => (
        <div key={index} className="bg-[#EBEBEB] rounded-[5px] p-3 flex gap-4 items-center">
          <div className="border-solid border-r border-[#3E3E3E] text-[20px] font-bold px-4">{index + 1}</div>
          <div>
            <div className="text-[14px] font-bold">{schedule.subject}</div>
            <div className="text-[12px] text-[#3E3E3E]">{schedule.completed}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
