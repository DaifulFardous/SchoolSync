import axios from "axios";
import { useEffect, useState } from "react";
import Sidenav from "../SideNav/Sidenav";
import Header from "../common/Header";
import Assignments from "./slices/Assignments";
import Completion from "./slices/Completion";

function Dashboard() {
  const token = localStorage.getItem("token");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [completions, setCompletions] = useState([]);

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchContentsOfCourse = async (courseId) => {
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

      if (response.status == 200) {
        console.log("Fetched Contents of Course:", response.data);
        return response.data;
      }
    } catch (error) {
      console.log("Error fetchihng Contents of Course", error);
      return [];
    }
  };

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

      if (response.status === 200) {
        console.log("Fetched Enrolled Courses:", response.data);
        setEnrolledCourses(response.data);

        const completionsData = await Promise.all(
          response.data.map(async (course) => {
            const contents = await fetchContentsOfCourse(course.course_id);
            // console.log(contents.length);
            return {
              subject: course.course.name,
              chapter: 1, // Placeholder, adjust as necessary
              progress: Math.floor(Math.random() * 100), // Placeholder, replace with actual progress data
              contentsLength: contents.length,
            };
          })
        );

        setCompletions(completionsData);
        console.log(completions);
      }
    } catch (error) {
      console.log("Error fetching enrolled courses", error);
    }
  };
  const AssignmentsData = [
    {
      subject: "Organic chemistry",
      chapter: 1,
      page: 14,
      deadline: "10:00 AM",
      status: "Pending",
    },
    {
      subject: "State of matter",
      chapter: 2,
      page: 19,
      deadline: "11:00 AM",
      status: "Completed",
    },
  ];

  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <Header pageName={"Dashboard"} />
        <div className="flex flex-col gap-10">
          <Completion completions={completions} />
          <Assignments assignments={AssignmentsData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
