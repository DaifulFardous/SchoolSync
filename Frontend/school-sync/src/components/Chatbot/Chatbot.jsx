import React, { useState } from "react";

import PromptsList from "./slices/PromptsList";
import Prompt from "./slices/Prompt";
import Search from "./slices/Search";
import Profile from "./slices/Profile";

const Chatbot = () => {
  const [prompts, setPrompts] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState(null);

  const addNewPrompt = () => {
    const newPrompt = {
      id: prompts.length + 1,
      name: "Untitled Prompt",
      messages: [],
    };
    setPrompts([...prompts, newPrompt]);
    setCurrentPrompt(newPrompt);
  };

  const handleUpdateName = (id, newName) => {
    const updatedPrompts = prompts.map((prompt) =>
      prompt.id === id ? { ...prompt, name: newName } : prompt
    );
    setPrompts(updatedPrompts);
  };

  const handleDeletePrompt = (id) => {
    const updatedPrompts = prompts.filter((prompt) => prompt.id !== id);
    setPrompts(updatedPrompts);
    if (currentPrompt && currentPrompt.id === id) {
      setCurrentPrompt(null);
    }
  };

  const handleSendMessage = (message) => {
    if (currentPrompt) {
      const updatedPrompts = prompts.map((prompt) =>
        prompt.id === currentPrompt.id
          ? {
              ...prompt,
              messages: [
                ...prompt.messages,
                { text: message, sender: "user" },
                { text: "This is a dummy reply.", sender: "ChatGPT" },
              ],
            }
          : prompt
      );
      setPrompts(updatedPrompts);
    }
  };

  return (
    <div className="bg-[#E5EAEA] text-black flex gap-10">
      <PromptsList
        prompts={prompts}
        setCurrentPrompt={setCurrentPrompt}
        addNewPrompt={addNewPrompt}
      />
      <div className="main-body flex-1 flex flex-col">
        <div className="header flex-none flex flex-col gap-5 my-5">
          <div className="text-3xl font-bold">AI Chatbot</div>
          <div className="sub-header flex gap-2">
            <Search />
            <Profile />
          </div>
        </div>
        {currentPrompt && (
          <Prompt
            key={currentPrompt.id}
            prompt={currentPrompt}
            onUpdateName={handleUpdateName}
            onDeletePrompt={handleDeletePrompt}
            onSendMessage={handleSendMessage}
          />
        )}
      </div>
    </div>
  );
};

export default Chatbot;
