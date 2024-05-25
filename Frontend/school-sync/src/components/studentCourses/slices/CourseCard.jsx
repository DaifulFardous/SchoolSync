import React from "react";
import { Link } from "react-router-dom";
import ICT from "../../../assets/images/ICT.png";
import fac from "../../../assets/images/fac1.png";

const CourseCard = ({
  courseId,
  courseName,
  courseDetails,
  courseInstructor,
}) => {
  return (
    <div className="h-[300px] max-w-[350px] rounded-xl bg-white relative flex flex-col gap-5 shadow-xl">
      <img src={ICT} alt="ICT" className="h-[150px]" />
      <div className="text-2xl font-bold px-5"> {courseName}</div>
      <img
        src={fac}
        alt=""
        className="absolute top-[110px] right-10 rounded-full h-[65px] w-[65px]"
      />
      <Link to={`/course-details/${courseId}`}>
        <button className="border py-2 mx-auto rounded-lg border-black hover:bg-gray-100 w-[80%] font-bold">
          Course Details
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
