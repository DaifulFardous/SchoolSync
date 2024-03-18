import Sidenav from './../SideNav/Sidenav';
import banner from "../../assets/images/banner.jpg";
import banner2 from "../../assets/images/banner2.png";
import Service from '../LandingPage/Footer/Service';
import Footer from '../LandingPage/Footer/Footer';

function CourseDetails() {
  return (
    <div className='bg-opacity-100 bg-gray-200 min-h-screen flex flex-col'>
      <div className='flex flex-1'>
        <div className='flex h-screen'>
          <Sidenav />
        </div>
        <div className='w-full h-screen relative'>
          <div className='w-full h-3/5 relative'>
            <div className='w-full h-full relative'>
              <img
                className='w-full h-full object-cover opacity-50'
                src={banner}
                alt=''
              />
              <div className='absolute inset-0 bg-black bg-opacity-40 vignette flex flex-col items-center justify-start pt-20'>
                <div className='max-w-3xl pt-10 text-center'>
                  <h1 className='text-white text-4xl font-semibold z-10 mb-4 text-shadow-lg'>Chemistry 101</h1>
                  <p className='text-white mb-8 text-shadow-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur itaque corrupti similique. Saepe odio nisi corrupti veritatis non quidem natus, blanditiis eaque dolore deserunt sequi quasi. Autem, facere minus.</p>
                  <button className='bg-black text-white py-3 px-6 rounded-md shadow-lg cursor-pointer'>ENROLL</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-full w-50vw rounded-xl ml-6 mr-6 mt-[-4] flex flex-col items-center justify-center">
            <div className='flex flex-col'>
              <div className="pl-12 pr-12 mt-8">
                <h2 className="text-2xl font-bold mb-2">About Course</h2>
                <p className="text-slate-600">
                  In this comprehensive React Course, you'll delve into the world of React,
                  from its fundamentals to advanced techniques. Our expert instructors will
                  guide you through every step.
                </p>
              </div>
              <div className="pl-12 pr-12 mt-8">
                <h2 className="text-2xl font-bold mb-2">Course Objectives</h2>
                <div className="max-w-md mx-auto">
                  <ul className="list-disc text-green-700">
                    <li className="mb-2">Easy to learn</li>
                    <li className="mb-2">Fast rendering with virtual DOM</li>
                    <li className="mb-2">Component-based architecture</li>
                    <li className="mb-2">Large ecosystem and community support</li>
                    <li className="mb-2">Responsive design capabilities</li>
                  </ul>
                </div>
              </div>
              <div className="mt-16">
                <Service />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CourseDetails;