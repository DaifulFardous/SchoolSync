import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authContext/authContext";
import Sidenav from "../SideNav/Sidenav";
import CourseCard from "../common/CourseCard";
import Profile from "../common/Profile";
import Search from "../common/Search";
import Pagination from "../studentCourses/slices/Pagination";
import Tabs from "../studentCourses/slices/Tabs";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const { signOut } = useContext(AuthContext);
  const [tab, setTab] = useState("Ongoing Courses");
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(10);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(false);
  const token = localStorage.getItem("token");
  const [couresName, setCourseName] = useState(null);
  console.log(token);

  useEffect(() => {
    if (tab == "All Courses") fetchCourses();
    else {
      fetchEnrolledCourses();
    }
  }, [tab]);

  const fetchEnrolledCourses = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/enrolled-courses",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        console.log("Ongoing Courses:", response.data);
        const enrolledCourses = response.data.map((enrolledCourse) => ({
          ...enrolledCourse.course,
        }));
        setCourses(enrolledCourses);

        setCourseName(response.data);
        // const course = couresName.name;
        // console.log(course);
        setFlag(true);
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
  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/user/courses",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("fetched Courses:", response.data);

        setCourses(response.data);
        console.log(response.data);
        // setCourseName(courses.name);
        setFlag(false);
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
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(courses.length / coursesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen px-2">
        <div className="text-4xl font-bold my-5">Courses</div>
        <div className="flex justify-between gap-5 mb-5">
          <Search />
          <Profile />
        </div>
        <div className="bg-white p-5 rounded">
          <Tabs onClick={setTab} />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-5">
            {currentCourses.map((course, index) => (
              <CourseCard
                key={index}
                courseId={course.id}
                courseDetails={course.courseDetails}
                courseName={course.name}
                courseImage={course.image}
                courseInstructor={course.instructor_name}
                flag={flag}
              />
            ))}
          </div>
          <Pagination
            coursesPerPage={coursesPerPage}
            totalCourses={courses.length}
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
