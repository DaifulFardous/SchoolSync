import React, { useState } from "react";
import studentsData from "../../../data/Student";

const EnrollStudentsModal = ({ closeModal, enrollStudents, courseIndex }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleStudentSelection = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter((s) => s.id !== student.id));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleEnroll = () => {
    enrollStudents(courseIndex, selectedStudents);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Enroll Students</h2>
        <div className="max-h-60 overflow-y-auto mb-4">
          {studentsData.map((student) => (
            <div key={student.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={student.id}
                onChange={() => handleStudentSelection(student)}
                checked={selectedStudents.some((s) => s.id === student.id)}
                className="mr-2"
              />
              <span>{student.name}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handleEnroll}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Confirm Enroll
        </button>
        <button
          onClick={closeModal}
          className="bg-red-500 px-4 py-2 rounded text-white ml-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EnrollStudentsModal;
