import Uppernav from './../Profile/Uppernav';

function Details_edit() {
  return (
    <div className='bg-opacity-100 bg-gray-200 flex min-h-screen pb-8'>
      <div className='flex flex-col w-full'>
        <div className="pt-3 flex justify-center">
          <Uppernav />
        </div>
        <div className='flex justify-center items-center w-full h-full'>
          <div className='w-[97vw] h-[120vh] rounded-lg bg-white mt-6'>
            <div className='flex flex-col items-center'>
              <div>
                <h3 className="text-center text-xl font-bold mt-4">User Details</h3>
                <p className="text-center text-sm text-gray-500 mb-4">Add information about yourself</p>
              </div>
              <hr className="bg-gray-400 h-[0.5px] w-full border-none" />
            </div>
            <div className='flex w-full'>
              <div className='flex flex-col w-[39vw] pl-10'>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5 pb-8" action="">
                  <h4>Basics</h4>
                  <div>
                    <input type="email" name="email" id="email" placeholder="First Name" className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg block w-[95%] h-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " />
                  </div>
                  <div>
                    <input type="email" name="email" id="email" placeholder="Last Name" className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg block w-[95%] h-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " />
                  </div>
                  <div>
                    <input type="email" name="email" id="email" placeholder="Email" className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg block w-[95%] h-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " />
                  </div>
                  <div className=' pb-6'>
                    <input type="email" name="email" id="email" placeholder="Age" className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg block w-[95%] h-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " />
                  </div>
                  <h4>Contact Info</h4>
                  <div>
                    <input type="email" name="email" id="email" placeholder="Phone Number" className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg block w-[95%] h-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " />
                  </div>
                  <div>
                    <input type="email" name="email" id="email" placeholder="District" className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg block w-[95%] h-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " />
                  </div>
                  <div>
                    <input type="email" name="email" id="email" placeholder="City" className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg block w-[95%] h-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " />
                  </div>
                  <div>
                    <input type="email" name="email" id="email" placeholder="Address" className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg block w-[95%] h-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " />
                  </div>
                </form>
                <input type="button" value="Save" className='bg-blue-600 text-white rounded-md py-3 text-base font-semibold w-[20%]' />
              </div>
              <div className='flex flex-col w-[39vw] pl-10 pt-5'>
                <h4>About You</h4>
                <div>
                  <textarea rows="12" placeholder="Write about yourself" className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg block w-[95%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details_edit;