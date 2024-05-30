import React from "react";

const Exam = ({ type, subject, term, questions, points, handleOpenModal }) => {
  return (
    <div className="bg-[#F7F3F3] p-5 rounded shadow-md flex">
      <div className="flex-1 basis-0">
        <div className="exam-type font-bold">{type}</div>
        <div className="subject text-gray-600">{subject}</div>
      </div>
      <div className="flex-1 basis-0">
        <div className="term w-fit border py-2 px-5 rounded-xl bg-[#6D88CE] bg-opacity-[60%] border-[#2B59CE] text-[#2B59CE]">
          {term}
        </div>
      </div>
      <div className="flex-1 basis-0">
        <div className="questions">{questions} Questions</div>
        <div className="points">{points} Points</div>
      </div>
      <div className="flex-1 basis-0">
        <div className="preview w-fit border py-2 px-5 rounded-xl bg-[#FFFAFA] border-[#2B59CE] text-[#2B59CE]">
          Review Script
        </div>
      </div>
      <div className="flex-1 basis-0">
        <button
          className="preview border w-fit py-2 px-5 rounded-xl bg-[#FFFAFA] border-[#2B59CE] text-[#2B59CE]"
          onClick={handleOpenModal}
        >
          Upload Questions
        </button>
      </div>
    </div>
  );
};

export default Exam;
