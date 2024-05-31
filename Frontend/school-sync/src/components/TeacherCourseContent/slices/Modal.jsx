import axios from "axios";
import React, { useState } from "react";

const Modal = ({ onClose, onAddContent, courseId }) => {
  const [topic, setTopic] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [file, setFile] = useState(null);
  const token = localStorage.getItem("token");

  const handleAddContent = async () => {
    // Check if all required fields are provided
    if (
      topic.trim() !== "" &&
      shortDescription.trim() !== "" &&
      longDescription.trim() !== ""
    ) {
      // const newContent = {
      //   topic,
      //   short_description: shortDescription,
      //   long_description: longDescription,
      //   file,
      // };
      const data = new FormData();
      data.append("course_id", courseId);
      data.append("name", topic);
      data.append("short_description", shortDescription);
      data.append("long_description", longDescription);
      data.append("pdf", file);

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/content/create",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status == 200) {
          console.log("Content created:", response.data);
        }
      } catch (error) {
        console.error("Error signing up:", error);
      }

      onAddContent({ topic, shortDescription });
      onClose();
    } else {
      alert("Please provide topic, short description, and long description.");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add Course Content</h2>
        <div className="mb-4">
          <label className="block mb-2">Topic Name:</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Short Description:</label>
          <input
            type="text"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Long Description:</label>
          <textarea
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full resize-none"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Upload File:</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleAddContent}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
