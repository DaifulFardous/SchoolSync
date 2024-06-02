import React, { useState } from "react";

import axios from "axios";
import Prompt from "./slices/Prompt";
import PromptsList from "./slices/PromptsList";
import Sidenav from "../SideNav/Sidenav";
import Profile from "../common/Profile";
import Header from "../common/Header";

const Chatbot = () => {
  const [prompts, setPrompts] = useState([]);
  const [messages, setMessages] = useState({});
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const [reply, setReply] = useState("");
  const addNewPrompt = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/conversation/create/"
      );
      const conversationId = response.data.conversation_id;
      console.log(conversationId);

      const newPrompt = {
        id: prompts.length + 1,
        name: "Untitled Prompt",
        conversationId: conversationId,
      };
      setPrompts([...prompts, newPrompt]);
      setCurrentPrompt(newPrompt);
    } catch (error) {
      console.log("Failed to create a new conversation:", error);
    }
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

  const handleSendMessage = async (message) => {
    if (currentPrompt) {
      const promptId = currentPrompt.id;
      const newMessage = { text: message, sender: "user" };

      setMessages((prevMessages) => ({
        ...prevMessages,
        [promptId]: [...(prevMessages[promptId] || []), newMessage],
      }));

      try {
        const response = await axios.post(
          `http://127.0.0.1:8080/conversation/${currentPrompt.conversationId}/send_message/`,
          {
            role: "user",
            parts: [message],
          }
        );

        const replyMessage = {
          text: response.data.response,
          sender: "ChatGPT",
        };
        console.log(replyMessage.text);
        setReply(replyMessage.text);

        setMessages((prevMessages) => ({
          ...prevMessages,
          [promptId]: [...(prevMessages[promptId] || []), replyMessage],
        }));
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };

  return (
    <div className="flex bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <div className="bg-[#E5EAEA] text-black flex gap-10 md:flex-row flex-col">
          <PromptsList
            prompts={prompts}
            setCurrentPrompt={setCurrentPrompt}
            addNewPrompt={addNewPrompt}
          />
          <div className="main-body flex-1 flex flex-col">
            <Header pageName={"AI Chatbot"} />
            {currentPrompt && (
              <Prompt
                key={currentPrompt.id}
                prompt={currentPrompt}
                onUpdateName={handleUpdateName}
                onDeletePrompt={handleDeletePrompt}
                onSendMessage={handleSendMessage}
                chatHistory={messages[currentPrompt.id]}
                reply={reply}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
