import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/log.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = () => {
    //console.log({ email, password });
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="w-[60vw] h-full bg-whitesmoke-200 shadow-lg flex items-center justify-center">
        <div>
          <img src={login} alt="" className="w-[40vw] mx-auto" />
        </div>
      </div>

      <div className="w-[40vw] h-full bg-white">
        <div className="w-[30vw] h-full bg-white mx-auto">
          <div className="text-base font-poppins flex justify-center items-center mb-4 mt-52">
            <div className="flex flex-col space-y-4 pl-[1rem]">
              <div className="flex sm:flex-col md:flex-col lg:flex-col xl:flex-col items-start">
                <label htmlFor="input1" className="text-gray-800 pb-1 text-sm">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-none outline-none rounded-md p-2 mb-2 bg-whitesmoke-200 w-full sm:w-[429.1px] h-[30px] pt-3"
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
                  className="border-none outline-none rounded-md p-2 mb-2 bg-whitesmoke-200 w-full sm:w-[429.1px] h-[30px] pt-3"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <div className="flex items-center pt-2">
                <input
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  type="checkbox"
                  value=""
                  id="exampleCheck3"
                  defaultChecked
                />
                <label
                  className="inline-block pl-[0.15rem] font-poppins"
                  htmlFor="exampleCheck3"
                >
                  Remember me
                </label>
                <div className="items-end">
                  <Link to="/Forgot">
                    <a
                      href="#"
                      className="ml-auto text-mini-1 [text-decoration:underline] text-midnightblue pl-40"
                    >
                      Forgot password?
                    </a>
                  </Link>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  className="mt-4 sm:mt-0 w-full sm:w-[445px] h-11 bg-blue-500 text-white text-center inline-block font-semibold cursor-pointer rounded-[8.08px] shadow-2xl"
                  onClick={handleApi}
                >
                  Login now
                </button>
              </div>
              <div className="mt-4 sm:mt-0 w-full sm:w-[432px] h-[21px] text-mini-1 text-silver relative left-1">
                <div className="absolute top-[11.1px] left-[-4px] box-border w-[200px] h-px border-t-[1px] border-solid border-silver" />
                <div className="absolute top-[11.1px] left-[244.4px] box-border w-[195px] h-px border-t-[1px] border-solid border-silver" />
                <div className="absolute top-[0px] left-[210px]">OR</div>
              </div>

              <div>
                <Link to="/signup">
                  <button
                    type="button"
                    className="mt-4 sm:mt-0 w-full sm:w-[445px] h-11 bg-white text-midnightblue border-midnightblue box-border border-[1px] border-solid text-center inline-block font-semibold cursor-pointer rounded-[8.08px]"
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