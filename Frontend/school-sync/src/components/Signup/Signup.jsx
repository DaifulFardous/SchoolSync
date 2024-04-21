import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../../assets/images/signup.png";
import logo from "../../assets/images/Group.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTo = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigateTo("/");
    }
  }, [navigateTo]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleApi = () => {
    if (password === confirmPassword) {
      axios
        .post("http://127.0.0.1:8000/api/registration", {
          name: name,
          email: email,
          password: password,
        })
        .then((result) => {
          if (result.data.token) {
            const token = result.data.token;
            localStorage.setItem("token", token);
            navigateTo("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Please Rewrite the Password");
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="absolute top-0 left-0 bg-white-200 w-full md:w-1/2 h-screen shadow-lg">
        <div className="flex justify-center items-center h-24 pt-16">
          <img src={logo} className="w-[6vw]" alt="" />
          <span className="text-red no-underline text-[1.5rem] font-bold">
            S<span className="text-[#263238]">chool <br />Sync</span>
          </span>
        </div>
        <div className="md:fixed md:top-56 md:left-20">
          <div className="font-sans">
            <div className="flex flex-wrap mb-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="md:mr-20 border-none outline-none bg-whitesmoke-200 w-80 px-2 py-2 rounded-lg"
                value={name}
                onChange={handleName}
              />
            </div>
            <div className="flex flex-wrap mb-4 mt-12">
              <input
                type="email"
                placeholder="Enter your email"
                className="md:mr-20 border-none outline-none bg-whitesmoke-200 w-80 px-2 py-2 rounded-lg"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="flex flex-wrap mt-12">
              <input
                type="password"
                placeholder="Enter your password"
                className="md:mr-20 border-none outline-none bg-whitesmoke-200 w-80 px-2 py-2 rounded-lg"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="flex flex-wrap mt-12">
              <input
                type="password"
                placeholder="Enter your password again"
                className="md:mr-20 border-none outline-none bg-whitesmoke-200 w-80 px-2 py-2 rounded-lg"
                value={confirmPassword}
                onChange={handleConfirmPassword}
              />
            </div>
            <div className=" mt-12">
              <input
                type="button"
                value="Sign Up"
                className="absolute top-[360px] left-[253px] font-semibold text-white text-center inline-block w-[158px] h-11 bg-blue-500 cursor-pointer rounded-[8.08px] shadow-2xl mt-8"
                onClick={handleApi}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bg-whitesmoke-200 w-full md:w-1/2 h-screen">
        <div>
          <img src={signup} alt="" className="w-[40vw] ml-20 my-36" />
        </div>
      </div>
    </div>
  );
};

export default Signup;