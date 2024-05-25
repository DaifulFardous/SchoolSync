import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/log.png";
import { AuthContext } from "../../authContext/authContext";
import Logo from "../common/Logo";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, error, setError } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUpNow = () => {
    navigate("/signup");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending login data: ", formData);

    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((result) => {
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          signIn("student", formData);
          navigate("/home");
        } else {
          console.error("Login failed: No token received");
          setError("Wrong Password or Email");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setFormData({
      email: "",
      password: "",
    });
  };

  const inputFields = [
    { name: "email", placeholder: "Email", type: "email" },
    { name: "password", placeholder: "Password", type: "password" },
  ];

  return (
    <div className="h-screen flex">
      <div className="bg-[#F4F4F4] w-[60%] h-full md:flex items-center justify-center hidden">
        <img src={loginImage} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center h-full gap-5 p-5 rounded-md md:w-[40%] w-full shadow-2xl relative">
        <Logo />
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:w-[70%] w-[90%]"
        >
          {inputFields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              required
              onChange={handleChange}
              className="py-3 px-5 rounded-sm w-full bg-[#EEEEEE] placeholder-gray-500 focus:outline-none"
            />
          ))}

          <div className="flex justify-end items-center">
            <a href="/forgot-password" className="text-blue-500">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="py-3 px-5 shadow-2xl rounded-sm bg-[#3DA8E4] hover:bg-[#56b7f0] text-white hover:text-black"
          >
            Login Now
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}

        <div className=" md:w-[70%] w-[90%] flex gap-2 items-center">
          <div className="flex-1 h-[1px] bg-gray-400"></div>
          <div>OR</div>
          <div className="flex-1 h-[1px] bg-gray-400"></div>
        </div>

        <button
          type="submit"
          className="md:w-[70%] 
          w-[90%] 
          py-3 px-5 
          shadow-2xl 
          rounded-md 
          bg-transparent hover:bg-[#56b7f0]
          border border-black 
           text-black hover:text-white"
          onClick={handleSignUpNow}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default Login;
