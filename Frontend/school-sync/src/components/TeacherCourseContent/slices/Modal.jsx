import React, { useState } from 'react';

const Modal = ({ onClose, onAddContent }) => {
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');

  const handleAddContent = () => {
    // Check if both topic and details are provided
    if (topic.trim() !== '' && details.trim() !== '') {
      onAddContent({ topic, details });
      onClose();
    } else {
      alert('Please provide both topic and details.');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md">
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
          <label className="block mb-2">Details:</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full resize-none"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
          <button onClick={handleAddContent} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
