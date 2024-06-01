import React from "react";
import ProgressBar from "./ProgressBar";

const Completion = ({ completions }) => {
  console.log("from completion components : ", completions);
  return (
    <div className="border-0 bg-white rounded-[20px] p-5 flex flex-col gap-5 max-h-[400px] overflow-y-auto">
      <div className="text-black font-bold text-[20px] text-center">
        Completion Progress
      </div>
      {completions.map((completion, index) => (
        <div
          key={index}
          className="bg-[#F7F3F3] rounded-[10px] p-4 flex justify-between items-center"
        >
          <div className="flex flex-col gap-2">
            <div className="text-black text-[14px] font-bold">
              {completion.subject}
            </div>
            <div className="text-black text-[12px]">
              Chapter {completion.chapter}
            </div>
          </div>
          <div className="w-2/4">{ProgressBar(completion.progress)}</div>
        </div>
      ))}
    </div>
  );
};

export default Completion;
