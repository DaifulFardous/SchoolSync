import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidenav from "../SideNav/Sidenav";
import Header from "../common/Header";
import CreateExamModal from "./slices/CreateExamModal";
import Exam from "./slices/Exam";
import UploadModal from "./slices/UploadModal";

const TeacherExam = () => {
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const { courseId } = useParams();
  console.log(courseId);

  const exams = [
    {
      id: 1,
      type: "Final Exam",
      subject: "Chemistry",
      term: "1st Term",
      questions: 10,
      points: 100,
    },
    {
      id: 2,
      type: "Midterm Exam",
      subject: "Physics",
      term: "2nd Term",
      questions: 20,
      points: 200,
    },
    {
      id: 3,
      type: "Quiz",
      subject: "Mathematics",
      term: "1st Term",
      questions: 5,
      points: 50,
    },
  ];

  const handleOpenUploadModal = () => {
    setUploadModalOpen(true);
  };

  const handleCloseUploadModal = () => {
    setUploadModalOpen(false);
  };

  const handleOpenCreateModal = () => {
    setCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5 flex flex-col">
        <Header pageName={"Exams"} />
        <div className="flex flex-1 py-10">
          <div className="overflow-auto flex-1 flex flex-col bg-white rounded p-5 gap-5">
            <h3 className="text-xl sm:text-2xl font-semibold">Exams</h3>
            <button
              onClick={handleOpenCreateModal}
              className="px-4 py-2 bg-blue-500 text-white rounded w-fit"
            >
              Create Exam
            </button>
            {exams.map((exam) => (
              <Exam
                key={exam.id}
                type={exam.type}
                subject={exam.subject}
                term={exam.term}
                questions={exam.questions}
                points={exam.points}
                handleOpenModal={handleOpenUploadModal}
              />
            ))}
          </div>
        </div>
      </div>
      {isUploadModalOpen && <UploadModal onClose={handleCloseUploadModal} />}
      {isCreateModalOpen && (
        <CreateExamModal onClose={handleCloseCreateModal} courseId={courseId} />
      )}
    </div>
  );
};

export default TeacherExam;
