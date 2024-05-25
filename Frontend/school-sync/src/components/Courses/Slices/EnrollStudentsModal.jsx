import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../authContext/authContext";
// import studentsData from "../../../data/Student";

const EnrollStudentsModal = ({
  closeModal,
  enrollStudents,
  courseIndex,
  enrolledStudents,
}) => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [error, setError] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const { signOut } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchStudents();
  }, []);
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/all/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("Fethced Students:", response.data);
        setStudentsData(response.data);
      }
    } catch (error) {
      console.error("Error creating course:", error);

      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        signOut();
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleStudentSelection = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter((s) => s.id !== student.id));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleEnroll = () => {
    // try {

    // } catch (error) {

    // }
    enrollStudents(courseIndex, selectedStudents);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Enroll Students</h2>
        <div className="max-h-60 overflow-y-auto mb-4">
          {studentsData.map((student) => (
            <React.Fragment key={student.id}>
              {!enrolledStudents ||
              !enrolledStudents.some(
                (enrolledStudent) => enrolledStudent.id === student.id
              ) ? (
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value={student.id}
                    onChange={() => handleStudentSelection(student)}
                    checked={selectedStudents.some((s) => s.id === student.id)}
                    className="mr-2"
                  />
                  <span>{student.name}</span>
                </div>
              ) : (
                <></>
              )}
            </React.Fragment>
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
