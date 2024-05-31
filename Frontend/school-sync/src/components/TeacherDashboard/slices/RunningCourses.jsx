import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../common/CourseCard";

const RunningCourses = () => {
  // pull the courses from database
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      getCoursesByInstructorName();
    }
  }, [userData]);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/instructor/details",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Fethced User Data:", response.data);
        setUserData(response.data);
        console.log(userData.data.name);
      }
    } catch (error) {
      console.error("Error creating course:", error);

      if (error.response && error.response.status === 401) {
        console.log("error");
      } else {
        console.log("An error occurred. Please try again.");
      }
    }
  };

  const getCoursesByInstructorName = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/courses/instructor",
        {
          instructor_name: `${userData.data.name}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        console.log("Fetched Courses for Instructor:", response.data);

        setCourses(response.data);
        console.log(courses[0].id);
      }
    } catch (error) {
      console.error("Error getting course:", error);

      if (error.response && error.response.status === 401) {
        console.log("error");
      } else {
        console.log("An error occurred. Please try again.");
      }
    }
  };

  if (!userData || !courses.length) return <div>Loading...</div>;
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
        {courses.map((course, index = 0) => (
          <CourseCard
            key={index}
            courseId={course.id}
            courseName={course.name}
            courseImage={course.image}
            courseDetails={course.short_description}
            courseInstructor={course.instructor_name}
          />
        ))}
      </div>
    </div>
  );
};

export default RunningCourses;
