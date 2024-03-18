
import Sidenav from './../SideNav/Sidenav';
import Uppernav from './../UpperNav/Uppernav';
import Footer from '../LandingPage/Footer/Footer';

function Profile() {
  return (
    <div>
      <div className='bg-opacity-100 bg-gray-200 flex h-screen'>
        <Sidenav />
        <div className='p-8 flex flex-col'>
        <Uppernav/>
        <div className='w-[76vw] h-[95vh] rounded-lg bg-white mt-6'>
          <div className='flex flex-col w-[39vw]'>
          <div className='flex gap-80 pt-6 pl-10 w-[39vw]'>
            <h3>USER INFORMATION</h3>
            <button type="submit" class="w-[5vw] text-black h-[6vh] mt-2 bg-white cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-black">Edit</button>
          </div>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5 pl-10" action="">
          <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                

          </form>

          </div>

    </div>

        </div>
    </div>
  <Footer />

    </div>
  );
}

export default Profile;
