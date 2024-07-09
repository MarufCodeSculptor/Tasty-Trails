import { createBrowserRouter, Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Root from '../pages/Root/Root';
import OurMenu from '../pages/OurMenu/OurMenu';
import Order from '../pages/Order/Order';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: (
      <div className="min-h-screen flex items-center justify-center flex-col gap-5">
        <h2 className="text-5xl font-bold "> 404 Page not found </h2>
        <Link to={'/'} className="btn btn-primary">
          Back to home
        </Link>
      </div>
    ),
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <OurMenu />,
      },
      {
        path: '/order/:category',
        element: <Order />,
      },
      {
        path: '/order',
        element: <Order />,
      },
    ],
  },
]);

export default route;
