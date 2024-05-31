import axios from "axios";
import React, { useState } from "react";

const CreateExamModal = ({ onClose, courseId }) => {
  const [examType, setExamType] = useState("");
  const [subject, setSubject] = useState("");
  const [term, setTerm] = useState("");
  const [questions, setQuestions] = useState("");
  const [points, setPoints] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ examType, subject, questions, points });
    console.log(courseId);

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/assignment/create",
        {
          courseId: courseId,
          assignment_name: examType,
          assignment_subject: subject,
          num_of_ques: questions,
          points: points,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error getting course:", error);

      if (error.response && error.response.status === 401) {
        console.log("error");
      } else {
        console.log("An error occurred. Please try again.");
      }
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create Exam</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Exam Type</label>
            <input
              type="text"
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700">Term</label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700">Number of Questions</label>
            <input
              type="number"
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Points</label>
            <input
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExamModal;
