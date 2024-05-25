import React from 'react';

const Modal = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        <ul className="list-disc list-inside mb-4">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  )
}

export default Modal;
