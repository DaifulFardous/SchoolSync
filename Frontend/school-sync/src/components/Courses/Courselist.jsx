import Sidenav from './../SideNav/Sidenav';
import Uppernav from './../Courses/Uppernav';
import Footer from '../LandingPage/Footer/Footer';
import Math from "../../assets/images/Math.png";
import Chemistry from "../../assets/images/chem.png";
import Physics from "../../assets/images/phy.png";
import ICT from "../../assets/images/ICT.png";
import English from "../../assets/images/Eng.png";
import ss from "../../assets/images/ss.png";
import fac1 from "../../assets/images/fac1.png";
import fac2 from "../../assets/images/fac2.png";
import fac3 from "../../assets/images/fac3.png";
import fac4 from "../../assets/images/fac4.png";
import fac5 from "../../assets/images/fac5.png";
import fac6 from "../../assets/images/fac6.png";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const imageUrls = [Math, Chemistry, Physics, ICT, English, ss];
const circularImageUrls = [fac1, fac2, fac3, fac4, fac5, fac6];

const CourseCard = ({ imageUrl, circularImageUrl, title }) => (
  <motion.div
    key={title}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="w-80 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300"
  >
    <div className="h-36 bg-gray-300 relative rounded-bl-30p rounded-br-30p">
      <img
        src={imageUrl}
        alt="Card Image"
        className="h-full w-full object-cover rounded-t-lg rounded-bl-lg rounded-br-lg"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16 ml-28">
        <img
          src={circularImageUrl}
          alt="Circular Image"
          className="rounded-full w-13 h-13"
        />
      </div>
    </div>
    <div className="p-3">
      <h2 className="text-xl font-bold mb-2 top-4 no-underline">{title}</h2>
    </div>
  </motion.div>
);

function Courselist() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % imageUrls.length);
  };

  return (
    <div className='bg-opacity-100 bg-gray-200 h-screen'>
      <div className='flex'>
        <div className='flex h-screen'>
          <Sidenav />
        </div>
        <div className='flex flex-col w-full pr-2'>
          <div className='p-6'>
            <Uppernav />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white h-40vh w-50vw rounded-xl ml-6 mt-[-4] pb-10"
          >
            <div className='flex space-x-96 mt-6'>
              <div className='flex space-x-36 pl-8'>
                <span className='font-semibold text-xl'>My Courses</span>
              </div>
            </div>
            <div className="flex justify-center mt-10 relative">
              <RiArrowLeftDoubleFill
                className="absolute left-0 pt-16 text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={handlePrevious}
                size={50}
              />
              <div className="flex space-x-12">
                <Link to="/courses-details" className=' no-underline'>
                  <CourseCard
                    imageUrl={imageUrls[currentIndex]}
                    circularImageUrl={circularImageUrls[currentIndex]}
                    title={["Maths", "Physics", "Chemistry", "ICT", "English", "Social Science"][currentIndex]}
                  />
                </Link>
                <Link to="/courses-details" className=' no-underline'>
                  <CourseCard
                    imageUrl={imageUrls[(currentIndex + 1) % imageUrls.length]}
                    circularImageUrl={circularImageUrls[(currentIndex + 1) % circularImageUrls.length]}
                    title={["Maths", "Physics", "Chemistry", "ICT", "English", "Social Science"][(currentIndex + 1) % imageUrls.length]}
                  />
                </Link>
                <Link to="/courses-details" className=' no-underline'>
                  <CourseCard
                    imageUrl={imageUrls[(currentIndex + 2) % imageUrls.length]}
                    circularImageUrl={circularImageUrls[(currentIndex + 2) % circularImageUrls.length]}
                    title={["Maths", "Physics", "Chemistry", "ICT", "English", "Social Science"][(currentIndex + 2) % imageUrls.length]}
                  />
                </Link>
              </div>
              <RiArrowRightDoubleLine
                className="absolute right-0 pt-16 text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={handleNext}
                size={50}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white h-40vh w-50vw rounded-xl ml-6 mt-[-4] pb-10"
          >
            <div className='flex space-x-96 mt-6'>
              <div className='flex space-x-36 pl-8'>
                <span className='font-semibold text-xl'>Popular Courses</span>
              </div>
            </div>
            <div className="flex justify-center mt-10 relative">
              <RiArrowLeftDoubleFill
                className="absolute left-0 pt-16 text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={handlePrevious}
                size={50}
              />
              <div className="flex space-x-12">
                {[0, 1, 2].map((offset) => (
                  <Link to="/courses-details" key={offset} className=' no-underline'>
                    <CourseCard
                      imageUrl={imageUrls[(currentIndex + offset) % imageUrls.length]}
                      circularImageUrl={circularImageUrls[(currentIndex + offset) % circularImageUrls.length]}
                      title={["Maths", "Physics", "Chemistry", "ICT", "English", "Social Science"][(currentIndex + offset) % imageUrls.length]}
                    />
                  </Link>
                ))}
              </div>
              <RiArrowRightDoubleLine
                className="absolute right-0 pt-16 text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={handleNext}
                size={50}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer className='pt-7' />
    </div>
  );
}

export default Courselist;