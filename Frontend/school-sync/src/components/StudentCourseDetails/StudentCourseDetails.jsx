import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../authContext/authContext";
import Sidenav from "../SideNav/Sidenav";
import Profile from "../common/Profile";
import Search from "../common/Search";

import axios from "axios";

const StudentCourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [contents, setContents] = useState([]);
  const [attemptedExams, setAttemptedExams] = useState([]);
  const token = localStorage.getItem("token");
  const { signOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [buttonStatus, setButtonStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourseDetailsAndButtonStatus();
  }, [courseId]);

  const fetchCourseDetailsAndButtonStatus = async () => {
    try {
      const [courseDetailsResponse, buttonStatusResponse] = await Promise.all([
        axios.get(`http://127.0.0.1:8000/api/user/course/${courseId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(
          `http://127.0.0.1:8000/api/course/enrolled/or/not/${courseId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
      ]);

      if (courseDetailsResponse.status === 200) {
        setCourse(courseDetailsResponse.data);
      }

      if (buttonStatusResponse.status === 200) {
        setButtonStatus(buttonStatusResponse.data);
        if (buttonStatusResponse.data.status === "yes") {
          fetchCourseContents();
        }
      }
    } catch (error) {
      console.log("Failed to fetch course details or button status", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        signOut();
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const fetchCourseContents = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/user/course/${courseId}/contents`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setContents(response.data);
        fetchAttemptedExams(response.data);
      }
    } catch (error) {
      console.log("Failed to fetch contents", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        signOut();
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const fetchAttemptedExams = async (contents) => {
    try {
      const attempts = await Promise.all(
        contents.map((content) =>
          axios.get(
            `http://127.0.0.1:8000/api/content/exam/attempt/or/not/${content.id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
        )
      );

      const attemptedExams = attempts.map((response, index) => ({
        contentId: contents[index].id,
        status: response.data.status,
      }));

      setAttemptedExams(attemptedExams);
    } catch (error) {
      console.log("Failed to fetch attempted exams", error);
    }
  };

  const handleExam = (contentId) => () => {
    navigate(`/giveExam/${contentId}`);
  };

  const handleEnroll = async () => {
    try {
      await axios.get(`http://127.0.0.1:8000/api/enroll/course/${courseId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setButtonStatus({ status: "yes" });
      fetchCourseContents();
    } catch (error) {
      console.log("Error Enrolling Course");
    }
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <h1 className="text-4xl font-bold mb-5">Courses</h1>
        <div className="flex justify-between gap-5 mb-5">
          <Search />
          <Profile />
        </div>
        <div className="bg-white rounded-xl p-5">
          <div className="sm:flex gap-3">
            <img
              src={course.image}
              alt={course.name}
              className="sm:h-[200px] sm:w-[300px]"
            />
            <div>
              <h1 className="text-2xl font-bold">
                {course.name} ( {course.instructor_name} )
              </h1>
              <p className="text-sm">{course.long_description}</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex">
              <h2 className="text-xl font-bold">Course Contents</h2>
              {buttonStatus.status === "no" ? (
                <button
                  className="rounded bg-blue-500 text-white px-5 py-2 sm:ml-auto"
                  onClick={handleEnroll}
                >
                  Enroll
                </button>
              ) : null}
            </div>

            {contents.length > 0 ? (
              <ul className="flex flex-col sm:gap-3 gap-5 py-5">
                {contents.map((content, index) => (
                  <li
                    key={index}
                    className="bg-[#F7F3F3] shadow-md p-2 rounded-md flex flex-col sm:flex-row sm:items-center gap-5"
                  >
                    <h3 className="font-semibold bg-[#A4F7B1] min-h-[60px] min-w-[150px] rounded-md p-2 flex items-center justify-center">
                      {content.name}
                    </h3>
                    <p className="flex-grow">{content.long_description}</p>
                    {attemptedExams.find(
                      (exam) =>
                        exam.contentId === content.id && exam.status === "no"
                    ) && (
                      <button
                        className="rounded bg-blue-500 text-white px-5 py-2 sm:ml-auto"
                        onClick={handleExam(content.id)}
                      >
                        Give Exam
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No course contents available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCourseDetails;
