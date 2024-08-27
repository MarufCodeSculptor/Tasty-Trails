import { FaHome } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import AdminsRoutes from "./AdminsRoute";
import UsersRoute from "./UsersRoute";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/*  navigations bar => =>  */}
      <div className="w-64 min-h-screen bg-purple-600 ">
        <ul className="menu flex flex-col gap-2">
          {isAdmin ? <AdminsRoutes /> : <UsersRoute />}
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
      {/*   Outlet =>  */}
      <div className="flex-1 border-2 bg-blue-50 ">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
