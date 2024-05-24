import React, { useState } from "react";
import Modal from "./slices/Modal";
import Sidenav from "../SideNav/Sidenav";
import Search from "../common/Search";
import Profile from "../common/Profile";

const TeacherCourseContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [contentList, setContentList] = useState([]);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddContent = (content) => {
    setContentList([...contentList, content]);
  };

  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <h1 className="text-4xl font-bold mb-5">Courses</h1>
        <div className="flex justify-between gap-5 mb-5">
          <Search />
          <Profile />
        </div>
        <button
          onClick={handleModalOpen}
          className="rounded bg-blue-500 px-5 py-2 mb-5 text-white"
        >
          Add Content
        </button>
        <div className="flex flex-col sm:gap-3 gap-5 py-5">
          {contentList.map((content, index) => (
            <div
              key={index}
              className="bg-[#F7F3F3] shadow-md p-2 rounded-md flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <h3 className="font-semibold bg-[#A4F7B1] min-h-[60px] min-w-[150px] rounded-md p-2 flex items-center justify-center ">
                {content.topic}
              </h3>
              <p>{content.details}</p>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal onClose={handleModalClose} onAddContent={handleAddContent} />
      )}
    </div>
  );
};

export default TeacherCourseContent;
