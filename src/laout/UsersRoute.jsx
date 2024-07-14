import { FaCalendar, FaList, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UsersRoute = () => {
  return (
    <>
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
    </>
  );
};

export default UsersRoute;
