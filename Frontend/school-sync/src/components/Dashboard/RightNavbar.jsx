
import { RiPresentationFill } from "react-icons/ri";
import { SiKnowledgebase } from "react-icons/si";
const RightNavbar = () => {
    return (
        <div>
             <div>
                <h2 className='font-bold my-4 mx-2'>April 2024</h2>
                <div className='flex space-x-4 ml-2'>
                    <div className='w-1/6 bg-slate-50 text-center border-2 rounded-md'>
                        <p >Fri</p>
                        <p >3</p>
                    </div>
                    <div className='w-1/6 bg-slate-50 text-center border-2 rounded-md'>
                        <p>Sat</p>
                        <p>4</p>
                    </div>
                    <div className='w-1/6 bg-slate-50 text-center border-2 rounded-md'>
                        <p>Sun</p>
                        <p>5</p>
                    </div>
                    <div className='w-1/6 bg-slate-50 text-center border-2 rounded-md'>
                        <p>Mon</p>
                        <p>6</p>
                    </div>
                </div>
            </div>
            <div className='space-y-3 ml-2 rounded-lg pb-5'>
                <h2 className='font-bold my-4'>Schedule</h2>
              <div className='flex items-center bg-slate-50 w-full divide-x-2 rounded-lg'>
                  <div>
                    <h1 className='font-bold lg:mr-6 md:mr-2 mr-1 p-2 text-xl'>1</h1>
                   </div>
                   <div>
                    <h1 className='font-bold text-xl ml-2'>Physics</h1>
                    <p className='ml-2 text-sm'>6 of 20 chapters</p>
                  </div>
                </div>
            <div className='flex items-center bg-slate-50 w-full divide-x-2 rounded-lg'>
                <div>
                    <h1 className='font-bold lg:mr-6 md:mr-2 mr-1 p-2 text-xl'>2</h1>
                </div>
                <div>
                    <h1 className='font-bold ml-2 text-xl'>Chemistry</h1>
                    <p className='ml-2 text-sm'>8 of 20 chapters</p>
                </div>
            </div>
            <div className='flex items-center bg-slate-50 w-full divide-x-2 rounded-lg'>
                <div>
                    <h1 className='font-bold lg:mr-6 md:mr-2 mr-1 p-2 text-xl'>3</h1>
                </div>
                <div>
                    <h1 className='font-bold text-xl ml-2'>Math</h1>
                    <p className='ml-2 text-sm'>7 of 20 chapters</p>
                </div>
            </div>
            <div className='flex items-center bg-slate-50 w-full divide-x-2 rounded-lg'>
                <div>
                    <h1 className='font-bold lg:mr-6 md:mr-2 mr-1 p-2 text-xl'>4</h1>
                </div>
                <div>
                    <h1 className='font-bold text-xl ml-2'>Biology</h1>
                    <p className='ml-2 text-sm'>6 of 20 chapters</p>
                </div>
            </div>
        </div>
        <div className='ml-2'>
            <h2 className='font-bold my-4'>Upcoming Events</h2>
            <div className='flex items-center'>
                <div>
                    <RiPresentationFill className='text-cyan-500 size-12' />
                </div>
                <div>
                    <h1 className='font-bold text-xl ml-2'>Presentation of Math</h1>
                    <p className='ml-2 text-sm'>Coming soon</p>
                </div>
            </div>
            <div className='flex items-center space-y-4'>
                <div>
                    <SiKnowledgebase className='text-cyan-500 size-12 pt-3' />
                </div>
                <div>
                    <h1 className='font-bold text-xl ml-2'>Guest Lecture on Atoms</h1>
                    <p className='ml-2 text-sm'>Coming soon</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RightNavbar;