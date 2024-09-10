import { FaBook, FaHistory, FaHome, FaShoppingCart, FaUser, FaUtensilSpoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiStack } from "react-icons/gi";
import useCartData from "../Hooks/useCartData";

const AdminsRoutes = () => {
  const [cart]= useCartData();
  return (
    <>
      <ul className="menu flex flex-col gap-2">
      <li>
        <NavLink className="bg-pink-200" to="/dashboard/admin-home">
          <FaHome />
        Home    
        </NavLink>
      </li>
      <li>
        <NavLink className="bg-pink-200" to="/dashboard/cart">
          <FaShoppingCart />
          My Cart      <div className="badge badge-secondary"> {cart.length}  </div>
        </NavLink>
      </li>
      <li>
          <NavLink className="bg-pink-200" to="/dashboard/payment-history">
            <FaHistory />
            Payments History
          </NavLink>
        </li>
        {/* <li>
          <NavLink className="bg-pink-200" to="/dashboard">
            <FaHome /> Admins Home
          </NavLink>
        </li> */}
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

export default AdminsRoutes;
