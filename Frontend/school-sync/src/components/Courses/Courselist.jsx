import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AuthContext } from "../../authContext/authContext";
import Sidenav from "../SideNav/Sidenav";
import Header from "../common/Header";
import EnrolledStudentsModal from "./Slices/EnrolledStudentsModal";
import Modal from "./Slices/Modal";

const Courselist = () => {
  const [modal, setModal] = useState(false);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [studentsModal, setStudentsModal] = useState(false);
  const [error, setError] = useState("");
  const [assigned, setAssigned] = useState(null);
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
        const coursesData = response.data;

        // Fetch total enrolled students for each course
        const updatedCourses = await Promise.all(
          coursesData.map(async (course) => {
            const totalEnrolledStudents = await getTotalEnrolledStudents(
              course.id
            );
            return {
              ...course,
              totalEnrolledStudents,
            };
          })
        );

        setCourses(updatedCourses);
        console.log(courses);
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

  // const getAssignedInstructor = async (courseIndex) => {
  //   const course_ins_id = courses[courseIndex].instructor_id;
  //   try {
  //     const response = await axios.get(
  //       `http://127.0.0.1:8000/api/get/instructor/${course_ins_id}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (response.status === 200) {
  //       // console.log("Fetched Instructors:", response.data);
  //       // setTeachers(response.data);
  //       setAssigned(response.data);

  //       console.log(assigned.data.name);
  //       // return response.data.name;
  //     }
  //   } catch (error) {
  //     console.log("Failed to fetch Instructors details", error);
  //     if (error.response && error.response.status === 401) {
  //       setError("Unauthorized. Please log in again.");
  //       signOut();
  //     } else {
  //       setError("An error occurred. Please try again.");
  //     }
  //   }
  // };

  const getTotalEnrolledStudents = async (courseId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/admin/course/${courseId}/total/users`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        return response.data.total_users; // Assuming the API returns the total in this format
      }
    } catch (error) {
      console.log("Failed to fetch total enrolled students", error);
      return 0;
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const closeStudentsModal = () => {
    setStudentsModal(false);
  };

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  // const assignTeacher = async (courseIndex, teacher) => {
  //   //   const course_id = courses[courseIndex].id;
  //   //   const course_ins_id = courses[courseIndex].instructor_id;

  //   //   const updatedCourses = courses.map((course, index) => {
  //   //     if (index === courseIndex) {
  //   //       return { ...course, teacher };
  //   //     }

  //   //     return course;
  //   //   });

  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/set/instructor",
  //       {
  //         course_id: course_id,
  //         instructor_id: teacher.id,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (response.status === 200) {
  //       console.log("Instructor Set");
  //     }
  //   } catch (error) {
  //     console.log("Failed to fetch Instructors", error);
  //     if (error.response && error.response.status === 401) {
  //       setError("Unauthorized. Please log in again.");
  //       signOut();
  //     } else {
  //       setError("An error occurred. Please try again.");
  //     }
  //   }
  //   setCourses(updatedCourses);
  // };
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
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <Header pageName={"Course"} />
        <div className="w-full mb-5">
          <button
            className="bg-[#6956E5] text-white px-5 py-2 rounded text-lg"
            onClick={() => setModal(true)}
          >
            Create course
          </button>
        </div>
        {modal && <Modal closeModal={closeModal} addCourse={addCourse} />}
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
          {/* <div className="font-bold">Enroll Students</div> */}
          <div className="font-bold">Total Enrolled Students</div>
          <div className="font-bold"></div>
          <>
            {courses.map((course, index = index + 1) => (
              <React.Fragment key={index}>
                <div className="col-span-5 border-t w-full"></div>
                <div>{course.name}</div>
                {/* <div>
                  {course.instructor_id ? (
                    <span className="text-green-500">
                      {/* {getAssignedInstructor(index)} */}
                {/* </React.Fragment>{course.instructor_name}
                    </span> */}
                {/* ) : (
                    <select
                      onChange={(e) =>
                        assignTeacher(index, JSON.parse(e.target.value))
                      }
                      className="px-3 py-2 rounded"
                    > */}
                {/* <option value="">Select a teacher</option>
                      {teachers.map((teacher) => (
                        <option
                          key={teacher.id}
                          value={JSON.stringify(teacher)}
                        >
                          {teacher.name} {course.instructor_id}
                        </option>
                      ))}
                    </select> */}
                {/* )} */}
                {/* </div> */}
                <div>{course.instructor_name}</div>
                <div>{course.totalEnrolledStudents}</div>
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
