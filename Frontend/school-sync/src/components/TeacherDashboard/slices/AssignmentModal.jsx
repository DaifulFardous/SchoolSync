import React from "react";
import { IoMdClose } from "react-icons/io";
const AssignmentModal = ({ assignments, onClose }) => {
  const token = localStorage.getItem("token");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md p-5 mx-5">
        <div className="flex justify-between items-center my-2">
          <h2 className="text-xl font-bold">All Assignments</h2>
          <button onClick={onClose} className="text-xl font-bold">
            <IoMdClose />
          </button>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-[#F7F3F3] rounded-sm p-4 grid grid-cols-4 gap-2 place-content-between place-items-center mb-2"
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
                <div className="text-black text-[14px] font-bold">
                  Daily Task
                </div>
                <div className="text-black text-[12px]">
                  Page {assignment.page}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-black text-[14px] font-bold">
                  {assignment.deadline}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div
                  className={`text-[14px] font-bold ${
                    assignment.status === "Pending"
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
      </div>
    </div>
  );
};

export default AssignmentModal;
