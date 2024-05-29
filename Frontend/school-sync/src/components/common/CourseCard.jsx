import axios from "axios";
import { default as React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import fac from "../../assets/images/fac1.png";
import { AuthContext } from "../../authContext/authContext";

const CourseCard = ({
  courseId,
  courseName,
  courseDetails,
  courseInstructor,
  courseImage,
  flag,
}) => {
  const token = localStorage.getItem("token");
  const { signOut } = useContext(AuthContext);
  const [error, setError] = useState("");


  const handleEnroll = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/enroll/course/${courseId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 200) {
        console.log("Successfully Enrolled");
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

  return (
    <div className="h-[300px] max-w-[350px] rounded-xl bg-white relative flex flex-col gap-5 shadow-xl">
      <img src={courseImage} alt="ICT" className="h-[150px]" />
      <div className="text-2xl font-bold px-5"> {courseName}</div>
      <img
        src={fac}
        alt=""
        className="absolute top-[110px] right-10 rounded-full h-[65px] w-[65px]"
      />
      {/* {flag ? ( */}
      <Link to={`/course-details/${courseId}`} className="mx-auto">
        <button className="border py-2 text-nowrap  rounded-lg border-black hover:bg-gray-100 px-10 font-bold">
          Course Details
        </button>
      </Link>
      {/* ) : ( */}
      {/* <button
          onClick={handleEnroll}
          className="border py-2 text-nowrap  rounded-lg border-black hover:bg-gray-100 px-10 font-bold"
        >
          Enroll
        </button> */}
      {/* )} */}
    </div>
  );
};

export default CourseCard;
