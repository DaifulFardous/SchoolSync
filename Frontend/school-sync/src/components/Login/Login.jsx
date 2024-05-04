import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/log.png";
import logo from "../../assets/images/Group.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigateTo("/");
    }
  }, [navigateTo]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    axios
      .post("http://127.0.0.1:8000/api/login", {
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
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
  <div className="w-full md:w-[60vw] h-full bg-whitesmoke-200 shadow-lg flex items-center justify-center md:block hidden">
    <div className="md:w-[40vw] mx-auto">
      <img src={login} alt="" className="w-full md:w-[40vw] mx-auto" />
    </div>
  </div>
  <div className="w-full md:w-[40vw] h-full bg-white flex flex-col justify-center items-center">
    <div className="p-3 pb-4 pt-14 flex">
      <img src={logo} className="w-[6vw] md:w-[6vw]" alt="" />
      <span className="text-red no-underline text-[1.5rem] font-bold">
        S<span className="text-[#263238]">chool <br />Sync</span>
      </span>
    </div>
    <div className="w-full md:w-[30vw] h-full bg-white mx-auto">
      <div className="text-base font-poppins flex justify-center items-center mb-4 mt-4">
        <div className="flex flex-col space-y-4 pl-[1rem]">
          <div className="flex flex-col items-start">
            <label htmlFor="input1" className="text-gray-800 pb-1 text-sm">
              Email ID
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-none outline-none rounded-md p-2 mb-2 bg-whitesmoke-200 w-full sm:w-full md:w-[429.1px] h-[30px] pt-3"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="input2" className="text-gray-800 pb-1 text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-none outline-none rounded-md p-2 mb-2 bg-whitesmoke-200 w-full sm:w-full md:w-[429.1px] h-[30px] pt-3"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="remember-me flex items-center justify-between sm:flex-row md:flex-row">
  <div className="flex items-center">
    <input
      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      type="checkbox"
      value=""
      id="exampleCheck3"
      defaultChecked
    />
    <label
      className="inline-block pl-[0.15rem] sm: pl-0 font-poppins text-xs"
      htmlFor="exampleCheck3"
    >
      Remember me
    </label>
  </div>
  <div className="forgot-password ml-2 sm:pl-6">
    <Link to="/Forgot">
      <span className="text-xs [text-decoration:underline] text-midnightblue">
        Forgot Password?
      </span>
    </Link>
  </div>
</div>
          <div className="pt-8">
            <button
              type="button"
              className="mt-4 sm:mt-0 w-full sm:w-full md:w-[445px] h-11 bg-blue-500 text-white text-center inline-block font-semibold cursor-pointer rounded-[8.08px] shadow-2xl"
              onClick={handleApi}
            >
              Login now
            </button>
          </div>
          <div className="divider flex items-center justify-center mt-4 sm:mt-0 w-full sm:w-full md:w-[432px] h-[21px] text-mini-1 text-silver relative left-1 md:block hidden">
            <div className="divider-line absolute top-[11.1px] left-[-4px] box-border w-[200px] h-px border-t-[1px] border-solid border-silver" />
            <div className="divider-line absolute top-[11.1px] left-[244.4px] box-border w-[195px] h-px border-t-[1px] border-solid border-silver" />
            <div className="divider-text absolute top-[0px] left-[210px]">
              OR
            </div>
          </div>
          <div>
            <Link to="/signup">
              <button
                type="button"
                className="mt-4 sm:mt-0 w-full sm:w-full md:w-[445px] h-11 bg-white text-midnightblue border-midnightblue box-border border-[1px] border-solid text-center inline-block font-semibold cursor-pointer rounded-[8.08px]"
              >
                Signup now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;