import axios from "axios";
import { useState } from "react";
import signup from "../../assets/images/signup.png";

// const InputField = ({ type, placeholder, className }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       className={`rounded-[8.08px] bg-whitesmoke-200 w-full md:w-[270px] h-[36px] px-2 py-1 text-eeeee ${className}`}
//     />
//   );
// };

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    //console.log({ name, email });
    if (password == confirmPassword) {
      axios
        .post("http://127.0.0.1:8000/api/registration", {
          name: name,
          email: email,
          password: password,
        })
        .then((result) => {
          console.log(result.data.message);
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
        <div className="md:fixed md:top-56 md:left-20">
          <div className="font-sans">
            <div className="flex flex-wrap mb-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="md:mr-20 border-none outline-none"
                value={name}
                onChange={handleName}
              />
              {/* <InputField
                type="text"
                placeholder="Enter your last name"
                className="border-none outline-none"
              /> */}
            </div>

            <div className="flex flex-wrap mb-4 mt-12">
              <input
                type="email"
                placeholder="Enter your email"
                className="md:mr-20 border-none outline-none"
                value={email}
                onChange={handleEmail}
              />
              {/* <InputField
                type="text"
                placeholder="xxxxxxxxxx"
                className="border-none outline-none"
              /> */}
            </div>

            <div className="flex flex-wrap mt-12">
              <input
                type="password"
                placeholder="Enter your password"
                className="md:mr-20 border-none outline-none"
                value={password}
                onChange={handlePassword}
              />
              {/* <InputField
                type="text"
                placeholder="Enter your student ID"
                className="border-none outline-none"
              /> */}
            </div>
            <div className="flex flex-wrap mt-12">
              <input
                type="password"
                placeholder="Enter your password again"
                className="md:mr-20 border-none outline-none"
                value={confirmPassword}
                onChange={handleConfirmPassword}
              />
            </div>
            <div>
              <input
                type="button"
                value="Sign Up"
                className="absolute top-[360px] left-[253px] font-semibold text-white text-center inline-block w-[158px] h-11 bg-blue-500 cursor-pointer rounded-[8.08px] shadow-2xl"
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
