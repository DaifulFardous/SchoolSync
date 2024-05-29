import React from "react";
import Upload from "./Upload";
import { RxCross2 } from "react-icons/rx";
const UploadModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#F9F5F5] sm:w-[60%] items-center rounded p-10 flex flex-col gap-10">
        <button className="self-end text-gray-500" onClick={onClose}>
          <RxCross2 />
        </button>
        <Upload />
        <div className="flex gap-5">
          <button className="border px-5 py-2 rounded bg-blue-500">Save</button>
          <button
            className="border px-5 py-2 rounded bg-blue-500"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
