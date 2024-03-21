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
import { motion, AnimatePresence } from 'framer-motion';

const imageUrls = [
  Math,
  Chemistry,
  Physics,
  ICT,
  English,
  ss,
];

const circularImageUrls = [
  fac1,
  fac2,
  fac3,
  fac4,
  fac5,
  fac6,
];

function Courselist() {
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
                <span className='font-semibold'>All Courses (12)</span>
                <span className='font-semibold'>Ongoing (7)</span>
                <span className='font-semibold'>Completed (5)</span>
              </div>
              <div className='pl-12'>
                <a href="" className='text-black no-underline font-semibold'>See All</a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 justify-center pl-7 mt-10">
              <AnimatePresence>
                {[...Array(6)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-80 bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="h-36 bg-gray-300 relative rounded-bl-30p rounded-br-30p">
                      <img src={imageUrls[index]} alt="Card Image" className="h-full w-full object-cover rounded-t-lg rounded-bl-lg rounded-br-lg" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16 ml-28">
                        <img
                          src={circularImageUrls[index]}
                          alt="Circular Image"
                          className="rounded-full w-13 h-13"
                        />
                      </div>
                    </div>
                    <div className="p-3">
                      <h2 className="text-xl font-bold mb-2 top-4">
                        {index === 0 && 'Maths'}
                        {index === 1 && 'Physics'}
                        {index === 2 && 'Chemistry'}
                        {index === 3 && 'ICT'}
                        {index === 4 && 'English'}
                        {index === 5 && 'Social Science'}
                      </h2>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer className='pt-10' />
    </div>
  );
}

export default Courselist;