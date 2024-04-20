import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { FaPlus, FaTimes } from "react-icons/fa";
import { LuCamera } from "react-icons/lu";
import { MdInfoOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import cardImage from "../../assets/images/card_image.jpg";
import profilePicture from '../../assets/images/pp.png';
import Uppernav from './../Profile/Uppernav';
import Sidenav from './../SideNav/Sidenav';

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
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    text: "",
  });
  const [initialLoad, setInitialLoad] = useState(true);

  const projectCards = [
    {
      title: 'Project Title 1',
      description: 'Project description goes here.',
      additionalDetails: 'Additional project details.',
    },
    {
      title: 'Project Title 2',
      description: 'Project description goes here.',
      additionalDetails: 'Additional project details.',
    },
    {
      title: 'Project Title 3',
      description: 'Project description goes here.',
      additionalDetails: 'Additional project details.',
    },
  ];

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  const toggleModal = (title, text) => {
    setShowModal(!showModal);
    setModalContent({ title, text });
  };

  const toggleProjectModal = () => {
    setShowProjectModal(!showProjectModal);
  };

  return (
    <motion.div
      className={`bg-gray-200 min-h-screen pb-10 ${
        showModal ? "opacity-50" : ""
      }`}
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <div className="flex">
        <div className="fixed w-64">
          <Sidenav />
        </div>
        <motion.div
          className="flex flex-col ml-64"
          variants={fadeAndSlideInVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="p-6">
            <Uppernav />
          </div>
          <motion.div
            className="flex gap-5"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-2/6 flex flex-col pt-2 pl-6 gap-y-5"
              variants={fadeAndSlideInVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="rounded-lg bg-white pl-3 flex flex-col items-center pb-12"
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                <h4 className="text-black pt-3 text-center">
                  Personal Account
                </h4>
                <div className="mt-3 flex items-center justify-center">
                  <img
                    src={profilePicture}
                    alt="Profile Picture"
                    className="rounded-full h-32 w-32"
                  />
                </div>
                <h2 className="text-black pt-2 text-center">Shovon Islam</h2>
                <button className="bg-white px-2 py-2 border-2 border-blue-700 text-blue-500 font-semibold rounded-md w-3/5 h-1/5 cursor-pointer hover:bg-blue-50">
                  Change personal details
                </button>
              </motion.div>
              <motion.div
                className="rounded-lg bg-white pl-3 flex flex-col pb-12"
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                <h4 className="text-black pt-3 pl-4 text-start">
                  Additional Info
                </h4>
                <p className="w-4/5 pl-4 font-thin text-gray-500 font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit pariatur cum ipsa. Dolorem minus esse corrupti quasi.
                  Fugiat possimus laudantium id?
                </p>
                <motion.button
                  className="bg-white px-2 py-2 ml-4 border-2 border-blue-700 text-blue-500 font-semibold rounded-md w-3/5 h-1/5 cursor-pointer hover:bg-blue-50 flex"
                  variants={fadeAndSlideInVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaPlus className="mr-2" /> Add Additional Info
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-4/6 flex flex-col gap-3 pr-6"
              variants={fadeAndSlideInVariant}
              initial="hidden"
              animate="visible"
            >
              <div>
                <h3>Experience</h3>
              </div>
              <div>{/* Experience components */}</div>
              <motion.div
                className="rounded-lg bg-white pl-6 flex flex-col h-[20%]"
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                <div className="flex gap-x-1">
                  <div>
                    <h4>Projects</h4>
                  </div>
                  <button
                    onClick={() =>
                      toggleModal(
                        "Projects",
                        "This is information about your projects."
                      )
                    }
                    className="bg-white pb-5 cursor-pointer"
                  >
                    <MdInfoOutline className="text-blue-600 size-5 pt-5" />
                  </button>
                </div>
                <div className="bg-gray-100 h-[48%] w-[98%] rounded-md">
                  <div className="flex gap-x-48 pt-4">
                    <div className="pb-6 font-light font-serif text-gray-800 pl-6">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="pt-4">
                      <a
                        href=""
                        className="no-underline text-blue-600 hover:underline hover:text-blue-900"
                      >
                        Browse Projects
                      </a>
    <>
      <motion.div
        className={`bg-gray-200 min-h-screen pb-10 ${showModal || showProjectModal ? 'opacity-30' : ''}`}
        initial={initialLoad ? "hidden" : "visible"}
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } }
        }}
      >
        <div className='flex'>
          <div className='fixed w-64'>
            <Sidenav />
          </div>
          <div className='flex flex-col ml-64'>
            <div className='p-6'>
              <Uppernav />
            </div>
            <div className='flex gap-5'>
              <div className='w-2/6 flex flex-col pt-2 pl-6 gap-y-5'>
                <div className='rounded-lg bg-white pl-3 flex flex-col items-center pb-12'>
                  <h4 className='text-black pt-3 text-center'>Personal Account</h4>
                  <div className='mt-3 flex items-center justify-center'>
                    <button className="relative rounded-full h-32 w-32 cursor-pointer">
                      <img src={profilePicture} alt="Profile Picture" className="rounded-full h-32 w-32" />
                      <LuCamera className="absolute inset-0 m-auto text-white opacity-0 transition-opacity duration-300 hover:opacity-100" size={32} />
                    </button>
                  </div>
                  <h2 className='text-black pt-2 text-center'>Shovon Islam</h2>
                  <Link to="/edit">
                    <button className='bg-white px-6 py-3 border-2 border-blue-700 text-blue-500 font-semibold rounded-md w-5/5 h-4/5 cursor-pointer hover:bg-blue-50'>
                      Change personal details
                    </button>
                  </Link>
                </div>
                <div className='rounded-lg bg-white pl-3 flex flex-col pb-12'>
                  <h4 className='text-black pt-3 pl-4 text-start'>Additional Info</h4>
                  <p className='w-4/5 pl-4 font-thin text-gray-500 font-poppins'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit pariatur cum ipsa. Dolorem minus esse corrupti quasi. Fugiat possimus laudantium id?
                  </p>
                  <button onClick={() => toggleModal('Add Additional Info', 'Please provide the necessary information for additional info.')} className='bg-white px-2 py-2 ml-4 border-2 border-blue-700 text-blue-500 font-semibold rounded-md w-3/5 h-1/5 cursor-pointer hover:bg-blue-50 flex'>
  <FaPlus className='mr-2' /> Add Additional Info
