import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Prompt = ({
  prompt,
  onUpdateName,
  chatHistory,
  onSendMessage,
  onDeletePrompt,
}) => {
  const [promptName, setPromptName] = useState(prompt.name);
  const [messages, setMessages] = useState(chatHistory || []);
  const [isEditingName, setIsEditingName] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" },
      { text: "This is a dummy reply.", sender: "ChatGPT" },
    ]);
    onSendMessage(message);
  };

  const onSubmit = (data) => {
    if (data.message.trim() !== "") {
      handleSendMessage(data.message);
      reset();
    }
  };

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    onUpdateName(prompt.id, promptName);
    setIsEditingName(false);
  };

  const handleDeletePrompt = () => {
    onDeletePrompt(prompt.id);
  };

  return (
    <div className="h-full bg-white my-5 w-[95%] p-5 rounded-md text-[#084062] flex flex-col">
      <div className="flex justify-between">
        <div className="prompt-header flex gap-2 items-center">
          {isEditingName ? (
            <input
              type="text"
              value={promptName}
              onChange={(e) => setPromptName(e.target.value)}
              className="text-2xl border-b border-[#084062] outline-none text-black"
            />
          ) : (
            <div className="title text-2xl">{promptName}</div>
          )}
          <button
            className="w-8 h-8 rounded-full bg-[#084062] text-lg flex items-center justify-center cursor-pointer"
            onClick={isEditingName ? handleSaveName : handleEditName}
          >
            {isEditingName ? <IoSend /> : <GoPencil />}
          </button>
        </div>
        <div className="utils flex gap-5">
          <div className="flex gap-2 items-center text-sm">
            <button className="w-8 h-8 rounded-full bg-[#084062] text-lg flex items-center justify-center cursor-pointer">
              <IoIosLink />
            </button>
            <div>Share link to Prompt</div>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <button
              className="w-8 h-8 rounded-full bg-[#084062] text-lg flex items-center justify-center cursor-pointer"
              onClick={handleDeletePrompt}
            >
              <MdOutlineDelete />
            </button>
            <div>Delete Prompt</div>
          </div>
        </div>
      </div>
      <div className="chats flex-1 rounded-md p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message my-5 ${
              message.sender === "user"
                ? "text-right text-black"
                : "text-left text-[#084062] p-5 bg-[#E5EAEA] border rounded-md"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="w-[90%] relative" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full py-5 pl-5 pr-16 border border-gray-800 rounded-lg text-[#084062] shadow-2xl"
          type="text"
          placeholder="How can I help you?"
          {...register("message")}
        />
        <button
          type="submit"
          className="absolute top-2 right-[-70px] w-12 h-12 rounded-full bg-[#084062] text-lg flex items-center justify-center cursor-pointer"
        >
          <IoSend className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Prompt;
