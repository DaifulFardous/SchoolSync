import React from "react";

const EnrolledStudentsModal = ({ closeModal, students, unenrollStudent }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-2/3">
        <h2 className="text-xl font-bold mb-4">Enrolled Students</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="font-bold">Student ID</div>
          <div className="font-bold">Student Name</div>
          <div className="font-bold">Action</div>
          {students.map((student, index) => (
            <React.Fragment key={index}>
              <div>{student.id}</div>
              <div>{student.name}</div>
              <div>
                <button
                  className="bg-red-500 px-4 py-2 rounded text-white"
                  onClick={() => unenrollStudent(student.id)}
                >
                  Unenroll
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
        <button
          className="mt-4 bg-gray-500 px-4 py-2 rounded text-white"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EnrolledStudentsModal;
