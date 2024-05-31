import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Profile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");

  const [stakeholder, setStakeholder] = useState(null);

  useEffect(() => {
    const initializeProfile = async () => {
      const ability = await checkAbility();
      setStakeholder(ability);
      await fetchUserDetails(ability);
    };
    initializeProfile();
  }, []);

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

  const fetchUserDetails = async (prop) => {
    let endpoint = "";
    if (prop == "user") {
      endpoint = "http://127.0.0.1:8000/api/user/details";
    } else if (prop == "admin") {
      endpoint = "http://127.0.0.1:8000/api/admin/details";
    } else {
      endpoint = "http://127.0.0.1:8000/api/instructor/details";
    }

    try {
      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("Fethced User Data:", response.data);
        setUserData(response.data);
        // console.log(userData.data.image);
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

  if (!userData || !userData.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5 items-center">
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
