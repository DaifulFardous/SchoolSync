import { useContext, useState } from "react";
import signup from "../../assets/images/signup.png";
import { AuthContext } from "../../authContext/authContext";
import Logo from "../common/Logo";
const SignUp = () => {
  const { signUp, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    address: "",
    contact: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data: ", formData);
    signUp("student", formData);

    // if (formData.password != formData.confirm_password) {
    //   console.log("passwords dont match");
    //   return;
    // }

    // const data = new FormData();
    // data.append("name", formData.name);
    // data.append("email", formData.email);
    // data.append("password", formData.password);
    // data.append("address", formData.address);
    // data.append("contact", formData.contact);
    // if (formData.image) {
    //   data.append("image", formData.image);
    // }

    // try {
    //   const result = await axios.post(
    //     "http://127.0.0.1:8000/api/registration",
    //     data,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log(result.data.message);
    // } catch (error) {
    //   console.error(error);
    // }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      address: "",
      contact: "",
      image: null,
    });
  };

  const inputFields = [
    { name: "name", placeholder: "Name", type: "text" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "password", placeholder: "Password", type: "password" },
    {
      name: "confirm_password",
      placeholder: "Confirm Password",
      type: "password",
    },
    { name: "address", placeholder: "Address", type: "text" },
    { name: "contact", placeholder: "Contact", type: "text" },
    { name: "image", type: "file" },
  ];

  return (
    <div className="h-screen flex">
      <div className="flex flex-col items-center justify-center h-full gap-5 p-5 rounded-md md:w-[50%] shadow-2xl relative">
        <Logo />
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 grid-cols-1 gap-5"
        >
          {inputFields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field?.placeholder}
              value={field.name !== "image" ? formData[field.name] : null}
              required
              onChange={handleChange}
              className="border-0 border-black py-3 px-5 rounded-sm md:w-[300px] lg:w-[400px] bg-[#EEEEEE] placeholder-gray-500 focus:outline-none"
            />
          ))}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="border w-min text-nowrap py-2 px-8 shadow-2xl rounded-md bg-[#3DA8E4] hover:bg-[#56b7f0] text-white text-xl hover:text-black"
            >
              Sign Up
            </button>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="bg-[#F4F4F4] w-[50%] h-full md:flex items-center justify-center hidden">
        <img src={signup} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
