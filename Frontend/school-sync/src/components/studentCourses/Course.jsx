import React, { useEffect, useState } from "react";
import Sidenav from "../SideNav/Sidenav";
import Profile from "../common/Profile";
import Search from "../common/Search";
import CourseCard from "./slices/CourseCard";
import dummyData from "../../data/Course";
import Tabs from "./slices/Tabs";
const Course = () => {
  const [courses, setCourses] = useState([]);
  const [tab, setTab] = useState('All courses');
  //fetch the course data from database which will have teacher info including image of the teacher and course
  useEffect(() => {
    // using dummy courses
    setCourses(dummyData);
  }, [tab]);
  return (
    <div className="flex">
      <Sidenav />
      <div className="bg-[#E5EAEA] flex-1 p-10 flex flex-col gap-5">
        <div className="text-4xl font-bold">Courses</div>
        <div className="flex justify-between gap-5">
          <Search />
          <Profile />
        </div>
        <div className="bg-white p-5 rounded">
          <Tabs onClick={setTab}/>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-5">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                courseDetails={course.courseDetails}
                courseName={course.courseName}
                courseInstructor={course.teacher}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
