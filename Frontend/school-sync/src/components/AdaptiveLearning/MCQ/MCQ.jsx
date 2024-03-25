import React, { useState } from "react";
import AddOptionModal from "./AddOptionModal";

function MCQ({ index, question, options, meaning,suggestedOptions }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addOption = (newOption) => {
    if (newOption.trim() !== "") {
      setAdditionalOptions([...additionalOptions, newOption]);
    }
    closeModal();
  };


  return (
    <div className="shadow-2xl w-full p-5 rounded-md bg-white m-5">
      <h3>
        {index + 1}. {question}
      </h3>
      <div className="flex gap-2">
        <form className=" w-48 grid grid-cols-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {options.map((option, optionIndex) => (
            <div
              key={optionIndex}
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            >
              <div className="flex items-center py-1">
                <input
                  type="radio"
                  id={`option${optionIndex}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`option${optionIndex}`}
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {option}
                </label>
              </div>
            </div>
          ))}
          {additionalOptions.map((option, optionIndex) => (
            <div
              key={options.length + optionIndex}
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            >
              <div className="flex items-center py-1">
                <input
                  type="radio"
                  id={`option${options.length + optionIndex}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`option${options.length + optionIndex}`}
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {option}
                </label>
              </div>
            </div>
          ))}
        </form>
        {isModalOpen ? (
          <AddOptionModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onConfirm={addOption}
            suggestedOptions={suggestedOptions}
          />
        ) : (
          <></>
        )}
      </div>
      <button
        onClick={openModal}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Option
      </button>
      <p>Selected option: {selectedOption}</p>
      <p>Meaning: {meaning}</p>
    </div>
  );
}

export default MCQ;