</button>
                </div>
              </div>
              <div className='w-4/6 flex flex-col gap-3 pr-6'>
                <div>
                  <h3>Experience</h3>
                </div>
                <div>
                </div>
                <div className='rounded-lg bg-white pl-6 flex flex-col h-[20%]'>
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
                        <a href="#" className='no-underline text-blue-600 hover:underline hover:text-blue-900' onClick={toggleProjectModal}>
                          Browse Projects
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white pl-6 flex flex-col h-[20%]">
                  <div className="flex gap-x-2">
                    <div>
                      <h4>Work History</h4>
                    </div>
                  </div>
                  <div className="bg-gray-100 h-[48%] w-[98%] rounded-md">
                    <div className="flex gap-x-36 pt-4">
                      <div className="pb-6 font-light font-serif text-gray-800 pl-6">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      </div>
                      <div className="pt-2">
                        <button
                          onClick={() => toggleModal('Add Additional Info', 'Please provide the necessary information for additional info.')}
                          className="bg-white px-2 py-2 ml-4 border-2 border-blue-700 text-blue-500 font-semibold rounded-md cursor-pointer hover:bg-blue-50 flex h-[52%] w-[95%]"
                        >
                          <FaPlus className="mr-2" /> Add Additional Info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div>
                <h3>Education</h3>
              </div>
              <div>{/* Education components */}</div>
              <motion.div
                className="rounded-lg bg-white pl-6 flex flex-col h-[20%] pb-5"
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                <div className="flex gap-x-1">
                  <div>
                    <h4>Credentials</h4>
                  </div>
                  <button
                    onClick={() =>
                      toggleModal(
                        "Credentials",
                        "This is information about your credentials."
                      )
                    }
                    className="bg-white pb-5 cursor-pointer"
                  >
                    <MdInfoOutline className="text-blue-600 size-5 pt-5 bg-white" />
                  </button>
                </div>
                <div className="bg-gray-100 h-[48%] w-[98%] rounded-md">
                  <div className="flex gap-x-40 pt-4">
                    <div className="pb-6 font-light font-serif text-gray-800 pl-6">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="pt-2">
                      <motion.button
                        className="bg-white px-2 py-2 ml-4 border-2 border-blue-700 text-blue-500 font-semibold rounded-md cursor-pointer hover:bg-blue-50 flex h-[52%] w-[95%]"
                        variants={fadeAndSlideInVariant}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaPlus className="mr-2" /> Add Education
                      </motion.button>
                <div>
                  <h3>Education</h3>
                </div>
                <div>
                </div>
                <div className='rounded-lg bg-white pl-6 flex flex-col h-[20%] pb-5'>
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
                        <button
                          onClick={() => toggleModal('Add Education', 'Please provide the necessary information for your education.')}
                          className='bg-white px-2 py-2 ml-4 border-2 border-blue-700 text-blue-500 font-semibold rounded-md cursor-pointer hover:bg-blue-50 flex h-[52%] w-[95%]'
                        >
                          <FaPlus className='mr-2' /> Add Education
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-12 rounded-lg shadow-lg relative w-1/2 h-3/4">
            <button
              className="absolute top-4 right-4 text-red-600 hover:text-gray-700"
              onClick={toggleModal}
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-semibold mb-6">{modalContent.title}</h3>
            <p className="text-gray-500 mb-8">{modalContent.text}</p>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Field 1"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Field 2"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-8">
              <input
                type="text"
                placeholder="Field 3"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer"
              onClick={() => toggleModal("", "")}
            >
              Save
            </button>
          </div>
        </div>
      )}
      {showProjectModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-12 rounded-lg shadow-lg relative w-1/2 h-3/4 overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-red-600 hover:text-gray-700"
              onClick={toggleProjectModal}
            >
              <FaTimes />
            </button>
            <div className="bg-blue-900 text-white p-6 rounded-t-lg">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="text-white">This is information about your projects.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Filter by role:</h3>
              <div className="grid grid-cols-4 gap-4 font-semibold">
                <button className="btn bg-white font-semibold cursor-pointer text-black rounded-xl px-4 py-2 border border-black hover:bg-gray-200">Button 1</button>
                <button className="btn bg-white font-semibold text-black cursor-pointer rounded-xl px-4 py-2 border border-black hover:bg-gray-200">Button 2</button>
                <button className="btn bg-white text-black rounded-xl font-semibold cursor-pointer px-4 py-2 border border-black hover:bg-gray-200">Button 3</button>
                <button className="btn bg-white text-black cursor-pointer rounded-xl font-semibold px-4 py-2 border border-black hover:bg-gray-200">Button 4</button>
                <button className="btn bg-white text-black rounded-xl cursor-pointer px-4 py-2 font-semibold border border-black hover:bg-gray-200">Button 5</button>
                <button className="btn bg-white text-black rounded-xl px-4 py-2 cursor-pointer border font-semibold border-black hover:bg-gray-200">Button 6</button>
                <button className="btn bg-white text-black rounded-xl px-4 py-2 border cursor-pointer font-semibold border-black hover:bg-gray-200">Button 7</button>
                <button className="btn bg-white text-black rounded-xl px-4 py-2 border border-black cursor-pointer font-semibold hover:bg-gray-200">Button 8</button>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                {projectCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center bg-white border border-gray-300 rounded-lg p-4 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={cardImage} alt="Card Image" className="w-48 h-32 object-cover rounded-lg" />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{card.title}</h4>
                      <p className="text-gray-600">{card.description}</p>
                      <p className="text-gray-600">{card.additionalDetails}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
