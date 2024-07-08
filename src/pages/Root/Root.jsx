import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Root = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='min-h-outlet border-2 border-pink-400 rounded-lg'>
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Root;
