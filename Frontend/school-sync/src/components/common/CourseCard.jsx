import { default as React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import fac from "../../../assets/images/fac1.png";
import axios from "axios";
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
  const [stakeholder, setStakeholder] = useState(null);
  const [endpoint, setEndpoint] = useState("");
  // useEffect(()=>{
  //   const fetchCourseDetails = async()=>{

  //   }
  // })

  // const handleEnroll = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://127.0.0.1:8000/api/enroll/course/${courseId}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (response.status == 200) {
  //       console.log("Successfully Enrolled");
  //     }
  //   } catch (error) {
  //     console.log("Failed to fetch courses", error);
  //     if (error.response && error.response.status === 401) {
  //       setError("Unauthorized. Please log in again.");
  //       signOut();
  //     } else {
  //       setError("An error occurred. Please try again.");
  //     }
  //   }
  // };

  useEffect(() => {
    const initializeProfile = async () => {
      const ability = await checkAbility();
      setStakeholder(ability);
      let endpoint = "";
      if (ability == "user") {
        endpoint = `course-details/${courseId}`;
      } else if (ability == "instructor") {
        endpoint = `/teacher-course/${courseId}`;
      } else {
        endpoint = `instructor/course-details/${courseId}`;
      }
      setEndpoint(endpoint);
    };
    initializeProfile();
  }, [courseId]);

  const checkAbility = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/ability",
        {
          token: token,
        }
      );

      const ability = response.data.abilities;
      console.log(ability);
      return ability;
    } catch (error) {
      console.log("Failed to check ability", error);
      return "";
    }
  };

  return (
    <div className="h-[300px] max-w-[350px] rounded-xl bg-white relative flex flex-col gap-5 shadow-xl">
      <img src={courseImage} alt="ICT" className="h-[150px]" />
      <div className="text-2xl font-bold px-5"> {courseName}</div>
      <img
        src=""
        alt=""
        className="absolute top-[110px] right-10 rounded-full h-[65px] w-[65px]"
      />
      {/* {flag ? ( */}
      <Link to={endpoint} className="mx-auto">
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
