import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dummy from "../../data/Course"; // Importing the dummy data
import Sidenav from "../SideNav/Sidenav";
import Search from "../common/Search";
import Profile from "../common/Profile";
import Modal from "./slices/Modal"; // Import the Modal component

import physics from "../../assets/images/phy.png";

const TeacherCourseContent = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch the course details using the courseId
    const courseData = dummy.find((course) => course.id === parseInt(courseId)); // Parsing courseId to integer
    setCourse(courseData);
  }, [courseId]);

  const handleAddContent = (newContent) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      courseContents: [...prevCourse.courseContents, newContent],
    }));
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <h1 className="text-4xl font-bold my-5">Course content</h1>
        <div className="flex justify-between gap-5 mb-5">
          <Search />
          <Profile />
        </div>
        <div className="bg-white rounded-xl p-5">
          <div className="sm:flex gap-3">
            <img
              src={physics} // gave this URL instead which is course.courseDetails.courseImage
              alt={course.courseName}
              className="sm:h-[200px] sm:w-[300px]"
            />
            <div>
              <h1 className="text-2xl font-bold">{course.courseName}</h1>
              <p className="text-sm">{course.courseDetails.othersDetails}</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">Course Contents</h2>
              <button
                className="px-5 py-2 rounded-md bg-[#6956E5] text-white font-bold"
                onClick={() => setIsModalOpen(true)}
              >
                Add content
              </button>
            </div>
            <ul className="flex flex-col sm:gap-3 gap-5 py-5">
              {course.courseContents.map((content, index) => (
                <li
                  key={index}
                  className="bg-[#F7F3F3] shadow-md p-2 rounded-md flex flex-col sm:flex-row sm:items-center gap-5"
                >
                  <h3 className="font-semibold bg-[#A4F7B1] min-h-[60px] min-w-[150px] rounded-md p-2 flex items-center justify-center ">
                    {content.topic}
                  </h3>
                  <p>{content.details}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onAddContent={handleAddContent}
        />
      )}
    </div>
  );
};

export default TeacherCourseContent;
