import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { RouterProvider } from 'react-router-dom';
import route from './provider/RoutesProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div  className='max-w-screen-xl mx-auto'> 
    <React.StrictMode>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={route} />
      </div>
    </React.StrictMode>
  </div>
);
