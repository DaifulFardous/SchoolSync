
import Sidenav from './../SideNav/Sidenav';
import Uppernav from './../Courses/Uppernav';
import MiddleNavbar from './MiddleNavbar';
import RightNavbar from './RightNavbar';

function Dashboard() {
  return (
    <div className='bg-opacity-100 bg-gray-200 min-h-screen'>
        <div className='flex'>
        <div className='fixed w-64'>
            <Sidenav/>
        </div>
        <div className='p-6 pl-72 fixed'>
            <Uppernav/>
        </div>
        
        </div>
        <div className='grid grid-cols-3 gap-4 mt-40'>
             <div className='col-span-2 ml-72 border-2'>
              <MiddleNavbar/>
             </div>
             <div className='border-2'>
              <RightNavbar/>
             </div>
        </div>
    </div>
  )
}

export default Dashboard