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
    console.log({ email, password });
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-[65vw] h-screen bg-whitesmoke-200 shadow-lg justify-center items-center pb-0">
        <div>
          <img src={login} alt="" className="w-[45vw] ml-32 my-20" />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-full sm:w-[35vw] md:w-[40vw] lg:w-[35vw] xl:w-[25vw] h-screen bg-white">
        <div className="absolute sm:top-0 lg:top-[10px] right-0 w-full sm:w-[35vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] h-screen bg-white">
          <div className="text-base font-poppins flex justify-center items-center mb-4 mt-52 left-[0.5rem]">
            <div className="flex flex-col space-y-4 sm:left-0 md:left-[-0.5rem] lg:left-[-1rem] xl:left-[-1.5rem] pl-[1rem]">
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
