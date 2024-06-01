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
  const [contents, setContents] = useState([]);

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

      if (response.status === 200) {
        console.log(`Fetched Contents of Course ${courseId}:`, response.data);
        return response.data;
      }
    } catch (error) {
      console.log(`Error fetching contents of course ${courseId}`, error);
      return [];
    }
  };

  const fetchAttemptedMCQs = async (courseId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/marks/course/${courseId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(
          `Fetched MCQ attempts for Course ${courseId}:`,
          response.data
        );
        return response.data;
      }
    } catch (error) {
      console.log(`Error fetching MCQ attempts for course ${courseId}`, error);
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

        const allContents = [];
        const completionsData = await Promise.all(
          response.data.map(async (course) => {
            const courseContents = await fetchContentsOfCourse(
              course.course_id
            );
            const attempts = await fetchAttemptedMCQs(course.course_id);

            // Ensure that contents and attempts are fetched and have valid lengths
            const contentsLength = courseContents.length || 1; // Avoid division by zero
            const attemptsLength = attempts.length || 0;

            console.log(
              `Course ${course.course_id} - Contents Length: ${contentsLength}, Attempts Length: ${attemptsLength}`
            );

            allContents.push(...attempts); // Add attempts to allContents

            return {
              subject: course.course.name,
              chapter: 1, // Placeholder, adjust as necessary
              progress: (attemptsLength / contentsLength) * 100,
            };
          })
        );

        setCompletions(completionsData);
        setContents(allContents); // Set contents to allContents which includes attempted MCQs
        console.log("Completions:", completionsData);
        console.log("All Contents:", allContents);
      }
    } catch (error) {
      console.log("Error fetching enrolled courses", error);
    }
  };

  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <Header pageName={"Dashboard"} />
        <div className="flex flex-col gap-10">
          <Completion completions={completions} />
          <Assignments assignments={contents} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
