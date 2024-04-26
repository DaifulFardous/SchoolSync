import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Router, Route, Switch from react-router-dom
import "./App.css";
import AdaptiveLearning from "./components/AdaptiveLearning/AdaptiveLearning";
import McqList from "./components/AdaptiveLearning/MCQ/McqList";
import CourseDet from "./components/Courses/Course-details";
import Courselist from "./components/Courses/Courselist";
import Dashboard from "./components/Dashboard/Dashboard";
import Forgot from "./components/ForgotPass/Forgot";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import ProfilePage from "./components/Profile/Profile";
import Edit from "./components/Profile/Details_edit";
import Sidenav from "./components/SideNav/Sidenav";
import Signup from "./components/Signup/Signup";
import Uppernav from "./components/UpperNav/Uppernav";
import Chatbot from "./components/Chatbot/Chatbot";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sidenav" element={<Sidenav />} />
        <Route path="/uppernav" element={<Uppernav />} />
        <Route path="/courses" element={<Courselist />} />
        <Route path="/courses-details" element={<CourseDet />} />
        <Route path="/adaptiveLearning" element={<AdaptiveLearning />} />
        <Route path="/mcqList" element={<McqList />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
