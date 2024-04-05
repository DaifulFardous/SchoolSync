

const MiddleNavbar = () => {
    return (
        <div className="">   
            <div className='space-y-4 m-3 bg-white rounded-lg pb-3'>
                    <h1 className='font-bold text-center mt-4 text-2xl'>Completion progress</h1>
                   <div className='flex items-center justify-between bg-gray-200  rounded-lg mx-3'>
                                <div>
                                    <h1 className='font-bold text-xl p-2'>Math</h1>
                                    <p className="p-2 text-sm">Chapter 5</p>
                                </div>
                                <div className=" pr-2">
                                <progress className="progress progress-primary w-56" value="60" max="100"></progress>
                                </div>
                   </div>
                   <div className='flex items-center justify-between bg-gray-200 rounded-lg mx-3'>
                                <div>
                                    <h1 className='font-bold text-xl p-2'>Organic Chemistry</h1>
                                    <p className="p-2 text-sm">Chapter 1</p>
                                </div>
                                <div className=" pr-2">
                                <progress className="progress progress-primary w-56" value="30" max="100"></progress>
                                </div>
                   </div>
                   <div className='flex items-center justify-between bg-gray-200 rounded-lg mx-3'>
                                <div>
                                    <h1 className='font-bold text-xl p-2'>States of matters</h1>
                                    <p className="p-2 text-sm">Chapter 6</p>
                                </div>
                                <div className=" pr-2">
                                <progress className="progress progress-primary w-56" value="45" max="100"></progress>
                                </div>
                   </div>
                   <div className='flex items-center justify-between bg-gray-200 rounded-lg mx-3 mb-3'>
                                <div>
                                    <h1 className='font-bold text-xl p-2'>Preposition</h1>
                                    <p className="p-2 text-sm">Chapter 3</p>
                                </div>
                                <div className=" pr-2">
                                <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                                </div>
                   </div>
            </div>
            <div className='space-y-4 m-3 bg-white rounded-lg pb-3'>
                <h1 className='font-bold mt-4 pt-2 text-2xl pl-3'>Assignment</h1>
                <div className='flex items-center justify-between bg-gray-200 rounded-lg mx-3 my-1.5'>
                     <div>
                        <h1 className='font-bold text-xl p-2'>Math</h1>
                        <p className="p-2 text-sm">Chapter 5</p>
                     </div>
                     <div>
                        <h1 className='font-bold text-xl p-2'>Daily Task</h1>
                        <p className="p-2 text-sm">page 10</p>
                     </div>
                     <div>
                        <h1 className='font-bold text-xl'>11.00 AM</h1>
                     </div>
                     <div className=" pr-4">
                        <h1 className='font-bold text-xl text-yellow-600'>Pending</h1>
                     </div>
                </div>
                <div className='flex items-center justify-between bg-gray-200 rounded-lg mx-3 mb-2'>
                     <div>
                        <h1 className='font-bold text-xl p-2'>Biology</h1>
                        <p className="p-2 text-sm">Chapter 2</p>
                     </div>
                     <div>
                        <h1 className='font-bold text-xl p-2'>Daily Task</h1>
                        <p className="p-2 text-sm">page 12</p>
                     </div>
                     <div>
                        <h1 className='font-bold text-xl'>11.00 AM</h1>
                     </div>
                     <div className=" pr-4">
                        <h1 className='font-bold text-xl text-green-600'>Complete</h1>
                     </div>
                </div>
            </div>
            
        </div>
    );
};

export default MiddleNavbar;