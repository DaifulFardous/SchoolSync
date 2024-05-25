import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Profile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userData, setUserData] = useState("");
  const token = localStorage.getItem("token");

  //   useEffect( async ()  =>{
  //     try {
  //       const response = await axios.post(
  //         "http://127.0.0.1:8000/api/user/details",
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });

  //   })
  // }
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/user/details",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Fethced Students:", response.data);
        setUserData(response.data);
        console.log(userData.data.image);
      }
    } catch (error) {
      console.error("Error creating course:", error);

      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        signOut();
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="sm:flex hidden gap-5 items-center">
      <div className="flex items-center gap-5">
        <img
          src={userData.data.image}
          alt="Profile"
          className="rounded-full h-16 w-16"
        />
        <div>
          <div className="font-bold">{userData.data.name}</div>
          <div className="text-sm text-gray-500">{userData.data.email}</div>
        </div>
      </div>
      <div className="expanded">
        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          className="bg-transparent text-xl text-black"
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Profile;
