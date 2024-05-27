import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./authContext/authContext";
import AdaptiveLearning from "./components/AdaptiveLearning/page";
import Chatbot from "./components/Chatbot/Chatbot";
import CourseDet from "./components/Courses/Course-details";
import Courselist from "./components/Courses/Courselist";
import Dashboard from "./components/Dashboard/Dashboard";
import Forgot from "./components/ForgotPass/Forgot";
import GiveMCQ from "./components/GiveMCQ/Mcq";
import LandingPage from "./components/LandingPage/LandingPage";
import AdminLogin from "./components/Login/Admin Login/AdminLogin";
import InstructorLogin from "./components/Login/Instructor Login/InstructorLogin";
import Login from "./components/Login/Login";
import Edit from "./components/Profile/Details_edit";
import ProfilePage from "./components/Profile/Profile";
import Sidenav from "./components/SideNav/Sidenav";
import AdminSignUp from "./components/Signup/Admin Signup/AdminSignUp";
import InstructorSignUp from "./components/Signup/Instructor Signup/InstructorSignUp";
import Signup from "./components/Signup/Signup";
import StudentCourseDetails from "./components/StudentCourseDetails/StudentCourseDetails";
import TeacherCourseContent from "./components/TeacherCourseContent/TeacherCourseContent";
import Uppernav from "./components/UpperNav/Uppernav";
import Course from "./components/studentCourses/Course";
function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/instructor-login" element={<InstructorLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/instructor-signup" element={<InstructorSignUp />} />
          <Route path="/admin-signup" element={<AdminSignUp />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sidenav" element={<Sidenav />} />
          <Route path="/uppernav" element={<Uppernav />} />
          <Route path="/courses" element={<Courselist />} />
          <Route path="/courses-details" element={<CourseDet />} />
          <Route path="/adaptiveLearning" element={<AdaptiveLearning />} />
          <Route path="/giveMcq" element={<GiveMCQ />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/studentCourses" element={<Course />} />
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          <Route
            path="/course-details/:courseId"
            element={<StudentCourseDetails />}
          />
          <Route
            path="/teacher-course/:courseId"
            element={<TeacherCourseContent />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
