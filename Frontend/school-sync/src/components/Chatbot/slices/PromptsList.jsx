import React from "react";
import { FaEdit } from "react-icons/fa";

const PromptsList = ({ prompts, setCurrentPrompt, addNewPrompt }) => {
  const handlePromptClick = (prompt) => {
    setCurrentPrompt(prompt);
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-[280px] flex flex-col">
      <button
        className="bg-transparent text-base cursor-pointer hover:bg-slate-700 w-[90%] mx-auto my-2 py-2 px-5 rounded-lg flex justify-between items-center"
        onClick={addNewPrompt}
      >
        <div>Add new prompt</div>
        <FaEdit />
      </button>
      <div>
        {prompts.map((prompt) => (
          <div
            key={prompt.id}
            className="py-2 px-5 hover:bg-gray-700 cursor-pointer"
            onClick={() => handlePromptClick(prompt)}
          >
            {prompt.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptsList;
