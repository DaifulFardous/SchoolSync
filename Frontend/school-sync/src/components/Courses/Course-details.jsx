import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import banner from "../../assets/images/banner.jpg";
import Service from "../LandingPage/Footer/Service";
import Sidenav from "./../SideNav/Sidenav";

function CourseDetails() {
  return (
    <div className="bg-opacity-100 bg-gray-200 min-h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="fixed h-screen w-64">
          <Sidenav />
        </div>
        <div className="w-full h-screen relative ml-64 p-6">
          <div className="pt-6">
            <div className="w-full h-3/5 relative">
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover opacity-50"
                  src={banner}
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 vignette flex flex-col items-center justify-start pt-20 w-full">
                  <div className="max-w-3xl pt-10 text-center">
                    <motion.h1
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      className="text-white text-4xl font-semibold z-10 mb-4 text-shadow-lg"
                    >
                      Chemistry 101
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.4,
                      }}
                      className="text-white mb-8 text-shadow-lg"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo pariatur itaque corrupti similique. Saepe odio nisi
                      corrupti veritatis non quidem natus, blanditiis eaque
                      dolore deserunt sequi quasi. Autem, facere minus.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.6,
                      }}
                      className="bg-black text-white py-3 px-6 rounded-md shadow-lg cursor-pointer hover:bg-sky-400 transition duration-300"
                    >
                      ENROLL
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="bg-white h-full w-50vw rounded-xl ml-6 mr-6 mt-[-4] flex flex-col items-center justify-center"
            >
              <div className="flex flex-col">
                <div className="pl-12 pr-12 mt-8">
                  <h2 className="text-2xl font-bold mb-2">About Course</h2>
                  <p className="text-slate-600">
                    In this comprehensive React Course, you'll delve into the
                    world of React, from its fundamentals to advanced
                    techniques. Our expert instructors will guide you through
                    every step.
                  </p>
                </div>
                <div className="pl-12 pr-12 mt-8">
                  <h2 className="text-2xl font-bold mb-2">Course Objectives</h2>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                    className="max-w-md mx-auto"
                  >
                    <ul className="list-none text-green-700 space-y-2">
                      <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 1.2,
                        }}
                        className="flex items-center"
                      >
                        <BsCheckCircleFill className="mr-2 text-green-700" />
                        Easy to learn
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 1.4,
                        }}
                        className="flex items-center"
                      >
                        <BsCheckCircleFill className="mr-2 text-green-700" />
                        Fast rendering with virtual DOM
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 1.6,
                        }}
                        className="flex items-center"
                      >
                        <BsCheckCircleFill className="mr-2 text-green-700" />
                        Component-based architecture
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 1.8,
                        }}
                        className="flex items-center"
                      >
                        <BsCheckCircleFill className="mr-2 text-green-700" />
                        Large ecosystem and community support
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 2,
                        }}
                        className="flex items-center"
                      >
                        <BsCheckCircleFill className="mr-2 text-green-700" />
                        Responsive design capabilities
                      </motion.li>
                    </ul>
                  </motion.div>
                </div>
                <div className="mt-16">
                  <Service />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
