import {
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-purple-600 ">
        <ul className="menu flex flex-col gap-2">
          <li>
            <NavLink className="bg-pink-200" to="/dashboard/home">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-pink-200" to="/dashboard/cart">
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-pink-200" to="/dashboard/reservations">
              <FaCalendar />
              Reservasions
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-pink-200" to="/dashboard/review">
              <FaStar />
              reviews
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-pink-200" to="/dashboard/review">
              <FaList />
              My Bookings
            </NavLink>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="menu flex flex-col gap-2">
          <li>
            <NavLink className="text-white bg-blue-500" to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white bg-blue-500" to="/order">
              <BiSolidFoodMenu />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 border-2 bg-blue-50 ">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
