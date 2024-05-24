import React, { useEffect, useState } from "react";
import Sidenav from "../SideNav/Sidenav";
import Profile from "../common/Profile";
import Search from "../common/Search";
import CourseCard from "./slices/CourseCard";
import dummyData from "../../data/Course";
import Tabs from "./slices/Tabs";
import Pagination from "./slices/Pagination";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [tab, setTab] = useState("All courses");
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(10);

  useEffect(() => {
    // using dummy courses
    setCourses(dummyData);
  }, [tab]);

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
        <div className="text-4xl font-bold mb-5">Courses</div>
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
                courseName={course.courseName}
                courseInstructor={course.teacher}
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
