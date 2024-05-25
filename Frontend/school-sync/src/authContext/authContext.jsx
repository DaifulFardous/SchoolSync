import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const signUp = async (stakeholderType, formData) => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });

    let endpoint = "";
    switch (stakeholderType) {
      case "student":
        endpoint = "http://127.0.0.1:8000/api/registration";
        break;
      case "instructor":
        endpoint = "http://127.0.0.1:8000/api/instructor/registration";
        break;
      case "admin":
        endpoint = "http://127.0.0.1:8000/api/admin/registration";
        break;
      default:
        setError("Invalid stakeholder type.");
        return;
    }

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);
      const { name, email, password, address, contact, image } = formData;

      setUser({ name, email, password, address, contact, image, token });
      setError(null);
      navigate("/");
    } catch (error) {
      setError("Error signing up. Please try again.");
      console.error("Error signing up:", error);
    }
  };

  const signIn = async (stakeholderType, formData) => {
    // const data = new FormData();
    // Object.keys(formData).forEach((key) => {
    //   if (formData[key]) {
    //     data.append(key, formData[key]);
    //   }
    // });

    // let endpoint = "";
    // switch (stakeholderType) {
    //   case "student":
    //     endpoint = "http://127.0.0.1:8000/api/login";
    //     break;
    //   case "instructor":
    //     endpoint = "http://127.0.0.1:8000/api/instructor/login";
    //     break;
    //   case "admin":
    //     console.log("admin");
    //     endpoint = "http://127.0.0.1:8000/api/admin/login";

    //     break;
    //   default:
    //     setError("Invalid stakeholder type.");
    //     return;
    // }

    // try {
    //   const response = await axios.post(endpoint, data, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   const { token } = response.data;
    //   setToken(token);
    //   localStorage.setItem("token", token);
    const { email } = formData;
    setUser({ email });
    setError(null);
    navigate("/home");
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
