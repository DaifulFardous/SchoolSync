import React, { useState } from "react";

function MCQ({ index, question, options, meaning }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="shadow-2xl w-f[900%] p-5 rounded-md bg-white">
      <h3>
        {index + 1}. {question}
      </h3>
      <form className="w-48 grid grid-cols-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {options.map((option, index) => (
          <div
            key={index}
            className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
          >
            <div className="flex items-center py-1">
              <input
                type="radio"
                id={`option${index}`}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`option${index}`}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {option}
              </label>
            </div>
          </div>
        ))}
      </form>
      <p>Selected option: {selectedOption}</p>
      <p>Meaning: {meaning}</p>
    </div>
  );
}

export default MCQ;
