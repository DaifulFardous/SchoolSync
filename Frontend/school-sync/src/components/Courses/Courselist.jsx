import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AuthContext } from "../../authContext/authContext";
import Sidenav from "../SideNav/Sidenav";
import CouresesHeader from "./Slices/CoursesHeader";
import EnrollStudentsModal from "./Slices/EnrollStudentsModal";
import EnrolledStudentsModal from "./Slices/EnrolledStudentsModal";
import Modal from "./Slices/Modal";

const Courselist = () => {
  const [modal, setModal] = useState(false);
  const [enrollModal, setEnrollModal] = useState(false);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [studentsModal, setStudentsModal] = useState(false);
  const [error, setError] = useState("");
  const { signOut } = useContext(AuthContext);

  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/courses", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("fetched Courses:", response.data);

        setCourses(response.data);
      }
    } catch (error) {
      console.log("Failed to fetch courses", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        signOut();
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };
  useEffect(() => {
    // setTeachers(teachersData);
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/all/instructor",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Fetched Instructors:", response.data);
        setTeachers(response.data);
      }
    } catch (error) {
      console.log("Failed to fetch Instructors", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        signOut();
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const closeEnrollModal = () => {
    setEnrollModal(false);
    setSelectedCourseIndex(null);
  };

  const closeStudentsModal = () => {
    setStudentsModal(false);
  };

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const assignTeacher = (courseIndex, teacher) => {
    const updatedCourses = courses.map((course, index) => {
      if (index === courseIndex) {
        return { ...course, teacher };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  const enrollStudents = (courseIndex, students) => {
    const updatedCourses = courses.map((course, index) => {
      if (index === courseIndex) {
        return {
          ...course,
          students: course.students
            ? [...course.students, ...students]
            : students,
        };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  const unenrollStudent = (courseIndex, studentId) => {
    const updatedCourses = courses.map((course, index) => {
      if (index === courseIndex) {
        return {
          ...course,
          students: course.students.filter(
            (student) => student.id !== studentId
          ),
        };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  const toggleRow = (index) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };

  return (
    <div className="flex">
      <Sidenav />
      <div className="bg-[#E5EAEA] flex-1 p-5 flex flex-col items-center">
        <CouresesHeader />
        <div className="w-full mb-5">
          <button
            className="bg-[#6956E5] text-white px-5 py-2 rounded text-lg"
            onClick={() => setModal(true)}
          >
            Create course
          </button>
        </div>
        {modal && <Modal closeModal={closeModal} addCourse={addCourse} />}
        {enrollModal && (
          <EnrollStudentsModal
            closeModal={closeEnrollModal}
            enrollStudents={enrollStudents}
            courseIndex={selectedCourseIndex}
            enrolledStudents={courses[selectedCourseIndex].students}
          />
        )}
        {studentsModal && (
          <EnrolledStudentsModal
            closeModal={closeStudentsModal}
            students={courses[selectedCourseIndex].students}
            unenrollStudent={(studentId) =>
              unenrollStudent(selectedCourseIndex, studentId)
            }
          />
        )}
        <div className="grid grid-cols-5 gap-5 w-full bg-black bg-opacity-5 p-5 place-content-center place-items-center">
          <div className="font-bold">Course Name </div>
          <div className="font-bold">Assigned Teacher</div>
          <div className="font-bold">Enroll Students</div>
          <div className="font-bold">Total Enrolled Students</div>
          <div className="font-bold"></div>
          <>
            {courses.map((course, index = index + 1) => (
              <React.Fragment key={index}>
                <div className="col-span-5 border-t w-full"></div>
                <div>{course.name}</div>
                <div>
                  {course.teacher ? (
                    <span className="text-green-500">
                      {course.teacher.name}
                    </span>
                  ) : (
                    <select
                      onChange={(e) =>
                        assignTeacher(index, JSON.parse(e.target.value))
                      }
                      className="px-3 py-2 rounded"
                    >
                      <option value="">Select a teacher</option>
                      {teachers.map((teacher) => (
                        <option
                          key={teacher.id}
                          value={JSON.stringify(teacher)}
                        >
                          {teacher.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => {
                      setSelectedCourseIndex(index);
                      setEnrollModal(true);
                    }}
                    className="bg-[#6956E5] px-4 py-2 rounded text-white"
                  >
                    Enroll Students
                  </button>
                </div>
                <div>{course.students ? course.students.length : 0}</div>
                <div
                  className="cursor-pointer"
                  onClick={() => toggleRow(index)}
                >
                  {expandedRowIndex === index ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                {expandedRowIndex === index && (
                  <div className="col-span-5 p-4 w-full bg-white flex flex-col gap-2">
                    <div>
                      <strong>Course Name:</strong> {course.name}
                    </div>
                    <div>
                      <strong>Short Description:</strong>{" "}
                      {course.short_description}
                    </div>
                    {course.teacher && (
                      <div>
                        <strong>Assigned Teacher:</strong> {course.teacher.name}
                      </div>
                    )}
                    {course.image && (
                      <div>
                        <strong>Course Image:</strong>{" "}
                        <img
                          src={course.image}
                          alt="Course"
                          className="max-w-full h-auto rounded"
                        />
                      </div>
                    )}
                    {course.students && course.students.length > 0 && (
                      <div>
                        <button
                          className="mt-2 bg-[#6956E5] px-4 py-2 rounded text-white"
                          onClick={() => {
                            setSelectedCourseIndex(index);
                            setStudentsModal(true);
                          }}
                        >
                          Show Enrolled Students
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Courselist;
