import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidenav from "../SideNav/Sidenav";
import Profile from "../common/Profile";
import Search from "../common/Search";
import Modal from "./slices/Modal"; // Import the Modal component

import axios from "axios";

const TeacherCourseContent = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [contents, setContents] = useState([]);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch the course details using the courseId
    fetchCourseDetails();
    fetchCourseContents();
  }, [courseId]);

  const fetchCourseDetails = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/instructor/course/${courseId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 200) {
        console.log(response.data);
        setCourse(response.data);
      }
    } catch (error) {
      console.log("Failed to fetch courses", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const fetchCourseContents = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/course/${courseId}/contents`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 200) {
        console.log(response.data);
        setContents(response.data);
      }
    } catch (error) {
      console.log("Failed to fetch contents", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  // const handleAddContent = (newContent) => {
  //   setCourse((prevCourse) => ({
  //     ...prevCourse,
  //     courseContents: [...prevCourse.courseContents, newContent],
  //   }));
  // };
  const handleAddContent = (newContent) => {
    setContents((prevContents) => [...prevContents, newContent]);
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
              src={course.image} // gave this URL instead which is course.courseDetails.courseImage
              alt={course.name}
              className="sm:h-[200px] sm:w-[300px]"
            />
            <div>
              <h1 className="text-2xl font-bold">{course.name}</h1>
              <p className="text-sm">{course.long_description}</p>
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
            {contents.length > 0 ? (
              <ul className="flex flex-col sm:gap-3 gap-5 py-5">
                {contents.map((content, index) => (
                  <li
                    key={index}
                    className="bg-[#F7F3F3] shadow-md p-2 rounded-md flex flex-col sm:flex-row sm:items-center gap-5"
                  >
                    <h3 className="font-semibold bg-[#A4F7B1] min-h-[60px] min-w-[150px] rounded-md p-2 flex items-center justify-center ">
                      {content.name}
                    </h3>
                    <p>{content.long_description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No course contents available at the moment.</p>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          courseId={courseId}
          onClose={() => setIsModalOpen(false)}
          onAddContent={handleAddContent}
        />
      )}
    </div>
  );
};

export default TeacherCourseContent;
