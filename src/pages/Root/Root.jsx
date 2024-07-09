import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Root = () => {
  return (
    <div className="">
      <Navbar />

      <div className="min-h-outlet  rounded-lg max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
