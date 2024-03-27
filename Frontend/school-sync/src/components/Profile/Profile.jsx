import React from 'react';
import Sidenav from './../SideNav/Sidenav';
import Uppernav from './../Profile/Uppernav';
import profilePicture from '../../assets/images/pp.png';
import { FaPlus } from 'react-icons/fa';

function Profile() {
  return (
    <div className='bg-gray-200 min-h-screen'>
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
                  <img src={profilePicture} alt="Profile Picture" className="rounded-full h-32 w-32" />
                </div>
                <h2 className='text-black pt-2 text-center'>Shovon Islam</h2>
                <button className='bg-white px-2 py-2 border-2 border-blue-700 text-blue-500 font-semibold rounded-md w-3/5 h-1/5 cursor-pointer hover:bg-blue-50'>
                  Change personal details
                </button>
              </div>
              <div className='rounded-lg bg-white pl-3 flex flex-col pb-12'>
                <h4 className='text-black pt-3 pl-4 text-start'>Additional Info</h4>
                <p className='w-4/5 pl-4 font-thin text-gray-500 font-poppins'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit pariatur cum ipsa. Dolorem minus esse corrupti quasi. Fugiat possimus laudantium id?
                </p>
                <button className='bg-white px-2 py-2 ml-4 border-2 border-blue-700 text-blue-500 font-semibold rounded-md w-3/5 h-1/5 cursor-pointer hover:bg-blue-50 flex'>
                  <FaPlus className='mr-2' /> Add Additional Info
                </button>
              </div>
            </div>
            <div className=''>
              <h3>Experience</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;