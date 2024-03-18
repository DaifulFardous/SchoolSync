
import { BrowserRouter , Route, Routes } from 'react-router-dom'; // Import Router, Route, Switch from react-router-dom
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import Forgot from './components/ForgotPass/Forgot';
import ProfilePage from './components/Profile/Profile';
import Sidenav from './components/SideNav/Sidenav';
import Uppernav from './components/UpperNav/Uppernav';
import Courselist from './components/Courses/Courselist';
import CourseDet from './components/Courses/Course-details';
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
     </Routes>
     
     
     
     
     
     </BrowserRouter>
  );
}

export default App;
