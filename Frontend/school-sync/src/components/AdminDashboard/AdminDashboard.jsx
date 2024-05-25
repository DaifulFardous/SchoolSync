import React, { useState } from "react";
import Search from "../common/Search";
import Profile from "../common/Profile";
import Sidenav from "../SideNav/Sidenav";
import Card from "./slices/Card";
import {
  PiStudentFill,
  PiChalkboardTeacherFill,
  PiUserFill,
  PiBookFill,
} from "react-icons/pi";
import Modal from "./slices/Modal";

const cardData = [
  {
    icon: <PiStudentFill size={48} />,
    count: 19,
    label: "Total Students",
    type: "students",
  },
  {
    icon: <PiChalkboardTeacherFill size={48} />,
    count: 10,
    label: "Total Teachers",
    type: "teachers",
  },
  {
    icon: <PiUserFill size={48} />,
    count: 5,
    label: "Total Admins",
    type: "admins",
  },
  {
    icon: <PiBookFill size={48} />,
    count: 8,
    label: "Total Courses",
    type: "courses",
  },
];

const data = {
  students: ["Student 1", "Student 2", "Student 3"],
  teachers: ["Teacher 1", "Teacher 2"],
  admins: ["Admin 1", "Admin 2", "Admin 3"],
  courses: ["Course 1", "Course 2", "Course 3", "Course 4"],
};

const AdminDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleCardClick = (type) => {
    setModalData(data[type]);
    setModalOpen(true);
  };

  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <h1 className="text-4xl font-bold my-5">Admin Dashboard</h1>
        <div className="flex justify-between gap-5 mb-5">
          <Search />
          <Profile />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center xl:mr-64">
          {cardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              count={card.count}
              label={card.label}
              onClick={() => handleCardClick(card.type)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal data={modalData} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default AdminDashboard;
