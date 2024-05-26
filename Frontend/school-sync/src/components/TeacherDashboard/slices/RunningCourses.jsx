import React from "react";
import { Link } from "react-router-dom";
import dummy from "../../../data/Course"; //delete this
import CourseCard from "../../common/CourseCard";

const RunningCourses = () => {
  // pull the courses from database
  return (
    <div className="border-0 bg-white rounded-md p-5 flex flex-col gap-5 max-h-[450px] overflow-y-auto">
      <div className="flex justify-between">
      <h3 className="text-xl font-bold">Running Courses</h3>
      <Link
        to={"/courseList"}
        className="border-t py-2 bg-[#7b5fdf] text-white font-semibold text-center w-fit px-5 rounded"
      >
        See All
      </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {dummy.slice(0, 4).map((course) => (
          <CourseCard
            key={course.id}
            courseId={course.id}
            courseName={course.courseName}
            courseDetails={course.courseDetails}
            courseInstructor={course.teacher.teacherName}
          />
        ))}
      </div>
    </div>
  );
};

export default RunningCourses;
