import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  PiBookFill,
  PiChalkboardTeacherFill,
  PiStudentFill,
  PiUserFill,
} from "react-icons/pi";
import Sidenav from "../SideNav/Sidenav";
import Profile from "../common/Profile";
import Search from "../common/Search";
import Card from "./slices/Card";
import Modal from "./slices/Modal";

const data = {
  students: ["Student 1", "Student 2", "Student 3"],
  teachers: ["Teacher 1", "Teacher 2"],
  admins: ["Admin 1", "Admin 2", "Admin 3"],
  courses: ["Course 1", "Course 2", "Course 3", "Course 4"],
};

const AdminDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalAdmins, setTotalAdmins] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchTotalStudents();
    fetchTotalTeachers();
    fetchTotalAdmins();
    fetchTotalCourses();
  }, []);

  const fetchTotalStudents = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/total/users",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setTotalStudents(response.data.length);
      }
    } catch (error) {
      console.error("Error fetching total students:", error);
    }
  };

  const fetchTotalTeachers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/total/instructors",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setTotalTeachers(response.data.length);
      }
    } catch (error) {
      console.error("Error fetching total teachers:", error);
    }
  };

  const fetchTotalAdmins = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/total/admins",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setTotalAdmins(response.data.length);
      }
    } catch (error) {
      console.error("Error fetching total admins:", error);
    }
  };

  const fetchTotalCourses = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/total/courses",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setTotalCourses(response.data.length);
      }
    } catch (error) {
      console.error("Error fetching total courses:", error);
    }
  };

  const handleCardClick = (type) => {
    setModalData(data[type]);
    setModalOpen(true);
  };

  const cardData = [
    {
      icon: <PiStudentFill size={48} />,
      count: totalStudents,
      label: "Total Students",
      type: "students",
    },
    {
      icon: <PiChalkboardTeacherFill size={48} />,
      count: totalTeachers,
      label: "Total Teachers",
      type: "teachers",
    },
    {
      icon: <PiUserFill size={48} />,
      count: totalAdmins,
      label: "Total Admins",
      type: "admins",
    },
    {
      icon: <PiBookFill size={48} />,
      count: totalCourses,
      label: "Total Courses",
      type: "courses",
    },
  ];

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
