import React, { useState } from "react";
import Sidenav from "../SideNav/Sidenav";
import CouresesHeader from "./Slices/CoursesHeader";
import Modal from "./Slices/Modal";

const Courselist = () => {
  const [modal, setModal] = useState(false);
  const [courses, setCourses] = useState([]);

  const closeModal = () => {
    setModal(false);
  };

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  return (
    <div className="flex">
      <Sidenav />
      <div className="bg-[#E5EAEA] flex-1 p-5 flex flex-col items-center">
        <CouresesHeader />
        <div className="w-full mb-5">
          <button
            className="bg-rose-600 px-5 py-2 rounded text-lg"
            onClick={() => setModal(true)}
          >
            Create course
          </button>
        </div>
        {modal && <Modal closeModal={closeModal} addCourse={addCourse} />}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-5 rounded shadow">
              <h3 className="text-xl font-bold mb-2">{course.name}</h3>
              <p>{course.description}</p>
              <button onClick={()=>
                {
                  // show a teacher list
                }
              }
              className="px-5 py-3 bg-red-500 rounded my-2"
              >Assign teacher</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courselist;
