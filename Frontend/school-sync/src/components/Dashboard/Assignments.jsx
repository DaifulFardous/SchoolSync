import React from "react";

function Assignments({ assignments }) {
  return (
    <div className="border-0 bg-[#FFFAFA] rounded-[20px] p-5 flex flex-col gap-5 max-h-[400px] overflow-y-auto">
      <div className="text-black text-[20px] font-bold">Assignments</div>
      {assignments.map((assignment, index) => (
        <div
          key={index}
          className="bg-[#F7F3F3] rounded-[10px] p-4 grid grid-cols-4  gap-2 place-content-between place-items-center"
        >
          <div className="flex flex-col gap-2">
            <div className="text-black text-[14px] font-bold">
              {assignment.subject}
            </div>
            <div className="text-black text-[12px]">
              Chapter {assignment.chapter}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-black text-[14px] font-bold">Daily Task</div>
            <div className="text-black text-[12px]">Page {assignment.page}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-black text-[14px] font-bold">
              {assignment.deadline}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className={`text-[14px] font-bold ${
                assignment.status == "Pending"
                  ? "text-[#FE9519]"
                  : "text-[#1CC800]"
              }`}
            >
              {assignment.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Assignments;
