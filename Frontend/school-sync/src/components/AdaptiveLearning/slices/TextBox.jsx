import React, { useState } from "react";
const TextBox = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [enableHighlight, setEnableHighlight] = useState(false);

  const handleWordSelection = (word) => {
    if (enableHighlight && !selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };
  return (
    <div className="w-full m-5">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="
            bg-gray-100 
            h-[400px] 
            w-[90%] 
            p-5 
            border-0
            rounded-b-lg
          "
        onSelect={(event) => {
          const selectedText = event.target.value.substring(
            event.target.selectionStart,
            event.target.selectionEnd
          );
          handleWordSelection(selectedText);
        }}
      />
      <div>Selected Words: {selectedWords.join(", ")}</div>

      <div className="flex text-center justify-end mr-28">
        <button
          className="bg-gray-300 h-[40px] px-5 flex items-center"
          onClick={() => {
            setEnableHighlight(!enableHighlight);
          }}
        >
          {enableHighlight ? "Disable Highlight" : "Enable Highlight"}
        </button>
        <button className="bg-gray-300 h-[40px] px-5 flex items-center">
          MCQ
        </button>
      </div>
    </div>
  );
};

export default TextBox;
