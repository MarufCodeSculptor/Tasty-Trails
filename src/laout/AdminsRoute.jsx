import { FaBook, FaHome, FaUser, FaUtensilSpoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiStack } from "react-icons/gi";

const AdminsRoute = () => {
  return (
    <>
      <ul className="menu flex flex-col gap-2">
        <li>
          <NavLink className="bg-pink-200" to="/dashboard/home">
            <FaHome /> Admins Home
          </NavLink>
        </li>
        <li>
          <NavLink className="bg-pink-200" to="/dashboard/add-item">
            <FaUtensilSpoon />
            Add items
          </NavLink>
        </li>
        <li>
          <NavLink className="bg-pink-200" to="/dashboard/manage-item">
            <GiStack />
            Manage Item
          </NavLink>
        </li>
        <li>
          <NavLink className="bg-pink-200" to="/dashboard/manage-bookings">
            <FaBook />
            Manage Bookings
          </NavLink>
        </li>
        <li>
          <NavLink className="bg-pink-200" to="/dashboard/users">
            <FaUser />
            All Users
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AdminsRoute;
