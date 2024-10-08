import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useCartData from "../../Hooks/useCartData";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const [cart, , isLoading, error] = useCartData();
  const { user, logOut } = useContext(AuthContext);

  const [isPending, isAdmin] = useAdmin();

  const links = (
    <>
      <li>
        <NavLink to={"/"}> Home </NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}> Our Menu </NavLink>
      </li>
      <li>
        <NavLink to={"/order"}> Order </NavLink>
      </li>
      {user && !isLoading && !error && !isPending && isAdmin && (
        <li>
          <Link to={"/dashboard/admin-home"} className="">
            Dashboard
          </Link>
        </li>
      )}
      {user && !isLoading && !error && !isPending && !isAdmin && (
        <li>
          <Link to={"/dashboard/user-home"} className="">
            Dashboard
          </Link>
        </li>
      )}
      <li>
        {user && !isLoading && !error && (
          <Link to={"/dashboard/cart"} className=" mx-2">
            Cart
            <div className="badge badge-secondary"> +{cart.length} </div>
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="fixed z-10 max-w-screen-xl w-full top-0 left-1/2 transform -translate-x-1/2 text-white bg-blue-500 bg-opacity-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link to={"/"} className="cursor-pointer font-josefin">
            <span className="font-bold text-3xl tracking-4">TastyTrails</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {(user && (
            <div className="dropdown dropdown-end z-20 text-black">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logOut} className="btn btn-ghost">
                    {" "}
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )) || <Link to={"/login"}>Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
