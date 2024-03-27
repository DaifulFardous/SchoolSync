import React, { useState } from 'react';
import Sidenav from './../SideNav/Sidenav';
import Uppernav from './../Profile/Uppernav';
import profilePicture from '../../assets/images/pp.png';
import { FaPlus } from 'react-icons/fa';
import { MdInfoOutline } from "react-icons/md";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const fadeAndSlideInVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    text: '',
  });

  const toggleModal = (title, text) => {
    setShowModal(!showModal);
    setModalContent({ title, text });
  };

  return (
    <motion.div
      className={`bg-gray-200 min-h-screen pb-10 ${showModal ? 'opacity-50' : ''}`}
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <div className='flex'>
        <div className='fixed w-64'>
          <Sidenav />
        </div>
        <motion.div
          className='flex flex-col ml-64'
          variants={fadeAndSlideInVariant}
          initial="hidden"
          animate="visible"
        >
          <div className='p-6'>
            <Uppernav />
          </div>
          <motion.div
            className='flex gap-5'
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className='w-2/6 flex flex-col pt-2 pl-6 gap-y-5'
              variants={fadeAndSlideInVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className='rounded-lg bg-white pl-3 flex flex-col items-center pb-12'
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                <h4 className='text-black pt-3 text-center'>Personal Account</h4>
                <div className='mt-3 flex items-center justify-center'>
                  <img src={profilePicture} alt="Profile Picture" className="rounded-full h-32 w-32" />
                </div>
                <h2 className='text-black pt-2 text-center'>Shovon Islam</h2>
                <button className='bg-white px-2 py-2 border-2 border-blue-700 text-blue-500 font-semibold rounded-md w-3/5 h-1/5 cursor-pointer hover:bg-blue-50'>
                  Change personal details
                </button>
              </motion.div>
              <motion.div
                className='rounded-lg bg-white pl-3 flex flex-col pb-12'
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                <h4 className='text-black pt-3 pl-4 text-start'>Additional Info</h4>
                <p className='w-4/5 pl-4 font-thin text-gray-500 font-poppins'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit pariatur cum ipsa. Dolorem minus esse corrupti quasi. Fugiat possimus laudantium id?
                </p>
                <motion.button
                  className='bg-white px-2 py-2 ml-4 border-2 border-blue-700 text-blue-500 font-semibold rounded-md w-3/5 h-1/5 cursor-pointer hover:bg-blue-50 flex'
                  variants={fadeAndSlideInVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaPlus className='mr-2' /> Add Additional Info
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className='w-4/6 flex flex-col gap-3 pr-6'
              variants={fadeAndSlideInVariant}
              initial="hidden"
              animate="visible"
            >
              <div>
                <h3>Experience</h3>
              </div>
              <div>
                {/* Experience components */}
              </div>
              <motion.div
                className='rounded-lg bg-white pl-6 flex flex-col h-[20%]'
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                <div className='flex gap-x-1'>
                  <div>
                    <h4>Projects</h4>
                  </div>
                  <button onClick={() => toggleModal('Projects', 'This is information about your projects.')} className='bg-white pb-5 cursor-pointer'>
                    <MdInfoOutline className='text-blue-600 size-5 pt-5' />
                  </button>
                </div>
                <div className='bg-gray-100 h-[48%] w-[98%] rounded-md'>
                  <div className='flex gap-x-48 pt-4'>
                    <div className='pb-6 font-light font-serif text-gray-800 pl-6'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='pt-4'>
                      <a href="" className='no-underline text-blue-600 hover:underline hover:text-blue-900'>
                        Browse Projects
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className='rounded-lg bg-white pl-6 flex flex-col h-[20%]'
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                <div className='flex gap-x-2'>
                  <div>
                    <h4>Work History</h4>
                  </div>
                </div>
                <div className='bg-gray-100 h-[48%] w-[98%] rounded-md'>
                  <div className='flex gap-x-36 pt-4'>
                    <div className='pb-6 font-light font-serif text-gray-800 pl-6'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='pt-2'>
                      <motion.button
                        className='bg-white px-2 py-2 ml-4 border-2 border-blue-700 text-blue-500 font-semibold rounded-md cursor-pointer hover:bg-blue-50 flex h-[52%] w-[95%]'
                        variants={fadeAndSlideInVariant}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaPlus className='mr-2' /> Add Additional Info
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div>
                <h3>Education</h3>
              </div>
              <div>
                {/* Education components */}
              </div>
              <motion.div
                className='rounded-lg bg-white pl-6 flex flex-col h-[20%] pb-5'
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                <div className='flex gap-x-1'>
                  <div>
                    <h4>Credentials</h4>
                  </div>
                  <button onClick={() => toggleModal('Credentials', 'This is information about your credentials.')} className='bg-white pb-5 cursor-pointer'>
                    <MdInfoOutline className='text-blue-600 size-5 pt-5 bg-white' />
                  </button>
                </div>
                <div className='bg-gray-100 h-[48%] w-[98%] rounded-md'>
                  <div className='flex gap-x-40 pt-4'>
                    <div className='pb-6 font-light font-serif text-gray-800 pl-6'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='pt-2'>
                      <motion.button
                        className='bg-white px-2 py-2 ml-4 border-2 border-blue-700 text-blue-500 font-semibold rounded-md cursor-pointer hover:bg-blue-50 flex h-[52%] w-[95%]'
                        variants={fadeAndSlideInVariant}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaPlus className='mr-2' /> Add Education
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2>{modalContent.title}</h2>
            <p>{modalContent.text}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer"
              onClick={() => toggleModal('', '')}
            >
              Okay, Got it!
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Profile;